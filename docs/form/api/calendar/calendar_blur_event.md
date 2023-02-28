---
sidebar_label: blur
title: JavaScript Form - blur Datepicker Event 
description: You can explore the blur event of the Datepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# blur

@short: fires when a Datepicker control has lost focus

@signature: blur: (value: string | Date) => void;

@params:
- `value: string | Date` - the current value of the control

@example:
form.getItem("datepicker").events.on("blur", (value) => {
    console.log("blur", value);
});
@examplestop:

@changelog: added in v7.2
