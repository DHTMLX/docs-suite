---
sidebar_label: setValue()
title: JavaScript Form - setValue Combo Box Method 
description: You can explore the setValue method of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setValue()

@short: sets the value for a Combo control

@signature: {'setValue(value: Id | Id[]): void;'}

@params:
- `value: (string | number) | (string | number)[]` - the ID(s) of options from data collection that should be selected in the control

@descr:

:::info
Note, that you need to pass the **ID(s)** of Combo options as a value of the **value** parameter.
:::

#### Example

When the `multiselection` property of Combo control isn't specified or is set to *false*, you can set the value of ID as a string, number or array:

~~~js
const form = new dhx.Form("form_container", {
    rows: [
        {
            name: "combo",
            type: "combo",
            multiselection: false,
            data: [
                { value: "value: 1", id: "id:1" },
                { value: "value: 2", id: "id:2" },
                { value: "value: 3", id: 3 },
                { value: "value: 4", id: 4 },
                { value: "value: 5", id: 5 },
            ]
        },
    ]
});

// selects one option
form.getItem("combo").setValue(4);
// form.getItem("combo").setValue("id_1");
// form.getItem("combo").setValue(["id_1"]);
~~~

If `multiselection` is enabled, you need to pass to the `setValue` method an array with string/number values of IDs:

~~~js
const form = new dhx.Form("form_container", {
    rows: [
        {
            name: "combo",
            type: "combo",
            multiselection: true,
            data: [
                { value: "value: 1", id: "id:1" },
                { value: "value: 2", id: "id:2" },
                { value: "value: 3", id: 3 },
                { value: "value: 4", id: 4 },
                { value: "value: 5", id: 5 },
            ]
        },
    ]
});

// selects several options
form.getItem("combo").setValue(["id:1", 4]);
~~~
