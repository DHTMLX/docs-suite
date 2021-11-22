---
sidebar_label: beforeChange
title: JavaScript Tabbar - beforeChange Event
description: You can explore the beforeChange event of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeChange

@short: fires before changing the active tab

@signature: {'beforeChange: (id: string, prev: string) => boolean | void;'}

@params:
- `id: string` - the id of a newly active tab
- `prev: string` - the id of a previously active tab

@returns:
Return `false` to prevent an active tab from being changed; otherwise, `true`.

@example:
tabbar.events.on("beforeChange", function(id, prev){
    console.log("The " + prev + " active tab will be changed");
    return false;
});

@descr:

**Related sample**: [Tabbar. Events](https://snippet.dhtmlx.com/dld2qo1m)

@changelog: added in v7.3