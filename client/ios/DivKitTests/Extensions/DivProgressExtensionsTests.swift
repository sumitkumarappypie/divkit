@testable import DivKit
import XCTest

final class DivProgressExtensionsTests: XCTestCase {
  private let resolver = DivBlockModelingContext().expressionResolver

  func test_Type() {
    XCTAssertEqual(DivProgress.type, "progress")
  }

  func test_DefaultStyle() {
    let progress = DivProgress()
    XCTAssertEqual(progress.resolveStyle(resolver), .linear)
  }

  func test_DefaultValue() {
    let progress = DivProgress()
    XCTAssertEqual(progress.resolveValue(resolver), 0)
  }

  func test_DefaultIsIndeterminate() {
    let progress = DivProgress()
    XCTAssertFalse(progress.resolveIsIndeterminate(resolver))
  }

  func test_DefaultTrackThickness() {
    let progress = DivProgress()
    XCTAssertEqual(progress.resolveTrackThickness(resolver), 4)
  }

  func test_DefaultAlpha() {
    let progress = DivProgress()
    XCTAssertEqual(progress.resolveAlpha(resolver), 1.0)
  }

  func test_DefaultVisibility() {
    let progress = DivProgress()
    XCTAssertEqual(progress.resolveVisibility(resolver), .visible)
  }

  func test_OptionalColorsAreNil() {
    let progress = DivProgress()
    XCTAssertNil(progress.resolveActiveColor(resolver))
    XCTAssertNil(progress.resolveInactiveColor(resolver))
  }
}
