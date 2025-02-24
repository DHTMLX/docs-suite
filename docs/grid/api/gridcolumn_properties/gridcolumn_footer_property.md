---
sidebar_label: footer
title: JavaScript Grid column - footer Config 
description: You can explore the footer config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# footer

@short: Optional. An array of objects with footer rows configuration

### Usage

~~~jsx
footer?: [
    {
        text?: string | ((content: {
            [key: string]: string | number | null
        }) => string),
        tooltip?: boolean | object, // true by default
        tooltipTemplate?: (
            content: { value: string } & { [key: string]: string | number | null },
            header: IHeader,
            column: ICol
        ) => string | boolean,
        align?: "left" | "center" | "right", // "left" by default
        colspan?: number,
        rowspan?: number,
        css?: string,
        htmlEnable?: boolean, // false by default
    },
];
~~~

### Parameters

Each footer object may include:

<table>
    <tbody>
        <tr>
            <td><a href="../../../configuration/#headerfooter-text"><b>text</b></a></td><td>(optional) the text of a footer or a callback function which is called with the following parameter:<ul><li><b>content</b> - an object with the content of the footer tooltip that contains the calculated values as *key:value* pairs, where:<ul><li>the *key* is either the key defined in the list or the functor name</li><li>the *value* can be a *string/number* or *null*</li></ul> The calculated values are taken either from the <b>summary</b> config option of the component or the <b>summary</b> config option of a column</li></ul></td>
        </tr>
        <tr>
            <td><b>tooltip</b></td><td>(optional) enables/disables the footer tooltip, or sets the configuration object with the tooltip settings; <i>true</i> by default. When set as an object, the <b>tooltip</b> config can have the following properties:<ul><li><b>force</b> - (optional) forces opening of a tooltip; if set to true, the <b>showDelay</b> and <b>hideDelay</b> settings are ignored, *false* by default</li><li><b>showDelay</b> - (optional) the time period that should pass before showing a tooltip, in ms</li><li><b>hideDelay</b> - (optional) the time period that should pass before hiding a tooltip, in ms</li><li><b>margin</b> - (optional) the margin between the node and tooltip; *8px* by default</li><li><b>position</b> - (optional) the position of a tooltip: *"right"*, *"bottom"*, *"center"*, *"left"*, *"top"*; *"bottom"* by default</li><li><b>css</b> - (optional) the style of a tooltip box</li></ul></td>
        </tr>
        <tr>
            <td><a href="../../../configuration/#column-headerfooter-tooltip"><b>tooltipTemplate</b></a></td><td>(optional) sets a template for the footer tooltip. Takes into account the <a href="../../../configuration/#html-content-of-grid-columns">htmlEnable</a> property. The value of the <b>tooltipTemplate</b> property is a callback function which is called with the following parameters:<ul><li><b>content</b> - an object with the content of the footer tooltip. Contains two properties which are available either from the component's or from the column's configuration:<ul><li><b>value</b> - the value rendered in a cell, including the applied templates</li><li>an object with the calculated values of the <b>summary</b> property, set as *key:value* pairs where:<ul><li>the *key* is either the key defined in the list or the functor name</li><li>the *value* can be a *string/number* or *null*</li></ul></li></ul></li><li><b>footer</b> - the object of the column footer</li><li><b>column</b> - the object of a column</li></ul>Return <i>false</i> to disable the tooltip</td>
        </tr>
        <tr>
            <td><b>align</b></td><td>(optional) aligns data in the footer: "left" | "center" | "right", <i>"left"</i> by default</td>
        </tr>
        <tr>
            <td><b>colspan</b></td><td>(optional) the number of columns in a colspan</td>
        </tr>
        <tr>
            <td><b>rowspan</b></td><td>(optional) the number of rows in a rowspan </td>
        </tr>
        <tr>
            <td><b>css</b></td><td>(optional) styling to be applied to a footer</td>
        </tr>
        <tr>
            <td><b>htmlEnable</b></td><td>(optional) <i>false</i> by default. If set to <i>true</i>, specifies the HTML content (inner HTML) of a footer. If set to <i>false</i>, the content of the footer cells will be displayed as a <i>string</i> value</td>
        </tr>
    </tbody>
</table>

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { 
            width: 150, 
            id: "population", 
            header: [{ text: () => `<mark>Population</mark>`, htmlEnable: true }],
            footer: [{ text: ({ totalPopulation, count }) => `Total: ${totalPopulation}, Count: ${count}` }],
            summary: "count"
        }
    ],
    summary: { totalPopulation: ["population", "sum"] },
    data: dataset
});
~~~

**Related article**: [Configuration](grid/configuration.md)

**Related sample**: [Grid. Grid with footer](https://snippet.dhtmlx.com/9jl55ep7)