---
sidebar_label: inputCreated
title: inputCreated
---          

@short: fires when a new input is added

@signature: {'inputCreated: (id: string, input: HTMLInputElement) => void;'}

@params:
- id 		string			the ID of a new input
- input		HTMLInputElement		a newly created input


@example:
ribbon.events.on("InputCreated", function(id, el){
    console.log(id);
});



@descr:

**Related sample**: [Ribbon. Events](https://snippet.dhtmlx.com/i7cfddkl)

@related: ribbon/handling_events.md
