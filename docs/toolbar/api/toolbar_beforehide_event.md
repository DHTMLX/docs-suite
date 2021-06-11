---
sidebar_label: beforeHide
title: JavaScript Toolbar - beforeHide Event 
description: You can explore the beforeHide event of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeHide

@short: fires before hiding an item of Toolbar

@signature: {'beforeHide: (id: Id, events: Event) => void | boolean;'}

@params:
- `id: string | number` - the ID of a toolbar item
- `events: Event` - a native event object

@returns:
Return `false` to prevent hiding of a toolbar item; otherwise, `true`.

@example:
toolbar.events.on("BeforeHide", function(id, event){
    // your code here
    return false;
});

@descr:

**Related sample**: [Toolbar. Events](https://snippet.dhtmlx.com/xvak1p5y)
