---
sidebar_label: cols
title: cols
---          

@short: arranges controls inside the control group horizontally

@signature: {'cols?: IBlock;'}

@example:
var form = new dhx.Form("form", {
    css: "dhx_widget--bordered",
    width: "250px",
    rows: [
        {
            padding: "10px",
            cols: [{ /*!*/
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

@changelog: added in v6.4

[comment]: # (@related: form/how_to_start.md#initialize-form form/configuration.md#grouping-controls-in-form)

[comment]: # (@relatedapi: form/api/form_rows_config.md)
