---
sidebar_label: Custom HTML
title: JavaScript Ribbon - Custom HTML Button 
description: You can explore the custom HTML button of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Custom HTML

This is an item that contains any custom HTML content (for example, an image, icon or other element).

![](../assets/ribbon/custom_html.png)

**Related sample**: [Ribbon. Custom HTML](https://snippet.dhtmlx.com/c0i0q3cu)

## Adding Custom HTML

Any custom HTML content can be easily added to a ribbon with the help of the **add()** method of [Tree Collection](tree_collection.md):

~~~js
ribbon.data.add({
    type: "customHTML",
    html: "<div id='preloader'><div id='loader'></div></div >"
});
~~~

**Related sample**: [Ribbon. Custom HTML](https://snippet.dhtmlx.com/c0i0q3cu)

### Properties

You can provide the [following properties](ribbon/api/api_customhtml_properties.md) in the configuration object of a Custom HTML control.

## Working with Custom HTML

You can perform operations over the **Custom HTML** item with the help of the available [Ribbon API](ribbon/api/api_overview.md) and [Tree Collection API](tree_collection.md).
