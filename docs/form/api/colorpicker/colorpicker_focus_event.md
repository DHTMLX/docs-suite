---
sidebar_label: focus
title: JavaScript Form - focus Colorpicker Event 
description: You can explore the focus event of the Colorpicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# focus

@short: fires when a Colorpicker control has received focus

@signature: focus: (value: string) => void;

@params:
- `value: string` - the current value of the control

@example:
form.getItem("colorpicker").events.on("focus", (value) => {
    console.log("focus", value);
});
@examplestop:

@changelog: added in v7.2
