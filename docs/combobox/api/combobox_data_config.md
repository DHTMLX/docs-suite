---
sidebar_label: data
title: JavaScript Combo Box - data Config 
description: You can explore the data config of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# data

@short: Optional. Specifies an array of data objects to set into the combobox

@signature: {'data?: object[];'}

@params:
Each object in the data set contains a number of *key:value* pairs that represent attributes of Combo options. The available attributes are:

- `id?: string | number` - optional, the id of the data option
- `value?: string`- optional, the text value of the option
- `src?: string`- optional, the path to the image
- `icon?: string` - optional, the CSS class of the displayed icon (for example, "dxi dxi-check")

:::info
It is not possible to use the `src` and `icon` attributes together.
:::

@example:
const combo = new dhx.Combobox("combo_container",{
    data: [
        {
            "value": "Austria",
            "src": "../common/flags/at.png"
        },
        {
            "value": "Belgium",
            "src": "../common/flags/be.png"
        },
        {
            "value": "Bulgaria",
            "src": "../common/flags/bg.png"
        },
        {
            "value": "Cyprus",
            "src": "../common/flags/cy.png"
        }
    ]
});

@descr: 

**Related sample**: [Combobox. Initialization with config.data](https://snippet.dhtmlx.com/8bsb9dji)

@changelog: added in v6.4

[comment]: # (@related: combobox/how_to_start.md#initialize-combobox)
