---
sidebar_label: validate()
title: JavaScript Form - validate Combo Box Method 
description: You can explore the validate method of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# validate()

@short: validates a Combo control

@signature: {'validate(silent?: boolean, validateValue?: string | string[]): boolean;'}

@params:
- `silent: boolean` - optional, if true - the method will return the result of validation without calling validation events and without modifying the control visually
- `validateValue: string | string[]` - optional, the id(s) of the item(s) from data collection that should be validated. If not specified, the method validates the currently selected item(s).

@returns:
`true`, if a control is valid; otherwise, `false`.

@example:
// the method validates the specified value
form.getItem("combo").validate(true, "id_2"); // -> true/false

// the method validates the currently selected items
form.getItem("combo").validate(true); // -> true/false

@descr:

When calling without parameters or setting the **silent** parameter to *false*, the method invokes the [BeforeValidate](form/api/combo/combo_beforevalidate_event.md) and [AfterValidate](form/api/combo/combo_aftervalidate_event.md) events and visually modifies the control.

~~~js
// the method validates the specified item
form.getItem("combo").validate(false, "id_2"); // -> true/false

// the method validates the currently selected item(s)
form.getItem("combo").validate(); // -> true/false
~~~

@changelog: 

The **silent** and **validateValue** parameters are added in v7.0
