---
sidebar_label: groupPanelItemClick 
title: JavaScript Grid - groupPanelItemClick Event 
description: You can explore the groupPanelItemClick  event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# groupPanelItemClick 

@short: fires on click on a group panel item

:::tip pro version only
The described functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@signature: {'groupPanelItemClick: (id: string, events: Event) => void;'}

@params:
The callback of the event is called with the following parameters:

- `id: string` - the id of a group panel item
- `events: Event` - a native event object

@example:
grid.events.on("groupPanelItemClick", (id) => {
    console.log("Click on the group item:", id)
});

@descr: