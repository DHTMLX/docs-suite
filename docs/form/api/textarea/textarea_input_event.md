---
sidebar_label: input
title: JavaScript Form - input Textarea Event 
description: You can explore the input event of the Textarea control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# input

@short: fires when a user types some text in the textarea

@signature: {'input: (value: string) => void;'} 

@params:
- `value: string` - an entered value

@example:
form.getItem("textarea").events.on("input", function(inputValue) {
    console.log("input", inputValue);
});

@descr:

@changelog: added in v7.0
