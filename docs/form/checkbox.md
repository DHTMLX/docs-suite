---
sidebar_label: Checkbox
title: JavaScript Form - Checkbox 
description: You can explore the Checkbox of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Checkbox

A control that allows a user to make a choice between one or several opposite options by toggling them.

![Checkbox control](../assets/form/form_checkbox.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. Checkboxes](https://snippet.dhtmlx.com/scs712zl)

## Adding Checkbox

You can easily add a Checkbox control during initialization of a form:

~~~js
const form = new dhx.Form("form_container", {
    rows: [
		{	
			type: "checkbox",
            label: "I agree",
            name: "agree",
            id: "agree",
            value: "checkboxvalue"
		}
    ]
});
~~~

### Properties

View [the full list of configuration properties of the Checkbox control](form/api/checkbox/api_checkbox_properties.md).

## Working with Checkbox

You can manipulate a Checkbox control by using methods or events of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can get the value of the control:

~~~js
const value = form.getItem("checkbox").getValue();
~~~

### Methods

Check [the full list of methods of the Checkbox control](form/api/api_overview.md#checkbox-methods).

### Events

Check [the full list of events of the Checkbox control](form/api/api_overview.md#checkbox-events).
