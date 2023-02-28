---
sidebar_label: Spacer
title: JavaScript Form - Spacer 
description: You can explore the Spacer of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Spacer

This item takes space on the form and is used for aligning controls.

## Adding Spacer

You can easily add a Spacer control during initialization of a form:

~~~js
const form = new dhx.Form("form_container", {
    rows: [
        {
  			type: "input",
  			label: "Name",
  			name: "name"
		},
		{
  			type: "spacer",
            name: "spacer"
		},
		{
  			type: "input",
  			label: "Email",
  			name: "email"
		}
    ]
});
~~~

### Properties

View [the full list of configuration properties of the Spacer control](form/api/spacer/api_spacer_properties.md).

## Working with Spacer

You can manipulate a Spacer control by using methods or events of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can hide the control:

~~~js
const value = form.getItem("spacer").hide();
~~~

### Methods

Check [the full list of methods of the Spacer control](form/api/api_overview.md#spacer-methods).

### Events

Check [the full list of events of the Spacer control](form/api/api_overview.md#spacer-events).
