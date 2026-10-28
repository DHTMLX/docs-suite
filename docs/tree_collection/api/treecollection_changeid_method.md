---
sidebar_label: changeId()
title: JavaScript TreeCollection - changeId Method
description: Learn how the changeId method of TreeCollection changes the id of a tree item, keeps its child items attached to it and reports the new id. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# changeId()

@short: changes the id of an item of a tree collection

#### Usage

~~~ts
type Id = string | number;
changeId(id: Id, newId?: Id, silent?: boolean): Id;
~~~

@params:
- `id: Id` - the old id of an item
- `newId?: Id` - optional, the new id; auto-generated if not set
- `silent?: boolean` - optional, if set to *true*, the method will not trigger the [change](tree_collection/api/treecollection_change_event.md) event; otherwise, *false*

@returns:
The new id of the item, or the original id if the change was rejected.

@example:
// changing the id of an item
component.data.changeId("1", "22"); // -> "22"

// the child items of the item get the new parent id
component.data.getParent("1.1"); // -> "22"

// changing the id without triggering the change event
component.data.changeId("22", "33", true);

@descr:
The child items of the item stay attached to it: their `parent` property takes the new id, also while a filter is applied.

The method leaves the item as is, shows a warning in the browser console and returns the original id in the following cases:

- `id` or `newId` is the id of the root item of the collection
- the collection has no item with the `id` id
- an item with the `newId` id already exists
- `newId` is not a valid id, that is, neither a number nor a non-empty string
- the data is grouped

**Related API**:
- [`getParent()`](tree_collection/api/treecollection_getparent_method.md)
- [`getRoot()`](tree_collection/api/treecollection_getroot_method.md)
- [`exists()`](tree_collection/api/treecollection_exists_method.md)
