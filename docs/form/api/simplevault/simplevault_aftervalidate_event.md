---
sidebar_label: afterValidate
title: JavaScript Form - afterValidate Simple Vault Event 
description: You can explore the afterValidate event of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterValidate

@short: fires after the control value is validated

@signature: {'afterValidate: (value: ISimpleVaultValue[], isValidate: boolean) => void;'}

@params:
- `value: array` - the validated value
- `isValidate: boolean` - the result of validation

@example:
form.getItem("simplevault").events.on("afterValidate", function(value, isValidate) {
    console.log("afterValidate", value, isValidate);
});

@descr:

@changelog: added in v7.0
