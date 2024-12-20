---
sidebar_label: options
title: JavaScript Grid column - options Config 
description: You can explore the options config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# options

@short: Optional. Specifies a set of options to be displayed in the editor of a cell

:::note
The property is required if you specify the [editorType: "select" | "combobox" | "multiselect"](grid/configuration.md#types-of-column-editor). 
:::

:::info
If the `newOptions` property is enabled in the `editorConfig` object, all new options will be displayed in the editor regardless of the initialized options.
:::

## Usage

~~~jsx
options?: (string | { id: string | number, value: string })[] |
	(column: object, row?: object) => (string | { id: string | number, value: string })[],
~~~

## Parameters

The property can be:

- an array of string values
- an array of objects with a set of *key:value* pairs - attributes of options and their values:
	- The **id** attribute sets the id for the option
	- The **value** attribute sets the value to be displayed both in the editor and in the grid cell. If the id of the option is specified in the data set, the value will also be displayed in the cell on Grid initialization
- a function which takes two parameters:
	- **column** - (required) an object with the configuration of a column
	- **row** - (optional) an object with all cells in a row
and must return either an array of string values or an array of objects

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            width: 150, id: "status", header: [{text: "Status"}, {content: "selectFilter"}],
            editorType: "select", options: ["Done", "In Progress", "Not Started"]
        },
        // more columns
    ],
    data: dataset
}); 

@descr:

**Related article**: [Editing Grid and separate columns](grid/configuration.md#editing-grid-and-separate-columns)

**Related samples**:
- [Grid. Editing with different editors (combobox, select, multiselect, boolean, date)](https://snippet.dhtmlx.com/w2cdossn)
- [Grid. Individual option lists for select, multiselect and combobox editors](https://snippet.dhtmlx.com/i22fg83z)
