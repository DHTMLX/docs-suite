---
sidebar_label: beforeValidate
title: JavaScript Form - beforeValidate Checkbox Group Event 
description: You can explore the beforeValidate event of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeValidate

@short: fires before the control value is validated

@signature: {'beforeValidate: (value: ICheckboxGroupValue) => boolean | void;'}

@params:
`value: object` - the value to be validated. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of the checkbox.

@returns:
Return `false` to cancel the default action of the event; otherwise, `true`.

@example:
form.getItem("CheckboxGroup").events.on("BeforeValidate", function(value) {
    console.log("BeforeValidate", value);
    return true;
});

@descr:
