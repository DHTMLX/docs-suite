---
sidebar_label: rows
title: rows
---          

@short: arranges controls inside the control group vertically

@signature: {'rows?: IBlock;'}

@example:
var form = new dhx.Form("form", {
    css: "dhx_widget--bordered dhx_layout-cell--bordered",
    height: "300px",
    rows: [ /*!*/
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
