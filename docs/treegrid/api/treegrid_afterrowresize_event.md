---
sidebar_label: afterRowResize
title: JavaScript TreeGrid - afterRowResize Event 
description: You can explore the afterRowResize event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterRowResize

@short: fires after the height of a row is changed

@signature: afterRowResize: (row: object, events: Event, currentHeight: number) => void;

@params:
- `row: object` - an object with a row configuration
- `events: Event` - a native event object
- `currentHeight: number` - the current height of the row

@example:
treegrid.events.on("afterRowResize", function(row, events, currentHeight) {
    console.log("Current row height:", currentHeight);
});

@descr:

To be able to change the height of the row, you should specify the [autoHeight:true](treegrid/api/treegrid_autoheight_config.md) and [editable:true](treegrid/api/treegrid_editable_config.md) options in the configuration of Grid.  

@changelog: added in v7.1
