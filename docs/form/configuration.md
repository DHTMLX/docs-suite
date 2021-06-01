---
sidebar_label: Configuration
title: JavaScript Form - Configuration 
description: You can explore the configuration of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Configuration

## Alignment

The [](form/api/form_align_config.md) property allows you to set aligning direction for all controls in Form. 

You can apply various options of alignment for different [control groups](form/configuration.md#grouping-controls-in-form) by specifying the [](form/api/form_align_config.md) property for the [](form/api/form_rows_config.md) and [](form/api/form_cols_config.md):

~~~js
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
            align: "start", // sets the alignment for columns 
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

**Related Sample**: [Form. Alignment](https://snippet.dhtmlx.com/jjhkypod)

**Related sample**: [Form. Blocks](https://snippet.dhtmlx.com/1pzybtja)

## Grouping Controls in Form

![](../assets/form/blocks.png)

**Related sample**: [Form. Blocks](https://snippet.dhtmlx.com/1pzybtja)

You can combine controls into groups by placing controls into rows and columns with any level of complexity. To do this, use the [](form/api/form_rows_config.md) and [](form/api/form_cols_config.md) options in the configuration object of the component:

~~~js
var form = new dhx.Form("form_container", {
    css: "dhx_widget--bordered",
    cols: [{ /*!*/
		padding: "20px",
		rows: [ /*!*/
			{
            	type: "input",
            	label: "title",
            	name: "title",
            	value: blockConfig.title,
            	labelWidth: "100px",
            	labelPosition: "right"
			},
			{
				type: "input",
				label: "width",
				name: "width",
				value: blockConfig.width,
				labelWidth: "100px",
				labelPosition: "right"
			},
            {
                // more controls
          	}
        ]
    }]
});
~~~

## Making Form disabled

![](../assets/form/disabled.png)

**Related sample**: [Form. Disabled](https://snippet.dhtmlx.com/7qjwg2sw)

By default, Form is enabled. To make Form disabled, set the [](form/api/form_disabled_config.md) configuration property to *true*:

~~~js
var form = new dhx.Form("form_container", {
    css: "dhx_widget--bordered",
    disabled: true
});
~~~

## Making Form hidden

By default, Form is visible. To make Form hidden, set the [](form/api/form_hidden_config.md) configuration property to *true*:

~~~js
var form = new dhx.Form("form_container", {
    css: "dhx_widget--bordered",
    hidden: true
});
~~~

## Padding

To generate space around a [control group](form/configuration.md#grouping-controls-in-form), make use of the [](form/api/form_padding_config.md) parameter:

~~~js
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
~~~

## Title

You can define a title for a [control group](form/configuration.md#grouping-controls-in-form) with the help of the [](form/api/form_title_config.md) property:

~~~js
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
~~~

## Width/Height

You can adjust sizes of a [control group](form/configuration.md#grouping-controls-in-form) with the corresponding properties [](form/api/form_height_config.md) and [](form/api/form_width_config.md):

~~~js
var form = new dhx.Form("form", {
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
