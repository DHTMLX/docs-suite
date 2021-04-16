---
sidebar_label: editCell
title: editCell
---          

@short: enables editing of a TreeGrid cell

@signature: editCell(rowId: string | number, colId: string | number, editorType?: "input" | "select" | "datePicker" | "checkbox" | "combobox" | "textarea"): void;

@params:
- rowId 		string | number				the id of a row
- colId 		string | number 			the id of a column

@example:
grid.editCell(grid.data.getId(0),"project");

@template: api_method
@descr:

@changelog:
added in v6.4

@relatedsample:
https://snippet.dhtmlx.com/zm6wh1ss	TreeGrid. Editing data

@related: treegrid/usage.md#editingdata
