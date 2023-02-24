---
sidebar_label: beforeChange
title: JavaScript Form - beforeChange Slider Event 
description: You can explore the beforeChange event of the Slider control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeChange

@short: fires on before changing the value of a control

@signature: {'beforeChange: (value: number[]) => boolean;'}

@params:
- `value: number[]` - the current value of the control

@returns:
Return `false` to prevent changing the value of the control; otherwise, `true`.

@example:
form.getItem("slider").events.on("beforeChange", function(value) {
    console.log("beforeChange", value);
    return true;
});

@descr:

**Change log**: The event was added in v8.0
