---
sidebar_label: itemsCount
title: itemsCount
---          

@short: shows the total number of selected options

@signature: {'itemsCount?: boolean | ((count: number) => string);'}

@example:
var combo = new dhx.Combobox("combo_container", {
    multiselection: true,
    itemsCount: function (num) {
        return num + (num === 1 ? " item" : " items") + " selected";
    }
});

@descr: 

**Related sample**: [Combobox. Items Count](https://snippet.dhtmlx.com/fw2u2bww)

As a function takes one parameter:

- **count** - (*number*) the number of options

and should return a template for displaying a result.

{{note To be able to select several options you need to enable the **multiselection** option.}}

@changelog: added in v6.4 

[comment]: # (@related: combobox/how_to_start.md#initialize-combobox combobox/configuration.md#number-of-selected-options)
