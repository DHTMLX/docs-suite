---
sidebar_label: blur
title: JavaScript Form - blur Avatar Event 
description: You can explore the blur event of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# blur

@short: fires when the control has lost focus

@signature: {'blur: (value: object) => void;'}

@params:
- `value: object` - the current value of the control;

@example:
form.getItem("avatar").events.on("blur", value => {
    console.log("blur", value);
});

@descr: