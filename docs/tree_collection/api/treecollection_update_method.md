---
sidebar_label: update()
title: JavaScript TreeCollection - update Method 
description: Learn how the update method of TreeCollection changes the properties of an item at any level of a tree collection by the id of the item. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# update()

@short: updates the properties of an item

#### Usage

~~~ts
type Id = string | number;
update(id: Id, newItem: IDataItem, silent?: boolean): void;
~~~

@params:
- `id: Id` - the id of the item to update
- `newItem: IDataItem` - an object with the properties of the item to update
- `silent?: boolean` - optional, if set to *true*, the method will be called without triggering events, *false* by default

:::info
Note that after calling the method with the `silent:true` parameter, you may need to repaint the component that uses the collection with its `paint()` method.
:::

@example:
toolbar.data.update("add_btn", { value:"Add new" });

@descr:
Also note, that for correct work of the method the last update of the collection should be done with the `silent:false` setting applied, for example:

~~~jsx
const itemsForUpdate = [...]; // items { ... }
const lastIndex = itemsForUpdate.length - 1;

itemsForUpdate.forEach((item, index) => {
    data.update(item.id, {
        param: "change param",
    }, index != lastIndex); // the last update isn't silent, as the `silent:false` parameter is set
});
~~~

**Related API**:
- [`getItem()`](tree_collection/api/treecollection_getitem_method.md)
- [`change`](tree_collection/api/treecollection_change_event.md)
