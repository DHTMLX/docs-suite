---
sidebar_label: beforeChange
title: JavaScript Form - beforeChange Simple Vault Event 
description: You can explore the beforeChange event of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeChange

@short: fires before changing the value of a control

@signature: {'beforeChange: (value: object[], file?: object) => boolean | void;'} 

@params: 

- `value: object[]` - the value expected to be applied after changes 
- `file: object` - optional, the changed element

@returns:
Return `false` to prevent changing the value of the control; otherwise, `true`.

@example:
form.getItem("simplevault").events.on("beforeChange", (value, file) => {
    console.log("beforeChange", value, file);
    return true;
});

@descr:

@changelog: added in v8.2