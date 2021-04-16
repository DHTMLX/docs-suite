---
sidebar_label: Spacer
title: Spacer
---          

This item takes space on the form and is used for aligning controls.

## Adding Spacer

You can easily add a Spacer control during initialization of a form:

~~~js
var form = new dhx.Form("form_container", {
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

You can manipulate a Spacer control by using methods (or [events](#eventhandling)) of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can hide the control:

~~~js
var value = form.getItem("spacer").hide();
~~~

### Methods

Check [the full list of methods of the Spacer control](form/api/api_overview.md#methods-12).

### Events

Check [the full list of events of the Spacer control](form/api/api_overview.md#events-12).
