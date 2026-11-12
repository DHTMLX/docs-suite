---
sidebar_label: update()
title: JavaScript DataCollection - update Method 
description: Learn how the update method of DataCollection changes the properties of an item of a flat collection by its id, with an option to skip the events. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# update()

@short: updates the properties of an item

#### Usage

~~~ts
type Id = string | number;
update(id: Id, newItem: IDataItem, silent?: boolean): void;
~~~

@params:
- `id: Id` - the id of the item to update
- `newItem: IDataItem` - an object with the properties of the item to update
- `silent?: boolean` - optional, if set to *true*, the method will be called without triggering events, *false* by default

:::info
Note that after calling the method with the `silent:true` parameter, you may need to repaint the component that uses the collection with its `paint()` method.
:::

@example:
component.data.update(123, { text:"New text" });

@descr:
Also note, that for correct work of the method the last update of the collection should be done with the `silent:false` setting applied, for example:

~~~jsx
const itemsForUpdate = [...]; // items { ... }
const lastIndex = itemsForUpdate.length - 1;

itemsForUpdate.forEach((item, index) => {
    data.update(item.id, {
        param: "change param",
    }, index != lastIndex); // the last update isn't silent, as the `silent:false` parameter is set
});
~~~

When data is [grouped](data_collection/api/datacollection_group_method.md), DataCollection recalculates the [counters and aggregated values](data_collection/api/datacollection_group_method.md#group-counters-and-aggregates) of the groups over the resulting data.

**Related article**: [Controls and operations](window/customization.md#controls-and-operations)

**Related sample**: [Data. Update](https://snippet.dhtmlx.com/4g90gi6b)

**Related API**:
- [`getItem()`](data_collection/api/datacollection_getitem_method.md)
- [`change`](data_collection/api/datacollection_change_event.md)
