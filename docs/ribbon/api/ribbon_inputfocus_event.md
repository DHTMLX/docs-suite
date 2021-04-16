---
sidebar_label: inputFocus
title: inputFocus
---          

@short: fires when a control is focused

@signature: inputFocus: (id: string) => void;

@params:
- id		string			the ID of a new control


@example:
ribbon.events.on("InputFocus", function(id){
    console.log(id);
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/i7cfddkl	Ribbon. Events

@related: ribbon/handling_events.md