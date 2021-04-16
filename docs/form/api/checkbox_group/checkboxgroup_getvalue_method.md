---
sidebar_label: getValue
title: getValue
---          

@short: returns the current value/state of a checkbox(s)

@params:
- id    string  optional, the id of a checkbox

@returns:
param   string|boolean|object     the current value/state of the checkbox

@example:
// returns string value if the value is specified in the checkbox configuration
form.getItem("CheckboxGroup").getValue("checkbox_id_1"); //-> "some_value"
 
// returns boolean state if the value is not specified for the checkbox
form.getItem("CheckboxGroup").getValue("checkbox_id_2"); //-> true/false 


@template: api_method
@descr:
If the id of a checkbox is not specified, the method returns an object. The object contains a set of *key:value* pairs where *key* is the id of a checkbox and *value* is either the value of a checkbox or its state (if the value attribute is not specified for the checkbox).

~~~js
// returns an object with current values/states of the checkboxes
form.getItem("CheckboxGroup").getValue() 
// -> { "checkbox_id_1": "some_value_1",  "checkbox_id_2": true }
~~~