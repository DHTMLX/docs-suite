---
sidebar_label: Checkbox
title: JavaScript Form - Checkbox 
description: You can explore the Checkbox of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Checkbox

A control that displays the specified value and allows you to switch it to the opposite one.

![Checkbox form control shown in unchecked and checked states in DHTMLX Suite](/img/form/form_checkbox.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. Checkboxes](https://snippet.dhtmlx.com/scs712zl?tag=checkbox)

## Adding Checkbox

You can add a Checkbox control during form initialization:

~~~js
const form = new dhx.Form("form_container", {
    rows: [
        {    
            type: "checkbox",
            label: "I agree",
            name: "agree",
            id: "agree",
            value: "checkboxvalue"
        }
    ]
});
~~~

### Properties

View [the full list of Checkbox configuration properties](form/api/checkbox/api_checkbox_properties.md).

## Working with Checkbox

You can manage a Checkbox control with the methods and events of the object that the [`getItem()`](form/api/form_getitem_method.md) method returns.

For example, you can get the value of the control:

~~~js
const value = form.getItem("agree").getValue();
~~~

### Methods

Check [the full list of Checkbox methods](form/api/api_overview.md#checkbox-methods).

### Events

Check [the full list of Checkbox events](form/api/api_overview.md#checkbox-events).
