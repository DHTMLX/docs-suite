---
sidebar_label: click
title: click
---          

@short: fires after a click on a control

@signature: {'click: (id: string, events: Event) => void;'}

@params:
- `id: string` - the ID of a clicked control
- `events: Event` - a native event object

@example:
ribbon.events.on("Click", function(id,e){
    console.log(id);
});

@descr:

**Related sample**: [Ribbon. Events](https://snippet.dhtmlx.com/i7cfddkl)

[comment]: # (@related: ribbon/handling_events.md)
