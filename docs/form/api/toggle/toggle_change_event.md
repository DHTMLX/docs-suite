---
sidebar_label: change
title: JavaScript Form - change Toggle Event 
description: You can explore the change event of the Toggle control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# change

@short: fires on changing the value of a control

@signature: {'change: (value: string | number | boolean) => void;'}

@params:
- `value: string | number | boolean` - the current value of the control

@example:
form.getItem("toggle").events.on("change", function(value) {
    console.log("change", value);
});

@descr: