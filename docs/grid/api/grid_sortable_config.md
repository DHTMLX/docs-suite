---
sidebar_label: sortable
title: sortable
---          

@short: defines whether sorting on clicking headers of columns is enabled

@signature: {'sortable?: boolean;'}

@default: true

@example: 
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    sortable:false, /*!*/  
    data: dataset
});


@template:	api_config
@descr: 

@changelog: added in v6.4

@related: grid/initialization.md#initialize-grid
grid/configuration.md#sortingcolumns

**Related sample**: [Grid. Sortable Columns](https://snippet.dhtmlx.com/r3prvlmo)
