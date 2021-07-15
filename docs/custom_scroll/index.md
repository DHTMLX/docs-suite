---
sidebar_label: Overview
title: JavaScript Custom Scroll - Custom Scroll Overview 
description: You can have an overview of Custom Scroll in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Custom Scroll overview

[Custom Scroll](../../common_features/custom_scroll/) of the DHTMLX library is developed to replace the default browser scrollbars and make your application more attractive for the end users.

{{pronote The custom scroll is available only in PRO version of the DHTMLX Suite package.}}

## Custom scroll for all widgets

The feature can be activated on the page for all widgets at once via the **dhx.scrollViewConfig** global variable before initialization of the widgets:

```js
dhx.scrollViewConfig.enable = true; // false by default

// initializing widgets
```

**Related sample:** [Custom Scroll in List, DataView](https://snippet.dhtmlx.com/gjsbvzdk)

{{note As a result of the above logic, DHTMLX custom scrollbars will be applied to the following widgets: List, DataView, Grid, TreeGrid, Layout (and its cell), Toolbar, Ribbon, Sidebar, Window.}}

### Default settings

You can change the default settings of the custom scrollbars via the configuration properties of **dhx.scrollViewConfig**:

~~~js
// default settings of custom scrollbars
dhx.scrollViewConfig.enable = false; // enables/disables custom scrollbars for all widgets at once
dhx.scrollViewConfig.autoHide = true; // defines whether the scrollbars should be hidden when a mouse pointer goes off the component
dhx.scrollViewConfig.timeout = 1000; // sets the length of time, in milliseconds, before the scrollbars hides
dhx.scrollViewConfig.scrollHandler = () => {}; // a function to be executed while scrolling

// initializing widgets
~~~

## Work with scroll of a particular widget

In case you need to define individual settings for the scrollbars of a separate widget, you can do so via the **scrollView** object after initialization of the widget.

{{note Try out the functionality [in our Snippet Tool](https://snippet.dhtmlx.com/all?text=custom+scroll).}}

To enable/disable the custom scroll for the widget, use the **enable()/disable()** methods of the object:

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

// disable custom scroll
list.scrollView.disable();
~~~

To force recalculation and redrawing of the custom scroll, apply the **update()** method: 

~~~js
list.scrollView.update();
~~~

## Configuring scroll for a particular widget

You are able to change the [default settings of the custom scrollbars](#default-settings) for the necessary widget via the **scrollView** object. To do that, use the syntax as in:

~~~
list.scrollView.config.autoHide = false;

list.scrollView.config.timeout = 5000;
~~~

The similar syntax is used if you need to configure settings for a Layout cell:

~~~js
layout.getCell("list").scrollView.config.autoHide = false;
~~~

