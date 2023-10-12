---
sidebar_label: input
title: JavaScript Toolbar - input Event 
description: You can explore the input event of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# input

@short: fires on entering a text into the input field

@signature: {'input: (id: string, value: string) => void;'}

@params:
- `id: string` - the ID of the input field
- `value: string` - the entered value

@example:
toolbar.events.on("input", function(id, value){
    console.log("You've entered: " + value);
});

@descr:

**Related sample**: [Toolbar. Events](https://snippet.dhtmlx.com/xvak1p5y)

@changelog:
added in v8.3