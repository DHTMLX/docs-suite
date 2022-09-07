---
sidebar_label: validate()
title: JavaScript Form - validate Method 
description: You can explore the validate method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# validate()

@short: validates form fields

@signature: {'validate(silent?: boolean): boolean;'}

@params:
`silent: boolean` - optional, if `true` - the method will return the result of validation without calling validation events and without modifying the form visually

@returns:
The result of validation: `true`, if a form is valid; otherwise, `false`.

@example:
const result = form.validate(true); // -> true/false

@descr:

**Related sample**: [Form. Validate](https://snippet.dhtmlx.com/pmz0zk16)

Starting with v7.0, the method validates only [the required fields or the fields that contain validation rules](form/work_with_form.md#validatingform).

Calling without the **silent** parameter, the method invokes the [BeforeValidate](form/api/form_beforevalidate_event.md) and [AfterValidate](form/api/form_aftervalidate_event.md) events and modifies the form visually.

~~~js
const result = form.validate(); // -> true/false
~~~

@changelog: 

The **silent** parameter is added in v7.0.

[comment]: # (@related: form/work_with_form.md#validating-form)
