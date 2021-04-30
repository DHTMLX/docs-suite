---
sidebar_label: dragItem
title: dragItem
---          

@short: enables the possibility to reorder grid columns by drag and drop

dragItem?: "row" | "column" | "complex";

@example: 
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    dragItem: "column", /*!*/ 
    data: dataset
});


@template:	api_config
@descr: 
{{pronote This functionality requires PRO version of the dhtmlxGrid (or DHTMLX suite) package.}}

**Related sample**: [Setup drag column (Pro)](https://snippet.dhtmlx.com/dfdlzpqb)

@related: 
grid/initialization.md#initializegrid
grid/configuration.md#dragndropofgridcolumns


@changelog: added in v6.5



@relatedapi:
[](grid/api/grid_aftercolumndrag_event.md)
[](grid/api/grid_aftercolumndrop_event.md)
[](grid/api/grid_beforecolumndrag_event.md)
[](grid/api/grid_beforecolumndrop_event.md)
[](grid/api/grid_cancolumndrop_event.md)
[](grid/api/grid_cancelcolumndrop_event.md)
[](grid/api/grid_dragcolumnin_event.md)
[](grid/api/grid_dragcolumnout_event.md)
[](grid/api/grid_dragcolumnstart_event.md)