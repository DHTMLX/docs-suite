---
sidebar_label: remove()
title: JavaScript TreeCollection - remove Method 
description: Learn how the remove method of TreeCollection removes one item or an array of items from a tree collection together with their child items. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# remove()

@short: removes an item or several items from the collection

#### Usage

~~~ts
type Id = string | number;
remove(id: Id | Id[]): void;
~~~

@params:
- `id: Id | Id[]` - the id of the item or an array with ids of the items to remove

@example:
toolbar.data.remove("id");

@descr:

**Related API**:
- [`beforeRemove`](tree_collection/api/treecollection_beforeremove_event.md)
- [`afterRemove`](tree_collection/api/treecollection_afterremove_event.md)
- [`removeAll()`](tree_collection/api/treecollection_removeall_method.md)
- [`add()`](tree_collection/api/treecollection_add_method.md)
