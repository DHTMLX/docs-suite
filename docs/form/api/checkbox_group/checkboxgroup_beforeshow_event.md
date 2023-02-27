---
sidebar_label: beforeShow
title: JavaScript Form - beforeShow Checkbox Group Event 
description: You can explore the beforeShow event of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeShow

@short: fires before a control or its checkbox is shown

@signature: {'beforeShow: (value: ICheckboxGroupValue, id?: string) => boolean | void;'}

@params:
- `value: object` - the current value of the control. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of the checkbox.
- `id?: string` - optional, the ID of the checkbox of the control

@returns:
Return `false` to prevent a control or its checkbox from being shown; otherwise, `true`.

@example:
form.getItem("CheckboxGroup").events.on("beforeShow", function(value, id) {
    console.log("beforeShow", value, id);
    return true;
});

@descr:

@changelog: The **id** parameter was added in v8.0