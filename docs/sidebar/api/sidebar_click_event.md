---
sidebar_label: click
title: click
---          

@short: fires after a click on a control

click: (id: string, e: Event) => void;

@params:
- id 		string		the ID of a clicked control
- e 		Event		a native event object

@example:
sidebar.events.on("Click", function(id,e){
    console.log(id);
});

@descr:

**Related sample**: [Sidebar. Events](https://snippet.dhtmlx.com/qfddiu3i)

@related: sidebar/events.md
