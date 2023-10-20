---
sidebar_label: autoHeight
title: JavaScript TreeGrid - autoHeight Config 
description: You can explore the autoHeight config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# autoHeight

@short: Optional. Makes long text split into multiple lines based on the width of the column, controls the automatic height adjustment for the header/footer and cells with data

@signature: autoHeight?: boolean;

@default: false

@example:
const treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [
		// columns config
	],
	autoHeight: true,
	data: dataset
});

@descr:

**Related sample**: [TreeGrid. Rows auto height](https://snippet.dhtmlx.com/4158ftak)

You can control the autoheight of the header/footer separately with the help of the [](treegrid/api/treegrid_headerautoheight_config.md) and [](treegrid/api/treegrid_footerautoheight_config.md) configuration options of TreeGrid. For example, you can disable autoheight of the header and the footer, while it is enabled for the whole TreeGrid:

~~~js
const treegrid = new dhx.TreeGrid("treegrid", {
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
- you can also specify `htmlEnable:true` in the configuration object of TreeGrid
- `htmlEnable: true` allows calculating the content of simple HTML templates by excluding HTML markup and calculating internal content
- in case of complex HTML data, usage of the **autoHeight** config may lead to incorrect size calculations

@changelog: added in v7.1

[comment]: # (@related: treegrid/configuration.md#autoheight-for-rows)

[comment]: # (@relatedapi: treegrid/api/treegrid_data_config.md)
