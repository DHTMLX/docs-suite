---
sidebar_label: validate()
title: validate()
---          

@short: validates a Select control

@signature: {'validate(silent?: boolean): boolean;'}

@params:
`silent: boolean` - optional, if *true* - the method will return the result of validation without calling validation events and without modifying the control visually

@returns:
`true`, if a control is valid; otherwise, `false`.

@example:
form.getItem("select").validate(true);
// -> true/false

@descr:

When calling without the  **silent** parameter or setting it to *false*, the method invokes the [BeforeValidate](form/api/select/select_beforevalidate_event.md) and [AfterValidate](form/api/select/select_aftervalidate_event.md) events and visually modifies the control.

~~~js
form.getItem("select").validate(); // -> true/false
form.getItem("select").validate(false); // -> true/false
~~~

@changelog:
The **silent** parameter is added in v7.0