---
sidebar_label: htmlEnable
title: htmlEnable
---          

@short: specifies the HTML content (inner HTML) of Grid columns

@signature: {'htmlEnable?: boolean;'}

@example:
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    data: dataset,
    htmlEnable: true /*!*/
});

@descr: 

If you set the property to *false*, the content of Grid columns will be displayed as a *string* value.

**Related sample**: [Grid. Html In Data](https://snippet.dhtmlx.com/chitkvkc)

@changelog: added in v6.3

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#html-content-of-grid-columns)
