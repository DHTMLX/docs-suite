---
sidebar_label: ToggleGroup
title: JavaScript Form - ToggleGroup 
description: You can explore the ToggleGroup of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# ToggleGroup

A control that groups toggle buttons.

![ToggleGroup form controls with size buttons and text alignment icon buttons in DHTMLX Suite](/img/form/form_togglegroup.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. ToggleGroup](https://snippet.dhtmlx.com/yqi21ykr?tag=toggle_group)

## Adding ToggleGroup

You can add a ToggleGroup control during form initialization:

~~~js
const form = new dhx.Form("form_container", { 
    rows: [
           {
            type: "toggleGroup",
            name: "togglegroup",
            full: true,
            gap: 4,
            options: [
                {
                    id: "left",
                    icon: "dxi dxi-format-align-left",
                },
                {
                    id: "center",
                    icon: "dxi dxi-format-align-center",
                },
                {
                    id: "right",
                    icon: "dxi dxi-format-align-right",
                },
            ]
        }
    ]
});
~~~

### Properties

View [the full list of ToggleGroup configuration properties](form/api/togglegroup/api_togglegroup_properties.md).

## Working with ToggleGroup

You can manage a ToggleGroup control with the methods and events of the object that the [`getItem()`](form/api/form_getitem_method.md) method returns.

For example, you can hide the control:

~~~js
form.getItem("togglegroup").hide();
~~~

### Methods

Check [the full list of ToggleGroup methods](form/api/api_overview.md#togglegroup-methods).

### Events

Check [the full list of ToggleGroup events](form/api/api_overview.md#togglegroup-events).
