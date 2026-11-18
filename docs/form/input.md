---
sidebar_label: Input
title: JavaScript Form - Input 
description: You can explore the Input of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Input

A single-line field that allows users to enter text, a password, or a number.

![Input form control with a Name label and a placeholder text in DHTMLX Suite](/img/form/form_input.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. Inputs](https://snippet.dhtmlx.com/9q8fubjm?tag=input)

## Adding Input

You can add an Input control during form initialization:

~~~js
const form = new dhx.Form("form_container", {
    rows: [
        {
            type: "input",
            name: "input",
            label: "Name",
            icon: "dxi dxi-magnify",
            placeholder: "John Doe"           
         } 
    ]
});
~~~

### Properties

View [the full list of Input configuration properties](form/api/input/api_input_properties.md).

## Working with Input

You can manage an Input control with the methods and events of the object that the [`getItem()`](form/api/form_getitem_method.md) method returns.

For example, you can get the value of the control:

~~~js
const value = form.getItem("input").getValue();
~~~

### Methods

Check [the full list of Input methods](form/api/api_overview.md#input-methods).

### Events

Check [the full list of Input events](form/api/api_overview.md#input-events).
