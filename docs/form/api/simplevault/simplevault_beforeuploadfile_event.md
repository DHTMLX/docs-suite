---
sidebar_label: beforeUploadFile
title: JavaScript Form - beforeUploadFile Simple Vault Event 
hide_title: true
description: You can explore the beforeUploadFile Simple Vault event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# beforeUploadFile

@short: fires before file upload begins

@signature: {'beforeUploadFile: (file: ISimpleVaultValue, value: ISimpleVaultValue[]) => boolean | void;'}

@params:
- `file: object` - the file object
- `value: array` - the current value of the control

@returns:
Return `false` to cancel file uploading; otherwise, `true`.

@example:
form.getItem("simplevault").events.on("BeforeUploadFile", function(file, value) {
    console.log("BeforeUploadFile", file, value);
    return true;
});

@descr:

@changelog:

The **value** parameter is added in v7.0.
