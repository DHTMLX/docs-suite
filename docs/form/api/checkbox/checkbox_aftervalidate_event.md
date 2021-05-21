---
sidebar_label: afterValidate
title: afterValidate
---          

@short: fires after the control value is validated
 
@signature: {'afterValidate: (value: string | boolean, isValid: boolean) => void;'}

@params:
- `value: string | boolean` - the validated value
- `isValid: boolean` - the result of validation

@example:
form.getItem("checkbox").events.on("AfterValidate", function(value, isValid) {
    console.log("AfterValidate", value, isValidate);
});

@descr:

@changelog: added in v7.0
