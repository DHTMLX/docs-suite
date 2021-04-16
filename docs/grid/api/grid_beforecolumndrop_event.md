---
sidebar_label: beforeColumnDrop
title: beforeColumnDrop
---          

@short: fires before the user has finished dragging and released the mouse button over a target column

@signature: beforeColumnDrop: (data: object, events: MouseEvent) => void | boolean;
	
<!-- @params:
- data		object		data object
- e		    Event		a native event object -->

@returns:
- result	boolean		false - to block the default action, otherwise true


@example:
grid.events.on("BeforeColumnDrop", function(data, events){
	// your logic here
    return false;
});


@template:	api_event
@descr:
{{pronote This functionality requires PRO version of the dhtmlxGrid (or DHTMLX suite) package.}}

The data object contains the following parameters:

- **start** - (*string*) the id of a column, from which the dragging process has started
- **source** - (*string[]*) an array with ids of dragged columns
- **target** - (*string*) the id of a potential target column

@relatedsample:  https://snippet.dhtmlx.com/dfdlzpqb	Setup drag column (Pro)


@relatedapi:
grid/api/grid_dragitem_config.md
grid/api/grid_aftercolumndrag_event.md
grid/api/grid_aftercolumndrop_event.md
grid/api/grid_beforecolumndrag_event.md
grid/api/grid_cancolumndrop_event.md
grid/api/grid_cancelcolumndrop_event.md
grid/api/grid_dragcolumnin_event.md
grid/api/grid_dragcolumnout_event.md
grid/api/grid_dragcolumnstart_event.md

@related: grid/configuration.md#dragndropofgridcolumns
	

@changelog: 

- added in v6.5
- Before v7.0, the event took two parameters - **sourceId** and **targetId**. 
- In v7.0, the parameters were replaced with new ones: **data** and **e**.


@edition:pro