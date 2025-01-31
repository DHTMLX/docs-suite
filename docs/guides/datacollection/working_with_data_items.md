---
sidebar_label: Working with data items
title: JavaScript Guides - Working with data items 
description: You can learn how to work with DataCollection items in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Working with data items

Besides [basic editing API of DataCollection](guides/datacollection/editing_data.md) that allows adding, copying, updating and deleting data items, there is a set of more specific methods for manipulating data items. For example, you can check the existence of an item, find necessary items, iterate over items, get the id/index of an item or get an item object by its id, etc.

## Checking existence of an item

You can check whether the specified item exists in the component via the [`exists()`](data_collection/api/datacollection_exists_method.md) method of DataCollection. The method takes the following parameter:

- `id: string | number` - the id of the item in question

and returns *true*, if the item exists; otherwise, *false*.

~~~jsx
const item = component.data.exists("1"); 
~~~

**Related sample**: [Data. Exists](https://snippet.dhtmlx.com/2ekntrbk)

## Changing the id of an item

You can change the id of the necessary element of a data collection, using the [`changeId()`](data_collection/api/datacollection_changeid_method.md) method. The method takes the following parameters:

- `id: string | number` - the old id of an item
- `newId: string | number` - optional, the new id; auto-generated if not set
- `silent: boolean` - optional, *true* to prevent changing the id; otherwise, *false*

~~~jsx
component.data.changeId("1", "22");
~~~

## Searching for certain data items

You can find data items that match some criteria. The DataCollection API allows searching for a particular item or all the matching items. 

The [`find()`](data_collection/api/datacollection_find_method.md) method finds the item that corresponds to the specified rule. It takes the following parameter:

- `rule: object | function` - the search criteria:
    - if set as an *object*, the parameter contains the following attributes:
        - `by: string | function` - the search criterion (either the key of the item attribute or a search function)
        - `match: string` - the value of the item attribute
    - if set as a *function*, the search will be applied by the rule specified in the function. The function may take three parameters:
        - `item` - (required) the object of an item
        - `index` - (optional) the index of an item
        - `array` - (optional) an array with items

The method returns the object of the matching item.

~~~jsx
//searching for an item by the function
const item = component.data.find(function(item){
    if(item.text==="Manager"||item.text==="Marketer"){return true}
});

//searching for an item by the attribute key
const item = component.data.find({by:"text",match:"Manager"});
~~~

**Related sample**: [Data. Find](https://snippet.dhtmlx.com/fpxhdc46)

The [`findAll()`](data_collection/api/datacollection_findall_method.md) method finds all the items that correspond to the specified rule. It takes the following parameter:

- `rule: object | function` - the search criteria:
    - if set as an *object*, the parameter contains the following attributes:
        - `by: string | function` - the search criterion (either the key of the item attribute or a search function)
        - `match: string` - the value of the item attribute
    - if set as a *function*, the search will be applied by the rule specified in the function. The function may take three parameters:
        - `item` - (required) the object of an item
        - `index` - (optional) the index of an item
        - `array` - (optional) an array with items

The method returns an array of matching item objects.

~~~js
//searching for items by the function
const items = component.data.findAll(function(items){
    if(items.text==="Manager"||items.text==="Marketer"){return true}
});

//searching for items by the attribute key
const items = component.data.findAll({by:"text",match:"Manager"});
~~~

**Related sample**: [Data. Find all](https://snippet.dhtmlx.com/kvemrz93)

## Iterating items 

You can iterate through the items of a data collection, the items of a component and a specified range of items.

The [`forEach()`](data_collection/api/datacollection_foreach_method.md) method iterates through all the items of a data collection. It takes as a parameter a callback function that will iterate over items of a data collection and may take three parameters:
    - `item` - (required) the object of an item
    - `index` - (optional) the index of an item
    - `array` - (optional) an array with items

~~~jsx
component.data.forEach(function(item, index, array) {
    console.log("This is an item of dataCollection: ", item);
    console.log("This is an index of the element: ", index);
    console.log("This is an array of the elements: ", array);
});
~~~

**Related sample**: [Data. ForEach](https://snippet.dhtmlx.com/wa6tcmtn)

The [`map()`](data_collection/api/datacollection_map_method.md) method iterates through all the items of the component. As a parameter it takes a callback function that will be called for each item of a component and returns a new array of items where each item is the result of the callback function.

~~~jsx
// getting the ids of all the items of the component
component.data.map(function(item){
    return item;
});
~~~

**Related sample**: [Data. Map](https://snippet.dhtmlx.com/louctp61)

The [`mapRange()`](data_collection/api/datacollection_maprange_method.md) method returns a new array of the items corresponding to the specified parameters. The method takes the following parameters:

- `from: number` - the initial position of an item in the range
- `to: number` - the final position of an item in the range
- `callback: function` - a function that will be called for each item from the specified range

and returns a new array of matching item objects.

~~~jsx
const result = component.data.mapRange(0, 20, function(item, index) {
    console.log(item.id, index);
});
~~~

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


## Getting the number of items

You can get the number of items in a data collection via the [`getLength()`](data_collection/api/datacollection_getlength_method.md) method. 

~~~jsx
const items = component.data.getLength();
~~~

**Related sample**: [Data. Get length](https://snippet.dhtmlx.com/4weiba8i)

## Moving items 

You can move an item/items to the defined position using the [`move()`](data_collection/api/datacollection_move_method.md) method. It takes the following parameters:

- `id: string | string[]` - the ids of items to move
- `index: number` - the index to move items to
- `target: object` - optional, the target data collection object

The method returns either an item's id or an array with the ids of items.

~~~jsx
component.data.move("4",5); // moves the item with id:4 to the position with index 5
~~~

**Related sample**: [Data. Move](https://snippet.dhtmlx.com/fi66bi8h)

## Reducing an array of items 

You can reduce an array of items to a single value with the [`reduce()`](data_collection/api/datacollection_reduce_method.md) method. It takes the following parameters:

- `callback: function` - a function that will be called for each item in the array. The function takes two parameters:
    - `acc` - the *initialValue*, or the previously returned value of the function
    - `item` - the current item of a data collection
- `acc: any` - a value to be passed to the function as the initial value

and returns a single output value.

~~~jsx
const total = component.data.reduce(function(acc, item) {
    return acc + item.value;
}, 0);
~~~

**Related sample**: [Data. Reduce](https://snippet.dhtmlx.com/pv7hewc7)
