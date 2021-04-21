---
sidebar_label: blur
title: blur
---          

`to do - check`

@short: fires on focus removal from a Form control

@signature: 

@params:
- value - the current value of the control
- name - the name `or id - check` of the Form control 
- id - id of the element of the Form control (for RadioGroup, CheckboxGroup, `Combo - check`)

@example:
form.event.on("blur", function(name, value, id) {
    console.log(name, value, id);
});


@relatedapi: 

@changelog: added v7.2
