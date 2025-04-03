---
sidebar_label: Working with data items
title: JavaScript Guides - Working with data items 
description: You can learn how to work with DataCollection items in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Working with data items

The [DataCollection API](data_collection.md) provides a wide set of methods for working with data items. You can get the id/index of an item, add, update, delete, copy, move data items, find necessary items, iterate over items, etc.

## Getting the id of an item

You can get the id of an item by using the [`getId()`](data_collection/api/datacollection_getid_method.md) method of DataCollection. As a parameter, the method takes the index of the item.

~~~jsx
const id = component.data.getId(0); // -> returns "1"
~~~

**Related sample**: [Data. Get Id](https://snippet.dhtmlx.com/8e02xliz)

## Getting the index of an item 

To get the index of an item, make use of the [`getIndex()`](data_collection/api/datacollection_getindex_method.md) method of DataCollection. The method takes the id of the item as a parameter.

~~~jsx
const index = component.data.getIndex("1"); // -> returns 0
~~~

**Related sample**: [Data. Get index](https://snippet.dhtmlx.com/1ottirdt)

## Getting the object of an item

You can get the object of an item with the help of the [`getItem()`](data_collection/api/datacollection_getitem_method.md) method of DataCollection. As a parameter the method takes the id of a selected item.

~~~jsx
const item = component.data.getItem(123);
~~~

It is possible to get access to the original properties of an item using the `getItem()` method. For example:

~~~jsx
const item = component.data.getItem(123);
const text = item.text;
~~~

**Related sample**: [Data. Get item](https://snippet.dhtmlx.com/wz2sscrm)

## Adding items

To add new items into a component, use the [`add()`](data_collection/api/datacollection_add_method.md) method of DataCollection. The method takes two parameters:

- `new_item: object | array` - the object of a new item or an array of item objects
- `index?: number` - optional, the index of the position starting from which new items will be added

and returns either the item's id or an array with the ids of items.

~~~jsx
// adding a new item into the beginning of a data collection 
component.data.add({ "value": 57.44787660011765, "id": "u1565340894584" }, 0);

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

To delete the specified item from the component, use the [`remove()`](data_collection/api/datacollection_remove_method.md) method of DataCollection. The method takes the following parameter:

- `id: string | string[]` - the ids of the items that should be deleted 

~~~jsx
component.data.remove("2");
//or
component.data.remove(["2", "4"]);
~~~

**Related sample**: [Data. Remove](https://snippet.dhtmlx.com/ugdlqgp5)

To delete all items from the component, use the [`removeAll()`](data_collection/api/datacollection_removeall_method.md) method of DataCollection.

~~~jsx
component.data.removeAll();
~~~

**Related sample**: [Data. Remove all](https://snippet.dhtmlx.com/ykk2ne82)

## Updating items 

You can update the properties of the item with the help of the [`update()`](data_collection/api/datacollection_update_method.md) method of DataCollection. The method takes the following parameters:

- `id: string | number` - the id of the item which needs to be updated
- `newItem: object` - a hash of properties which need to be updated
- `silent?: boolean` - optional, if set to *true*, the method will be called without triggering events, *false* by default

~~~jsx
component.data.update(123, { text:"New text" });
~~~

:::info
Note that after calling the method with the `silent:true` parameter, you may need to repaint the component with the `paint()` method.
:::

For correct work of the method the last update of a data collection should be done with the `silent:false` setting applied, for example:

~~~jsx
const lastIndex = data.getLength() - 1;

data.forEach((item, index) => {
    data.update(item.id, {
        param: "change param",
    }, index != lastIndex); // the last update isn't silent, as the `silent:false` parameter is set
});
~~~

**Related sample**: [Data. Update](https://snippet.dhtmlx.com/4g90gi6b)

## Copying items

The [`copy()`](data_collection/api/datacollection_copy_method.md) method of DataCollection will help you to create a copy of an item at the defined position. The method takes the following parameters:

- `id: (string | number) | (string | number)[]` - the id of an item or an array with ids of items to copy
- `index: number` - the index to create a copy at
- `target?: object` - optional, the target data collection object

and returns the item's id or an array with ids of items.

~~~jsx
component.data.copy("4", 5); // copies the item with id:4 to the position with index 5
~~~

**Related sample**: [Data. Copy](https://snippet.dhtmlx.com/9rws8r05)

## Moving items 

You can move an item/items to the defined position using the [`move()`](data_collection/api/datacollection_move_method.md) method of DataCollection. It takes the following parameters:

- `id: string | string[]` - the ids of items to move
- `index: number` - the index to move items to
- `target?: object` - optional, the target data collection object

The method returns either an item's id or an array with the ids of items.

~~~jsx
component.data.move("4", 5); // moves the item with id:4 to the position with index 5
~~~

**Related sample**: [Data. Move](https://snippet.dhtmlx.com/fi66bi8h)

## Changing the id of an item

You can change the id of the necessary element of a data collection, using the [`changeId()`](data_collection/api/datacollection_changeid_method.md) method. The method takes the following parameters:

- `id: string | number` - the old id of an item
- `newId?: string | number` - optional, the new id; auto-generated if not set
- `silent?: boolean` - optional, if set to *true*, the method will be called without triggering events; otherwise, *false*

~~~jsx
component.data.changeId("1", "22");
~~~

## Checking existence of an item

You can check whether the specified item exists in the component via the [`exists()`](data_collection/api/datacollection_exists_method.md) method of DataCollection. The method takes the following parameter:

- `id: string | number` - the id of the item in question

and returns *true*, if the item exists; otherwise, *false*.

~~~jsx
const item = component.data.exists("1"); 
~~~

**Related sample**: [Data. Exists](https://snippet.dhtmlx.com/2ekntrbk)

## Getting the number of items

You can get the number of items in a data collection via the [`getLength()`](data_collection/api/datacollection_getlength_method.md) method. 

~~~jsx
const dataLength = component.data.getLength();
~~~

:::info note
Note that for [TreeCollection](tree_collection.md) the [`getLength()`](tree_collection/api/treecollection_getlength_method.md) method will return the number of the child items of the component.
:::

**Related sample**: [Data. Get length](https://snippet.dhtmlx.com/4weiba8i)

## Searching for certain data items

You can find data items that match some criteria. The DataCollection API allows searching for a particular item or all the matching items. 

### Searching for a particular item

The [`find()`](data_collection/api/datacollection_find_method.md) method of DataCollection finds the item that corresponds to the specified rule. It takes the following parameter:

- `rule: object | function` - the search criteria:
    - if set as an object, the parameter contains the following attributes:
        - `by: string | function` - the search criterion (either the key of the item attribute or a search function)
        - `match: string` - the value of the item attribute
    - if set as a function, the search will be applied by the rule specified in the function. The function takes three parameters:
        - `item: object` - the object of an item
        - `index?: number` - optional, the index of an item
        - `array?: object[]` - optional, an array of items the method was called upon

The method returns the object of the matching item.

~~~jsx
// searching for an item by the function
const item = component.data.find(function (item) {
    if (item.text === "Manager" || item.text === "Marketer") {
        return true
    }
});

// searching for an item by the attribute key
const item = component.data.find({ by: "text", match: "Manager" });
~~~

**Related sample**: [Data. Find](https://snippet.dhtmlx.com/fpxhdc46)

### Searching for several items 

The [`findAll()`](data_collection/api/datacollection_findall_method.md) method of DataCollection finds all the items that correspond to the specified rule. It takes the following parameter:

- `rule: object | function` - the search criteria:
    - if set as an object, the parameter contains the following attributes:
        - `by: string | function` - the search criterion (either the key of the item attribute or a search function)
        - `match: string` - the value of the item attribute
    - if set as a function, the search will be applied by the rule specified in the function. The function takes three parameters:
        - `item: object` - the object of an item
        - `index?: number` - optional, the index of an item
        - `array?: object[]` - optional, an array of items the method was called upon

The method returns an array of matching item objects.

~~~jsx
// searching for items by the function
const items = component.data.findAll(function (items) {
    if (items.text === "Manager" || items.text === "Marketer") {
        return true
    }
});

// searching for items by the attribute key
const items = component.data.findAll({ by: "text", match: "Manager" });
~~~

**Related sample**: [Data. Find all](https://snippet.dhtmlx.com/kvemrz93)

## Iterating items 

You can iterate through the items of a data collection, the items of a component and a specified range of items.

### Iterating through the items of a data collection

The [`forEach()`](data_collection/api/datacollection_foreach_method.md) method iterates through all the items of a data collection. It takes as a parameter a callback function that will iterate over items of a data collection and is called with the following parameters:
    - `item: object` - the object of an item
    - `index?: number` - optional, the index of an item
    - `array?: object[]` - optional, an array of items the method was called upon

~~~jsx
component.data.forEach(function (item, index, array) {
    console.log("This is an item of dataCollection: ", item);
    console.log("This is an index of the element: ", index);
    console.log("This is an array of the elements: ", array);
});
~~~

**Related sample**: [Data. ForEach](https://snippet.dhtmlx.com/wa6tcmtn)

### Iterating through the items of a component

The [`map()`](data_collection/api/datacollection_map_method.md) method of DataCollection iterates through all the items of the component. As a parameter it takes a callback function that will be called for each item of a component. The function is called with the following parameters:
    - `item: object` - the object of an item
    - `index?: number` - optional, the index of an item
    - `array?: object[]` - optional, an array of items the method was called upon 
    
and returns a new array of items where each item is the result of the callback function.

~~~jsx
// getting the ids of all the items of the component
component.data.map(function (item, index, array) {
    return item.id;
});
~~~

**Related sample**: [Data. Map](https://snippet.dhtmlx.com/louctp61)

### Iterating through the items of a specified range 

The [`mapRange()`](data_collection/api/datacollection_maprange_method.md) method of DataCollection returns a new array of the items corresponding to the specified parameters. The method takes the following parameters:

- `from: number` - the initial position of an item in the range
- `to: number` - the final position of an item in the range
- `callback: function` - a function that will be called for each item from the specified range. The function is called with the following parameters:
    - `item: object` - the object of an item
    - `index?: number` - optional, the index of an item
    - `array?: object[]` - optional, an array of items the method was called upon

and returns a new array of matching item objects.

~~~jsx
const result = component.data.mapRange(0, 20, function (item, index, array) {
    console.log(item.id, index);
});
~~~

## Reducing an array of items 

You can reduce an array of items to a single value with the [`reduce()`](data_collection/api/datacollection_reduce_method.md) method of DataCollection. It takes the following parameters:

- `callback: function` - a function that will be called for each item in the array. The function is called with the following parameters:
    - `acc: any` - the *initialValue*, or the previously returned value of the function
    - `item: any` - the current item of a data collection
    - `index: number` - the index of the item 
- `acc: any` - a value to be passed to the function as the initial value

and returns a single output value.

~~~jsx
const total = component.data.reduce(function (acc, item, index) {
    return acc + item.value;
}, 0);
~~~

**Related sample**: [Data. Reduce](https://snippet.dhtmlx.com/pv7hewc7)
