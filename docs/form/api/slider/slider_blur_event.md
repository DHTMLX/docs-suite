---
sidebar_label: blur
title: JavaScript Form - blur Slider Event 
description: You can explore the blur event of the Slider control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# blur

@short: fires when a Slider control has lost focus

@signature: blur: (value: number[]) => void;

@params:
- `value: array` - the current value of the control

@example:
form.getItem("slider").events.on("blur", (value) => {
    console.log("blur", value);
});
@examplestop:

@changelog: added in v7.2
