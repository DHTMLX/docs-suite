---
sidebar_label: click
title: click
---          

@short: fires after a click on a control

@signature: {'click: (id: string, events: Event) => void;'}

@params:
- id 		string		the ID of a clicked control
- events 		Event		a native event object


@example:
sidebar.events.on("Click", function(id,e){
    console.log(id);
});


@template: api_event
@descr:

**Related sample**: [Sidebar. Events](https://snippet.dhtmlx.com/qfddiu3i)

@related: sidebar/events.md
