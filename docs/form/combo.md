---
sidebar_label: Combo
title: JavaScript Form - Combo 
description: You can explore the Combo of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Combo

An input that works as an advanced select box with a set of options. It can show suggestions while the user types.

![Combo form control with an open dropdown list of numeric options in DHTMLX Suite](/img/form/form_combo.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. Combo](https://snippet.dhtmlx.com/wla7u1xq?tag=combo)

## Adding Combo

You can add a Combo control during form initialization:

~~~js
const form = new dhx.Form("form_container", {
    rows: [
        {
            type: "combo",
            name: "combo",
            label: "count",
            labelPosition: "left",
            multiselection: true,
            selectAllButton: true,
            value: [
                "id_1",
                "id_2"
            ],
            data: [
                { value: "1", id: "id_1" },
                { value: "2", id: "id_2" },
                { value: "3", id: "id_3" },
                { value: "4", id: "id_4" },
                { value: "5", id: "id_5" }
            ]
        }
    ]
});
~~~

### Properties

View [the full list of Combo configuration properties](form/api/combo/api_combo_properties.md).

## Working with Combo

You can manage a Combo control with the methods and events of the object that the [`getItem()`](form/api/form_getitem_method.md) method returns.

For example, you can get the value of the control:

~~~js
const value = form.getItem("combo").getValue();
~~~

### Methods

Check [the full list of Combo methods](form/api/api_overview.md#combo-methods).

### Events

Check [the full list of Combo events](form/api/api_overview.md#combo-events).

### Working with the dhtmlxComboBox widget

You can use DHTMLX Combobox methods with the [`getWidget()`](form/api/combo/combo_getwidget_method.md) method of a Combo control.

For example, to set focus in the Combo input without opening a popup with options, get the widget attached to the Combo control and call its [`focus()`](combobox/api/combobox_focus_method.md) method.

~~~js
const combo = form.getItem("combo").getWidget();  // -> ComboBox
combo.focus(); // sets focus in the input
~~~

Check [the full list of DHTMLX Combobox methods](combobox/api/api_overview.md#methods) that you can apply with the [`getWidget()`](form/api/combo/combo_getwidget_method.md) method.