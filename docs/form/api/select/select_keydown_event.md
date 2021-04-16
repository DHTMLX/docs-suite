---
sidebar_label: keydown 
title: keydown 
---   

@short: fires on keyboard event in a Select control

@signature:

@params:
- e – keyboard event
- name – the name or id of the Form control 
- id – id of the element of the Form control (for RadioGroup, CheckboxGroup, Combo)

@example:
form.getItem("select").events.on("keydown", function(event, name) {
    console.log(event, name, id);
});

@changelog: added in v7.2
@relatedsample: https://snippet.dhtmlx.com/vyipsaoa Form. Events