---
sidebar_label: resizable
title: JavaScript Grid column - resizable Config 
description: You can explore the resizable config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# resizable

@short: Optional. Defines whether a column can be resized

## Usage

~~~jsx
resizable?: boolean,
~~~

@default: false

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
    	{ id: "country", header: [{ text: "Country" }] },
        { id: "population", header: [{ text: "Population" }], resizable: false }
    ],
    data: dataset,
    resizable: true 
});

@descr:

**Related article**: [Resizable columns](grid/configuration.md#resizable-columns)