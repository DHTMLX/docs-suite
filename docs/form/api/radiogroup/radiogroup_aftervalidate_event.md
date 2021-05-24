---
sidebar_label: afterValidate
title: afterValidate
---          

@short: fires after the control value is validated
 
@signature: {'afterValidate: (value: string, isValidate: boolean) => void;'}

@params:
- `value: string` - the validated value
- `isValidate: boolean` - the result of validation

@example:
form.getItem("radiogroup").events.on("AfterValidate", function(value, isValidate) {
    console.log("AfterValidate", value, isValidate);
});

@descr:

@changelog: added in v7.0
