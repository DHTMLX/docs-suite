---
sidebar_label: validate()
title: JavaScript Form - validate Checkbox Group Method 
description: You can explore the validate method of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# validate()

@short: validates a CheckboxGroup control

@signature: {'validate(silent?: boolean): boolean;'}

@params:
- `silent: boolean` - optional, if *true* - the method will return the result of validation without calling validation events and without modifying the control visually

@returns:
`true`, if a control is valid; otherwise, `false`.

@example:
form.getItem("CheckboxGroup").validate(true); // -> true/false

@descr:

When calling without the  **silent** parameter or setting it to *false*, the method invokes the [beforeValidate](form/api/checkbox_group/checkboxgroup_beforevalidate_event.md) and [afterValidate](form/api/checkbox_group/checkboxgroup_aftervalidate_event.md) events and visually modifies the control.

~~~js
form.getItem("CheckboxGroup").validate(); // -> true/false
form.getItem("CheckboxGroup").validate(false); // -> true/false
~~~

@changelog:
The **silent** parameter is added in v7.0