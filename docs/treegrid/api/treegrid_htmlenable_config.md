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


@descr: 

**Related sample**: [TreeGrid. Html In Data](https://snippet.dhtmlx.com/iubccmoi)

If you set the property to *false*, the content of TreeGrid columns will be displayed as a *string* value.

@changelog: added in v6.3

@related: treegrid/configuration.md#html-content-of-treegrid-columns
treegrid/initialization.md#initialize-treegrid
