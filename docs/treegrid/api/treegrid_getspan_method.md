---
sidebar_label: getSpan()
title: JavaScript TreeGrid - getSpan Method 
description: You can explore the getSpan method of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getSpan()

@short: returns an object with spans

@signature: {'getSpan(rowId: string | number, colId: string | number): object;'}

@params:
- `rowId: string | number` - the id of a row
- `colId: string | number` - the id of a column

@returns:
An object with configuration of a span.

@example:
const span = treegrid.getSpan("10", "a"); 
// -> { row:"10", column:"a", colspan:4, text:"Some header", css:"myCustomColspan" }

@descr:

A returned **span** object contains the following properties:

<table>
    <tbody>
        <tr>
            <td><b>row</b></td>
            <td>(<i>string|number</i>) mandatory, the id of a row</td>
        </tr>
        <tr>
            <td><b>column</b></td>
            <td>(<i>string|number</i>) mandatory, the id of a column</td>
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
            <td>(<i>string|number</i>) optional, the text in a spanned row/column</td>
        </tr>
        <tr>
            <td><b>css</b></td>
            <td>(<i>string</i>) optional, the name of the CSS class that will be applied to a span</td>
        </tr>
    </tbody>
</table>

[comment]: # (@relatedapi: grid/api/grid_spans_config.md grid/api/grid_addspan_method.md grid/api/grid_removespan_method.md)

[comment]: # (@related: treegrid/usage.md#addingremoving-spans)
