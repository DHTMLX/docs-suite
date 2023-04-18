---
sidebar_label: afterEditStart
title: JavaScript Grid - afterEditStart Event 
description: You can explore the afterEditStart event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterEditStart

@short: fires after editing of a cell has started

@signature: {'afterEditStart: (row: object, col: object, editorType: "input" | "select" | "datePicker" | "checkbox" | "combobox" | "textarea" | "multiselect") => void;'}

@params:
- `row: object` - an object with a row configuration
- `col: object` - an object with a column configuration
- `editorType: string` - the type of a cell editor: "input", "select", "datePicker", "checkbox", "combobox", "textarea", "multiselect"

@example:
grid.events.on("afterEditStart", function(row,col, editorType){
	// your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v6.1
