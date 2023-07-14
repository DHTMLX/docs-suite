---
sidebar_label: uploadFile
title: JavaScript Form - uploadFile Avatar Event 
description: You can explore the uploadFile event of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# uploadFile

@short: fires when a file has been uploaded

@signature: {'uploadFile: (value: object, extra?: { [key: string]: string }) => void;'}

@params:
- `value: object` - the current value of the control
- `extra: any` - the server response

@example:
form.getItem("avatar").events.on("uploadFile", (value, extra) => {
    console.log("uploadFile", value, extra);
});

@descr: