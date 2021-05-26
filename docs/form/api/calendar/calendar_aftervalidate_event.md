---
sidebar_label: afterValidate
title: JavaScript Form - afterValidate Datepicker Event 
hide_title: true
description: You can explore the afterValidate Datepicker event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# afterValidate

@short: fires after the control value is validated

@signature: {'afterValidate: (value: string | Date, isValid: boolean) => void;'} 

@params:
- `value: string | Date` - the validated value
- `isValid: boolean` - the result of validation

@example:
form.getItem("datepicker").events.on("AfterValidate", function(value, isValid) {
    console.log("AfterValidate", value, isValid);
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/calendar/calendar_validate_method.md)
