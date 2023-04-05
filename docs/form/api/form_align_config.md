---
sidebar_label: align
title: JavaScript Form - align Config 
description: You can explore the align Config of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# align

@short: Optional. Sets the alignment of controls inside the control group 

@signature: {'align?: "start" | "center" | "end" | "between" | "around" | "evenly";'}

@example:
const form = new dhx.Form("form_container", {
    css: "dhx_widget--bordered",
    height: "200px",
    width: "400px",
    align: "end", // sets the alignment for rows 
    padding: "20px",  
    rows: [
        {
            type: "text",
            name: "text",
            value: "Do you agree with our terms and conditions?"
        },
        {
            padding: "10px",  
            align: "start", // sets the alignment for cols 
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

**Related Sample**: [Form. Alignment](https://snippet.dhtmlx.com/jjhkypod)

@changelog: added in v6.4

[comment]: # (@related: form/how_to_start.md#initialize-form form/configuration.md#alignment)
