---
sidebar_label: Select
title: JavaScript Form - Select 
description: You can explore the Select of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Select

An advanced select box that provides a set of options to choose from.

![Select control](../assets/form/form_select.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. Select](https://snippet.dhtmlx.com/yo9w9o2t)

## Adding Select

You can easily add a Select control during initialization of a form:

~~~js
const form = new dhx.Form("form_container", {
	rows: [
    	{
        	type: "select",
            name: "select",
        	label: "select",
        	labelWidth: "50px",
        	width:"200px",
        	options: [
        		{
        			value: "1",
        			content: "1",
					disabled: true
        		},
        		{
        			value: "2",
        			content: "2"
        		},
        		{
        			value: "3",
        			content: "3"
        		},
        		{
        			value: "4",
        			content: "4"
        		}
        	]        
        }  
    ]
});
~~~

### Properties

View [the full list of configuration properties of the Select control](form/api/select/api_select_properties.md).

## Working with Select

You can manipulate a Select control by using methods or events of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can get the value of the control:

~~~js
const value = form.getItem("select").getValue();
~~~

### Methods

Check [the full list of methods of the Select control](form/api/api_overview.md#select-methods).

### Events

Check [the full list of events of the Select control](form/api/api_overview.md#select-events).
