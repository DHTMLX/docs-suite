---
sidebar_label: editCell
title: editCell
---          

@short: enables editing of a Grid cell

@signature: {'editCell(rowId: string | number, colId: string | number, editorType?: "input" | "select" | "datePicker" | "checkbox" | "combobox" | "textarea"): void;'}

@params:
- row 		string				the id of a row
- col 		string 				the id of a column
- editorType    string          optional, the type of an editor used in a cell: "input" | "select" | "datepicker" | "checkbox" | "combobox" | "textarea"

@example:
grid.editCell(grid.data.getId(0),"project");

@descr:

**Related sample**: [Grid. Editing Data](https://snippet.dhtmlx.com/pqbax5vs)

@changelog:

- Added in v6.4
- The "textarea" type of the editor is added in v7.1.

@related: grid/usage.md#editing-data

@relatedapi: grid/api/grid_editend_method.md