---
sidebar_label: setValue()
title: JavaScript Form - setValue Toggle Group Method 
description: You can explore the setValue method of the Toggle Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setValue()

@short: defines the state of the option's elements

@signature: {'setValue(value: {[id: string]: boolean }): void | boolean;'}

@params: 

- `value: object` - the value to be set. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a toggle and <i>value</i> is the state of the toggle


@example:
form.getItem("ToggleGroup").setValue({
    "toggle1": true,
    "toggle2": false,
    "toggle3": true
});

@descr: