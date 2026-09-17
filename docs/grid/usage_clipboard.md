---
sidebar_label: Work with Clipboard module
title: JavaScript Grid - Work with Clipboard module 
description: You can explore how to work with Clipboard module of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Clipboard module

:::tip Pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

You can manage the clipboard functionality within a grid with the API of the [`Clipboard`](grid/configuration.md#clipboard) module. It enables copying, cutting, and pasting data from a selected range of cells. It also allows you to [integrate with other grids or external applications](#interaction-between-grids-and-external-widgets) like Google Spreadsheets. 

## Initializing the Clipboard module

To initialize the `Clipboard` module, use the [`clipboard`](grid/api/grid_clipboard_config.md) property in the `dhx.Grid` component configuration. After you create the Grid component, you can access the module through the `grid.clipboard` property. 

:::note
The module requires the [`RangeSelection`](grid/usage_rangeselection.md) module to be enabled and works best with the [`BlockSelection`](grid/usage_blockselection.md) module in the `"range"` mode (enabled on initialization of the `Clipboard` module) for convenient range selection via the UI. [Check the details below](#interaction-with-cell-selection).
:::

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
    blockSelection: { mode: "range" }, // required for Clipboard to function (initializes automatically)
    clipboard: true // enables the Clipboard module
});
~~~

**Related sample**: [Grid. Clipboard with notifications (messages)](https://snippet.dhtmlx.com/2nar7ocd)

The `clipboard` property can be set as an *object* to enable the module and define the [modifier functions](#using-formatter-functions) for data processing: `copyModifier`, `cutModifier` and `pasteModifier`. Check the details below.

## Using events of the Clipboard object

To work with the clipboard more flexibly, you can apply the related events of the `clipboard` object:
[`afterCopy`](grid/api/clipboard/aftercopy_event.md), [`afterPaste`](grid/api/clipboard/afterpaste_event.md), [`beforeCopy`](grid/api/clipboard/beforecopy_event.md), [`beforePaste`](grid/api/clipboard/beforepaste_event.md), [`copyError`](grid/api/clipboard/copyerror_event.md), [`pasteError`](grid/api/clipboard/pasteerror_event.md)

## Interaction with cell selection

### Automatic activation of BlockSelection module

When the `Clipboard` module is enabled (for example, via `grid.config.clipboard: true`), the `BlockSelection` module is automatically activated in the `range` mode unless another mode is specified.

### Usage in other BlockSelection modes

If the [`BlockSelection`](grid/usage_blockselection.md) module is configured in the `manual` mode, the `Clipboard` module does not automatically receive a range. In this case, set the range manually with the [`RangeSelection` API](grid/api/api_overview.md#rangeselection-api). For this, call `grid.range.setRange({ xStart, xEnd, yStart, yEnd })`.

:::note
Without a set range, copying and pasting do not work, as **Clipboard API** relies on data from the **RangeSelection API**.
:::

### Data source for Clipboard

The **Clipboard API** always uses data from the [`RangeSelection` API](grid/api/api_overview.md#rangeselection-api) to determine which cells to copy and which cells to paste into.

:::note
Grid blocks the `cut`/`paste` operations in the [*grouping*](grid/usage.md#grouping-data) mode.
:::

## Interaction between Grids and external widgets

The `Clipboard` module enables data exchange between multiple `dhx.Grid` instances or with external applications like Google Spreadsheets, Microsoft Excel, or similar widgets. Data is copied to the clipboard in a text format with tab separators (`\t`) between columns and newlines (`\n`) between rows, matching the standard table format.

**Related sample**: [Grid. Clipboard. Copy/сut/paste between grids with validation](https://snippet.dhtmlx.com/q1wj772g)

**Related sample**: [Grid. Clipboard between Grid and Spreadsheet](https://snippet.dhtmlx.com/hx69j42h)

### Integration with Google Spreadsheets

You can copy data from a grid to the clipboard and paste it directly into Google Spreadsheets, and the other way round. Use [`pasteModifier`](#using-formatter-functions) to process data formats (for example, converting strings to numbers).

### Pasting from clipboard

Data from the clipboard is pasted into the range defined by `rangeSelection`. The behavior depends on the size of the selected range and the number of copied elements:

- **If the range is smaller than the copied elements**: Grid pastes all the copied elements if there is enough space (that is, the sufficient number of rows and columns exist beyond the range's starting point). For example, if 4 cells (2 rows x 2 columns) are copied and the range is set to 1 row x 2 columns, Grid pastes the data in full, expanding the range to 2 rows, if rows are available.

- **If the range is larger than the copied elements**: the copied elements repeat cyclically to fill the entire range. For example, if 2 cells ("A1", "A2") are copied and the range contains 4 cells (2 rows x 2 columns), the result is "A1", "A2", "A1", "A2".

Elements repeat in the order they were copied, starting from the first cell.

### Copying/pasting cells depending on the column type

The sections below describe how copying and pasting depend on the column type.

#### Columns with type "date"

When copying cells with the column type `type: "date"`, Grid copies the *formatted* value to the clipboard (not the original string or date object). For example, if the data contains `"2025-04-11"` and the display format is set to `"dd/mm/yyyy"`, the copied value is `"11/04/2025"`. This behavior simplifies working with dates in tables and other applications.

When pasting, Grid validates values after applying [`pasteModifier`](#using-formatter-functions) (if defined). Grid checks the value for compliance with the column's `dateFormat` (for example, `"dd/mm/yyyy"`) or whether it can be parsed as a valid `Date` object (for example, `"2025-04-11"` or `"April 11, 2025"`). If the value is valid, Grid converts it to the expected format and inserts it. If invalid (for example, `"abc"` or `"31 12 2025"`), Grid ignores the paste operation, and the cell's current value remains unchanged.

#### Columns with type "number"

When copying cells with the column type `type: "number"`, Grid copies the values to the clipboard as numbers, even if `numberMask` or `patternMask` is applied. For example, if a cell displays `"1,234.56"` due to a mask, the copied value is `1234.56`. This maintains data purity and compatibility with other systems, such as spreadsheets or data processing software.

When pasting, Grid validates values after applying [`pasteModifier`](#using-formatter-functions) (if defined). The value must be a valid number (for example, `1234.56` or `"1,234.56"` after cleaning). If the value is not a number (for example, `"abc"`), Grid ignores the paste operation, and the cell's current value remains unchanged.

#### Columns with type "string"

If `patternMask` is applied to a cell (for example, for formatting phone numbers or currency), Grid copies the *formatted* value to the clipboard. 
For example, if the data contains `"1234567890"` and the mask is `"+# (###) ###-##-##"`, the copied value is `"+1 (234) 567-89-0"`. This preserves readability for the user.

#### Templates

Grid does not include templates applied to cell values (for example, with the `template` property) in the copied data. This prevents unwanted HTML or formatted text from entering the clipboard, which could disrupt the functionality of external widgets or tables (for example, Google Spreadsheets). Only the "raw" value from the data is copied.

#### Columns with editors "combobox", "multiselect", "select"

If a column has `editorType: "combobox"`, `"multiselect"`, or `"select"`, Grid copies the value stored in the data (typically an `id` or a key) to the clipboard, not the displayed portion (for example, the option text). 

For example, if the data contains `{ id: "1", value: "Option 1" }` and the cell displays `"Option 1"`, the copied value is `"1"`. This ensures data consistency when transferring between systems.

## Using formatter functions

If you need a specific data format during copying or pasting, you can modify the default behavior with the formatter functions: `copyModifier`, `cutModifier`, `pasteModifier`. Check the example below:

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
    clipboard: {
        // adds a suffix based on the operation
        copyModifier: (value, cell, cut) => `${value}${cut ? "-cut" : "-copied"}`, 
        cutModifier: (value, cell) => `${value}-removed`, // before cutting a value
        pasteModifier: (value, cell) => value.replace("-copied", "") // removes the suffix on pasting
    }
});
~~~

**Related sample**: [Grid. Clipboard between two Grids with modifiers](https://snippet.dhtmlx.com/h3hxcpog)

These functions give you flexible control over how Grid processes data before copying, cutting, or pasting, which is particularly useful in the scenarios described below.

### Why formatters are needed

- **Format control**: if the default behavior (for example, copying numbers without a mask or `id` instead of text in a `combobox`) does not meet the requirements, formatters allow data to be transformed into the desired form.
- **Compatibility**: formatters help adapt data for specific external systems (for example, preserving number masks or converting dates to a different format).
- **Customization**: you can add additional information (for example, units of measurement) or remove unnecessary elements from the data.
- **Preprocessing before validation**: `pasteModifier` can preprocess data before it undergoes validation for `date`, `number`, or `boolean` types, ensuring compatibility with the grid's strict typing.

### How to use formatters

- **`copyModifier`**
    - Applied before copying or cutting data to the clipboard. Allows you to override what goes into the clipboard.
    - Example: To copy the displayed text instead of the `id` for a `combobox`, you can use the cell object (`cell`) to retrieve the desired value.
- **`cutModifier`**
    - Applied before cutting to modify the data that goes into the clipboard and leave the original cells in a desired state (for example, not fully clearing them).
    - Example: You can add a suffix to the cut value to indicate its origin.
- **`pasteModifier`**
    - Applied before pasting data from the clipboard into cells. Allows you to transform the incoming data into a format suitable for the grid, before validation for the `date`, `number`, or `boolean` types.
    - Example: If the clipboard contains a formatted date (`"11/04/2025"`) but the data requires `"2025-04-11"`, `pasteModifier` can perform this conversion.

### Examples

**Copying numbers with a mask**

This example demonstrates how to copy numbers while preserving the mask (for example, `"1,234.56"` instead of `1234.56`).

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

**Copying the displayed text of the Combobox option**

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

**Pasting dates with validation**

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

**Removing `patternMask` during copying**

This example shows how to remove mask formatting (for example, copy `"1234567890"` instead of `"+1 (234) 567-89-0"`).

~~~jsx
copyModifier: (value, cell, cut) => {
    if (cell.column.patternMask) {
        return value.replace(/[^0-9]/g, ""); // remove all non-numeric characters
    }
    return value;
}
~~~

**Related sample**: [Grid. Clipboard. Custom copy/cut/paste for number and date columns](https://snippet.dhtmlx.com/dfj49xah)

