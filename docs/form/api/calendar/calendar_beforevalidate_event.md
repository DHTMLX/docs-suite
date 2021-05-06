---
sidebar_label: beforeValidate
title: beforeValidate
---          

@short: fires before the control value is validated

@signature: {'beforeValidate: (value: string | Date) => boolean | void;'}

@params:
- value       Date|string  the value to be validated

@returns:
param   boolean     false - to cancel the default action of the event, otherwise true

@example:
form.getItem("datepicker").events.on("BeforeValidate", function(value) {
    console.log("BeforeValidate", value);
    return true;
});



@descr:

@relatedapi: form/api/calendar/calendar_validate_method.md

@changelog: added in v7.0
