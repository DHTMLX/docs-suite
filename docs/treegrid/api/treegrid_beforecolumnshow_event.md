---
sidebar_label: beforeColumnShow
title: JavaScript TreeGrid - beforeColumnShow Event 
description: You can explore the beforeColumnShow event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeColumnShow

@short: fires before a column is shown on a page

@signature: {'beforeColumnShow: (column: object) => boolean | void;'}

@params:
The callback of the event is called with the following parameter:

- `column: object` - an object with a column configuration

@returns:
Return `false` to prevent a column from being shown; otherwise, `true`.

@example:
treegrid.events.on("beforeColumnShow", (column) => {
    // your logic here
    return false;
});

@descr:

**Related sample**:  [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v7.0