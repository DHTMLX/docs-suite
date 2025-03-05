---
sidebar_label: autoHeight
title: JavaScript Grid - autoHeight Config 
description: You can explore the autoHeight config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# autoHeight

:::tip Pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: Optional. Makes long text split into multiple lines based on the width of the column, controls the automatic height adjustment of the header/footer and cells with data

@signature: {'autoHeight?: boolean;'}

@default: false

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    autoHeight: true,
    data: dataset
});

@descr: 

**Related sample**: [Grid. Rows auto height](https://snippet.dhtmlx.com/zkcsyazg)

You can control the autoheight of the header/footer separately with the help of the [](grid/api/grid_headerautoheight_config.md) and [](grid/api/grid_footerautoheight_config.md) configuration options of Grid. For example, you can disable autoheight of the header and the footer, while it is enabled for the whole Grid:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    data: dataset,
    autoHeight: true, // enable autoHeight in the data (content)
    headerAutoHeight: false, // disable autoHeight in the header
    footerAutoHeight: false, // disable autoHeight in the footer
});
~~~

#### Take into account the information below:  

- to optimize performance, you should specify `htmlEnable: true` in the configuration object of the column which contains HTML content
- you can also specify `htmlEnable:true` in the configuration object of Grid
- `htmlEnable: true` allows calculating the content of simple HTML templates by excluding HTML markup and calculating internal content
- in case of complex HTML data, usage of the `autoHeight` config may lead to incorrect size calculations
- note that if you decide to change the font type, its size and offsets, correct calculation of the cell's autoHeight can't be ensured

@changelog: added in v7.1

[comment]: # (@relatedapi: grid/api/grid_data_config.md)

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#autoheight-for-rows)
