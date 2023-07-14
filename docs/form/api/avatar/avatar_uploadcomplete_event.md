---
sidebar_label: uploadComplete
title: JavaScript Form - uploadComplete Avatar Event 
description: You can explore the uploadComplete event of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# uploadComplete

@short: fires when upload is completed

@signature: {'uploadComplete: (value: object) => void;'}

@params:
- `value: object` - the current value of the control

@example:
form.getItem("avatar").events.on("uploadComplete", (value) => {
    console.log("uploadComplete", value);
});

@descr: