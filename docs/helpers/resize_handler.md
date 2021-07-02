---
sidebar_label: Resizer
title: JavaScript Helpers - Resizer 
description: You can explore the Resizer helper in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Resizer

The DHTMLX library provides a helper that changes the width and height of the page content based on the window size. 

To create a responsive web page that will be easily adapted to different dimensions of a browser window, make use of the **dhx.resizeHandler** helper:

~~~js
dhx.resizeHandler(container, function (width, height) {
    // some logic here
});
~~~

**Related sample**: [Helpers. Resizer. Initialization](https://snippet.dhtmlx.com/qf2tb3em)

The helper takes two parameters:

- **container** - an HTML element where the handler function is added to
- **handler** - (*function*) a callback function that returns the container width and height after its sizes were changed


add [](../data_collection/api/datacollection_removeall_method.md) method of **DataCollection**: