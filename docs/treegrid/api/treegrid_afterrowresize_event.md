---
sidebar_label: afterRowResize
title: afterRowResize
--- 

@short: fires after the height of a row is changed

@signature: afterRowResize: (row: IRow, events: Event, currentHeight: number) => void;

@params:
`row: object` - an object with a row configuration
`e: Event` - a native event object
`currentHeight: number` - the current height of the row

@example:
treegrid.events.on("afterRowResize", function(row, events, currentHeight) {
    console.log("Current row height:", currentHeight);
});

@descr:

To be able to change the height of the row, you should specify the [autoHeight:true](treegrid/api/treegrid_autoheight_config.md) and [editable:true](treegrid/api/treegrid_editable_config.md) options in the configuration of Grid.  

@changelog: added in v7.1
