---
sidebar_label: autoHeight
title: JavaScript Grid - autoHeight Config 
description: You can explore the autoHeight config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# autoHeight

{{pronote This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.}}

@short: Optional. Makes long text split into multiple lines based on the width of the column, controls the automatic height adjustment for the header/footer

@signature: autoHeight?: boolean;

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

Note that the **autoHeight** option does not adjust the height of the cells in the header/footer of Grid. The option just makes their text split into multiple lines, but the height of the cells will remain the same.

To set the height of the rows in the header/footer, you should apply the [](grid/api/grid_headerrowheight_config.md) and [](grid/api/grid_footerrowheight_config.md) configuration options of Grid. 

To enable autoheight in the header/footer, use the [](grid/api/grid_headerautoheight_config.md) and [](grid/api/grid_footerautoheight_config.md) configuration options of Grid. These properties redefine the **autoHeight** config for the header and the footer, correspondingly:

~~~js
const grid = new dhx.Grid("grid", {
    columns: [
        // columns config
    ],
    data: dataset,
    autoHeight: true, // enable autoHeight in data (content)
    headerAutoHeight: false, // disable autoHeight in header
    footerAutoHeight: false, // disable autoHeigh in footer
});

const grid = new dhx.Grid("grid", {
    columns: [
        // columns config
    ],
    data: dataset,
    autoHeight: false, // disable autoHeight in data, header, footer
    headerAutoHeight: true, // enable autoHeight in header
});
~~~

**Note** that:  

- to optimize performance, you should specify `htmlEnable: true` in the configuration object of the column which contains HTML content
- you can also specify `htmlEnable:true` in the configuration object of Grid
- `htmlEnable: true` allows calculating the content of simple HTML templates by excluding HTML markup and calculating internal content
- in case of complex HTML data, usage of the **autoHeight** config may lead to incorrect size calculations
- the enabled **autoHeight** config adjusts the height of the cells taking into account the [template](grid/api/api_gridcolumn_properties.md) added to cells

@changelog: added in v7.1

[comment]: # (@relatedapi: grid/api/grid_data_config.md)

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#autoheight-for-rows)
