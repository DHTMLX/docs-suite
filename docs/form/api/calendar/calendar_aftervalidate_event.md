---
sidebar_label: afterValidate
title: afterValidate
---          

@short: fires after the control value is validated

@signature: {'afterValidate: (value: string | Date, isValidate: boolean) => void;'} 

@params:
- `value: string | Date` - the validated value
- `isValidate: boolean` - the result of validation

@example:
form.getItem("datepicker").events.on("AfterValidate", function(value, isValid) {
    console.log("AfterValidate", value, isValid);
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/calendar/calendar_validate_method.md)
