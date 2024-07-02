---
sidebar_label: beforeColumnHide
title: JavaScript TreeGrid - beforeColumnHide Event 
description: You can explore the beforeColumnHide event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeColumnHide

@short: fires before a column is hidden

@signature: {'beforeColumnHide: (column: object) => boolean | void;'}

@params:
The callback of the event is called with the following parameter:

- `column: object` - an object with a column configuration

@returns:
Return `false` to prevent a column from being hidden; otherwise, `true`.

@example:
treegrid.events.on("beforeColumnHide", (column) => {
    // your logic here
    return false;
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v7.0