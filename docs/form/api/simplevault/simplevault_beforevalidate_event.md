---
sidebar_label: beforeValidate
title: beforeValidate
---          

@short: fires before the control value is validated
 

@params:
- value       array  the value to be validated

@returns:
param   boolean     false - to cancel the default action of the event, otherwise true

@example:
form.getItem("simplevault").events.on("BeforeValidate", function(value) {
    console.log("BeforeValidate", value);
    return true;
});


@template: api_event
@descr:


@changelog: added in v7.0
