---
sidebar_label: uploadBegin
title: JavaScript Form - uploadBegin Avatar Event 
description: You can explore the uploadBegin event of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# uploadBegin

@short: fires when file upload begins

@signature: {'uploadBegin: (value: object) => void;'} 

@params:
- `value: object` - the current value of the control

@example:
form.getItem("avatar").events.on("uploadBegin", (value) => {
    console.log("uploadBegin", value);
});

@descr: