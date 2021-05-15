---
sidebar_label: title
title: title
---          

@short: specifies the title of the control group

@signature: {'title?: string;'}

@example:
var form = new dhx.Form("form", {
    css: "dhx_widget--bordered",
    padding: "20px",  
    title: "Form", // sets the title for rows
    rows: [
        {
            padding: "10px",
            title: "Checkbox controls of Form", // sets the title for cols
            css: "dhx_widget--bordered",
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

[comment]: # (@related: form/how_to_start.md#initialize-form form/configuration.md#title)
