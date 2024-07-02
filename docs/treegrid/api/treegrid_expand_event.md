---
sidebar_label: expand
title: JavaScript TreeGrid - expand Event 
description: You can explore the expand event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# expand

@short: fires on expanding a treegrid

@signature: {'expand: (rowId: string | number) => void;'}

@params:
The callback of the event is called with the following parameter:

- `rowId: string | number` - the id of an expanded row

@example:
grid.events.on("expand", (rowId) => {
    // your logic here
});

@descr:
