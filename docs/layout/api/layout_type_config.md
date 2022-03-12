---
sidebar_label: type
title: JavaScript Layout - type Config 
description: You can explore the type config of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# type

@short: defines the type of borders between cells inside a layout

@signature: {'type?: "line" | "wide" | "space" | "none";'}

@example:
const layout = new dhx.Layout("layout", {
    type: "space", // "line" | "wide" | "space" | "none"
    cols: [
        {
            html: "1"
        },
        {
            html: "2"
        },
        {
            html: "3"
        }
    ]
});

@descr:

**Related sample**: [Layout. Types in a complex layout](https://snippet.dhtmlx.com/w00fgl57)

<table>
	<tbody>
        <tr>
			<td><b>"line"</b></td>
			<td>adds a border to a cell</td>
		</tr>
        <tr>
			<td><b>"space"</b></td>
			<td>adds a border and space around a cell</td>
		</tr>
        <tr>
			<td><b>"wide"</b></td>
			<td>adds a border to a cell and space between the neighboring cells</td>
		</tr>
        <tr>
			<td><b>"none"</b></td>
			<td>removes visible borders and space between cells</td>
		</tr>
    </tbody>
</table>

{{note Note, that if the children cell has no specified type of borders, the cell has the same type of borders as its parent cell. }}

@changelog: added in v7.0

[comment]: # (@related: layout/cell_configuration.md#setting-borders-for-cells)
