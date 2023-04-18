---
sidebar_label: addSpan()
title: JavaScript Grid - addSpan Method
description: You can explore the addSpan method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# addSpan()

@short: adds a rows/cols span

@signature: addSpan(spanObj: object): void;

@params:
- `spanObj: object` - an object with configuration of a span. The object contains the following properties:
	- `row: string | number` - mandatory, the id of a row
	- `column: string | number` - mandatory, the id of a column
	- `rowspan: number` - optional, the number of rows in a span
	- `colspan: number` - optional, the number of columns in a span
	- `text: string | number` - optional, the text in a spanned row/column
	- `css: string | number` - optional, the name of the CSS class that will be applied to a span
	
@example:
grid.addSpan({ 
    row: "0", 
    column: "a", 
    rowspan: 5 
});
// grid.paint();

@descr:

[comment]: # (@relatedapi: grid/api/grid_spans_config.md grid/api/grid_getspan_method.md grid/api/grid_removespan_method.md)

[comment]: # (@related: grid/usage.md#addingremoving-spans)
