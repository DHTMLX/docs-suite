---
sidebar_label: headerDoubleClick
title: headerDoubleClick
---          

@short: fires on double clicking the header of a window

@signature: headerDoubleClick: (e: Event) => void;

@params:
- e    Event       a native event object 

@example:
dhxWindow.events.on("HeaderDoubleclick", function(events) {
   console.log(events)
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/jfu4upwd	Window. Events

@related: window/handling_events.md

@changelog: 
The **events** parameter has been added in v7.0.