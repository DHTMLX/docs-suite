---
sidebar_label: align
title: align
---          

@short: sets the alignment of content inside a cell

@signature: {'align?: "start" | "center" | "end" | "between" | "around" | "evenly";'}

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



@descr: 


**Related sample**: [Layout. Align](https://snippet.dhtmlx.com/4w1033c9)

@related: layout/init.md#initialize-layout

