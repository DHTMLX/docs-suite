---
sidebar_label: afterAdd
title: JavaScript DataCollection - afterAdd Event 
description: You can explore the afterAdd event of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterAdd

@short: fires after adding a new item into a data collection

@signature: {'afterAdd: (newItem: any) => void;'}

@params:
`newItem: object` - the object of an added item

@example:
component.data.events.on("AfterAdd", function(newItem){
	console.log("A new item is added");
});

@descr:

[comment]: # (@relatedapi:data_collection/api/datacollection_beforeadd_event.md)
