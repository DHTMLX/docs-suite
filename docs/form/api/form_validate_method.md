---
sidebar_label: validate()
title: validate()
---          

@short: validates form fields

@signature: {'validate(silent): boolean;'}

@params:
`silent: boolean` - optional, if `true` - the method will return the result of validation without calling validation events and without modifying the form visually

@returns:
The result of validation: `true`, if a form is valid; otherwise, `false`.

@example:
var result = form.validate(true); // -> true/false

@descr:

**Related sample**: [Form. Validate](https://snippet.dhtmlx.com/pmz0zk16)

Starting with v7.0, the method validates only [the required fields or the fields that contain validation rules](form/work_with_form.md#validatingform).

Calling without the **silent** parameter, the method invokes the [BeforeValidate](form/api/form_beforevalidate_event.md) and [AfterValidate](form/api/form_aftervalidate_event.md) events and modifies the form visually.

~~~js
var result = form.validate(); // -> true/false
~~~

@changelog: 

The **silent** parameter is added in v7.0.

[comment]: # (@related: form/work_with_form.md#validating-form)
