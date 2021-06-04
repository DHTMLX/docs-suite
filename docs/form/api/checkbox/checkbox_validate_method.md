---
sidebar_label: validate()
title: JavaScript Form - validate Checkbox Method 
description: You can explore the validate Checkbox method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# validate()

@short: validates a Checkbox control

@signature: {'validate(silent?: boolean): boolean;'}

@params:
`silent: boolean` - optional, if *true* - the method will return the result of validation without calling validation events and without modifying the control visually

@returns:
`true`, if a control is valid. Otherwise, `false`.

@example:
form.getItem("checkbox").validate(true); // -> true/false

@descr:

When calling without the  **silent** parameter or setting it to *false*, the method invokes the [BeforeValidate](form/api/checkbox/checkbox_beforevalidate_event.md) and [AfterValidate](form/api/checkbox/checkbox_aftervalidate_event.md) events and visually modifies the control.

~~~js
form.getItem("checkbox").validate(); // -> true/false
form.getItem("checkbox").validate(false); // -> true/false
~~~

@changelog:
The **silent** parameter is added in v7.0