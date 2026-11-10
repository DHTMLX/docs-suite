---
sidebar_label: eachChild()
title: JavaScript TreeCollection - eachChild Method 
description: You can explore the eachChild method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# eachChild()

@short: iterates through the child items of an item

#### Usage

~~~ts
type Id = string | number;

eachChild(id: Id, callback: (item: IDataItem, index?: number, array?: IDataItem[]) => any, direct?: boolean, checkItem?: (item: IDataItem) => boolean): void;
~~~

@params:
- `id: Id` - the id of the parent item
- `callback: function` - the function that will be applied to every child of the item. The function is called with the following parameters:
    - `item: IDataItem` - the object of an item
    - `index?: number` - optional, the index of the item
    - `array?: IDataItem[]` - optional, the array of items the method was called upon
- `direct?: boolean` - optional, defines whether the function should iterate through all children (of any level) of the specified item. If *false*, the function will iterate only through the first-level children of the item; *true* by default
- `checkItem?: function` - optional, the function that defines whether the method should iterate through the child items of an item. The function is called with the object of an item and returns *true* to iterate through its child items, or *false* to skip them

@example:
toolbar.data.eachChild("menu_1", item => {
    // disable items
    item.$disabled = true;
});
toolbar.paint();
