---
sidebar_label: beforeHide
title: JavaScript Sidebar - beforeHide Event 
description: You can explore the beforeHide event of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeHide

@short: fires before hiding a sub-item of Sidebar

@signature: {'beforeHide: (id: string | number, events: Event) => void | boolean;'}

@params:
- `id: string | number` - the ID of a sidebar sub-item
- `events: Event` - a native event object

@returns:
Return `false` to prevent hiding of a sidebar sub-item; otherwise, `true`.

@example:
sidebar.events.on("beforeHide", function(id, event){
    // your code here
    return false;
});

@descr:

**Related sample**: [Sidebar. Events](https://snippet.dhtmlx.com/qfddiu3i?tag=sidebar)

[comment]: # (@related: sidebar/events.md)
