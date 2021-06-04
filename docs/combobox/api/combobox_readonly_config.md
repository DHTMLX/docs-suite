---
sidebar_label: readOnly
title: JavaScript Combo Box - readOnly Config 
description: You can explore the readOnly config of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# readOnly

@short: makes Combo Box readonly

@signature: {'readOnly?: boolean;'}

@default: false

@example:
var combo = new dhx.Combobox("combo_container", { 
    readOnly:true
});

@descr:

**Related sample**: [Combobox. Readonly](https://snippet.dhtmlx.com/igjsuf7y)

{{note Note, that in v7.0, the **readonly** property have been deprecated and renamed to **readOnly**. }}

In this mode it is only possible to select options from the list, without entering words in the input.

[comment]: # (@related: combobox/how_to_start.md#initialize-combobox combobox/configuration.md#readonly-mode)
