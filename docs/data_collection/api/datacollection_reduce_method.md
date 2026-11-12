---
sidebar_label: reduce()
title: JavaScript DataCollection - reduce Method 
description: Learn how the reduce method of DataCollection calls a reducer function for each item of a flat collection to calculate a single value, such as a sum of the values. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# reduce()

@short: reduces the items of the collection to a single value

#### Usage

~~~ts
type ReduceCallBack<IDataItem, A> = (acc: A, item: IDataItem, index: number) => A;
reduce<A>(callback: ReduceCallBack<IDataItem, A>, acc: A): A;
~~~

@params:

- `callback: function` - a function that will be called for each item of the collection. The function is called with the following parameters:
    - `acc: any` - the *initialValue*, or the previously returned value of the function
    - `item: IDataItem` - the current item of the collection
    - `index: number` - the index of the item 
- `acc: any` - a value to be passed to the function as the initial value

@returns:
A single output value.

@example:
const total = component.data.reduce((acc, item, index) => {
    return acc + item.value;
}, 0);

@descr:

**Related sample**: [Data. Reduce](https://snippet.dhtmlx.com/pv7hewc7)

**Related API**:
- [`map()`](data_collection/api/datacollection_map_method.md)
- [`forEach()`](data_collection/api/datacollection_foreach_method.md)
