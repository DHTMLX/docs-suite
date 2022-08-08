---
sidebar_label: SelectButton
title: JavaScript Ribbon - SelectButton 
description: You can explore the SelectButton of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# SelectButton

This is a button that contains a drop-down list of options.

![DHX Select Button](../assets/ribbon/select_button.png)

## Adding SelectButton

A new SelectButton can be created with the help of the **add()** method of Tree Collection:

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

You can provide the [following properties](ribbon/api/api_selectbutton_properties.md) in the configuration object of a SelectButton control.

## Operations with a button

You can perform operations over the SelectButton control with the help of the available [Ribbon API](ribbon/api/api_overview.md) and [Tree Collection API](tree_collection.md).
