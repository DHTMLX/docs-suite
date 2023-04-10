---
sidebar_label: beforeHide
title: JavaScript Menu - beforeHide Event 
description: You can explore the beforeHide event of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeHide

@short: fires before hiding an item of Menu

@signature: {'beforeHide: (id: string | number, events: Event) => void | boolean;'}

@params:
- `id: string | number` - the ID of a menu item
- `events: Event` - a native event object

@returns:
Return `false` to prevent hiding of a menu item; otherwise, `true`.

@example:
menu.events.on("beforeHide", function(id, event){
    // your code here
    return false;
});

@descr:
