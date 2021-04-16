---
sidebar_label: setValue
title: setValue
---          

@short: sets the value for a CheckboxGroup control 

@params:
- value      object      the value to be set. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the state of a checkbox

@example:
form.getItem("CheckboxGroup").setValue({
    "checkbox_id_1": true,
    "checkbox_id_2": false,
    "checkbox_id_3": true
});


@template: api_method
@descr:


