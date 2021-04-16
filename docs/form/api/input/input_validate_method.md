---
sidebar_label: validate
title: validate
---          

@short: validates an Input control

@params:
- silent    boolean     optional, if true - the method will return the result of validation without calling validation events and without modifying the control visually
- validateValue     string|number     optional, the value to be validated. If not specified, the method validates the current value of the control

@returns:
param   boolean     true - if a control is valid, otherwise false

@example:
// the method validates the specified value
form.getItem("input").validate(true, "I am Input"); // -> true/false

// the method validates the current value
form.getItem("input").validate(true); // -> true/false

@template: api_method
@descr:
When calling without parameters or setting the **silent** parameter to *false*, the method invokes the [BeforeValidate](form/api/input/input_beforevalidate_event.md) and [AfterValidate](form/api/input/input_aftervalidate_event.md) events and visually modifies the control.

~~~js
// the method validates the specified value
form.getItem("input").validate(false, "I am Input"); // -> true/false

// the method validates the current value
form.getItem("input").validate(); // -> true/false
~~~


@changelog: 
The **silent** and **validateValue** parameters are added in v7.0

