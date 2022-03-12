---
sidebar_label: uploadFail
title: JavaScript Form - uploadFail Simple Vault Event 
description: You can explore the uploadFail event of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# uploadFail

@short: fires if the file upload failed

@signature: {'uploadFail: (file: ISimpleVaultValue, value: ISimpleVaultValue[]) => void;'}

@params:
- `file: object` - the file object
- `value: array` - the current value of the control

@example:
form.getItem("simpleVault").events.on("uploadFail", function(file, value) {
    console.log("uploadFail", file, value);
});

@descr:

@changelog:

The **value** parameter is added in v7.0.
