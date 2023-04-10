---
sidebar_label: beforeUploadFile
title: JavaScript Form - beforeUploadFile Simple Vault Event 
description: You can explore the beforeUploadFile event of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeUploadFile

@short: fires before file upload begins

@signature: {'beforeUploadFile: (file: object, value: object[]) => boolean | void;'}

@params:
- `file: object` - the file object
- `value: array` - the current value of the control

@returns:
Return `false` to cancel file uploading; otherwise, `true`.

@example:
form.getItem("simplevault").events.on("beforeUploadFile", function(file, value) {
    console.log("beforeUploadFile", file, value);
    return true;
});

@descr:

@changelog:

The **value** parameter is added in v7.0.
