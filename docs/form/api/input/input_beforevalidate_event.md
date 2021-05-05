---
sidebar_label: beforeValidate
title: beforeValidate
---          

@short: fires before the control value is validated

@signature: {'beforeValidate: (value: string | number) => boolean | void;'}

@params:
- value       string | number  the value to be validated

@returns:
param   boolean | void     false - to cancel the default action of the event, otherwise true

@example:
form.getItem("input").events.on("BeforeValidate", function(value) {
    console.log("BeforeValidate", value);
    return true;
});



@descr:

@relatedapi: form/api/input/input_validate_method.md

@changelog: added in v7.0
