---
sidebar_label: Avatar
title: JavaScript Form - Avatar 
description: You can explore the Avatar of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Avatar

A compact control for uploading an avatar to a form.

![Avatar form control with an empty photo placeholder and an Add a photo prompt in DHTMLX Suite](/img/form/form_avatar.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. Avatar](https://snippet.dhtmlx.com/87u37hqc?tag=avatar)

## Adding Avatar

You can add an Avatar control during form initialization:

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

View [the full list of Avatar configuration properties](form/api/avatar/api_avatar_properties.md).

## Working with Avatar

You can manage an Avatar control with the methods and events of the object that the [`getItem()`](form/api/form_getitem_method.md) method returns.

For example, you can get the value of the control:

~~~js
const value = form.getItem("avatar").getValue();
~~~

### Methods

Check [the full list of Avatar methods](form/api/api_overview.md#avatar-methods).

### Events

Check [the full list of Avatar events](form/api/api_overview.md#avatar-events).