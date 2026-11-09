---
sidebar_label: Custom HTML
title: JavaScript Ribbon - Custom HTML Button 
description: You can explore the custom HTML button of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Custom HTML

The Custom HTML control displays custom HTML content, such as an image, an icon, or another element.

![Ribbon custom HTML item showing a user avatar and name label in DHTMLX Suite](/img/ribbon/custom_html.png)

**Related sample**: [Ribbon. Custom HTML](https://snippet.dhtmlx.com/c0i0q3cu)

## Add a Custom HTML control {#adding-custom-html}

Use the `add()` method of [TreeCollection](/tree_collection/) to add custom HTML content to a ribbon:

~~~js
ribbon.data.add({
    type: "customHTML",
    html: "<div id='preloader'><div id='loader'></div></div >"
});
~~~

**Related sample**: [Ribbon. Custom HTML](https://snippet.dhtmlx.com/c0i0q3cu)

### Properties

Check the [list of properties](ribbon/api/api_customhtml_properties.md) that you can set in the configuration object of a Custom HTML control.

## Work with a Custom HTML control {#working-with-custom-html}

Use the [Ribbon API](ribbon/api/api_overview.md) and the [TreeCollection API](/tree_collection/) to work with a **Custom HTML** control.
