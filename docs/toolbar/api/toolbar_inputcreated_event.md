---
sidebar_label: inputCreated
title: inputCreated
---          

@short: fires when a new input is added

@signature: inputCreated: (id: string, input: HTMLInputElement) => any;

<!-- todo void inputCreated(string id,HTMLElement el){ ... }; - в страрой доке void возвращало -->

@params:
- id 		string			the ID of a new input
- el		HTMLElement		a newly created input


@example:
toolbar.events.on("InputCreated", function(id, el){
    console.log(id);
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/xvak1p5y	Toolbar. Events

