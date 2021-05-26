---
sidebar_label: beforeHide
title: JavaScript Form - beforeHide Checkbox Group Event 
hide_title: true
description: You can explore the beforeHide Checkbox Group event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# beforeHide

@short: fires before a control is hidden

@signature: {'beforeHide: (value: ICheckboxGroupValue, init: boolean) => boolean | void;'}

@params:
- `value: object` - the current value of the control. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of the checkbox.
- `init: boolean` - true, if the event is triggered on the control initialization; otherwise, false

@returns:
Return `false` to prevent a control from being hidden; otherwise, `true`.

@example:
form.getItem("CheckboxGroup").events.on("BeforeHide", function(value, init) {
    console.log("BeforeHide", value, init);
    return true;
});

@descr:
