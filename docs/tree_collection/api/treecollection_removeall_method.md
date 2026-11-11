---
sidebar_label: removeAll()
title: JavaScript TreeCollection - removeAll Method 
description: Learn how the removeAll method of TreeCollection removes all the child items of the specified item or clears the whole tree collection. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# removeAll()

@short: removes all the items of a branch or of the whole collection

#### Usage

~~~ts
type Id = string | number;
removeAll(id?: Id): void;
~~~

@params:
- `id?: Id` - optional, the id of the branch; if not set, all the items of the collection are removed

@example:
toolbar.data.removeAll(id);

@descr:
When called without the parameter, the method removes all the items of the collection.

**Related API**:
- [`removeAll`](tree_collection/api/treecollection_removeall_event.md)
- [`remove()`](tree_collection/api/treecollection_remove_method.md)
