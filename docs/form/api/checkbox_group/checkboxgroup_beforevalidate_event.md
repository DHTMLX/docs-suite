---
sidebar_label: beforeValidate
title: beforeValidate
---          

@short: fires before the control value is validated
 

@params:
- value       object  the value to be validated. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of a checkbox.

@returns:
param   boolean     false - to cancel the default action of the event, otherwise true

@example:
form.getItem("CheckboxGroup").events.on("BeforeValidate", function(value) {
    console.log("BeforeValidate", value);
    return true;
});


@template: api_event
@descr:


