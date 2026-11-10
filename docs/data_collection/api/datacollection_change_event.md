---
sidebar_label: change
title: JavaScript DataCollection - change Event 
description: You can explore the change event of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# change

@short: fires when the collection is modified

#### Usage

~~~ts
type Id = string | number;
type Statuses = "add" | "update" | "remove" | string;

change: (id?: Id, status?: Statuses, updatedItem?: IDataItem) => void;
~~~

@params:
- `id?: Id` - optional, the id of an item
- `status?: Statuses` - optional, the status of the operation: "add", "update", "remove"
- `updatedItem?: IDataItem` - optional, the object of an updated item

@example:
component.data.events.on("change", function(id,status,updatedItem){
    console.log("An item is updated");
});

@descr:
