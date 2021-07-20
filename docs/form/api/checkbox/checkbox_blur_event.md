---
sidebar_label: blur
title: JavaScript Form - blur Checkbox Event 
description: You can explore the blur Checkbox event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# blur

@short: fires when a Checkbox control has lost focus

@signature: blur: (value: string | boolean) => void;

@params:
- `value: string | boolean` - the current value of the control

@example:
form.getItem("checkbox").events.on("blur", (value) => {
    console.log("blur", value);
});
@examplestop:

@changelog: added in v7.2
