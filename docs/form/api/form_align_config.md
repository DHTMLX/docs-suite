---
sidebar_label: align
title: align
---          

@short: sets the alignment of controls inside the control group 

@signature: {'align?: FlexDirection;'}

@values: "start", "center", "end", "between", "around", "evenly"

@example:
var form = new dhx.Form("form", {
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
