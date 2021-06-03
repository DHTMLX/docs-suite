---
sidebar_label: beforeValidate
title: JavaScript Form - beforeValidate Event 
description: You can explore the beforeValidate event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeValidate

@short: fires before validation of form fields has started

@signature: {'beforeValidate: (name: string, value: any) => boolean | void;'}

@params:
- `name|id: string` - the name (or id, if the name is not specified) of the Form control
- `value: any` - the value to be validated

@returns:
Return `false` to prevent validation; otherwise, `true`.

@example:
form.events.on("BeforeValidate", function(name, value) {
    console.log("BeforeValidate", name, value); 
    return true;
});

@descr:

**Related sample**: [Form. Events](https://snippet.dhtmlx.com/vyipsaoa)

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/form_validate_method.md)
