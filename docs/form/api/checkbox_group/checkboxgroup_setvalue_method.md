---
sidebar_label: setValue()
title: JavaScript Form - setValue Checkbox Group Method 
description: You can explore the setValue method of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setValue()

@short: sets the value for a CheckboxGroup control

@signature: {'setValue(value: ICheckboxGroupValue): void;'}

@params:
- `value: object` - the value to be set. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the state of the checkbox

@example:
form.getItem("CheckboxGroup").setValue({
    "checkbox_id_1": true,
    "checkbox_id_2": false,
    "checkbox_id_3": true
});

@descr:
