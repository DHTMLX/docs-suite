---
sidebar_label: cols
title: JavaScript Form - cols Config 
description: You can explore the cols Config of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# cols

@short: Optional. Arranges [controls](/suite/category/list-of-form-controls/) inside the control group horizontally

@signature: {'cols?: object[];'}

@example:
const form = new dhx.Form("form_container", {
    css: "dhx_widget--bordered",
    width: "250px",
    rows: [
        {
            padding: "10px",
            cols: [{
                type: "checkbox",
                width: "100px",
                label: "I agree",
                name: "agree",
                id: "agree",
                checked: true
            },
            {
                type: "checkbox",
                label: "I disagree",
                name: "align",
            }]
        }
    ]
});

@descr:
:::info
Please note that if you specify the `id` fields for controls, their values should be **unique**. You can also omit the `id` fields in the configuration of controls. In this case they will be generated automatically.
:::

@changelog: added in v6.4

[comment]: # (@related: form/how_to_start.md#initialize-form form/configuration.md#grouping-controls-in-form)

[comment]: # (@relatedapi: form/api/form_rows_config.md)
