---
sidebar_label: Editing data
title: JavaScript Guides - Editing data 
description: You can learn how to edit data with DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Editing data

You can edit the data items of a component via DataCollection API. It allows adding new items, removing particular items or all items at once, updating the necessary configuration options of the item, creating a copy of an item at the defined position, changing the id of an item.

## Adding items

To add new items into a component, use the [`add()`](data_collection/api/datacollection_add_method.md) method of [DataCollection](data_collection.md). The method takes two parameters:

- `new_item: object | array` - the object of a new item or an array of item objects
- `index: number` - optional, the index of the position starting from which new items will be added

and returns either the item's id or an array with the ids of items.

~~~jsx
// adding a new item into the beginning of a data collection 
component.data.add({"value": 57.44787660011765, "id": "u1565340894584"},0);

// adding an array of new items into a data collection
component.data.add([
    {
        "value": 57.44787660011765,
        "id": "u1565340894584"
    },
    {
        "value": 14.612810637958095,
        "id": "u1565340894585"
    },
    {
        "value": 83.9707181117741,
        "id": "u1565340894586"
    },
    {
        "value": 59.01285878162044,
        "id": "u1565340894587"
    }
]);
~~~

**Related sample**: [Data. Add](https://snippet.dhtmlx.com/ktd8ks0m)

## Removing items

To delete the specified item from the component, use the [`remove()`](data_collection/api/datacollection_remove_method.md) method. The method takes the following parameter:

- `id: string | string[]` - the ids of the items that should be deleted 

~~~jsx
component.data.remove("2");
//or
component.data.remove(["2", "4"]);
~~~

**Related sample**: [Data. Remove](https://snippet.dhtmlx.com/ugdlqgp5)

To delete all items from the component, use the [`removeAll()`](data_collection/api/datacollection_removeall_method.md) method.

~~~jsx
component.data.removeAll();
~~~

**Related sample**: [Data. Remove all](https://snippet.dhtmlx.com/ykk2ne82)

## Updating items 

You can update the properties of the item with the help of the [`update()`](data_collection/api/datacollection_update_method.md) method. The method takes two parameters:

- `id: string | number` - the id of the item which needs to be updated
- `newItem: object` - a hash of properties which need to be updated

~~~jsx
component.data.update(123, { text:"New text" });
~~~

**Related sample**: [Data. Update](https://snippet.dhtmlx.com/4g90gi6b)

## Copying items

The [`copy()`](data_collection/api/datacollection_copy_method.md) method will help you to create a copy of an item at the defined position. The method takes the following parameters:

- `id: (string | number) | (string | number)[]` - the id of an item or an array with ids of items to copy
- `index: number` - the index to create a copy at
- `target: object` - optional, the target data collection object

and returns the item's id or an array with ids of items.

~~~jsx
component.data.copy("4",5); // copies the item with id:4 to the position with index 5
~~~

**Related sample**: [Data. Copy](https://snippet.dhtmlx.com/9rws8r05)

## Changing the id of an item

You can change the id of the necessary element of a data collection, using the [`changeId()`](data_collection/api/datacollection_changeid_method.md) method. The method takes the following parameters:

- `id: string | number` - the old id of an item
- `newId: string | number` - optional, the new id; auto-generated if not set
- `silent: boolean` - optional, *true* to prevent changing the id; otherwise, *false*

~~~jsx
component.data.changeId("1", "22");
~~~