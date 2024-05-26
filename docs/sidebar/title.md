---
sidebar_label: Title
title: JavaScript Sidebar - Title 
description: You can explore the Title of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Title

This is an item that contains some text.

![](../assets/sidebar/title.png)

## Adding Title control

A Title control can be added to a sidebar with the help of the **add()** method of TreeCollection:

~~~js
sidebar.data.add({
    type: "title",
    value: "APP NAME"
});
~~~

### Properties

You can provide the [following properties](sidebar/api/api_title_properties.md) in the configuration object of a Title control.

## Showing/hiding Title

Title can be hidden and shown with the help of the related methods. Pass the id of a Title control as a parameter.

~~~js
sidebar.show(id);
sidebar.hide(id);
~~~

## Adding a tooltip

You can add a tooltip to a Title control:

~~~js
{
    type:"title",
    value:"2K",
    tooltip:"Your subscribers"
}
~~~ 
