---
sidebar_label: Fieldset
title: JavaScript Form - Fieldset 
description: You can explore the Fieldset of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Fieldset

A control that arranges Form controls into groups.

![Fieldset form control grouping Personal info and Contact info input fields in DHTMLX Suite](/img/form/form_fieldset.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. Fieldset](https://snippet.dhtmlx.com/axlwcdrz?tag=fieldset)

**Related sample**: [Form. Fieldset with rows/cols](https://snippet.dhtmlx.com/lo6g167p?tag=fieldset)

## Adding Fieldset

You can add a Fieldset control during form initialization:

~~~js
const form = new dhx.Form("form_container", {
    rows: [
        {
            type: "fieldset",
            label: "Section name",
            name: "f1",
            disabled: false, 
            hidden: false, 
            css: "mycss",
            rows: [
                {
                    type: "input",
                    name: "name",
                    required: true,
                    label: "Name",
                    placeholder: "Type text",
                },
                {
                    type: "input",
                    name: "surname",
                    required: true,
                    label: "Surname",
                    placeholder: "Type text",
                },
                // more controls
            ]
        }
    ]
});
~~~

### Properties

View [the full list of Fieldset configuration properties](form/api/fieldset/api_fieldset_properties.md).

## Working with Fieldset

You can manage a Fieldset control with the methods and events of the object that the [`getItem()`](form/api/form_getitem_method.md) method returns.

For example, you can disable the control:

~~~js
form.getItem("f1").disable();
~~~

### Methods

Check [the full list of Fieldset methods](form/api/api_overview.md#fieldset-methods).

### Events

Check [the full list of Fieldset events](form/api/api_overview.md#fieldset-events).

