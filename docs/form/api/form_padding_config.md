---
sidebar_label: padding
title: JavaScript Form - padding Config 
description: You can explore the padding Config of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# padding

@short: sets padding for content inside the control group

@signature: {'padding?: string | number;'}

@example:
const form = new dhx.Form("form_container", {
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
