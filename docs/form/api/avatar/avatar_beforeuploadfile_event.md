---
sidebar_label: beforeUploadFile
title: JavaScript Form - beforeUploadFile Avatar Event 
description: You can explore the beforeUploadFile event of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeUploadFile

@short: fires before file upload begins

@signature: {'beforeUploadFile: (value: object) => boolean | void;'}

@params:
- `value: object` - the current value of the control

@returns:
Return `false` to cancel file uploading; otherwise, `true`.

@example:
form.getItem("avatar").events.on("beforeUploadFile", (value) => {
    console.log("beforeUploadFile", value);
    return true;
});

@descr: