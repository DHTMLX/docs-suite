---
sidebar_label: footerRowHeight
title: footerRowHeight
---          

@short: sets the height of rows in the footer

@signature: {'footerRowHeight?: number;'}

@default: 40

@example: 
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	footerRowHeight: 50
});



@descr:
 
The height of the footer is calculated as a sum of all row heights in it.

@related: grid/initialization.md#initialize-grid
grid/configuration.md#headerfooter-height
