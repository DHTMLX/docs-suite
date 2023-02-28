---
sidebar_label: gravity
title: JavaScript Layout - gravity Config 
description: You can explore the gravity config of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# gravity

@short: Optional. Sets the "weight" of a cell in relation to other cells placed in the same row and within one parent

@signature: {'gravity?: number | boolean;'}

@example:
const layout = dhx.Layout("layout_container", {
	css: "dhx_widget--bordered",
	rows: [
		{
			id: "1",
			cols: [
				{
					id: "1.1",
					css: "dhx_layout-cell--border_left dhx_layout-cell--border_right",
					html: "1.1",
                    gravity: 2
				},
				{
					id: "1.2",
					css: "dhx_layout-cell--border_left dhx_layout-cell--border_right",
					html: "1.2",
                    gravity: 1 
				},
				{
					id: "1.3",
					css: "dhx_layout-cell--border_left dhx_layout-cell--border_right",
					html: "1.3",
                    gravity: 3
				}
			]
		}
    ]
});

@descr:

**Related sample**: [Layout. Gravity](https://snippet.dhtmlx.com/1u521djj)

{{note You can use the **gravity** property only when a cell has no specified sizes - width and height, otherwise - the property does not work.}}

If you specify the property for a cell, its size will be adjusted regarding the sizes of the cells that are in the same row, within the same parent and have **gravity** in their configuration.  

The negative number set as a value to the **gravity** property is equated to zero.  

@changelog:
The property is updated in v7.0. For more information, see [Migration article](migration.md#65---70).

[comment]: # (@related: layout/initialization.md#initialize-layout)
