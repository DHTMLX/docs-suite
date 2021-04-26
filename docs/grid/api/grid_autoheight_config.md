---
sidebar_label: autoHeight
title: autoHeight
---


@short: makes long text to split into multiple lines based on the width of the column

@signature: autoWidth?: boolean;

@default: false


@example: 
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	autoHeight: true,  /*!*/
	data: dataset
});


@template:	api_config
@descr: 
{{pronote This functionality requires PRO version of the dhtmlxGrid (or DHTMLX suite) package.}}

Note, that the **autoHeight** option does not adjust the height of the cells in the header/footer of Grid. The option just makes their text to split into multiple lines, but the height of the cells will remain the same. To set the height of the rows in the header/footer, you should apply the grid/api/grid_headerrowheight_config.md and grid/api/grid_footerrowheight_config.md configuration options of Grid.  

**Note**, that:  

- to optimize performance, you should specify `htmlEnable: true` in the configuration object of the column which contains HTML content;
- you can also specify `htmlEnable:true` in the configuration object of Grid;
- `htmlEnable: true` allows calculating the content of simple HTML templates by excluding HTML markup and calculating internal content.
- the **autoHeight** configuration option enabled adjusts the height of the cells with account of [template](grid/api/grid_columns_config.md) added to cells.

@related: grid/initialization.md#initializegrid
grid/configuration.md#autoheightforcolumns


@changelog: added in v7.1

@edition: pro

@relatedapi: grid/api/grid_data_config.md

@relatedsample: https://snippet.dhtmlx.com/zkcsyazg	Grid. Auto height