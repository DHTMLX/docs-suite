---
sidebar_label: inputCreated
title: inputCreated
---          

@short: fires when a new input is added

@signature: {'inputCreated: (id: string, input: HTMLInputElement) => void;'}

@params:
- `id: string` - the ID of a new input
- `input: HTMLElement` - a newly created input

@example:
menu.events.on("InputCreated", function(id, el){
    console.log(id);
});

@descr:
