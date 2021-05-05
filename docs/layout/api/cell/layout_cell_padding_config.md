---
sidebar_label: padding
title: padding
---          

@short: defines the distance between a cell and the border of layout

@signature: {'padding?: number | string;'}

@example: 
var layout = new dhx.Layout("layout_container",{
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

@related: layout/init.md#initialize-layout

**Related sample**: [Layout. Padding](https://snippet.dhtmlx.com/tk6tpwwv)
