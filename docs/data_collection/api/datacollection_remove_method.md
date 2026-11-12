---
sidebar_label: remove()
title: JavaScript DataCollection - remove Method 
description: Learn how the remove method of DataCollection removes one item or an array of items from a flat collection by their ids and fires the remove events. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# remove()

@short: removes an item or several items from the collection

#### Usage

~~~ts
type Id = string | number;
remove(id: Id | Id[]): void;
~~~

@params:
- `id: Id | Id[]` - the id of the item or an array with ids of the items to remove

@example:
component.data.remove("2");
//or
component.data.remove(["2", "4"]);

@descr:

When data is [grouped](data_collection/api/datacollection_group_method.md), passing the id of a group header removes the whole group: the header itself, the items of the group, its summary row and its nested groups. DataCollection recalculates the [counters and aggregated values](data_collection/api/datacollection_group_method.md#group-counters-and-aggregates) of the groups that remain.

**Related article**: [Controls and operations](window/customization.md#controls-and-operations)

**Related sample**: [Data. Remove](https://snippet.dhtmlx.com/ugdlqgp5)

**Related API**:
- [`beforeRemove`](data_collection/api/datacollection_beforeremove_event.md)
- [`afterRemove`](data_collection/api/datacollection_afterremove_event.md)
- [`removeAll()`](data_collection/api/datacollection_removeall_method.md)
- [`add()`](data_collection/api/datacollection_add_method.md)
