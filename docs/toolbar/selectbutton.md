---
sidebar_label: SelectButton
title: JavaScript Toolbar - SelectButton 
description: You can explore the SelectButton of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# SelectButton

The SelectButton control displays a button with a drop-down list of options.

![Toolbar select button with an expanded dropdown of options and hotkeys in DHTMLX Suite](/img/toolbar/selectbutton.png)

**Related sample**: [Toolbar. SelectButton](https://snippet.dhtmlx.com/nqq5ej8w)

## Add SelectButton {#adding-selectbutton}

Use the `add()` method of [TreeCollection](/tree_collection/) to add a SelectButton control to a toolbar:

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

Check the [list of properties](toolbar/api/api_selectbutton_properties.md) that you can set in the configuration object of a SelectButton control.

## Work with SelectButton {#operations-with-a-button}

Use the [Toolbar API](toolbar/api/api_overview.md) and the [TreeCollection API](/tree_collection/) to work with a SelectButton control.
