---
sidebar_label: beforeItemLoad
title: JavaScript TreeCollection - beforeItemLoad Event 
description: You can explore the beforeItemLoad event of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeItemLoad

@short: fires before the child items of an item are loaded

#### Usage

~~~ts
type Id = string | number;
beforeItemLoad: (id: Id) => boolean | void;
~~~

@params:
- `id: Id` - the id of the item the child items of which will be loaded

@returns:
Return `false` to prevent loading of the child items; otherwise, `true`.

@example:
component.data.events.on("beforeItemLoad", function(id){
    console.log("The child items of the " + id + " item will be loaded");
    // return false to prevent loading of the child items
    return false;
});

@descr:

:::info
The event fires when you load child items via the [`loadItems()`](tree_collection/api/treecollection_loaditems_method.md) method of TreeCollection. The event also fires if you enable the [`autoload`](tree/api/tree_autoload_config.md) property of Tree.
:::

:::info
In case of error, the [`loadError`](tree_collection/api/treecollection_loaderror_event.md) event will fire.
:::

:::note
If you block the auto-load for a Tree folder, the folder will be defined as a file after you try to open it.

To prevent this behavior, change the logic of the folders' definition via the `isFolder` property:

~~~jsx {2}
const tree = new dhx.Tree("tree_container", {
    isFolder: obj => obj.items,
    autoload:"https://docs.dhtmlx.com/suite/backend/autoload"
});
~~~
:::

@changelog: added in v8.0