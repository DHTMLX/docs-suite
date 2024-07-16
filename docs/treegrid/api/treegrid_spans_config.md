---
sidebar_label: spans
title: JavaScript TreeGrid - spans Config 
description: You can explore the spans config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# spans

@short: Optional. Describes the configuration of cols/rows spans

@signature: {'spans?: object[];'}

@example:
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    spans: [
        {row:"0", column:"a", rowspan:5 },
        {row:"0", column:"b", rowspan:9, text:"<h2>Some content here</h2>"},
        {row:"0", column:"c", colspan:2, text:"Some content"},
        {row:"10", column:"a", colspan:4, text:"Some header", css:"myCustomColspan"}
    ],
    data: dataset
});

@descr:

**Related sample**: [TreeGrid. Span cells](https://snippet.dhtmlx.com/o62liqew)

Each object in the spans array contains the following properties:

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
        <tr>
            <td><a href="../../configuration#tooltip"><b>tooltip</b></a></td>
            <td>(<i>boolean</i>) enables a tooltip on hovering over the content of a span, or sets the configuration object with the tooltip settings; <i>true</i> by default. When set as an object, the `tooltip` config can have the following properties:<ul><li>`force` - (optional) forces opening of a tooltip; if set to true, the `showDelay` and `hideDelay` settings are ignored, *false* by default</li><li>`showDelay` - (optional) the time period that should pass before showing a tooltip, in ms</li><li>`hideDelay` - (optional) the time period that should pass before hiding a tooltip, in ms</li><li>`margin` - (optional) the margin between the node and tooltip; *8px* by default</li><li>`position` - (optional) the position of a tooltip: *"right"*, *"bottom"*, *"center"*, *"left"*, *"top"*; *"bottom"* by default</li><li>`css` - (optional) the style of a tooltip box</li></ul></td>
        </tr>
    </tbody>
</table>

@changelog:
- The ability to set the `tooltip` config as an object is added in v8.4
- The **tooltip** property is added in v6.5.

[comment]: # (@related: treegrid/configuration.md#spans treegrid/initialization.md#initialize-treegrid)
