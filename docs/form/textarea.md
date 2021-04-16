---
sidebar_label: Textarea
title: Textarea
---          

A control that allows a user to enter a simple multi-line text.

![Textarea control](../assets/form/form_textarea.png)

{{editor    https://snippet.dhtmlx.com/ikyyekxq	Form. All DhxForm Inputs}}

{{editor	https://snippet.dhtmlx.com/mt93jzrk	Form. Textareas}}

## Adding Textarea

You can easily add a Textarea control during initialization of a form:

~~~js
var form = new dhx.Form("form_container", {
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

You can manipulate a Textarea control by using methods (or [events](#eventhandling)) of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can get the value of the control:

~~~js
var value = form.getItem("textarea").getValue();
~~~

### Methods

Check [the full list of methods of the Textarea control](form/api/api_overview.md#methods-14).


### Events

Check [the full list of events of the Textarea control](form/api/api_overview.md#events-14).