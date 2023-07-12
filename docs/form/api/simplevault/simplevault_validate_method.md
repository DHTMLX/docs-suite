---
sidebar_label: validate()
title: JavaScript Form - validate Simple Vault Method 
description: You can explore the validate method of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# validate()

@short: validates a SimpleVault control

@signature: {'validate(silent?: boolean, validateValue?: object[]): boolean;'}

@params:
- `silent: boolean` - optional, if *true* - the method will return the result of validation without calling validation events and without modifying the control visually
- `validateValue: object[]` - optional, the value to be validated. If not specified, the method validates the current value of the control.

@returns:
`true`, if a control is valid; otherwise, `false`.

@example:
form.getItem("simplevault").validate(true);
// -> true/false

@descr:

When calling without the **silent** parameter or setting it to *false*, the method invokes the [BeforeValidate](form/api/simplevault/simplevault_beforevalidate_event.md) and [AfterValidate](form/api/simplevault/simplevault_aftervalidate_event.md) events and modifies the control visually.

~~~js
form.getItem("simplevault").validate(); // -> true/false
form.getItem("simplevault").validate(false); // -> true/false
~~~

@changelog:
The **silent** parameter is added in v7.0