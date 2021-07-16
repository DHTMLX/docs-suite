---
sidebar_label: Custom scroll
title: JavaScript Guides - Custom Scroll 
description: You can learn about custom scroll in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Custom Scroll

{{pronote This functionality requires PRO version of the DHTMLX Suite package.}}

From v7.2, DHTMLX includes neat custom scrollbars with a thin grey semi-transparent design to replace the standard browser scrollbars. The custom bars come with the auto-hide behavior, i.e., they are initially hidden and shown only when the user hovers the mouse over the page. 

<iframe src="https://snippet.dhtmlx.com/gjsbvzdk?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="700"></iframe>

The custom scroll is available for the following DHTMLX components: List, DataView, Grid, TreeGrid, Layout cell, Toolbar, Ribbon, Sidebar, Window.

To add the feature into your application, you need to declare **dhx.scrollViewConfig** before initialization of the widgets:

~~~js
// enable the custom scroll for all available widgets
dhx.scrollViewConfig.enable = true;

// initialize a widget
const list = new dhx.List("list_container", {
    itemHeight: 30
});
~~~

or apply the **enable()** method of the **scrollView** object after initialization of the widget:

~~~js
// initialize the widget
const list = new dhx.List("list", {
    template: listTemplate,
    itemHeight: 52,
    height: "100%",
    dragMode: "both",
});
list.data.load(data);

// enable custom scroll
list.scrollView.enable();
~~~

For more details on Custom Scroll configuration, read [this article](../../helpers/custom_scroll/). 