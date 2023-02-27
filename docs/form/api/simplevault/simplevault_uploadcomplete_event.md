---
sidebar_label: uploadComplete
title: JavaScript Form - uploadComplete Simple Vault Event 
description: You can explore the uploadComplete event of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# uploadComplete

@short: fires when upload is completed

@signature: {'uploadComplete: (files: ISimpleVaultValue[], value: ISimpleVaultValue[]) => void;'}

@params:
- `files: array` - file objects that were uploaded
- `value: array` - the current value of the control

@example:
form.getItem("simpleVault").events.on("uploadComplete", function(files, value) {
    console.log("uploadComplete", files, value);
});

@descr:

@changelog:

The **value** parameter is added in v7.0.
