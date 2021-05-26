---
sidebar_label: afterValidate
title: JavaScript Form - afterValidate Checkbox Event 
hide_title: true
description: You can explore the afterValidate Checkbox event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# afterValidate

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
