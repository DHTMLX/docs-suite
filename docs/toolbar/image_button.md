---
sidebar_label: ImageButton
title: JavaScript Toolbar - ImageButton 
description: You can explore the ImageButton of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# ImageButton

The ImageButton control displays a button with an image. Unlike a [button](toolbar/button.md), it has no text label, but it can also show a badge with a number and switch between two states.

![Toolbar image button showing a round avatar photo with a number badge in DHTMLX Suite](/img/toolbar/image_button.png)

**Related sample**: [Toolbar. ImageButton](https://snippet.dhtmlx.com/vdiha09g)

## Add ImageButton {#adding-imagebutton}

Use the `add()` method of [TreeCollection](/tree_collection/) to add an ImageButton control to a toolbar:

~~~js
toolbar.data.add({
    type: "imageButton",
    count: 10,
    src: "../img/avatar.png"
});
~~~

### Properties

Check the [list of properties](toolbar/api/api_imagebutton_properties.md) that you can set in the configuration object of an ImageButton control.

## Work with ImageButton {#working-with-imagebutton}

You can hide and disable an ImageButton control and add a tooltip to it, as you can with a [button](toolbar/button.md). You can also change the state of a two-state ImageButton.

Check the full list of available operations in the [Toolbar API](toolbar/api/api_overview.md) and the [TreeCollection API](/tree_collection/).
