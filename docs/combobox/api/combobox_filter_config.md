---
sidebar_label: filter
title: JavaScript Combo Box - filter Config 
hide_title: true
description: You can explore the filter config of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# filter

@short: sets a custom function for filtering Combo Box options

@signature: {'filter?: (item: any, input: string) => boolean;'}

@example:
function mySearch(item, target) {
    // your filtering logic here            
}
var combo = new dhx.Combobox("combo_container", {
    filter: mySearch
});

@descr: 

**Related sample**: [Combobox. Custom Filter](https://snippet.dhtmlx.com/791incm9)

[comment]: # (@related: combobox/how_to_start.md#initialize-combobox combobox/customization.md#custom-filter-for-options)
