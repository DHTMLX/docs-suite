---
sidebar_label: beforeChange
title: JavaScript Form - beforeChange Combo Box Event 
description: You can explore the beforeChange event of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeChange

@short: fires on before changing the value of a control

@signature: {'beforeChange: (value: Id | Id[]) => boolean;'}

@params:
- `value: string | number | (string | number)[]` - the ID(s) of newly selected option(s) from data collection

@example:
form.getItem("combo").events.on("beforeChange", function(value) {
    console.log("beforeChange", value);
    return true;
});

@descr:

**Change log**: The event was added in v8.0
