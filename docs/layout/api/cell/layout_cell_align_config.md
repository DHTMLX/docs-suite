---
sidebar_label: align
title: align
---          

@short: sets the alignment of content inside a cell
TODO: api change (добавить в desc "start" | "center" | "end" | "between" | "around" | "evenly")
@signature: {'align?: FlexDirection;'}

@example: 
var layout = dhx.Layout("layout_container", {
   rows: [
        {
            align: "center",
            cols: [
                {
                    css: "dhx_layout-cell--border_left dhx_layout-cell--border_right",
                    gravity: false,
                    html: "Horizontal Align"
                },
                {
                    css: "dhx_layout-cell--border_left dhx_layout-cell--border_right",
                    gravity: false,
                    html: "Horizontal Align"
                },
                {
                    css: "dhx_layout-cell--border_left dhx_layout-cell--border_right",
                    gravity: false,
                    html: "Horizontal Align"
                }
            ]
      	}
	]
});


@template:	api_config
@descr: 

@related: layout/init.md#initialize-layout

**Related sample**: [Layout. Align](https://snippet.dhtmlx.com/4w1033c9)


