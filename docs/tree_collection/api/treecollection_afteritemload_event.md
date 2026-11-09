---
sidebar_label: afterItemLoad
title: JavaScript TreeCollection - afterItemLoad Event 
description: You can explore the afterItemLoad event of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
component.data.events.on("afterItemLoad", function(id){
    console.log("The child items of the " + id + " item are loaded");
});

@descr:

:::info
The event fires when you load child items via the [`loadItems()`](tree_collection/api/treecollection_loaditems_method.md) method of TreeCollection. The event also fires if you enable the [`autoload`](tree/api/tree_autoload_config.md) property of Tree.
:::

:::info
In case of error, the [`loadError`](tree_collection/api/treecollection_loaderror_event.md) event will fire.
:::

@changelog: added in v8.0
