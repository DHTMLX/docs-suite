---
sidebar_label: htmlEnable
title: JavaScript Grid column - htmlEnable Config 
description: You can explore the htmlEnable config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# htmlEnable

@short: Optional. Specifies the HTML content (inner HTML) of a column

:::note
If set to *false*, the content of the column cells will be displayed as a *string* value.
:::

## Usage

~~~jsx
htmlEnable?: boolean
~~~

@default: false

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            width: 200, id: "country", header: [{ text: "Country" }],
            htmlEnable: true
        }, 
        // more columns
    ],
    data: dataset
});

@descr:

**Related article**: [HTML content of Grid columns](grid/configuration.md#html-content-of-grid-columns)

**Related sample**: [Grid. HTML in data](https://snippet.dhtmlx.com/chitkvkc)