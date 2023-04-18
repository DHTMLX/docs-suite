---
sidebar_label: click
title: JavaScript Ribbon - click Event 
description: You can explore the click event of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# click

@short: fires after a click on a control

@signature: {'click: (id: string | number, events: Event) => void;'}

@params:
- `id: string | number` - the ID of a clicked control
- `events: Event` - a native event object

@example:
ribbon.events.on("click", function(id,e){
    console.log(id);
});

@descr:

**Related sample**: [Ribbon. Events](https://snippet.dhtmlx.com/i7cfddkl)

[comment]: # (@related: ribbon/handling_events.md)
