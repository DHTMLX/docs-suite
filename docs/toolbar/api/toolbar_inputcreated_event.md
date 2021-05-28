---
sidebar_label: inputCreated
title: JavaScript Toolbar - inputCreated Event 
hide_title: true
description: You can explore the inputCreated event of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# inputCreated

@short: fires when a new input is added

@signature: {'inputCreated: (id: string, input: HTMLInputElement) => void;'}

@params:
- `id: string` - the ID of a new input
- `input: HTMLElement` - a newly created input

@example:
toolbar.events.on("InputCreated", function(id, input){
    console.log(id);
});

@descr:

**Related sample**: [Toolbar. Events](https://snippet.dhtmlx.com/xvak1p5y)
