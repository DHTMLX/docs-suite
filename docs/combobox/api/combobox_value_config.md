---
sidebar_label: value
title: JavaScript Combo Box - value Config 
description: You can explore the value config of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# value

@short: Optional. Specifies the values that will appear in the input on initialization of the combobox by their id(s)

@signature: {'value?: string | number | (string | number)[];'}

@example:
const combobox = new dhx.Combobox("combo_container", {
    multiselection: true,
    value: ["austria", "estonia"]
});

// or
const combobox = new dhx.Combobox("combo_container", {
    value: "austria"
});

@descr:

**Related sample**: [Combobox. Initial value](https://snippet.dhtmlx.com/spnausim)

- If *multiselection:true* is set for a combo, the property takes an array of options' ids as:<br/> *value: ["1","2","3"]*;
- If *multiselection:false* is set or the *multiselection* config is not defined, the property gets either of the two values: *value:"1"* or *value: ["1"]*.

@changelog: added in v7.0

[comment]: # (@related: combo/configuration.md#initial-value)
