---
sidebar_label: inputCreated
title: JavaScript Menu - inputCreated Event 
description: You can explore the inputCreated event of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# inputCreated

@short: fires when a new input is added

@signature: {'inputCreated: (id: Id, input: HTMLInputElement) => void;'}

@params:
- `id: string | number` - the ID of a new input
- `input: HTMLElement` - a newly created input

@example:
menu.events.on("inputCreated", function(id, input){
    console.log(id);
});

@descr:
