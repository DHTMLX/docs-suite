---
sidebar_label: Title
title: JavaScript Toolbar - Title 
description: You can explore the Title of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Title

The Title control displays text on a toolbar.

![Toolbar title text controls showing My profile and a welcome label with badges in DHTMLX Suite](/img/toolbar/title.png)

**Related sample**: [Toolbar. Title](https://snippet.dhtmlx.com/dwynhb7o)

## Add Title {#adding-title-control}

Use the `add()` method of [TreeCollection](/tree_collection/) to add a Title control to a toolbar:

~~~js
toolbar.data.add({
    type: "title",
    value: "APP NAME"
});
~~~

### Properties

Check the [list of properties](toolbar/api/api_title_properties.md) that you can set in the configuration object of a Title control.

## Show and hide Title {#showinghiding-title}

The [`show()`](toolbar/api/toolbar_show_method.md) and [`hide()`](toolbar/api/toolbar_hide_method.md) methods of Toolbar show and hide a Title control by its ID:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

**Related sample**: [Toolbar. Hide / show items](https://snippet.dhtmlx.com/cldp89u4)

## Add a tooltip {#adding-a-tooltip}

Use the `tooltip` property to add a tooltip to a Title control:

~~~js
{
    type:"title",
    value:"2K",
    tooltip:"Your subscribers"
}
~~~

**Related sample**: [Toolbar. Tooltips](https://snippet.dhtmlx.com/105levtd)
