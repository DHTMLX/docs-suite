---
sidebar_label: htmlEnable
title: JavaScript Grid - htmlEnable Config 
description: You can explore the htmlEnable config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# htmlEnable

@short: specifies the HTML content (inner HTML) of Grid columns

@signature: {'htmlEnable?: boolean;'}

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    data: dataset,
    htmlEnable: true
});

@descr:

If you set the property to *false*, the content of Grid columns will be displayed as a *string* value.

**Related sample**: [Grid. Html in data](https://snippet.dhtmlx.com/chitkvkc)

@changelog: added in v6.3

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#html-content-of-grid-columns)
