---
sidebar_label: inputCreated
title: inputCreated
---          

@short: fires when a new input is added

inputCreated: (id: string, input: HTMLInputElement) => void;

@params:
- id 		string			the ID of a new input
- input		HTMLInputElement		a newly created input


@example:
sidebar.events.on("InputCreated", function(id, el){
    console.log(id);
});


@template: api_event
@descr:

@related: sidebar/events.md

