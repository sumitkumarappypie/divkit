import CoreGraphics
import LayoutKit
import VGSL

extension DivTable: DivBlockModeling {
  public func makeBlock(context: DivBlockModelingContext) throws -> Block {
    let context = modifiedContextParentPath(context)
    return try modifyError({ DivBlockModelingError($0.message, path: context.path) }) {
      try applyBaseProperties(
        to: { try makeBaseBlock(context: context) },
        context: context,
        actionsHolder: self
      )
    }
  }

  private func makeBaseBlock(context: DivBlockModelingContext) throws -> Block {
    let expressionResolver = context.expressionResolver
    let columnCount = columns.count

    guard columnCount > 0 else {
      return EmptyBlock(
        widthTrait: resolveContentWidthTrait(context),
        heightTrait: resolveContentHeightTrait(context)
      )
    }

    let allRows = collectAllRows()

    if allRows.isEmpty {
      return EmptyBlock(
        widthTrait: resolveContentWidthTrait(context),
        heightTrait: resolveContentHeightTrait(context)
      )
    }

    let headerRowCount = headerRow != nil ? 1 : 0

    let grid = buildGrid(
      allRows: allRows,
      columnCount: columnCount,
      expressionResolver: expressionResolver
    )

    let headerBg = resolveBackground(headerBackground, context: context)
    let evenBg = resolveBackground(striped?.evenRowBackground, context: context)
    let oddBg = resolveBackground(striped?.oddRowBackground, context: context)

    let itemsContext = context.modifying(errorsStorage: DivErrorsStorage(errors: []))

    // Determine which "between" separators are active
    let rowSepBetween = rowSeparator?.resolveShowBetween(expressionResolver) == true
    let colSepBetween = columnSeparator?.resolveShowBetween(expressionResolver) == true
    let headerSepActive = headerSeparator != nil && headerRowCount > 0
      && grid.gridRowCount > headerRowCount

    // Row gaps needed when any row boundary requires a separator
    let hasRowGaps = (rowSepBetween && grid.gridRowCount > 1) || headerSepActive
    let hasColGaps = colSepBetween && columnCount > 1

    // Expanded grid: interleave separator rows/columns between content
    let expandedColCount = hasColGaps ? (columnCount * 2 - 1) : columnCount
    let expandedRowCount = hasRowGaps ? (grid.gridRowCount * 2 - 1) : grid.gridRowCount

    // Occupancy map: -1 = unoccupied, >= 0 = item index
    var occupancy = [[Int]](
      repeating: [Int](repeating: -1, count: expandedColCount),
      count: expandedRowCount
    )
    var expandedItemData: [(row: Int, col: Int, item: GridBlock.Item)] = []

    // Phase 1: Build content blocks and collect cell metadata
    struct CellData {
      let block: Block
      let cellInfo: GridCellInfo
      let hAlign: DivAlignmentHorizontal
      let vAlign: DivAlignmentVertical
      let cellWidthTrait: LayoutTrait
      let eRow: Int
      let eCol: Int
      let eRowSpan: Int
      let eColSpan: Int
    }

    var cellDataList: [CellData] = []
    for (cellIndex, cellInfo) in grid.cells.enumerated() {
      let cellContext = itemsContext.modifying(
        pathSuffix: "cell\(cellIndex)",
        sizeModifier: DivTableCellSizeModifier()
      )

      do {
        let block = try cellInfo.cell.div.value.makeBlock(context: cellContext)

        let hAlign = resolveCellHorizontalAlignment(
          cell: cellInfo.cell, cellIndex: cellInfo.gridCol,
          expressionResolver: expressionResolver
        )
        let vAlign = resolveCellVerticalAlignment(
          cell: cellInfo.cell, cellIndex: cellInfo.gridCol,
          expressionResolver: expressionResolver
        )

        let eRow = hasRowGaps ? cellInfo.gridRow * 2 : cellInfo.gridRow
        let eCol = hasColGaps ? cellInfo.gridCol * 2 : cellInfo.gridCol
        let eRowSpan = hasRowGaps ? cellInfo.rowSpan * 2 - 1 : cellInfo.rowSpan
        let eColSpan = hasColGaps ? cellInfo.colSpan * 2 - 1 : cellInfo.colSpan

        let cellWidthTrait = resolveCellWidthTrait(
          startCol: cellInfo.gridCol,
          colSpan: cellInfo.colSpan,
          expressionResolver: expressionResolver
        )

        cellDataList.append(CellData(
          block: block,
          cellInfo: cellInfo,
          hAlign: hAlign,
          vAlign: vAlign,
          cellWidthTrait: cellWidthTrait,
          eRow: eRow,
          eCol: eCol,
          eRowSpan: eRowSpan,
          eColSpan: eColSpan
        ))
      } catch {
        cellContext.addError(error: error)
      }
    }

    // Phase 2: Calculate max content height per grid row.
    // This ensures all cells in a row have uniform height so row/header
    // backgrounds fill the full row even when cells have different content heights
    // (e.g., an empty text cell next to one with text).
    var maxHeightPerRow: [Int: CGFloat] = [:]
    for data in cellDataList {
      guard data.cellInfo.rowSpan == 1 else { continue }
      guard !data.block.isVerticallyResizable else { continue }

      let estimatedWidth: CGFloat
      if let fixedWidth = data.cellWidthTrait.fixedValue {
        estimatedWidth = fixedWidth
      } else if !data.block.isHorizontallyResizable {
        estimatedWidth = data.block.widthOfHorizontallyNonResizableBlock
      } else {
        estimatedWidth = .greatestFiniteMagnitude
      }

      let height = data.block.heightOfVerticallyNonResizableBlock(
        forWidth: estimatedWidth
      )
      maxHeightPerRow[data.cellInfo.gridRow] = max(
        maxHeightPerRow[data.cellInfo.gridRow, default: 0],
        height
      )
    }

    // Phase 3: Create cell wrappers with uniform row height and grid items
    for data in cellDataList {
      let cellHeightTrait: LayoutTrait
      if data.cellInfo.rowSpan > 1 {
        cellHeightTrait = .resizable
      } else if let maxHeight = maxHeightPerRow[data.cellInfo.gridRow], maxHeight > 0 {
        cellHeightTrait = .fixed(maxHeight)
      } else {
        cellHeightTrait = .intrinsic
      }

      do {
        var cellBlock: Block = try ContainerBlock(
          layoutDirection: .vertical,
          widthTrait: data.cellWidthTrait,
          heightTrait: cellHeightTrait,
          horizontalChildrenAlignment: data.hAlign.alignment(
            isRTLLayout: context.layoutDirection == .rightToLeft
          ),
          verticalChildrenAlignment: data.vAlign.alignment,
          children: [data.block]
        )

        // Apply row-level background
        let isHeader = data.cellInfo.gridRow < headerRowCount
        let bodyRowIndex = data.cellInfo.gridRow - headerRowCount

        var rowBg: Color?
        if isHeader {
          rowBg = headerBg
        } else if striped != nil {
          rowBg = bodyRowIndex % 2 == 0 ? evenBg : oddBg
        }
        if let dataRowBg = resolveBackground(
          allRows[data.cellInfo.dataRowIndex].background, context: context
        ) {
          rowBg = dataRowBg
        }
        if let bg = rowBg {
          cellBlock = cellBlock.addingDecorations(backgroundColor: bg)
        }

        // Apply cell-level background (on top of row background)
        if let bg = resolveBackground(data.cellInfo.cell.background, context: context) {
          cellBlock = cellBlock.addingDecorations(backgroundColor: bg)
        }

        // Column weight: only for non-spanning cells in expanded grid
        // to avoid distributing weight to separator columns
        let colWeight: LayoutTrait.Weight?
        if hasColGaps && data.cellInfo.colSpan > 1 {
          colWeight = nil
        } else {
          colWeight = resolveColumnWeight(
            cellIndex: data.cellInfo.gridCol,
            expressionResolver: expressionResolver
          )
        }

        let item = GridBlock.Item(
          span: GridBlock.Span(rows: data.eRowSpan, columns: data.eColSpan),
          weight: .init(column: colWeight, row: nil),
          contents: cellBlock,
          alignment: .default
        )

        let itemIndex = expandedItemData.count
        expandedItemData.append((data.eRow, data.eCol, item))

        for r in data.eRow..<(data.eRow + data.eRowSpan) {
          for c in data.eCol..<(data.eCol + data.eColSpan) {
            occupancy[r][c] = itemIndex
          }
        }
      } catch {
        // ContainerBlock init can throw; skip this cell
      }
    }

    // Pass 1: Fill row gap rows (separators + intersections) first,
    // so column separators in Pass 2 don't span into them.
    if hasRowGaps {
      for r in stride(from: 1, to: expandedRowCount, by: 2) {
        for c in 0..<expandedColCount {
          if occupancy[r][c] != -1 { continue }

          let isColGap = hasColGaps && c % 2 == 1

          if !isColGap {
            // Row or header separator (odd row, even col)
            let originalRowAbove = r / 2
            let isHeaderBoundary = headerRowCount > 0
              && originalRowAbove == headerRowCount - 1
            let sep: Separator? = isHeaderBoundary ? headerSeparator : rowSeparator

            // Span across consecutive unoccupied columns in this row
            var spanCols = 1
            while c + spanCols < expandedColCount && occupancy[r][c + spanCols] == -1 {
              spanCols += 1
            }

            let block: Block
            if let sep {
              block = makeRowSeparatorBlock(sep, context: context)
            } else {
              block = EmptyBlock(widthTrait: .resizable, heightTrait: .fixed(0))
            }

            let item = GridBlock.Item(
              span: GridBlock.Span(rows: 1, columns: spanCols),
              weight: .init(column: nil, row: nil),
              contents: block,
              alignment: .default
            )

            let itemIndex = expandedItemData.count
            expandedItemData.append((r, c, item))
            for cc in c..<(c + spanCols) { occupancy[r][cc] = itemIndex }

          } else {
            // Intersection (odd row, odd col) — where row and column gaps cross
            let originalRowAbove = r / 2
            let isHeaderBoundary = headerRowCount > 0
              && originalRowAbove == headerRowCount - 1
            let sep: Separator? = isHeaderBoundary ? headerSeparator : rowSeparator
            let color = sep.flatMap { resolveDrawableColor($0.style, context: context) }
              ?? resolveDrawableColor(columnSeparator!.style, context: context)
              ?? .clear

            let block = EmptyBlock(widthTrait: .resizable, heightTrait: .resizable)
              .addingDecorations(backgroundColor: color)

            let item = GridBlock.Item(
              span: GridBlock.Span(rows: 1, columns: 1),
              weight: .init(column: nil, row: nil),
              contents: block,
              alignment: .default
            )

            let itemIndex = expandedItemData.count
            expandedItemData.append((r, c, item))
            occupancy[r][c] = itemIndex
          }
        }
      }
    }

    // Pass 2: Fill column gap positions (even rows, odd cols).
    // Each column separator is span(1,1) so it gets the correct row background.
    if hasColGaps {
      for r in 0..<expandedRowCount {
        for c in stride(from: 1, to: expandedColCount, by: 2) {
          if occupancy[r][c] != -1 { continue }

          // Determine the row background for this position
          let originalRow = hasRowGaps ? r / 2 : r
          let isHeader = originalRow < headerRowCount
          let bodyRowIndex = originalRow - headerRowCount

          var rowBg: Color?
          if isHeader {
            rowBg = headerBg
          } else if striped != nil {
            rowBg = bodyRowIndex % 2 == 0 ? evenBg : oddBg
          }
          if originalRow < allRows.count,
             let dataRowBg = resolveBackground(
               allRows[originalRow].background, context: context
             ) {
            rowBg = dataRowBg
          }

          let block = makeColumnSeparatorBlock(
            columnSeparator!, context: context, background: rowBg
          )

          let item = GridBlock.Item(
            span: GridBlock.Span(rows: 1, columns: 1),
            weight: .init(column: nil, row: nil),
            contents: block,
            alignment: .default
          )

          let itemIndex = expandedItemData.count
          expandedItemData.append((r, c, item))
          occupancy[r][c] = itemIndex
        }
      }
    }

    // Sort by reading order — Grid places items left-to-right, top-to-bottom
    expandedItemData.sort { a, b in
      if a.row != b.row { return a.row < b.row }
      return a.col < b.col
    }

    let gridItems = expandedItemData.map(\.item)

    if gridItems.isEmpty {
      return EmptyBlock(
        widthTrait: resolveContentWidthTrait(context),
        heightTrait: resolveContentHeightTrait(context)
      )
    }

    let gridBlock = try GridBlock(
      widthTrait: resolveContentWidthTrait(context),
      heightTrait: resolveContentHeightTrait(context),
      items: gridItems,
      columnCount: expandedColCount,
      path: context.path
    )

    // Wrap with start/end separators
    return try wrapWithStartEndSeparators(
      gridBlock,
      context: context,
      expressionResolver: expressionResolver
    )
  }

  // MARK: - Start/End Separators

  private func wrapWithStartEndSeparators(
    _ block: Block,
    context: DivBlockModelingContext,
    expressionResolver: ExpressionResolver
  ) throws -> Block {
    var result = block

    // Row separator start/end
    if let rowSep = rowSeparator {
      let showAtStart = rowSep.resolveShowAtStart(expressionResolver)
      let showAtEnd = rowSep.resolveShowAtEnd(expressionResolver)
      if showAtStart || showAtEnd {
        var children: [ContainerBlock.Child] = []
        if showAtStart {
          children.append(ContainerBlock.Child(
            content: makeRowSeparatorBlock(rowSep, context: context)
          ))
        }
        children.append(ContainerBlock.Child(content: result))
        if showAtEnd {
          children.append(ContainerBlock.Child(
            content: makeRowSeparatorBlock(rowSep, context: context)
          ))
        }
        result = try ContainerBlock(
          layoutDirection: .vertical,
          widthTrait: resolveContentWidthTrait(context),
          heightTrait: resolveContentHeightTrait(context),
          children: children,
          path: context.path
        )
      }
    }

    // Column separator start/end
    if let colSep = columnSeparator {
      let showAtStart = colSep.resolveShowAtStart(expressionResolver)
      let showAtEnd = colSep.resolveShowAtEnd(expressionResolver)
      if showAtStart || showAtEnd {
        var children: [ContainerBlock.Child] = []
        if showAtStart {
          children.append(ContainerBlock.Child(
            content: makeColumnSeparatorBlock(colSep, context: context)
          ))
        }
        children.append(ContainerBlock.Child(content: result))
        if showAtEnd {
          children.append(ContainerBlock.Child(
            content: makeColumnSeparatorBlock(colSep, context: context)
          ))
        }
        result = try ContainerBlock(
          layoutDirection: .horizontal,
          widthTrait: resolveContentWidthTrait(context),
          heightTrait: resolveContentHeightTrait(context),
          children: children,
          path: context.path
        )
      }
    }

    return result
  }

  private func collectAllRows() -> [Row] {
    var allRows: [Row] = []
    if let headerRow {
      allRows.append(headerRow)
    }
    if let rows {
      allRows.append(contentsOf: rows)
    }
    return allRows
  }

  // MARK: - Grid Distribution

  private func buildGrid(
    allRows: [Row],
    columnCount: Int,
    expressionResolver: ExpressionResolver
  ) -> TableGrid {
    var colHeights = Array(repeating: 0, count: columnCount)
    var cells: [GridCellInfo] = []

    for (dataRowIndex, row) in allRows.enumerated() {
      for cell in row.cells {
        let minHeight = colHeights.min() ?? 0
        guard let col = colHeights.firstIndex(of: minHeight) else { continue }

        let colSpan = min(
          max(cell.resolveColumnSpan(expressionResolver), 1),
          columnCount - col
        )
        let rowSpan = max(cell.resolveRowSpan(expressionResolver), 1)

        cells.append(GridCellInfo(
          gridRow: minHeight,
          gridCol: col,
          rowSpan: rowSpan,
          colSpan: colSpan,
          cell: cell,
          dataRowIndex: dataRowIndex
        ))

        for i in col..<(col + colSpan) {
          colHeights[i] = minHeight + rowSpan
        }
      }
    }

    let gridRowCount = colHeights.max() ?? 0
    return TableGrid(cells: cells, gridRowCount: gridRowCount)
  }

  // MARK: - Column Width

  private func resolveCellWidthTrait(
    startCol: Int,
    colSpan: Int,
    expressionResolver: ExpressionResolver
  ) -> LayoutTrait {
    if colSpan > 1 { return .resizable }

    guard startCol < columns.count,
          let width = columns[startCol].width else { return .resizable }
    switch width {
    case .divFixedSize, .divWrapContentSize:
      return width.resolveLayoutTrait(expressionResolver)
    case .divMatchParentSize:
      return .resizable
    }
  }

  private func resolveColumnWeight(
    cellIndex: Int,
    expressionResolver: ExpressionResolver
  ) -> LayoutTrait.Weight? {
    guard cellIndex < columns.count,
          let width = columns[cellIndex].width else { return nil }
    switch width {
    case let .divMatchParentSize(size):
      return size.resolveWeight(expressionResolver)
        .flatMap { LayoutTrait.Weight(floatLiteral: $0) }
        ?? .default
    default:
      return nil
    }
  }

  // MARK: - Separators

  private func makeRowSeparatorBlock(
    _ separator: Separator,
    context: DivBlockModelingContext
  ) -> Block {
    separator.style.makeBlock(
      context: context, widthTrait: .resizable, corners: .all
    ).addingEdgeInsets(separator.margins.resolve(context))
  }

  private func makeColumnSeparatorBlock(
    _ separator: Separator,
    context: DivBlockModelingContext,
    background: Color? = nil
  ) -> Block {
    let width = separator.style.resolveWidth(context)
    let color = resolveDrawableColor(separator.style, context: context) ?? .clear
    // Separator line fills the cell with separator color
    var block: Block = EmptyBlock(widthTrait: .fixed(width), heightTrait: .resizable)
      .addingDecorations(backgroundColor: color)
    // Apply row background as the outermost layer. Rendering order:
    // 1. Fill with rowBg (outermost)
    // 2. Render child → fill with separator color (on top)
    // The separator covers the background, but margin areas show the background.
    if let bg = background {
      block = block.addingDecorations(backgroundColor: bg)
    }
    return block
  }

  private func resolveDrawableColor(
    _ drawable: DivDrawable,
    context: DivBlockModelingContext
  ) -> Color? {
    switch drawable {
    case let .divShapeDrawable(shape):
      return shape.resolveColor(context.expressionResolver)
    }
  }

  // MARK: - Alignment

  private func resolveCellHorizontalAlignment(
    cell: Row.Cell,
    cellIndex: Int,
    expressionResolver: ExpressionResolver
  ) -> DivAlignmentHorizontal {
    if let cellAlign = cell.resolveContentAlignmentHorizontal(expressionResolver) {
      return cellAlign
    }
    if cellIndex < columns.count,
       let colAlign = columns[cellIndex].resolveContentAlignmentHorizontal(expressionResolver) {
      return colAlign
    }
    return resolveContentAlignmentHorizontal(expressionResolver)
  }

  private func resolveCellVerticalAlignment(
    cell: Row.Cell,
    cellIndex: Int,
    expressionResolver: ExpressionResolver
  ) -> DivAlignmentVertical {
    if let cellAlign = cell.resolveContentAlignmentVertical(expressionResolver) {
      return cellAlign
    }
    if cellIndex < columns.count,
       let colAlign = columns[cellIndex].resolveContentAlignmentVertical(expressionResolver) {
      return colAlign
    }
    return resolveContentAlignmentVertical(expressionResolver)
  }

  private func resolveBackground(
    _ backgrounds: [DivBackground]?,
    context: DivBlockModelingContext
  ) -> Color? {
    guard let backgrounds, !backgrounds.isEmpty else { return nil }
    let expressionResolver = context.expressionResolver
    for bg in backgrounds {
      if case let .divSolidBackground(solid) = bg {
        if let color = solid.resolveColor(expressionResolver) {
          return color
        }
      }
    }
    return nil
  }
}

// MARK: - Grid Types

private struct GridCellInfo {
  let gridRow: Int
  let gridCol: Int
  let rowSpan: Int
  let colSpan: Int
  let cell: DivTable.Row.Cell
  let dataRowIndex: Int
}

private struct TableGrid {
  let cells: [GridCellInfo]
  let gridRowCount: Int
}

// MARK: - Size Modifier

private struct DivTableCellSizeModifier: DivSizeModifier {
  private static let wrapContentSize: DivSize =
    .divWrapContentSize(DivWrapContentSize(constrained: .value(true)))

  func transformWidth(_ width: DivSize) -> DivSize {
    if case .divMatchParentSize = width {
      return Self.wrapContentSize
    }
    return width
  }

  func transformHeight(_ height: DivSize) -> DivSize {
    height
  }
}

// MARK: - Cell Collection

extension DivTable {
  func collectAllCellDivs() -> [Div] {
    var divs: [Div] = []
    if let headerRow {
      for cell in headerRow.cells {
        divs.append(cell.div)
      }
    }
    if let rows {
      for row in rows {
        for cell in row.cells {
          divs.append(cell.div)
        }
      }
    }
    return divs
  }
}
