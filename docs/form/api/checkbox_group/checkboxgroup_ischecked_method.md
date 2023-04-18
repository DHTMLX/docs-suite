---
sidebar_label: isChecked()
title: JavaScript Form - isChecked Checkbox Group Method 
description: You can explore the isChecked method of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# isChecked()

@short: checks whether a checkbox of the CheckboxGroup control is checked

@signature: {'isChecked(id?: string): boolean | { [key: string]: boolean };'}

@params:
- `id: string` - optional, the id of a checkbox

@returns:
Either a boolean value or an object.

If the id of a checkbox is specified, the method returns boolean value . `true`, if the checkbox is checked; otherwise, `false`.

If the id of a checkbox is not specified, the method returns an object with a set of *key:value* pairs where *key* is the id of a checkbox and *value* is the state of the checkbox.

@example:
form.getItem("CheckboxGroup").isChecked("checkbox_id_3") 
// -> true/false

form.getItem("CheckboxGroup").isChecked() 
// -> {  "checkbox_id_1": true,  "checkbox_id_2": false }

@descr:
