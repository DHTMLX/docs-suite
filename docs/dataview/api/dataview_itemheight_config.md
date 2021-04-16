---
sidebar_label: itemHeight
title: itemHeight
---          

@short: sets the height of an item

@signature: itemHeight?: number | string;

@example: 
// sets the height of an item as a number
var dataview = new dhx.DataView("dataview", { 
    itemHeight:30
});

// sets the height of an item as a string value
var dataview = new dhx.DataView("dataview", { 
    itemHeight:"30px"
});


@template:	api_config
@descr: 
The usage of the *CSS calc() function* within the **itemHeight** property is not possible.

@related: dataview/configuration.md#heightofanitem

@relatedsample: https://snippet.dhtmlx.com/cth9mwrf	Dataview. Setup Dataview Item Height



