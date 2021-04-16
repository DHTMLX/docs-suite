---
sidebar_label: keyNavigation
title: keyNavigation
---          

@short: enables keyboard navigation in Grid

@signature: keyNavigation?: boolean;

@default: true

@example: 
var grid = new dhx.Grid("grid", {
	columns: [// columns config],
	data: dataset,
	selection: "complex", 
    editing: true, 
	keyNavigation: true /*!*/
});

@template:	api_config
@descr: 
You need to set the [selection](grid/api/grid_selection_config.md) and [editable](grid/api/grid_editable_config.md) properties in the configuration object of Grid to enable all available shortcut keys.  Read the details in the [Key Navigation](grid/configuration.md#keyboardnavigation) article.


@relatedsample: https://snippet.dhtmlx.com/y9kdk0md	Grid. Key Navigation

@related: grid/initialization.md#initializegrid
grid/configuration.md#keyboardnavigation

@changelog: added in v6.3