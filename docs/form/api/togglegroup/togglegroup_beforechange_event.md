---
sidebar_label: beforeChange
title: JavaScript Form - beforeChange Toggle Group Event 
description: You can explore the beforeChange event of the Toggle Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeChange

@short: fires before changing the value of a control

@signature: {'beforeChange: (value: {[id: string]: string | number |boolean}) => boolean | void;'}

@params:
- `value: object` - the current value of the control. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a toggle and <i>value</i> is the value/state of the toggle

@returns:
Return `false` to prevent changing the value of the control; otherwise, `true`

@example:
form.getItem("ToggleGroup").events.on("beforeChange", function(value) {
    console.log("beforeChange", value);
    return true;
});

@descr: