---
sidebar_label: validate()
title: JavaScript Form - validate Colorpicker Method 
description: You can explore the validate method of the Colorpicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# validate()

@short: validates a ColorPicker control

@signature: {'validate(silent?: boolean, validateValue?: string): boolean;'}

@params:
- `silent: boolean` - optional, if true - the method will return the result of validation without calling validation events and without modifying the control visually
- `validateValue: string` - optional, the value to be validated. If not specified, the method validates the current value of the control

@returns:
`true` - if a control is valid; otherwise, `false`.

@example:
// the method validates the specified value
form.getItem("colorpicker").validate(true, "#92E7DC"); // -> true/false

// the method validates the current value
form.getItem("colorpicker").validate(true); // -> true/false

@descr:

When calling without parameters or setting the **silent** parameter to *false*, the method invokes the [BeforeValidate](form/api/colorpicker/colorpicker_beforevalidate_event.md) and [AfterValidate](form/api/colorpicker/colorpicker_aftervalidate_event.md) events and visually modifies the control.

~~~js
// the method validates the specified value
form.getItem("colorpicker").validate(false, "#92E7DC"); // -> true/false

// the method validates the current value
form.getItem("colorpicker").validate(); // -> true/false
~~~

@changelog:
The **silent** and **validateValue** parameters are added in v7.0
