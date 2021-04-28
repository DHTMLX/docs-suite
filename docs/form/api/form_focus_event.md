---
sidebar_label: focus
title: focus
---          

`to do check`

@short: fires on focus in a Form control

@signature: 

@params:
- value - the current value of the control
- name - the name `or id - check` of the Form control 
- id - id of the element of the Form control (for RadioGroup, CheckboxGroup, `Combo - check`)

@example:
form.event.on("focus", function(name, value, id) {
    console.log(name, value);
});

@relatedapi: 

**Related sample**: [Form. Events](https://snippet.dhtmlx.com/vyipsaoa) `to do - add focus event`

@changelog: Added in v7.2
