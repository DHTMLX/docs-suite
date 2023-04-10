---
sidebar_label: afterRemove
title: JavaScript Form - afterRemove Simple Vault Event 
description: You can explore the afterRemove event of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterRemove

@short: fires after a file is removed from the data collection

@signature: {'afterRemove: (file: object) => void;'}

@params:
- `file: object` - the file object

@example:
form.getItem("simplevault").data.events.on("afterRemove", function(file) {
    console.log("afterRemove", file);
});

@descr:
:::info
The `afterRemove` event is an event of data collection
:::