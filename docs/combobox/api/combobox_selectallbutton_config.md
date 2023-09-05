---
sidebar_label: selectAllButton
title: JavaScript Combo Box - selectAllButton Config 
description: You can explore the selectAllButton config of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# selectAllButton

@short: Optional. Defines whether the Select All button should be shown

@signature: {'selectAllButton?: boolean;'}

@default: false

@example:
const combo = new dhx.Combobox("combo_container", {
    // enables multiple selection of options
    multiselection:true,
    // shows the Select All button
    selectAllButton: true
});

@descr:

**Related sample**: [Combobox. Multiselection, add new options (free text), select all button](https://snippet.dhtmlx.com/ui7pi7ty)

{{note To be able to select several options you need to enable the **multiselection** option.}}

[comment]: # (@related: combobox/how_to_start.md#initialize-combobox combobox/configuration.md#selection-of-all-options-in-the-list)
