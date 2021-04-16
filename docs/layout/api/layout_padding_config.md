---
sidebar_label: padding
title: padding
---          

@short: defines the distance between a cell and the border of layout

@signature: padding?: number | string;

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


@template:	api_config
@descr: 

@related: layout/init.md#initializelayout

@relatedsample: https://snippet.dhtmlx.com/tk6tpwwv	Layout. Padding