---
sidebar_label: Custom scroll
title: JavaScript Custom Scroll - Custom Scroll
description: You can have an overview of Custom Scroll in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Custom scroll

[Custom Scroll](../../common_features/custom_scroll/) of the DHTMLX library is developed to replace the default browser scrollbars and make your application more attractive for the end users.

{{pronote The custom scroll is available only in PRO version of the DHTMLX Suite package.}}

The feature can be activated on the page for all widgets at once via the **enable** property of the **dhx.scrollViewConfig** global variable before initialization of the widgets:

```js
dhx.scrollViewConfig.enable = true; // false by default

// initializing widgets
```

**Related sample:** [Custom scroll. Scroll view in List, Dataview](https://snippet.dhtmlx.com/gjsbvzdk)

{{note As a result of the above logic, DHTMLX custom scrollbars will be applied to the following widgets: List, DataView, Grid, TreeGrid, Layout cell, Toolbar, Ribbon, Sidebar, Window.}}

## Custom scroll settings

Configuration settings for custom scrollbars are stored in the **dhx.scrollViewConfig** global variable.

They are:

- `dhx.scrollViewConfig.enable` - defines whether custom scrollbars are enabled for all widgets at once;
- `dhx.scrollViewConfig.autoHide` - defines whether the scrollbars should be hidden when a mouse pointer goes off the component;
- `dhx.scrollViewConfig.timeout` - sets the length of time, in milliseconds, before the scrollbars hides
- `dhx.scrollViewConfig.scrollHandler` - a function to be executed while scrolling

### Default settings

The default configuration settings are the following: 

~~~js
dhx.scrollViewConfig.enable = false; 
dhx.scrollViewConfig.autoHide = true; 
dhx.scrollViewConfig.timeout = 1000; 
~~~

You can change the settings for all widgets at once before initializing the widgets:

~~~js
dhx.scrollViewConfig.autoHide = false; 
dhx.scrollViewConfig.timeout = 10000; 

// initializing widgets
~~~

or [specify individual configuration for custom scroll of a separate widget](#settings-for-scroll-per-widget). 

## Specific scroll for a widget

In case you need to specify individual scrollbars for a separate widget, you can do so via the **scrollView** object after initialization of the widget.

To enable/disable the custom scroll for a separate widget, use the **enable()/disable()** methods of the object:

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

{{note Try out the functionality [in our Snippet Tool](https://snippet.dhtmlx.com/gjsbvzdk).}}

To force recalculation and redrawing of the custom scroll, apply the **update()** method: 

~~~js
list.scrollView.update();
~~~

## Settings for scroll per widget

You are able to change the [default settings of the custom scrollbars](#default-settings) for the necessary widget via the **scrollView** object. To do that, use the syntax as in:

~~~js
list.scrollView.config.autoHide = false;

list.scrollView.config.timeout = 5000;
~~~

The similar syntax is used if you need to configure settings for a Layout cell:

~~~js
layout.getCell("list").scrollView.config.autoHide = false;
~~~

