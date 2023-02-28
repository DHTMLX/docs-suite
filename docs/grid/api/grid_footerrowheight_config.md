---
sidebar_label: footerRowHeight
title: JavaScript Grid - footerRowHeight Config 
description: You can explore the footerRowHeight config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# footerRowHeight

@short: Optional. Sets the height of rows in the footer

@signature: {'footerRowHeight?: number;'}

@default: 40

@example:
const grid = new dhx.Grid("grid_container", {
	columns: [
		// columns config
	],
	footerRowHeight: 50
});

@descr:
 
The height of the footer is calculated as a sum of all row heights in it.

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#headerfooter-height)
