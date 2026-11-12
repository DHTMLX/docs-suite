---
sidebar_label: refreshItems()
title: JavaScript TreeCollection - refreshItems Method 
description: Learn how the refreshItems method of TreeCollection removes the child items of an item and loads them again from the autoload URL of a tree collection. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# refreshItems()

@short: reloads the child items of an item from the server

#### Usage

~~~ts
type Id = string | number;
type DataDriver = "json" | "csv" | "xml";

refreshItems(id: Id, driver?: DataDriver | IDataDriver): void;
~~~

@params:
- `id: Id` - the id of the item to refresh the child items of
- `driver?: DataDriver | IDataDriver` - optional, the type of data ("json", "csv", "xml") or a DataDriver object, "json" by default

@example:
const tree = new dhx.Tree("tree_container", { autoload: "/backend/autoload" });
// removes the child items of the "1" item and requests them anew
tree.data.refreshItems("1");

@descr:

The method removes the child items of the item from the collection and loads them anew with the [`loadItems()`](tree_collection/api/treecollection_loaditems_method.md) method.

The method sends a GET request to the URL set in the `autoload` configuration of the collection and passes the id of the item in the `id` query parameter, for example, `/backend/autoload?id=1`. The server is expected to return the child items of the item in the format set by the `driver` parameter. Tree passes its [`autoload`](tree/api/tree_autoload_config.md) property to its collection.

Loading fires the following events:

- [`beforeItemLoad`](tree_collection/api/treecollection_beforeitemload_event.md) - before the request is sent; return `false` from the handler to cancel loading. The removed child items are not restored in this case
- [`afterItemLoad`](tree_collection/api/treecollection_afteritemload_event.md) - after the loaded items are added to the collection
- [`loadError`](tree_collection/api/treecollection_loaderror_event.md) - if loading fails

**Related API**:
- [`loadItems()`](tree_collection/api/treecollection_loaditems_method.md)
- [`beforeItemLoad`](tree_collection/api/treecollection_beforeitemload_event.md)
- [`afterItemLoad`](tree_collection/api/treecollection_afteritemload_event.md)
