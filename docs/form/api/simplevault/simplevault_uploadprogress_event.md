---
sidebar_label: uploadProgress
title: JavaScript Form - uploadProgress Simple Vault Event 
description: You can explore the uploadProgress event of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# uploadProgress

@short: fires on each percent of files uploading

@signature: {'uploadProgress: (progress: number, value: ISimpleVaultValue[]) => void;'}

@params:
- `progress: number` - the current percent of files uploading, a number from 0 to 100
- `value: array` - the current value of the control

@example:
form.getItem("simpleVault").events.on("UploadProgress", function(progress, value) {
    console.log("UploadProgress", progress, value);
});

@descr:

@changelog:

The **value** parameter is added in v7.0.
