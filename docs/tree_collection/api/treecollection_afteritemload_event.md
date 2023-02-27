---
sidebar_label: afterItemLoad
title: JavaScript TreeCollection - afterItemLoad Event 
description: You can explore the afterItemLoad event of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterItemLoad

@short: fires after loading an item

@descr:
:::info
The event fires when you load items via the <a href="../treecollection_loaditems_method/">loadItems()</a> method of Tree Collection. The method also fires if you enable the <a href="../../../tree/api/tree_autoload_config">autoload</a> property of Tree.
:::

@signature: {'afterItemLoad:({ id: string | number }) => void;'}

@params:
- `id: string | number` - the id of the loaded item

@example:
component.data.events.on("afterItemLoad", function(id){
	console.log("An ", id, " item is loaded");
});

@descr: 

:::info
In case of error, the [loadError](tree_collection/api/treecollection_loaderror_event.md) event will fire.
:::

@changelog: added in v8.0
