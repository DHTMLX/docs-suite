---
sidebar_label: remove()
title: JavaScript DataCollection - remove Method 
description: You can explore the remove method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# remove()

@short: deletes the specified item from the component

@signature: {'remove(id: (string | number) | (string | number)[]): void;'}

@params:
- `id: string | string[]` - the ids of the items that should be deleted 

@example:
component.data.remove("2");
//or
component.data.remove(["2", "4"]);

@descr:

When data is [grouped](data_collection/api/datacollection_group_method.md), passing the id of a group header removes the whole group: the header itself, the items of the group, its summary row and its nested groups. DataCollection recalculates the [counters and aggregated values](data_collection/api/datacollection_group_method.md#group-counters-and-aggregates) of the remaining groups.

**Related sample**: [Data. Remove](https://snippet.dhtmlx.com/ugdlqgp5)

@changelog:
- As of v9.4, the method called with the id of a group header removes the items of that group as well

[comment]: # (@related:window/customization.md#controls-and-operations)
