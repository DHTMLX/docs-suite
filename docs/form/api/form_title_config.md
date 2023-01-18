---
sidebar_label: title
title: JavaScript Form - title Config 
description: You can explore the title Config of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# title

@short: Optional. Specifies the title of the control group

@signature: {'title?: string;'}

@example:
const form = new dhx.Form("form_container", {
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
