---
sidebar_label: itemHeight
title: JavaScript List - itemHeight Config 
hide_title: true
description: You can explore the itemHeight config of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# itemHeight

@short: sets the height of an item

@signature: {'itemHeight?: number | string;'}

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

@descr:

**Related sample**: [List. Setup List Item Height](https://snippet.dhtmlx.com/89buovn2)

The usage of the *CSS calc() function* within the **itemHeight** property is not possible.

The default height of a list item is 37  when the [virtual](list/api/list_virtual_config.md) property is set to *true*. See the [Configuration](list/configuration.md#height-of-an-item) article for more information. 

[comment]: # (@related: list/configuration.md#height-of-an-item)

[comment]: # (@relatedapi: list/api/list_virtual_config.md)
