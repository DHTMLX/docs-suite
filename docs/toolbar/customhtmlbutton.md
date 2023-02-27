---
sidebar_label: Custom HTML
title: JavaScript Toolbar - Custom HTML Button 
description: You can explore the Custom HTML of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Custom HTML

This is an item that contains any custom HTML content (for example, an image, icon or other element).

![](../assets/toolbar/htmlcontent.png)

**Related sample**: [Toolbar. Custom HTML](https://snippet.dhtmlx.com/rv3gq5qe)

## Adding Custom HTML

Any custom HTML content can be easily added to a toolbar with the help of the **add()** method of [Tree Collection](tree_collection.md):

~~~js
toolbar.data.add({
	type: "customHTML",
	html: "<img src='../logo.svg' alt=''/>",
	css: "logo-container"
});
~~~

### Properties

You can provide the [following properties](toolbar/api/api_customhtmlbutton_properties.md) in the configuration object of a Custom HTML control.

## Working with Custom HTML

You can perform operations over the **Custom HTML** item with the help of the available [Toolbar API](toolbar/api/api_overview.md) and [Tree Collection API](tree_collection.md).
