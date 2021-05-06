---
sidebar_label: beforeRowResize
title: beforeRowResize
---

@short: fires before the height of a row is changed

@signature: beforeRowResize: (row: IRow, events: Event, currentHeight: number) => boolean;

@params:
- row			object		an object with a row configuration
- e	            Event	    a native event object
- currentHeight	number		the current height of the row


@returns:
- result		boolean		false - to block resizing of a row, otherwise true

@example:
grid.events.on("beforeRowResize", function(row, events, currentHeight) {
    console.log("Current row height:", currentHeight);
    return true;
});



@descr:

{{pronote This functionality requires PRO version of the dhtmlxGrid (or DHTMLX suite) package.}}

To be able to change the height of the row, you should specify the [autoHeight:true](grid/api/grid_autoheight_config.md) and [editable:true](grid/api/grid_editable_config.md) options in the configuration of Grid. 

	

@changelog: added in v7.1
