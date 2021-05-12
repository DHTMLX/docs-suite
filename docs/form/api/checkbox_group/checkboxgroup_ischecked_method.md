---
sidebar_label: isChecked
title: isChecked
---          

@short: checks whether a checkbox of the CheckboxGroup control is checked

@signature: {'isChecked(id?: string): boolean | { [key: string]: boolean };'}

@params:
- id    string  optional, the id of a checkbox

@returns:
param   boolean|object     true, if a checkbox is checked, otherwise - false

@example:
form.getItem("CheckboxGroup").isChecked("checkbox_id_3") 
// -> true/false



@descr:

If the id of a checkbox is not specified, the method returns an object with a set of *key:value* pairs where *key* is the id of a checkbox and *value* is the state of the checkbox:

~~~js
form.getItem("CheckboxGroup").isChecked() 
// -> {  "checkbox_id_1": true,  "checkbox_id_2": false }
~~~

