---
sidebar_label: uploadBegin
title: JavaScript Form - uploadBegin Simple Vault Event 
hide_title: true
description: You can explore the uploadBegin Simple Vault event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# uploadBegin

@short: fires when file upload begins

@signature: {'uploadBegin: (files: ISimpleVaultValue[], value: ISimpleVaultValue[]) => void;'} 

@params:
- `files: array` - the array of files to be uploaded
- `value: array` - the current value of the control

@example:
form.getItem("simpleVault").events.on("UploadBegin", function(files, value) {
    console.log("UploadBegin", files, value);
});

@descr:

@changelog:

The **value** parameter is added in v7.0.
