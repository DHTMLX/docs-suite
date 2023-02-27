---
sidebar_label: beforeItemLoad
title: JavaScript TreeCollection - beforeItemLoad Event 
description: You can explore the beforeAdd event of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeItemLoad

@short: fires before loading an item

@descr:
:::info
The event fires when you load items via the <a href="../treecollection_loaditems_method/">loadItems()</a> method of Tree Collection. The method also fires if you enable the <a href="../../../tree/api/tree_autoload_config">autoload</a> property of Tree.
:::

@signature: {'beforeItemLoad:({ id: string | number }) => boolean | void;'}

@params:
- `id: string | number` - the id of the item to load

@returns:
Return `false` to prevent loading of an item; otherwise, `true`.

@example:
component.data.events.on("beforeItemLoad", function(id){
	console.log("An ", id, " item will be loaded");
    return false;
});

@descr: 

:::info
In case of error, the [loadError](tree_collection/api/treecollection_loaderror_event.md) event will fire.
:::

:::note
If you block the auto-load for a Tree folder, the folder will be defined as a file after you try to open it.

To prevent this behavior, change the logic of the folders' definition via the `isFolder` property:

~~~js {2}
const tree = new dhx.Tree("tree_container", {
    isFolder: obj => obj.items,
	autoload:"https://docs.dhtmlx.com/suite/backend/autoload"
});
~~~
:::

@changelog: added in v8.0