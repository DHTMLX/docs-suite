---
sidebar_label: Toggle
title: JavaScript Form - Toggle 
description: You can explore the Toggle of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Toggle

A special button control that changes its state from pressed to the unpressed one when clicked.

![Toggle button control](../assets/form/form_toggle.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. Toggle](https://snippet.dhtmlx.com/yqi21ykr?tag=toggle)

## Adding Toggle

You can easily add a Toggle control during initialization of a form:

~~~js
const form = new dhx.Form("form_container", {
    rows: [
		{            
            type: "toggle",
            name: "toggle",
            icon: "dxi dxi-eye",
            offIcon: "dxi dxi-eye-off",
            text: "Visible",
            offText: "Invisible"
        }
    ]
});
~~~

### Properties

View [the full list of configuration properties of the Toggle control](form/api/toggle/api_toggle_properties.md).

## Working with Toggle

You can manipulate a Toggle control by using methods or events of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can get the value of the control:

~~~js
const value = form.getItem("toggle").getValue();
~~~

### Methods

Check [the full list of methods of the Toggle control](form/api/api_overview.md#toggle-methods).

### Events

Check [the full list of events of the Toggle control](form/api/api_overview.md#toggle-events).