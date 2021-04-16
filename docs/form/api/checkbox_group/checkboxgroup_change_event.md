---
sidebar_label: change
title: change
---          

@short: fires on changing the value of a control
 

@params:
- value     object     the current value of the control. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of a checkbox.


@example:
form.getItem("CheckboxGroup").events.on("Change", function(value) {
    console.log("Change", value);
});


@template: api_event
@descr:


