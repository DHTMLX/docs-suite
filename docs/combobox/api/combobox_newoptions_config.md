---
sidebar_label: newOptions
title: JavaScript Combo Box - newOptions Config 
description: You can explore the data config of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# newOptions

@short: Optional. Allows end users to add new options into the data collection of Combobox

@signature: {'newOptions?: boolean;'}

@default: false

@example:
const combobox = new dhx.Combobox("combo_container", {
    multiselection: true,
      newOptions: true  
});

@descr: 

**Related sample**: [Combobox. Multiselection, add new options (free text), select all button](https://snippet.dhtmlx.com/ui7pi7ty)

The end user can add a new item into the data collection in two ways:

1. by entering a new value into the input and pressing "Enter"
2. by entering a new value into the input and selecting the appeared *Create "newValue"* option in the drop-down list

{{note When a user enters a new value into the input, the combobox invokes the [beforeAdd](data_collection/api/datacollection_beforeadd_event.md) and [afterAdd](data_collection/api/datacollection_afteradd_event.md) events of the Data Collection object. If the **beforeAdd** event returns *false*, a new item won't be added into the data collection.}}

@changelog: added in v7.3

@descr:
#### Related article

[Editable combobox](combobox/configuration.md/#editable-combobox)
