---
sidebar_label: beforeEditStart
title: JavaScript Grid - beforeEditStart Event 
description: You can explore the beforeEditStart event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeEditStart

@short: fires before editing of a cell has started

@signature: {'beforeEditStart: (row: IRow, col: ICol, editorType: EditorType) => boolean | void;'}

@params:
- `row: object` - an object with a row configuration
- `col: object` - an object with a column configuration
- `editorType: string` - the type of a cell editor: "input", "select", "datePicker", "checkbox", "combobox", "textarea", "multiselect"

@returns:
Return `false` to block editing of a cell; otherwise, `true`.

@example:
grid.events.on("BeforeEditStart", function(row,col,editorType){
	// your logic here
    return false;
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v6.1
