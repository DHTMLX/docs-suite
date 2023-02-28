---
sidebar_label: Input
title: JavaScript Form - Input 
description: You can explore the Input of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Input

An input field for typing some text inside.

![Input control](../assets/form/form_input.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. Inputs](https://snippet.dhtmlx.com/9q8fubjm)

## Adding Input

You can easily add an Input control during initialization of a form:

~~~js
const form = new dhx.Form("form_container", {
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

You can manipulate an Input control by using methods or events of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can get the value of the control:

~~~js
const value = form.getItem("input").getValue();
~~~

### Methods

Check [the full list of methods of the Input control](form/api/api_overview.md#input-methods).

### Events

Check [the full list of events of the Input control](form/api/api_overview.md#input-events).
