---
sidebar_label: beforeShow
title: beforeShow
---          

@short: fires before a control is shown
 

@params:
- value     object     the current value of the control. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of a checkbox.

@returns:
param   boolean     false - to prevent a control from being shown, otherwise - true


@example:
form.getItem("CheckboxGroup").events.on("BeforeShow", function(value) {
    console.log("BeforeShow", value);
    return true;
});


@template: api_event
@descr:


