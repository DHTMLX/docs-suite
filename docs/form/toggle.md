---
sidebar_label: Toggle
title: JavaScript Form - Toggle 
description: You can explore the Toggle of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Toggle

A button control that switches between the pressed and unpressed states when the user clicks it.

![Toggle button form control shown with an eye icon in pressed and unpressed states in DHTMLX Suite](/img/form/form_toggle.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. Toggle](https://snippet.dhtmlx.com/yqi21ykr?tag=toggle)

## Adding Toggle

You can add a Toggle control during form initialization:

~~~js
const form = new dhx.Form("form_container", {
    rows: [
        {            
            type: "toggle",
            name: "toggle",
            icon: "dxi dxi-eye",
            offIcon: "dxi dxi-eye-off",
            text: "Visible",
            offText: "Invisible"
        }
    ]
});
~~~

### Properties

View [the full list of Toggle configuration properties](form/api/toggle/api_toggle_properties.md).

## Working with Toggle

You can manage a Toggle control with the methods and events of the object that the [`getItem()`](form/api/form_getitem_method.md) method returns.

For example, you can get the value of the control:

~~~js
const value = form.getItem("toggle").getValue();
~~~

### Methods

Check [the full list of Toggle methods](form/api/api_overview.md#toggle-methods).

### Events

Check [the full list of Toggle events](form/api/api_overview.md#toggle-events).
