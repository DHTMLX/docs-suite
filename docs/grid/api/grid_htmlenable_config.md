---
sidebar_label: htmlEnable
title: htmlEnable
---          

@short: specifies the HTML content (inner HTML) of Grid columns

@signature: htmlEnable?: boolean;

@example: 
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    data: dataset,
    htmlEnable: true /*!*/
});

@template:	api_config
@descr: 

If you set the property to *false*, the content of Grid columns will be displayed as a *string* value.

@relatedsample: https://snippet.dhtmlx.com/chitkvkc	Grid. Html In Data

@related: grid/initialization.md#initializegrid
grid/configuration.md#htmlcontentofgridcolumns

@changelog: added in v6.3