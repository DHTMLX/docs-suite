---
sidebar_label: htmlEnable
title: JavaScript TreeGrid - htmlEnable Config 
description: You can explore the htmlEnable config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# htmlEnable

@short: specifies the HTML content (inner HTML) of TreeGrid columns

@signature: {'htmlEnable?: boolean;'}

@example:
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    data: dataset,
    htmlEnable: true
});

@descr:

**Related sample**: [TreeGrid. Html In Data](https://snippet.dhtmlx.com/iubccmoi)

If you set the property to *false*, the content of TreeGrid columns will be displayed as a *string* value.

@changelog: added in v6.3

[comment]: # (@related: treegrid/configuration.md#html-content-of-treegrid-columns treegrid/initialization.md#initialize-treegrid)
