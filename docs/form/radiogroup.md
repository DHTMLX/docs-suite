---
sidebar_label: RadioGroup
title: JavaScript Form - RadioGroup 
description: You can explore the RadioGroup of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# RadioGroup

A control that groups Radio buttons.

![RadioGroup form control with three radio button options and the second one selected in DHTMLX Suite](/img/form/form_radio.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. Radio group](https://snippet.dhtmlx.com/ycp1cbct?tag=radio_group)

**Related sample**: [Form. Change Form configuration](https://snippet.dhtmlx.com/1pzybtja)

## Adding RadioGroup

You can add a RadioGroup control during form initialization:

~~~js
const form = new dhx.Form("form_container", {    
    rows: [
        {
            id: "radiogroup",
            name: "radiogroup",
            type: "radioGroup",
            required: true,
            label: "Radio Group",
            labelWidth: 140,
            labelPosition: "left",
            helpMessage: " Help information",
            value: "1",
            options: {
                rows: [
                    {
                        type: "radioButton",
                        text: "Select 1",
                        value: "1",
                    },
                    {
                        type: "radioButton",
                        text: "Select 2",
                        value: "2"
                    },
                ]
            }
        }
     ]
});
~~~

### Properties of RadioGroup

View [the full list of RadioGroup configuration properties](form/api/radiogroup/api_radiogroup_properties.md).

### Properties of RadioButton

View [the full list of properties](form/api/radiogroup/api_radiogroup_properties.md#radiobutton-properties) that you can set for a RadioButton in RadioGroup.

## Working with RadioGroup

You can manage a RadioGroup control with the methods and events of the object that the [`getItem()`](form/api/form_getitem_method.md) method returns.

For example, you can get the value of the control:

~~~js
const value = form.getItem("radiogroup").getValue();
~~~

### Methods

Check [the full list of RadioGroup methods](form/api/api_overview.md#radiogroup-methods).

### Events

Check [the full list of RadioGroup events](form/api/api_overview.md#radiogroup-events).
