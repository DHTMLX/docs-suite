---
sidebar_label: height
title: JavaScript Form - height Config 
description: You can explore the height Config of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# height

@short: Optional. Sets the height of the control group

@signature: {'height?: string | number | "content";'}

@example:
const form = new dhx.Form("form_container", {
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
