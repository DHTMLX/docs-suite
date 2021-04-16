---
sidebar_label: validate
title: validate
---          

@short: validates a Combo control
 
@params:
- silent    boolean     optional, if true - the method will return the result of validation without calling validation events and without modifying the control visually
- validateValue     string|string[]     optional, the value to be validated. If not specified, the method validates the current value of the control

@returns:
param   boolean     true - if a control is valid, otherwise false

@example:
// the method validates the specified value
form.getItem("combo").validate(true, "id_2"); // -> true/false

// the method validates the current value
form.getItem("combo").validate(true); // -> true/false

@template: api_method
@descr:
When calling without parameters or setting the **silent** parameter to *false*, the method invokes the [BeforeValidate](form/api/combo/combo_beforevalidate_event.md) and [AfterValidate](form/api/combo/combo_aftervalidate_event.md) events and visually modifies the control.

~~~js
// the method validates the specified value
form.getItem("combo").validate(false, "id_2"); // -> true/false

// the method validates the current value
form.getItem("combo").validate(); // -> true/false
~~~


@changelog: 
The **silent** and **validateValue** parameters are added in v7.0

