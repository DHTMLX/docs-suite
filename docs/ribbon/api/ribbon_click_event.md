---
sidebar_label: click
title: click
---          

@short: fires after a click on a control

@signature: click: (id: string, e: Event) => void;

@params:
- id 		string		the ID of a clicked control
- e 		Event		a native event object

@example:
ribbon.events.on("Click", function(id,e){
    console.log(id);
});


@template: api_event
@descr:

**Related sample**: [Ribbon. Events](https://snippet.dhtmlx.com/i7cfddkl)

@related: ribbon/handling_events.md