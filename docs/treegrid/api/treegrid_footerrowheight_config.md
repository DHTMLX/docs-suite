---
sidebar_label: footerRowHeight
title: JavaScript TreeGrid - footerRowHeight Config 
description: You can explore the footerRowHeight config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# footerRowHeight

@short: sets the height of rows in the footer

@signature: {'footerRowHeight?: number;'}

@default: 40

@example:
var grid = new dhx.Grid("grid_container", {
	columns: [
		// columns config
	],
	footerRowHeight: 50
});

@descr:

The height of the footer is calculated as a sum of all row heights in it.

[comment]: # (@related: treegrid/configuration.md#headerfooter-height treegrid/initialization.md#initialize-treegrid)
