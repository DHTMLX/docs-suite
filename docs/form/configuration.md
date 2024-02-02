---
sidebar_label: Configuration
title: JavaScript Form - Configuration 
description: You can explore the configuration of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration

## Alignment

The [](form/api/form_align_config.md) property allows you to set aligning direction for all controls in Form. 

You can apply various options of alignment for different [control groups](form/configuration.md#grouping-controls-in-form) by specifying the [](form/api/form_align_config.md) property for the [](form/api/form_rows_config.md) and [](form/api/form_cols_config.md):

~~~js
const form = new dhx.Form("form_container", {
    css: "dhx_widget--bordered",
    height: "150px",
    width: "400px",
    // sets alignment for rows
    align: "start", // "center", "end", "between", "around", "evenly"
    padding: "20px",   
    rows: [
        {
            padding: "10px", 
            // sets alignment for columns
            align: "start",  // "center", "end", "between", "around", "evenly"
            cols: [
                {
                    name: "radiogroup",
                    type: "radioGroup",
                    label: "Do you agree with our terms and conditions?",
                    value: "agree",
                    options: {
                        cols: [
                            {
                                type: "radioButton",
                                text: "Yes",
                                value: "agree",
                            },
                            {
                                type: "radioButton",
                                text: "No",
                                value: "disagree"
                            },
                        ]
                    },
                },
            ]
        }
    ]
});
~~~

**Related Sample**: [Form. Alignment](https://snippet.dhtmlx.com/jjhkypod)

**Related sample**: [Form. Change Form configuration](https://snippet.dhtmlx.com/1pzybtja)

## Grouping Controls in Form

You can combine controls into groups by placing controls into rows and columns with any level of complexity. To do this, use the [](form/api/form_rows_config.md) and [](form/api/form_cols_config.md) options in the configuration object of the component:

~~~js {3,6,12,19,43,50}
const form = new dhx.Form("form_container", {
    css: "dhx_widget--bordered",
    cols: [
        {
            align: "center",
            rows: [
                {
                    title: "Align:",
                    padding: "10px",
                    align: "around",
                    css: "dhx_layout-cell--bordered",
                    rows: [
                        {
                            type: "radioGroup",
                            name: "align",
                            options: {
                                padding: "10px",
                                align: "center",
                                rows: [
                                    {
                                        type: "radioButton",
                                        text: "start",
                                        value: "start",
                                        checked: true,
                                        autoWidth: true,
                                    },
                                    {
                                        type: "radioButton",
                                        text: "center",
                                        value: "center",
                                        autoWidth: true,
                                    },
                                    // more options
                                ],
                            },
                        },
                    ],
                },
                {
                    title: "Direction:",
                    css: "dhx_layout-cell--bordered dhx_layout-cell--no-border_top",
                    padding: "10px",
                    rows: [
                        {
                            type: "radioGroup",
                            name: "dir",
                            options: {
                                padding: "10px",
                                align: "center",
                                cols: [
                                    {
                                        type: "radioButton",
                                        text: "as rows",
                                        value: "rows",
                                        checked: true,
                                        autoWidth: true,
                                    },
                                    {
                                        type: "radioButton",
                                        text: "as cols",
                                        value: "cols",
                                        autoWidth: true,
                                    },
                                ],
                            },
                        },
                    ],
                },
            ],
        }
    ]
});
~~~

**Related sample**: [Form. Change Form configuration](https://snippet.dhtmlx.com/1pzybtja)

## Making Form disabled

![](../assets/form/disabled.png)

**Related sample**: [Form. Disabled](https://snippet.dhtmlx.com/7qjwg2sw)

By default, Form is enabled. To make Form disabled, set the [](form/api/form_disabled_config.md) configuration property to *true*:

~~~js
const form = new dhx.Form("form_container", {
    css: "dhx_widget--bordered",
    disabled: true
});
~~~

## Making Form hidden

By default, Form is visible. To make Form hidden, set the [](form/api/form_hidden_config.md) configuration property to *true*:

~~~js
const form = new dhx.Form("form_container", {
    css: "dhx_widget--bordered",
    hidden: true
});
~~~

## Padding

To generate space around a [control group](form/configuration.md#grouping-controls-in-form), make use of the [](form/api/form_padding_config.md) parameter:

~~~js
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
~~~

## Title

You can define a title for a [control group](form/configuration.md#grouping-controls-in-form) with the help of the [](form/api/form_title_config.md) property:

~~~js
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
~~~

## Width/Height

You can adjust sizes of a [control group](form/configuration.md#grouping-controls-in-form) with the corresponding properties [](form/api/form_height_config.md) and [](form/api/form_width_config.md):

~~~js
const form = new dhx.Form("form_container", {
    css: "dhx_widget--bordered",
    height: "200px", // sets the common height for rows 
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
            height: "100px", // sets the common height for cols
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
~~~
