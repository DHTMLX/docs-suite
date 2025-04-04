---
sidebar_label: htmlEnable
title: JavaScript Grid - htmlEnable Config 
description: You can explore the htmlEnable config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# htmlEnable

@short: Optional. Allows using and displaying HTML content in Grid columns

@signature: {'htmlEnable?: boolean;'}

@default: false

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    data: dataset,
    htmlEnable: true
});

@descr:

When the property is set to *false*, the content of Grid columns is displayed as string values.

**Related sample**: [Grid. Html in data](https://snippet.dhtmlx.com/chitkvkc)

@changelog: added in v6.3

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#html-content-of-grid-columns)
