package com.yandex.div.core.view2.divs

import com.yandex.div.core.dagger.DivScope
import com.yandex.div.core.expression.local.variableController
import com.yandex.div.core.state.DivStatePath
import com.yandex.div.core.util.toIntSafely
import com.yandex.div.core.view2.BindingContext
import com.yandex.div.core.view2.DivTypefaceResolver
import com.yandex.div.core.view2.DivViewBinder
import com.yandex.div.core.view2.getTypeface
import com.yandex.div.core.view2.getTypefaceValue
import com.yandex.div.core.view2.divs.DivActionBinder.LogType.Companion.LOG_CLICK
import com.yandex.div.core.view2.divs.widgets.DivChoiceChipsView
import com.yandex.div.core.view2.errors.ErrorCollectors
import com.yandex.div.data.Variable
import com.yandex.div.json.expressions.ExpressionResolver
import com.yandex.div2.Div
import com.yandex.div2.DivChoiceChips
import com.yandex.div2.DivFontWeight
import org.json.JSONArray
import org.json.JSONObject
import javax.inject.Inject

@DivScope
internal class DivChoiceChipsBinder @Inject constructor(
    baseBinder: DivBaseBinder,
    private val typefaceResolver: DivTypefaceResolver,
    private val actionBinder: DivActionBinder,
    private val errorCollectors: ErrorCollectors
) : DivViewBinder<Div.ChoiceChips, DivChoiceChips, DivChoiceChipsView>(baseBinder) {

    override fun DivChoiceChipsView.bind(
        bindingContext: BindingContext,
        div: DivChoiceChips,
        oldDiv: DivChoiceChips?,
        path: DivStatePath
    ) {
        val expressionResolver = bindingContext.expressionResolver

        observeSelectionMode(div, expressionResolver)
        observeLayoutMode(div, expressionResolver)
        observeSpacing(div, expressionResolver)
        observeCornerRadius(div, expressionResolver)
        observeChipHeight(div, expressionResolver)
        observeChipPadding(div, expressionResolver)
        observeShowCheckmark(div, expressionResolver)
        observeIconSize(div, expressionResolver)
        observeFontProperties(div, expressionResolver)
        observeChipStyle(div, expressionResolver)
        observeItems(div, bindingContext)
        observeSelectedVariable(div, bindingContext, expressionResolver)
    }

    private fun DivChoiceChipsView.observeSelectionMode(
        div: DivChoiceChips,
        resolver: ExpressionResolver
    ) {
        val callback = { _: Any ->
            val mode = div.selectionMode.evaluate(resolver)
            setSelectionMode(
                when (mode) {
                    DivChoiceChips.SelectionMode.SINGLE -> DivChoiceChipsView.SelectionMode.SINGLE
                    DivChoiceChips.SelectionMode.MULTI -> DivChoiceChipsView.SelectionMode.MULTI
                }
            )
        }
        addSubscription(div.selectionMode.observeAndGet(resolver, callback))
    }

    private fun DivChoiceChipsView.observeLayoutMode(
        div: DivChoiceChips,
        resolver: ExpressionResolver
    ) {
        val callback = { _: Any ->
            val mode = div.layoutMode.evaluate(resolver)
            setLayoutMode(
                when (mode) {
                    DivChoiceChips.LayoutMode.SCROLL -> DivChoiceChipsView.LayoutMode.SCROLL
                    DivChoiceChips.LayoutMode.WRAP -> DivChoiceChipsView.LayoutMode.WRAP
                }
            )
        }
        addSubscription(div.layoutMode.observeAndGet(resolver, callback))
    }

    private fun DivChoiceChipsView.observeSpacing(
        div: DivChoiceChips,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.chipSpacing.observeAndGet(resolver) { spacing ->
            setChipSpacing(spacing.toIntSafely())
        })
        addSubscription(div.rowSpacing.observeAndGet(resolver) { spacing ->
            setRowSpacing(spacing.toIntSafely())
        })
    }

    private fun DivChoiceChipsView.observeCornerRadius(
        div: DivChoiceChips,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.cornerRadius.observeAndGet(resolver) { radius ->
            setCornerRadius(radius.toFloat())
        })
    }

    private fun DivChoiceChipsView.observeChipHeight(
        div: DivChoiceChips,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.chipHeight.observeAndGet(resolver) { height ->
            setChipHeight(height.toIntSafely())
        })
    }

    private fun DivChoiceChipsView.observeChipPadding(
        div: DivChoiceChips,
        resolver: ExpressionResolver
    ) {
        val chipPadding = div.chipPadding ?: return
        val callback = { _: Any ->
            setChipPadding(
                chipPadding.left.evaluate(resolver).toIntSafely(),
                chipPadding.top.evaluate(resolver).toIntSafely(),
                chipPadding.right.evaluate(resolver).toIntSafely(),
                chipPadding.bottom.evaluate(resolver).toIntSafely()
            )
        }
        addSubscription(chipPadding.left.observeAndGet(resolver, callback))
        addSubscription(chipPadding.top.observeAndGet(resolver, callback))
        addSubscription(chipPadding.right.observeAndGet(resolver, callback))
        addSubscription(chipPadding.bottom.observeAndGet(resolver, callback))
    }

    private fun DivChoiceChipsView.observeShowCheckmark(
        div: DivChoiceChips,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.showCheckmark.observeAndGet(resolver) { show ->
            setShowCheckmark(show)
        })
    }

    private fun DivChoiceChipsView.observeIconSize(
        div: DivChoiceChips,
        resolver: ExpressionResolver
    ) {
        addSubscription(div.iconSize.observeAndGet(resolver) { size ->
            setIconSize(size.toIntSafely())
        })
    }

    private fun DivChoiceChipsView.observeFontProperties(
        div: DivChoiceChips,
        resolver: ExpressionResolver
    ) {
        val callback = { _: Any ->
            val fontSize = div.fontSize.evaluate(resolver).toFloat()
            val fontFamily = div.fontFamily?.evaluate(resolver)
            val fontWeight = div.fontWeight.evaluate(resolver)
            val typefaceProvider = typefaceResolver.getTypefaceProvider(fontFamily)
            val weightInt = getTypefaceValue(fontWeight, null)
            val typeface = getTypeface(weightInt, typefaceProvider)
            val style = when (fontWeight) {
                DivFontWeight.BOLD -> android.graphics.Typeface.BOLD
                DivFontWeight.MEDIUM -> android.graphics.Typeface.BOLD
                else -> android.graphics.Typeface.NORMAL
            }
            setFontProperties(fontSize, typeface, style)
        }
        addSubscription(div.fontSize.observeAndGet(resolver, callback))
        div.fontFamily?.let { addSubscription(it.observeAndGet(resolver, callback)) }
        addSubscription(div.fontWeight.observeAndGet(resolver, callback))
    }

    private fun DivChoiceChipsView.observeChipStyle(
        div: DivChoiceChips,
        resolver: ExpressionResolver
    ) {
        val callback = { _: Any ->
            val theme = div.chipStyle.evaluate(resolver)
            val baseColors = getThemeColors(theme)

            // Apply explicit color overrides if present
            val colors = DivChoiceChipsView.ChipColors(
                selectedBg = div.selectedBackgroundColor?.evaluate(resolver)
                    ?: baseColors.selectedBg,
                selectedText = div.selectedTextColor?.evaluate(resolver)
                    ?: baseColors.selectedText,
                selectedBorder = div.selectedBorderColor?.evaluate(resolver)
                    ?: baseColors.selectedBorder,
                defaultBg = div.defaultBackgroundColor?.evaluate(resolver)
                    ?: baseColors.defaultBg,
                defaultText = div.defaultTextColor?.evaluate(resolver)
                    ?: baseColors.defaultText,
                defaultBorder = div.defaultBorderColor?.evaluate(resolver)
                    ?: baseColors.defaultBorder,
                disabledBg = div.disabledBackgroundColor?.evaluate(resolver)
                    ?: baseColors.disabledBg,
                disabledText = div.disabledTextColor?.evaluate(resolver)
                    ?: baseColors.disabledText,
                disabledBorder = div.disabledBorderColor?.evaluate(resolver)
                    ?: baseColors.disabledBorder,
                hasShadow = baseColors.hasShadow
            )
            setChipColors(colors)
        }
        addSubscription(div.chipStyle.observeAndGet(resolver, callback))
    }

    private fun getThemeColors(theme: DivChoiceChips.ChipStyle): DivChoiceChipsView.ChipColors {
        return when (theme) {
            DivChoiceChips.ChipStyle.OUTLINED -> DivChoiceChipsView.ChipColors(
                selectedBg = 0x1F1976D2.toInt(),
                selectedText = 0xFF1976D2.toInt(),
                selectedBorder = 0xFF1976D2.toInt(),
                defaultBg = 0x00000000,
                defaultText = 0xFF000000.toInt(),
                defaultBorder = 0xFF757575.toInt(),
                disabledBg = 0x00000000,
                disabledText = 0xFFBDBDBD.toInt(),
                disabledBorder = 0xFFE0E0E0.toInt(),
                hasShadow = false
            )
            DivChoiceChips.ChipStyle.FILLED -> DivChoiceChipsView.ChipColors(
                selectedBg = 0xFF1976D2.toInt(),
                selectedText = 0xFFFFFFFF.toInt(),
                selectedBorder = 0x00000000,
                defaultBg = 0x1F000000.toInt(),
                defaultText = 0xFF000000.toInt(),
                defaultBorder = 0x00000000,
                disabledBg = 0x0A000000.toInt(),
                disabledText = 0xFFBDBDBD.toInt(),
                disabledBorder = 0x00000000,
                hasShadow = false
            )
            DivChoiceChips.ChipStyle.ELEVATED -> DivChoiceChipsView.ChipColors(
                selectedBg = 0xFFFFFFFF.toInt(),
                selectedText = 0xFF1976D2.toInt(),
                selectedBorder = 0x00000000,
                defaultBg = 0xFFFFFFFF.toInt(),
                defaultText = 0xFF000000.toInt(),
                defaultBorder = 0x00000000,
                disabledBg = 0xFFF5F5F5.toInt(),
                disabledText = 0xFFBDBDBD.toInt(),
                disabledBorder = 0x00000000,
                hasShadow = true
            )
        }
    }

    private fun DivChoiceChipsView.observeItems(
        div: DivChoiceChips,
        bindingContext: BindingContext
    ) {
        // Parse static items if present
        val staticItems = div.items?.map { item ->
            DivChoiceChipsView.ChipItem(
                value = item.value,
                text = item.text ?: item.value,
                iconUrl = item.icon?.imageUrl?.evaluate(bindingContext.expressionResolver)?.toString(),
                isEnabled = item.isEnabled?.evaluate(bindingContext.expressionResolver) != false,
                isSelectedByDefault = item.isSelectedByDefault?.evaluate(bindingContext.expressionResolver) == true
            )
        }

        if (staticItems != null) {
            setChipItems(staticItems)
        }

        // Subscribe to items_variable if present
        val itemsVariableName = div.itemsVariable ?: return
        val variableController = bindingContext.expressionResolver.variableController ?: return
        val divView = bindingContext.divView
        val data = divView.divData ?: return
        val errorCollector = errorCollectors.getOrCreate(divView.dataTag, data)

        val subscription = variableController.subscribeToVariableChange(
            itemsVariableName,
            errorCollector,
            invokeOnSubscription = true
        ) { variable: Variable ->
            val rawValue = variable.getValue()
            val items = parseItems(rawValue)
            setChipItems(items)
        }
        addSubscription(subscription)
    }

    private fun parseItems(rawValue: Any?): List<DivChoiceChipsView.ChipItem> {
        return try {
            val array = when (rawValue) {
                is JSONArray -> rawValue
                is String -> JSONArray(rawValue)
                is List<*> -> JSONArray(rawValue)
                else -> return emptyList()
            }
            (0 until array.length()).mapNotNull { i ->
                val obj = array.optJSONObject(i) ?: run {
                    val str = array.optString(i) ?: return@mapNotNull null
                    return@mapNotNull DivChoiceChipsView.ChipItem(
                        value = str,
                        text = str,
                        iconUrl = null,
                        isEnabled = true,
                        isSelectedByDefault = false
                    )
                }
                val itemValue = obj.optString("value") ?: return@mapNotNull null
                if (itemValue.isEmpty()) return@mapNotNull null
                DivChoiceChipsView.ChipItem(
                    value = itemValue,
                    text = obj.optString("text", itemValue),
                    iconUrl = obj.optString("icon_url", null),
                    isEnabled = obj.optBoolean("is_enabled", true),
                    isSelectedByDefault = obj.optBoolean("is_selected_by_default", false)
                )
            }
        } catch (_: Exception) {
            emptyList()
        }
    }

    private fun DivChoiceChipsView.observeSelectedVariable(
        div: DivChoiceChips,
        bindingContext: BindingContext,
        resolver: ExpressionResolver
    ) {
        val variableController = bindingContext.expressionResolver.variableController ?: return
        val divView = bindingContext.divView
        val data = divView.divData ?: return
        val errorCollector = errorCollectors.getOrCreate(divView.dataTag, data)

        val subscription = variableController.subscribeToVariableChange(
            div.selectedValueVariable,
            errorCollector,
            invokeOnSubscription = true
        ) { variable: Variable ->
            val rawValue = variable.getValue()
            setSelectedValues(rawValue)
        }
        addSubscription(subscription)

        // Set up click listener to update variable and fire actions
        onChipClickListener = { clickedValue ->
            // Update the selected variable
            val selMode = div.selectionMode.evaluate(resolver)
            when (selMode) {
                DivChoiceChips.SelectionMode.SINGLE -> {
                    com.yandex.div.internal.core.VariableMutationHandler.setVariable(
                        bindingContext.divView,
                        div.selectedValueVariable,
                        clickedValue,
                        bindingContext.expressionResolver
                    )
                }
                DivChoiceChips.SelectionMode.MULTI -> {
                    // For multi mode, we need to update the array variable
                    // Read current value, toggle the clicked value, write back
                    val currentVar = variableController.getMutableVariable(div.selectedValueVariable)
                    val currentRaw = currentVar?.getValue()
                    val currentSet = mutableSetOf<String>()
                    when (currentRaw) {
                        is String -> {
                            try {
                                val arr = JSONArray(currentRaw)
                                for (i in 0 until arr.length()) {
                                    arr.optString(i)?.let { currentSet.add(it) }
                                }
                            } catch (_: Exception) {
                                if (currentRaw.isNotEmpty()) currentSet.add(currentRaw)
                            }
                        }
                        is JSONArray -> {
                            for (i in 0 until currentRaw.length()) {
                                currentRaw.optString(i)?.let { currentSet.add(it) }
                            }
                        }
                        is List<*> -> {
                            currentRaw.forEach { it?.toString()?.let { v -> currentSet.add(v) } }
                        }
                    }
                    if (currentSet.contains(clickedValue)) {
                        currentSet.remove(clickedValue)
                    } else {
                        currentSet.add(clickedValue)
                    }
                    val newArray = JSONArray(currentSet.toList())
                    com.yandex.div.internal.core.VariableMutationHandler.setVariable(
                        bindingContext.divView,
                        div.selectedValueVariable,
                        newArray.toString(),
                        bindingContext.expressionResolver
                    )
                }
            }

            // Fire selection actions
            div.selectionActions?.let { actions ->
                actionBinder.handleBulkActions(bindingContext, this, actions, LOG_CLICK)
            }
        }
    }
}
