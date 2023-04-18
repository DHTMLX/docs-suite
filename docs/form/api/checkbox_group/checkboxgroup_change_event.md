---
sidebar_label: change
title: JavaScript Form - change Checkbox Group Event 
description: You can explore the change event of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# change

@short: fires on changing the value of a control

@signature: {'change: (value: {[id: string]: boolean | string}) => void;'}

@params:
- `value: object` - the current value of the control. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of the checkbox.

@example:
form.getItem("CheckboxGroup").events.on("change", function(value) {
    console.log("change", value);
});

@descr:
