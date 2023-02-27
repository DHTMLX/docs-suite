---
sidebar_label: beforeRowHide
title: JavaScript TreeGrid - beforeRowHide Event 
description: You can explore the beforeRowHide event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeRowHide

@short: fires before a row is hidden

@signature: {'beforeRowHide: (row: IRow) => boolean | void;'}

@params:
- `row: object` - an object with a row configuration

@returns:
Return `false` to prevent a row from being hidden; otherwise, `true`.

@example:
treegrid.events.on("beforeRowHide", function(row){
    // your logic here
    return false;
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v7.0