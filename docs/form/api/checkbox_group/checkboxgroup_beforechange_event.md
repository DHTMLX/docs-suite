---
sidebar_label: beforeChange
title: JavaScript Form - beforeChange Checkbox Group Event 
description: You can explore the beforeChange event of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeChange

@short: fires before changing the value of a control

@signature: {'beforeChange: (value: ICheckboxGroupValue) => boolean | void;'}

@params:
- `value: object` - the current value of the control. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of the checkbox.

@returns:
Return `false` to prevent changing the value of the control; otherwise, `true`.

@example:
form.getItem("CheckboxGroup").events.on("beforeChange", function(value) {
    console.log("beforeChange", value);
    return true;
});

@descr:

**Change log**: The event was added in v8.0