---
sidebar_label: validate()
title: validate()
---          

@short: validates a CheckboxGroup control

@signature: {'validate(silent?: boolean): boolean;'}

@params:
`silent: boolean` - optional, if *true* - the method will return the result of validation without calling validation events and without modifying the control visually

@returns:
`true`, if a control is valid; otherwise, `false`.

@example:
form.getItem("CheckboxGroup").validate(true); // -> true/false

@descr:

When calling without the  **silent** parameter or setting it to *false*, the method invokes the [BeforeValidate](form/api/checkbox_group/checkboxgroup_beforevalidate_event.md) and [AfterValidate](form/api/checkbox_group/checkboxgroup_aftervalidate_event.md) events and visually modifies the control.

~~~js
form.getItem("CheckboxGroup").validate(); // -> true/false
form.getItem("CheckboxGroup").validate(false); // -> true/false
~~~

@changelog:
The **silent** parameter is added in v7.0