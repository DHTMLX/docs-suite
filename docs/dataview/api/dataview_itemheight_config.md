---
sidebar_label: itemHeight
title: JavaScript DataView - itemHeight Config 
description: You can explore the itemHeight config of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# itemHeight

@short: sets the height of an item

@signature: {'itemHeight?: number | string;'}

@example:
// sets the height of an item as a number
var dataview = new dhx.DataView("dataview", { 
    itemHeight:30
});

// sets the height of an item as a string value
var dataview = new dhx.DataView("dataview", { 
    itemHeight:"30px"
});

@descr:

**Related sample**: [Dataview. Setup Dataview Item Height](https://snippet.dhtmlx.com/cth9mwrf)

The usage of the *CSS calc() function* within the **itemHeight** property is not possible.

[comment]: # (@related: dataview/configuration.md#height-of-an-item)
