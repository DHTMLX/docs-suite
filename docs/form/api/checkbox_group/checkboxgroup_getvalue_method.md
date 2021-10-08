---
sidebar_label: getValue()
title: JavaScript Form - getValue Checkbox Group Method 
description: You can explore the getValue method of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getValue()

@short: returns the current value/state of a checkbox(s)

@signature: {'getValue(id?: string): ICheckboxGroupValue | string | boolean;'}

@params:
`id: string` - optional, the id of a checkbox

@returns:
Either a string with the current value of the checkbox, or boolean value with the state of the checkbox, or an object with current values/states of the checkboxes.

@example:
// returns string value if the value is specified in the checkbox configuration
form.getItem("CheckboxGroup").getValue("checkbox_id_1"); //-> "some_value"
 
// returns boolean state if the value is not specified for the checkbox
form.getItem("CheckboxGroup").getValue("checkbox_id_2"); //-> true/false 

@descr:

If the id of a checkbox is not specified, the method returns an object. The object contains a set of *key:value* pairs where *key* is the id of a checkbox and *value* is either the value of the checkbox or its state (if the value attribute is not specified for the checkbox).

~~~js
// returns an object with current values/states of the checkboxes
form.getItem("CheckboxGroup").getValue() 
// -> { "checkbox_id_1": "some_value_1",  "checkbox_id_2": true }
~~~
