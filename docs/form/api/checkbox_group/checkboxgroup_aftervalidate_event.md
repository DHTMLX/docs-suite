---
sidebar_label: afterValidate
title: JavaScript Form - afterValidate Checkbox Group Event 
hide_title: true
description: You can explore the afterValidate Checkbox Group event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# afterValidate

@short: fires after the control value is validated

@signature: {'afterValidate: (value: ICheckboxGroupValue, isValid: boolean) => void;'} 

@params:
- `value: object` - the validated value. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of the checkbox.
- `isValid: boolean` - the result of validation

@example:
form.getItem("CheckboxGroup").events.on("AfterValidate", function(value, isValid) {
    console.log("AfterValidate", value, isValid);
});

@descr:
