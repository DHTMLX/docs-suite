---
sidebar_label: value
title: value
description: description
---          

@short: specifies the values that will appear in the input on initialization of the combobox

@signature: {'value?: string | string[];'}

@example: 
var combobox = new dhx.Combobox("combobox", {
    multiselection: true,
    value: ["austria", "estonia"] /*!*/
});

// or
var combobox = new dhx.Combobox("combobox", {
    value: "austria" /*!*/
});

@descr: 

**Related sample**: [Combobox. Initial Value](https://snippet.dhtmlx.com/spnausim)

- If *multiselection:true* is set for a combo, the property takes an array of string values as:<br/> *value: ["1","2","3"]*,
- If *multiselection:false* is set or the *multiselection* config is not defined, the property gets either of the two values: *value:"1"* or *value: ["1"]*

@changelog: added in v7.0

[comment]: # (@related: combo/configuration.md#initial-value)
