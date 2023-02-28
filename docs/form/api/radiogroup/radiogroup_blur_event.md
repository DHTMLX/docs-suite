---
sidebar_label: blur
title: JavaScript Form - blur Radiogroup Event 
description: You can explore the blur event of the Radiogroup control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# blur

@short: fires when a Radiogroup control has lost focus

@signature: blur: (value: string, id: string) => void;

@params:
- `value: string` - the current value of the control
- `id: string` - the id of the radio button of the Radiogroup control

@example:
form.getItem("radiogroup").events.on("blur", (value, id) => {
    console.log("blur", value, id);
});
@examplestop:

@changelog: added in v7.2
