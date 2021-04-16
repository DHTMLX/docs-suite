---
sidebar_label: keydown 
title: keydown 
---   

@short: fires on keyboard event in an Input control

@signature:

@params:
- e – keyboard event
- name – the name or id of the form control 
- id – id of the element of the form control (for RadioGroup, CheckboxGroup, Combo)

@example:
form.getItem("input").events.on("keydown", function(event, name) {
    console.log(event, name, id);
});

@changelog: added in v7.2
@relatedsample: https://snippet.dhtmlx.com/vyipsaoa Form. Events
