---
sidebar_label: beforeChange
title: JavaScript Form - beforeChange Radiogroup Event 
description: You can explore the beforeChange event of the Radiogroup control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeChange

@short: fires on before changing the value of a control

@signature: {'beforeChange: (value: string) => boolean;'}

@params:
- `value: string` - the current value of the control

@example:
form.getItem("radiogroup").events.on("beforeChange", function(value) {
    console.log("beforeChange", value);
    return true;
});

@descr:

**Change log**: The event was added in v8.0
