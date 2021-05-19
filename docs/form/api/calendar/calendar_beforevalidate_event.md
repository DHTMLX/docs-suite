---
sidebar_label: beforeValidate
title: beforeValidate
---          

@short: fires before the control value is validated

@signature: {'beforeValidate: (value: string | Date) => boolean | void;'}

@params:
`value: string | Date` - the value to be validated

@returns:
Return `false` to cancel the default action of the event; otherwise - `true`.

@example:
form.getItem("datepicker").events.on("BeforeValidate", function(value) {
    console.log("BeforeValidate", value);
    return true;
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/calendar/calendar_validate_method.md)
