---
sidebar_label: itemsCount
title: JavaScript Combo Box - itemsCount Config 
description: You can explore the itemsCount config of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# itemsCount

@short: Optional. Shows the total number of selected options

@signature: {'itemsCount?: boolean | ((count: number) => string);'}

@example:
const combo = new dhx.Combobox("combo_container", {
    multiselection: true,
    itemsCount: function (num) {
        return num + (num === 1 ? " item" : " items") + " selected";
    }
});

@descr:

**Related sample**: [Combobox. Items count](https://snippet.dhtmlx.com/fw2u2bww)

As a function takes one parameter:

- `count: number` - the number of options

and should return a template for displaying a result.

{{note To be able to select several options you need to enable the **multiselection** option.}}

@changelog: added in v6.4 

[comment]: # (@related: combobox/how_to_start.md#initialize-combobox combobox/configuration.md#number-of-selected-options)
