---
sidebar_label: CheckboxGroup
title: JavaScript Form - CheckboxGroup 
description: You can explore the CheckboxGroup of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# CheckboxGroup

A control that groups checkboxes.

![CheckboxGroup form control with three checkbox options and the first one checked in DHTMLX Suite](/img/form/form_checkboxgroup.png)

**Related sample**: [Form. Checkbox groups](https://snippet.dhtmlx.com/p89u4ovb?tag=checkbox_group)

## Adding CheckboxGroup

You can add a CheckboxGroup control during form initialization:

~~~js
const form = new dhx.Form("form_container", { 
    rows: [
        {
            id: "checkboxGroup",
            type: "checkboxGroup",
            name: "checkboxGroup",
            required: true,
            label: "Checkbox Group",
            labelWidth: 140,
            labelPosition: "left",
            helpMessage: "Help information",
            padding: "50px",
            value: {
                first: true,
            },
            options: {
                padding: "50px",
                rows: [
                    {
                        id: "first",
                        type: "checkbox",
                        text: "Select 1",
                    },
                    {
                        id: "second",
                        type: "checkbox",
                        text: "Select 2",
                        checked: true
                    }
                ]
            }
        }
     ]
});
~~~

### Properties of CheckboxGroup

View [the full list of CheckboxGroup configuration properties](form/api/checkbox_group/api_checkboxgroup_properties.md).

### Properties of a Checkbox in CheckboxGroup

View [the full list of configuration properties for a Checkbox in CheckboxGroup](form/api/checkbox_group/api_checkboxgroup_properties.md#properties-of-a-checkbox-of-checkboxgroup).

## Working with CheckboxGroup

You can manage a CheckboxGroup control with the methods and events of the object that the [`getItem()`](form/api/form_getitem_method.md) method returns.

For example, you can hide the control:

~~~js
form.getItem("checkboxGroup").hide();
~~~

### Methods

Check [the full list of CheckboxGroup methods](form/api/api_overview.md#checkboxgroup-methods).

### Events

Check [the full list of CheckboxGroup events](form/api/api_overview.md#checkboxgroup-events).
