---
sidebar_label: Title
title: JavaScript Ribbon - Title 
description: You can explore the Title of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Title

This is an item that contains some text.

## Adding Title control

A Title control can be added to a ribbon with the help of the **add()** method of TreeCollection:

~~~js
ribbon.data.add({
    type: "title",
	value: "APP NAME"
});
~~~

### Properties

You can provide the [following properties](ribbon/api/api_title_properties.md) in the configuration object of a Title control.

## Showing/hiding Title

Title can be hidden and shown with the help of the related methods. Pass the id of a Title control as a parameter.

~~~js
ribbon.show(id);
ribbon.hide(id);
~~~
