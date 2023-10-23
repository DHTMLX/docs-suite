---
sidebar_label: beforeHide
title: JavaScript Toolbar - beforeHide Event 
description: You can explore the beforeHide event of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeHide

@short: fires before hiding a sub-item of Toolbar

@signature: {'beforeHide: (id: string | number, events: Event) => void | boolean;'}

@params:
- `id: string | number` - the ID of a toolbar sub-item
- `events: Event` - a native event object

@returns:
Return `false` to prevent hiding of a toolbar sub-item; otherwise, `true`.

@example:
toolbar.events.on("beforeHide", function(id, event){
    // your code here
    return false;
});

@descr:

**Related sample**: [Toolbar. Events](https://snippet.dhtmlx.com/xvak1p5y?tag=toolbar)
