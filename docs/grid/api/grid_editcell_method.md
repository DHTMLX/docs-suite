---
sidebar_label: editCell
title: editCell
---          

@short: enables editing of a Grid cell

@signature: editCell(rowId: string | number, colId: string | number, editorType?: "input" | "select" | "datePicker" | "checkbox" | "combobox" | "textarea"): void;

@params:
- row 		string				the id of a row
- col 		string 				the id of a column
- editorType    string          optional, the type of an editor used in a cell: "input" | "select" | "datepicker" | "checkbox" | "combobox" | "textarea"

@example:
grid.editCell(grid.data.getId(0),"project");

@rrelated: grid/usage.md#editingdata


@changelog: added in v6.4

@related: grid/usage.md#editingdata

@relatedsample:
https://snippet.dhtmlx.com/pqbax5vs	Grid. Editing Data

@relatedapi: grid/api/grid_editend_method.md
