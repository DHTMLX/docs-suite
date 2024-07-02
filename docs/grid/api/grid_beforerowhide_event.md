---
sidebar_label: beforeRowHide
title: JavaScript Grid - beforeRowHide Event 
description: You can explore the beforeRowHide event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeRowHide

@short: fires before a row is hidden

@signature: {'beforeRowHide: (row: object) => boolean | void;'}

@params:
The callback of the event is called with the following parameters:
- `row: object` - an object with a row configuration

@returns:
Return `false` to prevent a row from being hidden; otherwise, `true`.

@example:
grid.events.on("beforeRowHide", (row) => {
    // your logic here
    return false;
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v7.0