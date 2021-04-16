---
sidebar_label: Input
title: Input
---          

An input field for typing some text inside.

![Input control](../assets/form/form_input.png)

{{editor    https://snippet.dhtmlx.com/ikyyekxq	Form. All DhxForm Inputs}}

{{editor	https://snippet.dhtmlx.com/9q8fubjm	Form. Inputs}}

## Adding Input 

You can easily add an Input control during initialization of a form:

~~~js
var form = new dhx.Form("form_container", {
	rows: [
    	{
			type: "input",
            name: "input",
            label: "Name",
            icon: "dxi dxi-magnify",
            placeholder: "John Doe"           
	 	} 
    ]
});
~~~

### Properties

View [the full list of configuration properties of the Input control](form/api/input/api_input_properties.md).

## Working with Input

You can manipulate a Input control by using methods (or [events](#eventhandling)) of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can get the value of the control:

~~~js
var value = form.getItem("input").getValue();
~~~

### Methods

Check [the full list of methods of the Input control](form/api/api_overview.md#methods-7).

### Events

Check [the full list of events of the Input control](form/api/api_overview.md#events-7).