---
sidebar_label: focus
title: JavaScript Form - focus Slider Event 
description: You can explore the focus event of the Slider control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# focus

@short: fires when a Slider control has received focus

@signature: focus: (value: number[]) => void;

@params:
- `value: array` - the current value of the control

@example:
form.getItem("slider").events.on("focus", (value) => {
    console.log("focus", value);
});
@examplestop:

@changelog: Added in v7.2
