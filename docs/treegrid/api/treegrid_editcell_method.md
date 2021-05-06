---
sidebar_label: editCell
title: editCell
---          

@short: enables editing of a TreeGrid cell
TODO: api change (добавить EditorType в description "input" | "select" | "datePicker" | "checkbox" | "combobox" | "textarea")
@signature: {'editCell(rowId: string | number, colId: string | number, editorType?: EditorType): void;'}

@params:
- rowId 		string | number				the id of a row
- colId 		string | number 			the id of a column
- editorType    string          optional, the type of an editor used in a cell: "input"|"select"|"datePicker"|"checkbox"|"combobox"|"textarea"

@example:
grid.editCell(grid.data.getId(0),"project");


@descr:


**Related sample**:
- [TreeGrid. Editing data](https://snippet.dhtmlx.com/zm6wh1ss)

@related: treegrid/usage.md#editing-data

@changelog:
- added in v6.4
- the "textarea" type of the editor is added in v7.1