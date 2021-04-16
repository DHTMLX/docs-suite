---
sidebar_label: sortable
title: sortable
---          

@short: defines whether sorting on clicking headers of columns is enabled

@signature: sortable?: boolean;

@default: true

@example: 
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    sortable:false, /*!*/  
    data: dataset
});


@template:	api_config
@descr: 

@changelog: added in v6.4

@related: treegrid/configuration.md#sortingcolumns

@relatedsample: https://snippet.dhtmlx.com/r4xfph82	TreeGrid. Sortable Columns