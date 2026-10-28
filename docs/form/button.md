---
sidebar_label: Button
title: JavaScript Form - Button 
description: You can explore the Button of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Button

A simple button that can have an icon. A button can submit form data to a server.

![Button form control styled as a blue flat Send button in DHTMLX Suite](/img/form/form_button.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

## Adding Button

You can add a Button control during form initialization:

~~~js
const form = new dhx.Form("form_container", {
    rows: [
        {
            type: "button",
            name: "button",
            text: "Send",
            size: "medium",
            view: "flat",
            color: "primary"
        }   
      ]
});
~~~

### Properties

View [the full list of Button configuration properties](form/api/button/api_button_properties.md).

## Working with Button

You can manage a Button control with the methods and events of the object that the [`getItem()`](form/api/form_getitem_method.md) method returns.

For example, you can disable the control:

~~~js
form.getItem("button").disable();
~~~

### Methods

Check [the full list of Button methods](form/api/api_overview.md#button-methods).

### Events

Check [the full list of Button events](form/api/api_overview.md#button-events).
