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

**Related sample**: [Ribbon. Events](https://snippet.dhtmlx.com/i7cfddkl)

@related: ribbon/handling_events.md