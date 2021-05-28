---
sidebar_label: uploadFile
title: JavaScript Form - uploadFile Simple Vault Event 
hide_title: true
description: You can explore the uploadFile Simple Vault event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# uploadFile

@short: fires when a file has been uploaded

@signature: {'uploadFile: (file: ISimpleVaultValue, value: ISimpleVaultValue[], extra?: { [key: string]: string }) => void;'}

@params:
- `file: object` - the file object
- `value: array` - the current value of the control
- `extra: any` - the server response

@example:
form.getItem("simpleVault").events.on("UploadFile", function(file, value, extra) {
    console.log("UploadFile", file, value, extra);
});

@descr:

@changelog:

The **value** and **extra** parameters are added in v7.0.
