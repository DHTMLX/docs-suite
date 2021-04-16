---
sidebar_label: validate
title: validate
---          

@short: validates a DatePicker control
 
@params:
- silent    boolean     optional, if true - the method will return the result of validation without calling validation events and without modifying the control visually
- validateValue     string|Date     optional, the value to be validated. If not specified, the method validates the current value of the control

@returns:
param   boolean     the result of validation: true - if a control is valid, otherwise false

@example:
// the method validates the specified value
form.getItem("datepicker").validate(true, "03/10/20"); // -> true/false

// the method validates the current value
form.getItem("datepicker").validate(true); // -> true/false


@template: api_method
@descr:

When calling without parameters or setting the **silent** parameter to *false*, the method invokes the [BeforeValidate](form/api/calendar/calendar_beforevalidate_event.md) and [AfterValidate](form/api/calendar/calendar_aftervalidate_event.md) events and visually modifies the control.

~~~js
// the method validates the specified value
form.getItem("datepicker").validate(false, "03/10/20"); // -> true/false

// the method validates the current value
form.getItem("datepicker").validate(); // -> true/false
~~~


@changelog: 
The **silent** and **validateValue** parameters are added in v7.0