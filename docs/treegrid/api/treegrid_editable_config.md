---
sidebar_label: editable
title: editable
---          

@short: enables editing in TreeGrid columns

@signature: editable?: boolean;

@default: false

@example: 
var treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [// columns config],
	editable:true, /*!*/
	data: dataset
});


@template:	api_config
@descr: 

@related:
treegrid/configuration.md#editinggridandseparatecolumns
treegrid/initialization.md#initializetreegrid

@relatedsample: https://snippet.dhtmlx.com/sdbfbv2n	TreeGrid. Editable Data

@changelog: added in v6.4