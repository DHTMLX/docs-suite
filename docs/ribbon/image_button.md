---
sidebar_label: ImageButton
title: JavaScript Ribbon - ImageButton 
description: You can explore the ImageButton of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# ImageButton

The ImageButton control displays a button with an image. Unlike a [button](ribbon/button.md), it has no text label, but it can also show a badge with a number and switch between two states (`twoState`).

![Ribbon image button showing a round user avatar with a name label in DHTMLX Suite](/img/ribbon/image_button.png)

## Add ImageButton {#adding-imagebutton}

Use the `add()` method of the `data` module to add an ImageButton control to a ribbon:

~~~js
ribbon.data.add({
    type: "imageButton",
    count: 10,
    src: "../img/avatar.png"
});
~~~

### Properties

Check the [list of properties](ribbon/api/api_imagebutton_properties.md) that you can set in the configuration object of an ImageButton control.

## Work with ImageButton {#working-with-imagebutton}

Use the [Ribbon API](ribbon/api/api_overview.md) and the [TreeCollection API](/tree_collection/) to work with an `imageButton` control.
