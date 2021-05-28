---
sidebar_label: change
title: JavaScript Form - change Checkbox Group Event 
description: You can explore the change Checkbox Group event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# change

@short: fires on changing the value of a control

@signature: {'change: (value: ICheckboxGroupValue) => void;'}

@params:
`value: object` - the current value of the control. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of the checkbox.

@example:
form.getItem("CheckboxGroup").events.on("Change", function(value) {
    console.log("Change", value);
});

@descr:
