---
sidebar_label: blur
title: JavaScript Form - blur Toggle Event 
description: You can explore the blur event of the Toggle control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# blur

@short: fires when a Toggle control has lost focus

@signature: {'blur: (value: string | number | boolean) => void;'}

@params:
- `value: string | number | boolean` - the current value of the control

@example:
form.getItem("toggle").events.on("blur", (value) => {
    console.log("blur", value);
});
