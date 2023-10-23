---
sidebar_label: input
title: JavaScript Ribbon - input Event 
description: You can explore the input event of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# input

@short: fires on entering a text into the input field

@signature: {'input: (id: string, value: string) => void;'}

@params:
- `id: string` - the ID of the input field
- `value: string` - the entered value

@example:
ribbon.events.on("input", function(id, value){
    console.log("You've entered: " + value);
});

@descr:

**Related sample**: [Ribbon. Events](https://snippet.dhtmlx.com/i7cfddkl?tag=ribbon)

@changelog:
added in v8.3