---
sidebar_label: filter
title: JavaScript Combo Box - filter Config 
description: You can explore the filter config of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# filter

@short: Optional. Sets a custom function for filtering Combo Box options

@signature: {'filter?: (item: object, target: string) => boolean;'}

@params:
The **filter** property is a custom function which takes two parameters:

- `item: object` - an [item](combobox/api/combobox_data_config.md) of data collection
- `target: string` - the string to compare to

and should return *true/false* to specify whether an item should be displayed in the filtered list of options.

@example:
function mySearch(item, target) {
    // your filtering logic here            
}
const combo = new dhx.Combobox("combo_container", {
    filter: mySearch
});

@descr: 

**Related sample**: [Combobox. Custom filter](https://snippet.dhtmlx.com/791incm9)

[comment]: # (@related: combobox/how_to_start.md#initialize-combobox combobox/customization.md#custom-filter-for-options)
