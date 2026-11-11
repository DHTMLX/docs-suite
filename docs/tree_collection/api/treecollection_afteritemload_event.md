---
sidebar_label: afterItemLoad
title: JavaScript TreeCollection - afterItemLoad Event 
description: Learn when the afterItemLoad event of TreeCollection fires once the child items of an item are loaded with loadItems or refreshItems and added to the collection. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# afterItemLoad

@short: fires after the child items of an item are loaded

#### Usage

~~~ts
type Id = string | number;
afterItemLoad: (id: Id) => void;
~~~

@params:
- `id: Id` - the id of the item the child items of which are loaded

@example:
component.data.events.on("afterItemLoad", (id) => {
    console.log("The child items of the " + id + " item are loaded");
});

@descr:

:::info
The event fires when you load child items via the [`loadItems()`](tree_collection/api/treecollection_loaditems_method.md) method of TreeCollection. The event also fires if you enable the [`autoload`](tree/api/tree_autoload_config.md) property of Tree.
:::

:::info
In case of error, the [`loadError`](tree_collection/api/treecollection_loaderror_event.md) event will fire.
:::

**Related API**:
- [`loadItems()`](tree_collection/api/treecollection_loaditems_method.md)
- [`refreshItems()`](tree_collection/api/treecollection_refreshitems_method.md)
- [`beforeItemLoad`](tree_collection/api/treecollection_beforeitemload_event.md)

@changelog: added in v8.0
