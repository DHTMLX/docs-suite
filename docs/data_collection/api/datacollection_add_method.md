---
sidebar_label: add()
title: JavaScript DataCollection - add Method 
description: Learn how the add method of DataCollection adds a single item or an array of items to a flat collection at the specified index and returns the ids of the added items. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# add()

@short: adds a new item or several items to the collection

:::note
Please note that data should be loaded into DataCollection via the `parse()` method. The `add()` method is primarily intended for loading standalone items or small groups of items, so it loads data slower than the `parse()` method.
:::

#### Usage

~~~ts
type Id = string | number;
add(newItem: IDataItem | IDataItem[], index?: number): Id | Id[];
~~~

@params:
- `newItem: IDataItem | IDataItem[]` - the object of a new item or an array of item objects
- `index?: number` - optional, the index of the position starting from which new items will be added

@returns:
The id of the added item or an array with the ids of the added items.

@example:
// adding a new item into the beginning of a data collection 
component.data.add({ "value": 57.44787660011765, "id": "u1565340894584" }, 0);

// adding an array of new items into a data collection
component.data.add([
    {
        "value": 57.44787660011765,
        "id": "u1565340894584"
    },
    {
        "value": 14.612810637958095,
        "id": "u1565340894585"
    },
    {
        "value": 83.9707181117741,
        "id": "u1565340894586"
    },
    {
        "value": 59.01285878162044,
        "id": "u1565340894587"
    }
]);

@descr:

When data is [grouped](data_collection/api/datacollection_group_method.md), DataCollection recalculates the [counters and aggregated values](data_collection/api/datacollection_group_method.md#group-counters-and-aggregates) of the groups over the resulting data.

**Related article**: [Controls and operations](window/customization.md#controls-and-operations)

**Related sample**: [Data. Add](https://snippet.dhtmlx.com/ktd8ks0m)

**Related API**:
- [`beforeAdd`](data_collection/api/datacollection_beforeadd_event.md)
- [`afterAdd`](data_collection/api/datacollection_afteradd_event.md)
- [`remove()`](data_collection/api/datacollection_remove_method.md)
- [`update()`](data_collection/api/datacollection_update_method.md)

@changelog: The possibility to pass an array of items is added in v6.1.
