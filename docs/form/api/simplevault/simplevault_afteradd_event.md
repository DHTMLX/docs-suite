---
sidebar_label: afterAdd
title: JavaScript Form - afterAdd Simple Vault Event 
description: You can explore the afterAdd event of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterAdd

@short: fires after a file is added to the data collection

@signature: {'afterAdd: (file: object) => void;'}

@params:
- `file: object` - the file object


@example:
form.getItem("simplevault").data.events.on("afterAdd", function(file) {
    console.log("afterAdd", file);
});

@descr:
:::info
The `afterAdd` event is an event of data collection
:::
