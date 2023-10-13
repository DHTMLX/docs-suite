---
sidebar_label: headerAutoHeight
title: JavaScript TreeGrid - headerAutoHeight Config 
description: You can explore the headerAutoHeight config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# headerAutoHeight

@short: Optional. Allows adjusting the height of the header for the content to fit in

@signature: headerAutoHeight?: boolean;

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

@descr: Redefines the <b>autoHeight</b> config for the header.

**Related sample**: 


@changelog: added in v8.3
