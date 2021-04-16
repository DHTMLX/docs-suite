---
sidebar_label: afterValidate
title: afterValidate
---          

@short: fires after the control value is validated
 

@params:
- value       object  the validated value. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of a checkbox.
- isValid     boolean     the result of validation


@example:
form.getItem("CheckboxGroup").events.on("AfterValidate", function(value, isValid) {
    console.log("AfterValidate", value, isValid);
});


@template: api_event
@descr:



