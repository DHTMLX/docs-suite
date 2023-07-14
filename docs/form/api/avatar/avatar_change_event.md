---
sidebar_label: change
title: JavaScript Form - change Avatar Event 
description: You can explore the change event of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# change

@short: fires on changing the value of a control

@signature: {'change: (value: object) => void;'} 

@params:
- `value: object` - the current value of the control

@example:
form.getItem("avatar").events.on("change", value => {
    console.log("change", value);
});

@descr: