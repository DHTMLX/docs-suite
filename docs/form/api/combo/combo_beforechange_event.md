---
sidebar_label: beforeChange
title: JavaScript Form - beforeChange Combo Box Event 
description: You can explore the beforeChange event of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeChange

@short: fires before changing the value of a control

@signature: {'beforeChange: (ids: (string | number) | (string | number)[]) => boolean | void;'}

@params:
- `ids: string | number | (string | number)[]` - the ID(s) of newly selected option(s) from data collection

@returns:
Return `false` to prevent changing the value of the control; otherwise, `true`.

@example:
form.getItem("combo").events.on("beforeChange", function(ids) {
    console.log("beforeChange", ids);
    return true;
});

@descr:

**Change log**: The event was added in v8.0
