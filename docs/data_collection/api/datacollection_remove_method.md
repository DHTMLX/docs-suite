---
sidebar_label: remove()
title: JavaScript DataCollection - remove Method 
description: You can explore the remove method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# remove()

@short: deletes the specified item from the component

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
