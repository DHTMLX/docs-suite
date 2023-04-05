---
sidebar_label: afterShow
title: JavaScript Form - afterShow Simple Vault Event 
description: You can explore the afterShow event of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterShow

@short: fires after a control is shown

@signature: {'afterShow: (value: object[]) => void;'}

@params:
- `value: array` - the current value of the control

@example:
form.getItem("simplevault").events.on("afterShow", function(value) {
    console.log("afterShow", value);
});

@descr:

@changelog: added in v7.0
