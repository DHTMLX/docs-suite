---
sidebar_label: map()
title: JavaScript TreeCollection - map Method
description: You can explore the map method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# map()

@short: iterates through the items of the collection and returns an array of the callback results

#### Usage

~~~ts
type Id = string | number;

map(callback: (item: IDataItem, index?: number, array?: IDataItem[]) => any, parent?: Id, direct?: boolean): any[];
~~~

@params:
- `callback: function` - the function that will be applied to every item. The function is called with the following parameters:
    - `item: IDataItem` - the object of an item
    - `index?: number` - optional, the index of the item
    - `array?: IDataItem[]` - optional, the array of items the method was called upon
- `parent?: Id` - optional, the id of the item the child items of which will be included; the root of the collection by default
- `direct?: boolean` - optional, defines whether the method iterates through the child items of all levels (*true*) or only through the direct child items of the parent item (*false*); *true* by default

@returns:
A new array with the results of calling the callback function for each item.

@example:
toolbar.data.map((item) => {
    // remove all icons
    item.icon = "";
});
toolbar.paint();

@descr:

To work with the child items of a particular item, pass the id of the item as the second parameter of `map()`:

~~~jsx
toolbar.data.map((item) => {
    // disable items
    item.disabled = true;
}, "menu_1");
toolbar.paint();
~~~

To iterate only through the direct child items, set the third parameter to *false*:

~~~jsx
toolbar.data.map((item) => {
    // add a css class to each item
    item.css = "highlight";
}, "menu_1", false);
toolbar.paint();
~~~
