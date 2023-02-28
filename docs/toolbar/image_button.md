---
sidebar_label: ImageButton
title: JavaScript Toolbar - ImageButton 
description: You can explore the ImageButton of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# ImageButton

This is a button with an image. Unlike a [button](toolbar/button.md), it does not have a text label, but can also have a badge with a number and can be two state.

![](../assets/toolbar/image_button.png)

**Related sample**: [Toolbar. ImageButton](https://snippet.dhtmlx.com/vdiha09g)

## Adding ImageButton

ImageButton can be easily added to a toolbar with the help of the **add()** method of [Tree Collection](tree_collection.md):

~~~js
toolbar.data.add({
    type: "imageButton",
    count: 10,
    src: "../img/avatar.png"
});
~~~

### Properties

You can provide [the following properties](toolbar/api/api_imagebutton_properties.md) in the configuration object of an ImageButton control.

## Working with ImageButton

Just like a [button](toolbar/button.md), imageButton can be hidden, disabled and can have a tooltip. You can also manipulate the states of a two state imageButton.

Check the full list of available operations in the [Toolbar API](toolbar/api/api_overview.md) and [Tree Collection API](tree_collection.md).
