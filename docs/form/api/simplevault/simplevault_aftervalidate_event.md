---
sidebar_label: afterValidate
title: afterValidate
---          

@short: fires after the control value is validated
todoanton any приходит из d.ts
@signature: {'afterValidate: (name: string, value: any, isValid: boolean) => void;'}
 
@params:
- value       array  the validated value
- isValid     boolean     the result of validation

@example:
form.getItem("simplevault").events.on("AfterValidate", function(value, isValid) {
    console.log("AfterValidate", value, isValid);
});

@template: api_event
@descr:

@changelog: added in v7.0
