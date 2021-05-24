---
sidebar_label: afterValidate
title: afterValidate
---          

@short: fires after the control value is validated

@signature: {'afterValidate: (value: ICheckboxGroupValue, isValidate: boolean) => void;'} 

@params:
- `value: object` - the validated value. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of the checkbox.
- `isValidate: boolean` - the result of validation

@example:
form.getItem("CheckboxGroup").events.on("AfterValidate", function(value, isValidate) {
    console.log("AfterValidate", value, isValidate);
});

@descr:
