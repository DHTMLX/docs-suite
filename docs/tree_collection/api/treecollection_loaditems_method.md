---
sidebar_label: loadItems()
title: JavaScript TreeCollection - loadItems Method 
description: You can explore the loadItems method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# loadItems()

@short: loads the child items of an item from the server

#### Usage

~~~ts
type Id = string | number;
type DataDriver = "json" | "csv" | "xml";

loadItems(id: Id, driver?: DataDriver | IDataDriver): void;
~~~

@params:
- `id: Id` - the id of the item to load the child items of
- `driver?: DataDriver | IDataDriver` - optional, the type of data ("json", "csv", "xml") or a DataDriver object, "json" by default

@example:
const tree = new dhx.Tree("tree_container", { autoload: "/backend/autoload" });
// requests "/backend/autoload?id=1"
tree.data.loadItems("1");

@descr:

The method sends a GET request to the URL set in the `autoload` configuration of the collection and passes the id of the item in the `id` query parameter, for example, `/backend/autoload?id=1`. The server is expected to return the child items of the item in the format set by the `driver` parameter. Tree passes its [`autoload`](tree/api/tree_autoload_config.md) property to its collection.

The loaded items are added to the collection as the child items of the item.

The method fires the following events:

- [`beforeItemLoad`](tree_collection/api/treecollection_beforeitemload_event.md) - before the request is sent; return `false` from the handler to cancel loading
- [`afterItemLoad`](tree_collection/api/treecollection_afteritemload_event.md) - after the loaded items are added to the collection
- [`loadError`](tree_collection/api/treecollection_loaderror_event.md) - if loading fails

**Related API**: [`refreshItems()`](tree_collection/api/treecollection_refreshitems_method.md)
