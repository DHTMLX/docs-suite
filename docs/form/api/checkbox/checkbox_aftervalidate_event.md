---
sidebar_label: afterValidate
title: JavaScript Form - afterValidate Checkbox Event 
description: You can explore the afterValidate event of the Checkbox control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterValidate

@short: fires after the control value is validated

@signature: {'afterValidate: (value: string | boolean, isValidate: boolean) => void;'}

@params:
- `value: string | boolean` - the validated value
- `isValidate: boolean` - the result of validation

@example:
form.getItem("checkbox").events.on("AfterValidate", function(value, isValidate) {
    console.log("AfterValidate", value, isValidate);
});

@descr:

@changelog: added in v7.0
