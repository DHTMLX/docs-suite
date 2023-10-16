---
sidebar_label: footerAutoHeight
title: JavaScript Grid - footerAutoHeight Config 
description: You can explore the footerAutoHeight config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# footerAutoHeight

{{pronote This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.}}

@short: Optional. Allows adjusting the height of the footer for the content to fit in
@signature: footerAutoHeight?: boolean;

@default: false

@example:
const grid = new dhx.Grid("grid", {
    columns: [
    	// columns config
    ],
    data: dataset,
    autoHeight: false, // disable autoHeight in data, header, footer
    footerAutoHeight: true // enable autoHeight in the footer
});

@descr: 

**Related sample**: [Grid. Header/Footer autoHeight mode](https://snippet.dhtmlx.com/jwz9k66d)

Redefines the <b>autoHeight</b> config for the footer.

@changelog: added in v8.3


