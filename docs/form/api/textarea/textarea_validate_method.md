---
sidebar_label: validate
title: validate
---          

@short: validates a Textarea control

@params:
- silent    boolean     optional, if true - the method will return the result of validation without calling validation events and without modifying the control visually
- validateValue     string     optional, the value to be validated. If not specified, the method validates the current value of the control

@returns:
param   boolean     true - if a control is valid, otherwise false

@example:
// the method validates the specified value
form.getItem("textarea").validate(true, "I am Text"); // -> true/false

// the method validates the current value
form.getItem("textarea").validate(true); // -> true/false

@template: api_method
@descr:
When calling without parameters or setting the **silent** parameter to *false*, the method invokes the [BeforeValidate](form/api/textarea/textarea_beforevalidate_event.md) and [AfterValidate](form/api/textarea/textarea_aftervalidate_event.md) events and visually modifies the control.

~~~js
// the method validates the specified value
form.getItem("textarea").validate(false, "I am Input"); // -> true/false

// the method validates the current value
form.getItem("textarea").validate(); // -> true/false
~~~


@changelog: 
The **silent** and **validateValue** parameters are added in v7.0


