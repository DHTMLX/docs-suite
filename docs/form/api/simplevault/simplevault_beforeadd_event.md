---
sidebar_label: beforeAdd
title: JavaScript Form - beforeAdd Simple Vault Event 
description: You can explore the beforeAdd event of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeAdd

@short: fires before a file is added to the data collection

@signature: {'beforeAdd: (file: ISimpleVaultValue) => boolean | void;'}

@params:
- `file: object` - the file object

@returns:
Return `false` to prevent adding of a file into the data collection; otherwise, `true`.

@example:
form.getItem("simplevault").data.events.on("beforeAdd", function(file) {
    console.log("beforeAdd", file);
    // return false;
});

@descr:
:::info
The `beforeAdd` event is an event of data collection
:::
