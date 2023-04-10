---
sidebar_label: blur
title: JavaScript Form - blur Timepicker Event 
description: You can explore the blur event of the Timepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# blur

@short: fires when a Timepicker control has lost focus

@signature: blur: (value: string | object) => void;

@params:
- `value: string | object` - the current value of the control

@example:
form.getItem("timepicker").events.on("blur", (value) => {
    console.log("blur", value);
});
@examplestop:

@changelog: added in v7.2
