---
sidebar_label: blur
title: JavaScript Form - blur Colorpicker Event 
description: You can explore the blur event of the Colorpicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# blur

@short: fires when a Colorpicker control has lost focus

@signature: blur: (value: string) => void;

@params:
`value: string` - the current value of the control

@example:
form.getItem("colorpicker").events.on("blur", (value) => {
    console.log("blur", value);
});
@examplestop:

@changelog: added in v7.2
