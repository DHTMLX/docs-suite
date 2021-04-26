---
sidebar_label: autoHeight
title: autoHeight
---  

@short: makes long text to split into multiple lines based on the width of the column

@signature: autoHeight?: boolean;

@default: false


@example: 
var treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [// columns config],
	autoHeight: true,  /*!*/
	data: dataset
});


@template:	api_config
@descr: 

Note, that the **autoHeight** option does not adjust the height of the cells in the header/footer of TreeGrid. The option just makes their text to split into multiple lines, but the height of the cells will remain the same. To set the height of the rows in the header/footer, you should apply the treegrid/api/treegrid_headerrowheight_config.md and treegrid/api/treegrid_footerrowheight_config.md configuration options of TreeGrid.

@related: treegrid/configuration.md#autoheight-for-columns

@relatedapi: treegrid/api/treegrid_data_config.md

@changelog: added in v7.1

**Related sample**:
- [TreeGrid. Auto height](https://snippet.dhtmlx.com/4158ftak)