---
sidebar_label: height
title: height
---          

@short: sets the height of the control group 

@signature: {'height?: string | number | "content";'}

@type: string|number|"content"

@example:
var form = new dhx.Form("form", {
    css: "dhx_widget--bordered",
    height: "300px", // sets the common height for rows 
    padding: "20px",   
    rows: [
        {
            type: "text",
            name: "text",
            value: "Do you agree with our terms and conditions?"
        },
        {
            padding: "10px",
            height: "200px", // sets the common height for cols
            cols: [{
                type: "checkbox",
                width: "80px", 
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

[comment]: # (@related: form/how_to_start.md#initialize-form form/configuration.md#widthheight)

[comment]: # (@relatedapi: form/api/form_width_config.md)
