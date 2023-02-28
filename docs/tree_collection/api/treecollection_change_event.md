---
sidebar_label: change
title: JavaScript TreeCollection - change Event 
description: You can explore the change event of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# change

@short: fires when a tree collection is modified

@signature: {'change: (id?: string, status?: Statuses, updatedItem?: any) => void;'}

@params:
- `id: string` - the id of an item
- `status: string` - the status of the operation:"add", "update", "remove"
- `updatedItem: object` - the object of an updated item

@example:
component.data.events.on("change", function(id,status,updatedItem){
	console.log("An item is updated");
});

@descr:
