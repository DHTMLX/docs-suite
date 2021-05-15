---
sidebar_label: padding
title: padding
---          

@short: sets padding for content inside the control group

@signature: {'padding?: string | number;'}

@example:
var form = new dhx.Form("form", {
    css: "dhx_widget--bordered",
    padding: "20px",  // sets padding for rows 
    rows: [
        {
            type: "text",
            name: "text",
            value: "Do you agree with our terms and conditions?"
        },
        {
            padding: "10px", // sets padding for cols
            cols: [{
                type: "checkbox",
                width: "80px", 
                label: "I agree",
                name: "agree",
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

[comment]: # (@related: form/how_to_start.md#initialize-form form/configuration.md#padding)
