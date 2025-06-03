---
sidebar_label: Work with Clipboard module
title: JavaScript Grid - Work with Clipboard module 
description: You can explore how to work with Clipboard module of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Clipboard module

The `Clipboard` module provides functionality for interacting with the clipboard in the Grid component. It allows copying, cutting, and pasting data from a selected range of cells, as well as integrating with other grids or external applications like Google Spreadsheets. 

## Initializing the Clipboard module

To initialize the `Clipboard` module, use the [`clipboard`](grid/api/grid_clipboard_config.md) property in the **dhx.Grid** component configuration. After the Grid component is created, the module is accessible through the `grid.clipboard` property. 

:::note
The module requires the [`RangeSelection`](grid/usage_rangeselection.md) module to be enabled and is best used in conjunction with the [`BlockSelection`](grid/usage_blockselection.md) module in the `"range"` mode for convenient range selection via the UI.
:::

The `clipboard` property can be set:
- as a *boolean* value to enable/disable the `Clipboard` module upon the component initialization 
- as an *object* to enable the module and define the [modifier functions](#using-formatter-functions) for data processing: `copyModifier`, `cutModifier` and `pasteModifier`. The example below demonstrates the clipboard configuration with all the modifiers in use:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
        { id: "2", a: "A2", b: "B2" },
    ],
    rangeSelection: true, // required for the Clipboard module to function
    clipboard: {
        // adds a suffix based on the operation
        copyModifier: (value, cell, cut) => `${value}${cut ? "-cut" : "-copied"}`, 
        cutModifier: (value, cell) => `${value}-removed`, // before cutting a value
        pasteModifier: (value, cell) => value.replace("-copied", "") // removes the suffix on pasting
    }
});
~~~

## Using the events of the Clipboard object

To make the process of working with clipboard more flexible, you can apply the related events of the `clipboard` object:
[`afterCopy`](grid/api/clipboard/aftercopy_event.md), [`afterPaste`](grid/api/clipboard/afterpaste_event.md), [`beforeCopy`](grid/api/clipboard/beforecopy_event.md), [`beforePaste`](grid/api/clipboard/beforepaste_event.md), [`copyError`](grid/api/clipboard/copyerror_event.md),
[`pasteError`](grid/api/clipboard/pasteerror_event.md)

## Interaction with cell selection

### Automatic activation of BlockSelection module

When **Clipboard API** is enabled (e.g., via `grid.config.clipboard: true`), the **BlockSelection API** is automatically activated in the `range` mode unless another mode is specified.

### Usage in other BlockSelection modes

If the `BlockSelection` module is configured in the `manual` mode, the **Clipboard API** does not automatically receive a range. In this case, you should manually set the range using the **Range API**. For this purpose, you need to call 
 `grid.range.setRange({ xStart, xEnd, yStart, yEnd })`.

:::note
Without a set range, copying and pasting will not work, as **Clipboard API** relies on data from the **Range API**.
:::

### Data source for Clipboard

The **Clipboard API** always uses data from the **Range API** to determine the cells that will be copied or into which data will be pasted.

:::note
The `cut`/`paste` operations will be blocked in the [*grouping*](grid/usage.md/#grouping-data) mode.
:::

## Interaction between Grids and external widgets

### Columns with type "date"

When copying cells with the column type `type: "date"`, the *formatted* value is copied to the clipboard (not the original string or date object). For example, if the data contains `"2025-04-11"` and the display format is set to `"dd/mm/yyyy"`, the copied value will be `"11/04/2025"`. This behavior simplifies working with dates in tables and other applications.

When pasting, values are validated after applying [`pasteModifier`](#using-formatter-functions) (if defined). The value is checked for compliance with the column's `dateFormat` (e.g., `"dd/mm/yyyy"`) or whether it can be parsed as a valid `Date` object (e.g., `"2025-04-11"` or `"April 11, 2025"`). If the value is valid, it is converted to the grid's expected format and inserted. If invalid (e.g., `"abc"` or `"31 12 2025"`), the paste operation is ignored, and the cell's current value remains unchanged.

### Columns with type "number"

When copying cells with the column type `type: "number"`, the values are copied to the clipboard as numbers, even if `numberMask` or `patternMask` is applied. For example, if a cell displays `"1,234.56"` due to a mask, the copied value will be `1234.56`. This is done to maintain data purity and compatibility with other systems, such as spreadsheets or data processing software.

When pasting, values are validated after applying [`pasteModifier`](#using-formatter-functions) (if defined). The value must be a valid number (e.g., `1234.56` or `"1,234.56"` after cleaning). If the value is not a number (e.g., `"abc"`), the paste operation is ignored, and the cell's current value remains unchanged.

### Columns with type "string"

If `patternMask` is applied to a cell (e.g., for formatting phone numbers or currency), the *formatted* value is copied to the clipboard. 
For example, if the data contains `"1234567890"` and the mask is `"+# (###) ###-##-##"`, the copied value will be `"+1 (234) 567-89-0"`. This preserves readability for the end user.

### Templates

Templates applied to cell values (e.g., via the `template` property) are not included in the data during copying. This prevents unwanted HTML or formatted text from entering the clipboard, which could disrupt the functionality of external widgets or tables (e.g., Google Spreadsheets). Only the "raw" value from the data is copied.

### Columns with editors "combobox", "multiselect", "select"

If a column has `editorType: "combobox"`, `"multiselect"`, or `"select"`, the value stored in the data (typically an `id` or a key) is copied to the clipboard, not the displayed portion (e.g., the option text). 

For example, if the data contains `{ id: "1", value: "Option 1" }` and the cell displays `"Option 1"`, the copied value will be `"1"`. This ensures data consistency when transferring between systems.

## Using formatter functions

If you need a specific data format during copying or pasting, the default behavior can be modified using the formatter functions (`copyModifier`, `cutModifier`, `pasteModifier`). These functions provide flexible control over how data is processed before copying, cutting, or pasting, which is particularly useful in the scenarios described below.

### Why formatters are needed

- **Format control**: if the default behavior (e.g., copying numbers without a mask or `id` instead of text in a `combobox`) does not meet the requirements, formatters allow data to be transformed into the desired form.
- **Compatibility**: formatters help adapting data for specific external systems (e.g., preserving number masks or converting dates to a different format).
- **Customization**: you can add additional information (e.g., units of measurement) or remove unnecessary elements from the data.
- **Preprocessing before validation**: `pasteModifier` can preprocess data before it undergoes validation for `date`, `number`, or `boolean` types, ensuring compatibility with the grid's strict typing.

### How to use formatters

- **`copyModifier`**
    - Applied before copying or cutting data to the clipboard. Allows overriding what is placed in the clipboard.
    - Example: To copy the displayed text instead of the `id` for a `combobox`, you can use the cell object (`cell`) to retrieve the desired value.
- **`cutModifier`**
    - Applied before cutting to modify the data that goes into the clipboard and leave the original cells in a desired state (e.g., not fully clearing them).
    - Example: You can add a suffix to the cut value to indicate its origin.
- **`pasteModifier`**
    - Applied before pasting data from the clipboard into cells. Allows transforming the incoming data into a format suitable for the grid, before validation for the `date`, `number`, or `boolean` types.
    - Example: If the clipboard contains a formatted date (`"11/04/2025"`) but the data requires `"2025-04-11"`, `pasteModifier` can perform this conversion.

### Examples

**Numbers with a mask**

This example demonstrates how to copy numbers while preserving the mask (e.g., `"1,234.56"` instead of `1234.56`).

~~~jsx
copyModifier: (value, cell, cut) => {
    if (cell.column.type === "number" && cell.column.numberMask) {
        return new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 2
        }).format(value);
    }
    return value;
}
~~~

**Combobox with displayed text**

This example shows how to copy the combobox option text (`"Option 1"`) instead of the `id` (`"1"`).

~~~jsx
copyModifier: (value, cell, cut) => {
    if (cell.column.editorType === "combobox") {
        const options = cell.column.options;
        const option = options.find(opt => opt.id === value);
        return option ? option.value : value;
    }
    return value;
}
~~~

**Dates with validation**

This example demonstrates how to transform a date from `"11/04/2025"` to `"2025-04-11"` during pasting and ensure it is valid.
    
~~~jsx
pasteModifier: (value, cell) => {
    if (cell.column.type === "date") {
        const dateFormat = cell.column.dateFormat || "dd/mm/yyyy";
        const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/; // for dd/mm/yyyy
        const match = value.match(regex);
        if (match) {
            const date = new Date(`${match[3]}-${match[2]}-${match[1]}`);
            if (!isNaN(date.getTime())) {
                return `${match[3]}-${match[2]}-${match[1]}`; // ISO format
            }
        }
        return value; // validation will handle invalid cases
    }
    return value;
}
~~~

**PatternMask during copying**

This example shows how to remove mask formatting (e.g., copy `"1234567890"` instead of `"+1 (234) 567-89-0"`).

~~~jsx
copyModifier: (value, cell, cut) => {
    if (cell.column.patternMask) {
        return value.replace(/[^0-9]/g, ""); // remove all non-numeric characters
    }
    return value;
}
~~~