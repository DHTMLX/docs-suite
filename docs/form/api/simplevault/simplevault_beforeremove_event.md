---
sidebar_label: beforeRemove
title: JavaScript Form - beforeRemove Simple Vault Event 
description: You can explore the beforeRemove event of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeRemove

@short: fires before a file is removed from the data collection

@signature: {'beforeRemove: (file: ISimpleVaultValue) => boolean | void;'}

@params:
- `file: object` - the file object

@returns:
Return `false` to prevent removing of a file from the data collection; otherwise, `true`.

@example:
form.getItem("simplevault").data.events.on("beforeRemove", function(file) {
    console.log("beforeRemove", file);
    // return false;
});

@descr:
:::info
The `beforeRemove` event is an event of data collection
:::
