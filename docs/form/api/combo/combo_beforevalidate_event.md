---
sidebar_label: beforeValidate
title: beforeValidate
---          

@short: fires before the control value is validated
 

@params:
- value       string|string[]  the value to be validated

@returns:
param   boolean     false - to cancel the default action of the event, otherwise true

@example:
form.getItem("combo").events.on("BeforeValidate", function(value) {
    console.log("BeforeValidate", value);
    return true;
});


@template: api_event
@descr:

@relatedapi: form/api/combo/combo_validate_method.md

@changelog: added in v7.0
