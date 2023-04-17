---
sidebar_label: inputCreated
title: JavaScript Ribbon - inputCreated Event 
description: You can explore the inputCreated event of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# inputCreated

@short: fires when a new input is added

@signature: {'inputCreated: (id: string | number, input: HTMLInputElement) => void;'}

@params:
- `id: string | number` - the ID of a new input
- `input: HTMLInputElement` - a newly created input

@example:
ribbon.events.on("inputCreated", function(id, el){
    console.log(id);
});

@descr:

**Related sample**: [Ribbon. Events](https://snippet.dhtmlx.com/i7cfddkl)

[comment]: # (@related: ribbon/handling_events.md)
