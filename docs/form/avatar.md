---
sidebar_label: Avatar
title: JavaScript Form - Avatar 
description: You can explore the Avatar of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Avatar

A compact but useful control for swift uploading of an avatar into a form.

![Avatar control](../assets/form/form_avatar.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. Avatar](https://snippet.dhtmlx.com/87u37hqc)

## Adding Avatar

You can easily add an Avatar control during initialization of a form:

~~~js
const form = new dhx.Form("form_container", {
	rows: [
    	{
			type: "avatar",
            name: "avatar",
            required: true,
            labelWidth: 140,
            label: "Employee photo",
            labelPosition: "top",
            placeholder: "Add a photo",
            value: {
                src: "https://server.domain/upload/image.jpg"
            }
		}
    ]
});
~~~

### Properties

View [the full list of configuration properties of the Avatar control](form/api/avatar/api_avatar_properties.md).

## Working with Avatar

You can manipulate an Avatar control by using methods or events of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can get the value of the control:

~~~js
const value = form.getItem("avatar").getValue();
~~~

### Methods

Check [the full list of methods of the Avatar control](form/api/api_overview.md#avatar-methods).

### Events

Check [the full list of events of the Avatar control](form/api/api_overview.md#avatar-events).