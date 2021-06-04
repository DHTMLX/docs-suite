---
sidebar_label: width
title: JavaScript Form - width Config 
description: You can explore the width Config of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# width

@short: sets the width of the control group

@signature: {'width?: string | number | "content";'}

@example:
var form = new dhx.Form("form", {
    css: "dhx_widget--bordered",
    width: "400px", // sets the common width for rows
    padding: "20px",   
    rows: [
        {
            type: "text",
            name: "text",
            value: "Do you agree with our terms and conditions?"
        },
        {
            padding: "10px",
            width: "200px", // sets the common width for cols
            align: "end",
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

[comment]: # (@relatedapi: form/api/form_height_config.md)
