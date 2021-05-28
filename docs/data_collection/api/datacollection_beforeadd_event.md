---
sidebar_label: beforeAdd
title: JavaScript DataCollection - beforeAdd Event 
description: You can explore the beforeAdd event of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeAdd

@short: fires before adding a new item into a data collection

@signature: {'beforeAdd: (newItem: any) => boolean | void;'}

@params:
`newItem: object` - the object of an added item

@returns:
Return `false` to prevent an item adding into a data collection; otherwise, `true`.

@example:
data.events.on("BeforeAdd", function(newItem){
	console.log("A new item will be added");
    return true;
});

@descr:

[comment]: # (@relatedapi: data_collection/api/datacollection_afteradd_event.md)
