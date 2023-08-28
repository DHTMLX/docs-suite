---
sidebar_label: beforeChange
title: JavaScript Form - beforeChange Toggle Event 
description: You can explore the beforeChange event of the Toggle control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeChange

@short: fires before changing the value of a control

@signature: {'beforeChange: (value: string | number | boolean) => boolean | void;'}

@params:
- `value: string | number | boolean` - the value to be set for the control

@returns:
Return `false` to prevent changing the value of the control; otherwise, `true`.

@example:
form.getItem("toggle").events.on("beforeChange", function(value) {
    console.log("beforeChange", value);
    return true;
});

@descr:
