---
sidebar_label: headerRowHeight
title: JavaScript Grid - headerRowHeight Config 
description: You can explore the headerRowHeight config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# headerRowHeight

@short: Optional. Sets the height of rows in the header

@signature: {'headerRowHeight?: number;'}

@default: 40

@example:
const grid = new dhx.Grid("grid_container", {
	columns: [
		// columns config
	],
	headerRowHeight: 50
});

@descr:

**Related sample**: [Grid. Header, footer and rows height](https://snippet.dhtmlx.com/wjcjl80i)

The height of the header is calculated as a sum of all row heights in it.

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#headerfooter-height)
