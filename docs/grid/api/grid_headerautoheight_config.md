---
sidebar_label: headerAutoHeight
title: JavaScript Grid - headerAutoHeight Config 
description: You can explore the headerAutoHeight config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# headerAutoHeight

{{pronote This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.}}

@short: Optional. Allows adjusting the height of the header for the content to fit in

@signature: headerAutoHeight?: boolean;

@default: false

@example:
const grid = new dhx.Grid("grid", {
    columns: [
    	// columns config
    ],
    data: dataset,
    autoHeight: false, // disable autoHeight in data, header, footer
    headerAutoHeight: true // enable autoHeight in the header
});

@descr: Redefines the <b>autoHeight</b> config for the header.

**Related sample**: 


@changelog: added in v8.3
