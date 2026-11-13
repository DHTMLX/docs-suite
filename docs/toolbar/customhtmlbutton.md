---
sidebar_label: Custom HTML
title: JavaScript Toolbar - Custom HTML Button 
description: You can explore the Custom HTML of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Custom HTML

The Custom HTML control displays custom HTML content, such as an image, an icon, or another element.

![Toolbar custom HTML item displaying a DHX logo image in DHTMLX Suite](/img/toolbar/htmlcontent.png)

**Related sample**: [Toolbar. Custom HTML](https://snippet.dhtmlx.com/rv3gq5qe)

## Add a Custom HTML control {#adding-custom-html}

Use the `add()` method of [TreeCollection](/tree_collection/) to add custom HTML content to a toolbar:

~~~js
toolbar.data.add({
    type: "customHTML",
    html: "<img src='../logo.svg' alt=''/>",
    css: "logo-container"
});
~~~

### Properties

Check the [list of properties](toolbar/api/api_customhtmlbutton_properties.md) that you can set in the configuration object of a Custom HTML control.

## Work with a Custom HTML control {#working-with-custom-html}

Use the [Toolbar API](toolbar/api/api_overview.md) and the [TreeCollection API](/tree_collection/) to work with a **Custom HTML** control.
