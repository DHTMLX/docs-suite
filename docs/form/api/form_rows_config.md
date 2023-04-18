---
sidebar_label: rows
title: JavaScript Form - rows Config 
description: You can explore the rows Config of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# rows

@short: Optional. Arranges controls inside the control group vertically

@signature: {'rows?: object[];'}

@example:
const form = new dhx.Form("form_container", {
    css: "dhx_widget--bordered dhx_layout-cell--bordered",
    height: "300px",
    // rows
    rows: [
        {
            type: "input",
            label: "Name",
            icon: "dxi dxi-magnify",
            placeholder: "John Doe",
            labelPosition: "right",
        },
        {
            type: "input",
            label: "Email",
            placeholder: "jd@mail.name",
            labelPosition: "right",
        },
        {
            type: "button",
            submit: true,
            text: "Send",
            size: "medium",
            view: "flat",
            color: "primary",
        }
    ]
});

@descr:

@changelog: added in v6.4

[comment]: # (@related: form/how_to_start.md#initialize-form form/configuration.md#grouping-controls-in-form)

[comment]: # (@relatedapi: form/api/form_cols_config.md)
