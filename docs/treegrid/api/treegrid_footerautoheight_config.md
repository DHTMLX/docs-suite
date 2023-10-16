---
sidebar_label: footerAutoHeight
title: JavaScript TreeGrid - footerAutoHeight Config 
description: You can explore the footerAutoHeight config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# footerAutoHeight

@short: Optional. Allows adjusting the height of the footer for the content to fit in

@signature: footerAutoHeight?: boolean;

@default: false

@example:
const treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [
		// columns config
	],
	data: dataset,
    autoHeight: false, // disable autoHeight in data, header, footer
    footerAutoHeight: true // enable autoHeight in the footer
});

@descr: 

**Related sample**: [TreeGrid. Header/Footer autoHeight mode](https://snippet.dhtmlx.com/7kgj0b4e)

Redefines the <b>autoHeight</b> config for the footer.

@changelog: added in v8.3


