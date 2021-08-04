---
sidebar_label: input
title: JavaScript Combo Box - input Event 
description: You can explore the input event of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# input

@short: fires on typing text in an input of Combobox

@signature: {'input: (value: string) => void;'}

@params:
`value: string` - an entered value

@example:
combobox.events.on("input", function(value) {
    console.log("You've entered: " + value);
});

@descr:

**Related sample**: [Combobox. Events](https://snippet.dhtmlx.com/n70eqx5l)
