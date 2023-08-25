---
sidebar_label: Textarea
title: JavaScript Form - Textarea 
description: You can explore the Textarea of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Textarea

A control that allows a user to enter a simple multi-line text.

![Textarea control](../assets/form/form_textarea.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. Textarea](https://snippet.dhtmlx.com/mt93jzrk?tag=textarea)

## Adding Textarea

You can easily add a Textarea control during initialization of a form:

~~~js
const form = new dhx.Form("form_container", {
    rows: [
		{
			type: "textarea",
            name:"textarea",
            label: "textarea",
            labelWidth: "70px",
            value: "Some nice text",
            width:400
		}
    ]
});
~~~

### Properties

View [the full list of configuration properties of the Textarea control](form/api/textarea/api_textarea_properties.md).

## Working with Textarea

You can manipulate a Textarea control by using methods or events of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can get the value of the control:

~~~js
const value = form.getItem("textarea").getValue();
~~~

### Methods

Check [the full list of methods of the Textarea control](form/api/api_overview.md#textarea-methods).

### Events

Check [the full list of events of the Textarea control](form/api/api_overview.md#textarea-events).
