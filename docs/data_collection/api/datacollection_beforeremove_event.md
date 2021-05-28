---
sidebar_label: beforeRemove
title: JavaScript DataCollection - beforeRemove Event 
hide_title: true
description: You can explore the beforeRemove event of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# beforeRemove

@short: fires before removing an item from a data collection

@signature: {'beforeRemove: (removedItem: any) => boolean | void;'}

@params:
`removedItem: object` - the object of an item to remove

@returns:
Return `false` to block removing an item from a data collection; otherwise, `true`.

@example:
data.events.on("BeforeRemove", function(removedItem){
	console.log("An item will be removed");
    return true;
});

@descr:

[comment]: # (@relatedapi:data_collection/api/datacollection_afterremove_event.md)
