---
sidebar_label: groupPanelItemMouseDown 
title: JavaScript Grid - groupPanelItemMouseDown  Event 
description: You can explore the groupPanelItemMouseDown  event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# groupPanelItemMouseDown 

@short: fires before releasing the left mouse button when clicking on a group panel item

@signature: {'groupPanelItemMouseDown: (id: string, events: MouseEvent | TouchEvent) => void;'}

@params:
The callback of the event is called with the following parameters:

- `id: string` - the id of a group panel item
- `events: MouseEvent | TouchEvent` - a native HTML event object

@example:
grid.events.on("groupPanelItemMouseDown", (id) => {
    console.log("Mouse down by group item:", id)
});

@descr: