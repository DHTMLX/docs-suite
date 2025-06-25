---
sidebar_label: clipboard
title: JavaScript Grid - clipboard Config 
description: You can explore the clipboard config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# clipboard

:::tip Pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: Optional. Enables/disables the Clipboard module during the Grid initialization

:::note
The module requires the [`RangeSelection`](grid/usage_rangeselection.md) module to be enabled and is best used in conjunction with the [`BlockSelection`](grid/usage_blockselection.md) module in the `"range"` mode (enabled on initialization of the `Clipboard` module) for convenient range selection via the UI.
:::

### Usage

~~~jsx
clipboard?:
    | boolean
    | {
        copyModifier?: (value: any, cell: { row: object; column: object }, cut: boolean) => string;
        cutModifier?: (value: any, cell: { row: object; column: object }) => string;
        pasteModifier?: (value: any, cell: { row: object; column: object }) => any;
    };
~~~

@default: false

@example:
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

@descr:
The `clipboard` property can be set in two ways:

- as a *boolean* value it enables or disables the `clipboard` module upon the component initialization
- as an *object* it enables the module and allows defining [modifier functions](grid/usage_clipboard.md/#using-formatter-functions) for data processing. The following properties are available:
    - `copyModifier` - (*function*) modifies data before copying to the clipboard. Accepts as parameters the cell value, the cell object, and the `cut` flag (set to `true`, if it's a cut operation)
    - `cutModifier` - (*function*) modifies the cell data before cutting (before clearing the cell). Accepts as parameters the cell value and the cell object
    - `pasteModifier` - (*function*) modifies data from the clipboard before pasting into a cell. Accepts as parameters the cell value and the cell object

The example below demonstrates the clipboard configuration with all the modifiers in use:

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

**Related sample**: [Grid. Clipboard. Financial data with formatted copy/paste](https://snippet.dhtmlx.com/1fnkhwm0)

**Related articles:** 
- [Clipboard](grid/configuration.md/#clipboard)
- [Work with Clipboard module](grid/usage_clipboard.md)

@changelog: added in v9.2