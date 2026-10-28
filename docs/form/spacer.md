---
sidebar_label: Spacer
title: JavaScript Form - Spacer 
description: You can explore the Spacer of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Spacer

A control that takes up space in a form to align other controls.

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

## Adding Spacer

You can add a Spacer control during form initialization:

~~~js
const form = new dhx.Form("form_container", {
    rows: [
        {
              type: "input",
              label: "Name",
              name: "name"
        },
        {
              type: "spacer",
            name: "spacer"
        },
        {
              type: "input",
              label: "Email",
              name: "email"
        }
    ]
});
~~~

### Properties

View [the full list of Spacer configuration properties](form/api/spacer/api_spacer_properties.md).

## Working with Spacer

You can manage a Spacer control with the methods and events of the object that the [`getItem()`](form/api/form_getitem_method.md) method returns.

For example, you can hide the control:

~~~js
form.getItem("spacer").hide();
~~~

### Methods

Check [the full list of Spacer methods](form/api/api_overview.md#spacer-methods).

### Events

Check [the full list of Spacer events](form/api/api_overview.md#spacer-events).
