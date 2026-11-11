---
sidebar_label: change
title: JavaScript DataCollection - change Event 
description: Learn when the change event of DataCollection fires whenever items are added, updated or removed, and which id, status and item the handler receives. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
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

**Related API**:
- [`add()`](data_collection/api/datacollection_add_method.md)
- [`update()`](data_collection/api/datacollection_update_method.md)
- [`remove()`](data_collection/api/datacollection_remove_method.md)
