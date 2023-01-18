---
sidebar_label: align
title: JavaScript Layout - align Config 
description: You can explore the align config of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# align

@short: Optional. Sets the alignment of content inside a cell

@signature: {'align?: "start" | "center" | "end" | "between" | "around" | "evenly";'}

@example:
const layout = dhx.Layout("layout_container", {
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

[comment]: # (@related: layout/initialization.md#initialize-layout)
