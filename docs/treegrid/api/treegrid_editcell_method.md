---
sidebar_label: editCell()
title: JavaScript TreeGrid - editCell Method 
description: You can explore the editCell method of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# editCell()

@short: enables editing of a TreeGrid cell

@signature: {'editCell(rowId: Id, colId: Id, editorType?: "input" | "select" | "datePicker" | "checkbox" | "combobox" | "textarea"): void;'}

@params:
- `rowId: string | number` - the id of a row
- `colId: string | number` - the id of a column
- `editorType: string` - optional, the type of an editor used in a cell: "input", "select", "datePicker", "checkbox", "combobox", "textarea"

@example:
grid.editCell(grid.data.getId(0),"project");

@descr:

**Related sample**: [TreeGrid. Editing data](https://snippet.dhtmlx.com/zm6wh1ss)

@changelog:
- added in v6.4
- The "textarea" type of the editor is added in v7.1

[comment]: # (@related: treegrid/usage.md#editing-data)