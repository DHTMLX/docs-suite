---
sidebar_label: Title
title: JavaScript Sidebar - Title 
description: You can explore the Title of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Title

The Title control displays text on a sidebar.

![Sidebar Title control displaying an app name text label in DHTMLX Suite](/img/sidebar/title.png)

## Add Title {#adding-title-control}

Use the `add()` method of TreeCollection to add a Title control to a sidebar:

~~~js
sidebar.data.add({
    type: "title",
    value: "APP NAME"
});
~~~

### Properties

Check the [list of properties](sidebar/api/api_title_properties.md) that you can set in the configuration object of a Title control.

## Show and hide Title {#showinghiding-title}

The `show()` and `hide()` methods of Sidebar show and hide a Title control by its ID:

~~~js
sidebar.show(id);
sidebar.hide(id);
~~~

## Add a tooltip {#adding-a-tooltip}

Use the `tooltip` property to add a tooltip to a Title control:

~~~js
{
    type:"title",
    value:"2K",
    tooltip:"Your subscribers"
}
~~~ 
