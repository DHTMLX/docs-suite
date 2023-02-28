---
sidebar_label: Title
title: JavaScript Toolbar - Title 
description: You can explore the Title of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Title

This is an item that contains some text.

![](../assets/toolbar/title.png)

**Related sample**: [Toolbar. Title](https://snippet.dhtmlx.com/dwynhb7o)

## Adding Title control

A Title control can be added to a toolbar with the help of the **add()** method of [Tree Collection](tree_collection.md):

~~~js
toolbar.data.add({
    type: "title",
	value: "APP NAME"
});
~~~

### Properties

You can provide [the following properties](toolbar/api/api_title_properties.md) in the configuration object of a Title control.

## Showing/hiding Title

Title can be hidden and shown with the help of the [show()](toolbar/api/toolbar_show_method.md)/[hide()](toolbar/api/toolbar_hide_method.md)  methods. Pass the id of a Title control as a parameter.

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

**Related sample**: [Toolbar. Hide / show items](https://snippet.dhtmlx.com/cldp89u4)

## Adding a tooltip

You can add a tooltip to a Title control:

~~~js
{
    type:"title",
    value:"2K",
    tooltip:"Your subscribers"
}
~~~

**Related sample**: [Toolbar. Tooltips](https://snippet.dhtmlx.com/105levtd)
