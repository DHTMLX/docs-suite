---
sidebar_label: itemHeight
title: itemHeight
---          

@short: sets the height of an item

@signature: itemHeight?: number | string;

@default:37

@example: 
// sets the height of an item as a number
var list = new dhx.List("list_container", { 
    itemHeight:30
});

// sets the height of an item as a string value
var list = new dhx.List("list_container", { 
    itemHeight:"30px"
});


@template:	api_config
@descr: 
The usage of the *CSS calc() function* within the **itemHeight** property is not possible.

The default height of a list item is 37  when the [virtual](list/api/list_virtual_config.md) property is set to *true*. See the list/configuration.md#heightofanitem article for more information. 

@related: list/configuration.md#heightofanitem

@relatedapi: list/api/list_virtual_config.md

@relatedsample: https://snippet.dhtmlx.com/89buovn2	List. Setup List Item Height
