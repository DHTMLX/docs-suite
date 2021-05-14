---
sidebar_label: multiselection
title: multiselection
---          

@short: enables selection of multiple DataView items, sets the mode of multiselection

@signature: {'multiselection?: boolean | MultiselectionMode;'}

@values: true, false, "click", "ctrlClick" 

@example:
var dataview = new dhx.DataView("list", {multiselection:true});

@descr:

**Related sample**: [Dataview. Multiselection Dataview](https://snippet.dhtmlx.com/g0xwdx10)

Setting the **multiselection** property to *true* presupposes selection of multiple items by using Ctrl key.

[comment]: # (@related: dataview/configuration.md#multiple-selection-of-items)
