---
sidebar_label: uploadProgress
title: JavaScript Form - uploadProgress Avatar Event 
description: You can explore the uploadProgress event of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# uploadProgress

@short: fires on each percent of a file uploading

@signature: {'uploadProgress: (progress: number, value: object) => void;'}

@params:
- `progress: number` - the current percent of the file uploading, a number from 0 to 100
- `value: object` - the current value of the control

@example:
form.getItem("avatar").events.on("uploadProgress", (progress, value) => {
    console.log("uploadProgress", progress, value);
});

@descr: