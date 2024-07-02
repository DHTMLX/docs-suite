---
sidebar_label: afterColumnHide
title: JavaScript TreeGrid - afterColumnHide Event 
description: You can explore the afterColumnHide event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterColumnHide

@short: fires after a column is hidden

@signature: {'afterColumnHide: (column: object) => void;'}

@params:
The callback of the event is called with the following parameters:
- `column: object` - an object with a column configuration

@example:
treegrid.events.on("afterColumnHide", (column) => {
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v7.0