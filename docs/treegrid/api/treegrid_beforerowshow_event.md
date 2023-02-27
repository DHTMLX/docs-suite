---
sidebar_label: beforeRowShow
title: JavaScript TreeGrid - beforeRowShow Event 
description: You can explore the beforeRowShow event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeRowShow

@short: fires before a row is shown on a page

@signature: {'beforeRowShow: (row: IRow) => boolean | void;'}

@params:
- `row: object` - an object with a row configuration

@returns:
Return `false` to prevent a row from being shown; otherwise, `true`.

@example:
treegrid.events.on("beforeRowShow", function(row){
    // your logic here
    return false;
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v7.0