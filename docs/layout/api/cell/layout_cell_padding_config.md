---
sidebar_label: padding
title: JavaScript Layout - padding Config 
description: You can explore the padding config of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# padding

@short: defines the distance between a cell and the border of layout

@signature: {'padding?: number | string;'}

@example:
const layout = new dhx.Layout("layout_container",{
	padding: 10,
	css: "dhx_layout-cell--bordered",
	cols: [
		{
            padding: 10,
            css: "dhx_layout-cell--bordered",
            html: "First Block"
        },
        {
            padding: 10,
            css: "dhx_layout-cell--bordered",
            html: "Second Block"
        }
    ]
});

@descr:

**Related sample**: [Layout. Padding](https://snippet.dhtmlx.com/tk6tpwwv)

[comment]: # (@related: layout/initialization.md#initialize-layout)
