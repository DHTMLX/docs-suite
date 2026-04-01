---
sidebar_label: reduce()
title: JavaScript DataCollection - reduce Method 
description: You can explore the reduce method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# reduce()

@short: reduces the array to a single value

#### Usage

~~~ts
type ReduceCallBack<IDataItem, A> = (acc: A, item: IDataItem, index: number) => A;
reduce<A>(callback: ReduceCallBack<IDataItem, A>, acc: A): A;
~~~

@params:

- `callback: function` - a function that will be called for each item in the array. The function is called with the following parameters:
    - `acc: any` - the *initialValue*, or the previously returned value of the function
    - `item: IDataItem` - the current item of a data collection
    - `index: number` - the index of the item 
- `acc: any` - a value to be passed to the function as the initial value

@returns:
A single output value.

@example:
const total = component.data.reduce(function (acc, IDataItem, index) {
    return acc + IDataItem.value;
}, 0);

@descr:

**Related sample**: [Data. Reduce](https://snippet.dhtmlx.com/pv7hewc7)
