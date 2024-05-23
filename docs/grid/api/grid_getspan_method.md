---
sidebar_label: getSpan()
title: JavaScript Grid - getSpan Method 
description: You can explore the getSpan method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getSpan()

@short: returns an object with spans

@signature: {'getSpan(rowId: string | number, colId: string | number): object;'}

@params:
- `rowId: string | number` - the id of a row
- `colId: string | number` - the id of a column

@returns:
An object with the configuration of a span.

@example:
const span = grid.getSpan("10", "a"); 
// -> { row: "10", column: "a", colspan: 4, text: "Some header", css: "myCustomColspan" }

@descr:

A returned object contains the following properties:

<table>
    <tbody>
        <tr>
            <td><b>row</b></td>
            <td>(<i>string|number</i>) obligatory, the id of a row</td>
        </tr>
        <tr>
            <td><b>column</b></td>
            <td>(<i>string|number</i>) obligatory, the id of a column</td>
        </tr>
        <tr>
            <td><b>rowspan</b></td>
            <td>(<i>number</i>) optional, the number of rows in a span</td>
        </tr>
        <tr>
            <td><b>colspan</b></td>
            <td>(<i>number</i>) optional, the number of columns in a span</td>
        </tr>
        <tr>
            <td><b>text</b></td>
            <td>(<i>string|number</i>) optional, the content of a span</td>
        </tr>
        <tr>
            <td><b>css</b></td>
            <td>(<i>string</i>) optional, the name of a CSS class applied to a span</td>
        </tr>
    </tbody>
</table>

[comment]: # (@relatedapi: grid/api/grid_spans_config.md grid/api/grid_addspan_method.md grid/api/grid_removespan_method.md)

[comment]: # (@related: grid/usage.md#addingremoving-spans)
