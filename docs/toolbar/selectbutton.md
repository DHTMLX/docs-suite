---
sidebar_label: SelectButton
title: JavaScript Toolbar - SelectButton 
description: You can explore the SelectButton of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# SelectButton

This is a button that contains a drop-down list of options.

![](../assets/toolbar/selectbutton.png)

**Related sample**: [Toolbar. SelectButton](https://snippet.dhtmlx.com/nqq5ej8w)

## Adding SelectButton

A new SelectButton can be created with the help of the **add()** method of [Tree Collection](tree_collection.md):

~~~js
toolbar.data.add(
    {
        id: "title",
        value: "Select count or use alt+num"
    },
    {
           id: "currentButton",
        type: "selectButton",
        value: "1",
        items: [
              {
                value: "1",
                hotkey: "alt+1"
              },
              {
                value: "2",
                hotkey: "alt+2"
              },
              {
                value: "3",
                hotkey: "alt+3"
              },
              {
                value: "4",
                hotkey: "alt+4"
              }
        ]
    }
);
~~~

### Properties

The configuration object of the SelectButton control can have [the following properties](toolbar/api/api_selectbutton_properties.md).

## Operations with a button

You can perform operations over the SelectButton control with the help of the available [Toolbar API](toolbar/api/api_overview.md) and [Tree Collection API](tree_collection.md).
