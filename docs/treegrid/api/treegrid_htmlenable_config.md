---
sidebar_label: htmlEnable
title: htmlEnable
---          

@short: specifies the HTML content (inner HTML) of TreeGrid columns

@signature: {'htmlEnable?: boolean;'}

@example: 
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    data: dataset,
    htmlEnable: true /*!*/
});

@template:	api_config
@descr: 

If you set the property to *false*, the content of TreeGrid columns will be displayed as a *string* value.

**Related sample**: [TreeGrid. Html In Data](https://snippet.dhtmlx.com/iubccmoi)

@related: treegrid/configuration.md#htmlcontentoftreegridcolumns
treegrid/initialization.md#initializetreegrid

@changelog: added in v6.3