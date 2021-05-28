---
sidebar_label: afterValidate
title: JavaScript Form - afterValidate Simple Vault Event 
hide_title: true
description: You can explore the afterValidate Simple Vault event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# afterValidate

@short: fires after the control value is validated

@signature: {'afterValidate: (value: ISimpleVaultValue[], isValidate: boolean) => void;'}
 
@params:
- `value: array` - the validated value
- `isValidate: boolean` - the result of validation

@example:
form.getItem("simplevault").events.on("AfterValidate", function(value, isValidate) {
    console.log("AfterValidate", value, isValidate);
});

@descr:

@changelog: added in v7.0
