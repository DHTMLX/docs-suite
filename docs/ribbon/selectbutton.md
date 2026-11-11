---
sidebar_label: SelectButton
title: JavaScript Ribbon - SelectButton 
description: You can explore the SelectButton of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# SelectButton

The SelectButton control displays a button with a drop-down list of options.

![Ribbon select button with a dropdown list of file format options in DHTMLX Suite](/img/ribbon/select_button.png)

## Add SelectButton {#adding-selectbutton}

Use the `add()` method of TreeCollection to add a SelectButton control to a ribbon:

~~~js
ribbon.data.add({
    id:"select",
    type: "selectButton",
    value: "jpeg",
    size: "small",
    count: 20,
    items: [
        {
            value: "jpeg",
            hotkey: "alt+1"
        },
        {
            value: "pdf",
            hotkey: "alt+2"
        },
        {
            value: "png",
            hotkey: "alt+3"
        }
    ]
});
~~~

**Related sample**: [Ribbon. SelectButton](https://snippet.dhtmlx.com/5acqc24m)

### Properties

Check the [list of properties](ribbon/api/api_selectbutton_properties.md) that you can set in the configuration object of a SelectButton control.

## Work with SelectButton {#operations-with-a-button}

Use the [Ribbon API](ribbon/api/api_overview.md) and the [TreeCollection API](/tree_collection/) to work with a SelectButton control.
