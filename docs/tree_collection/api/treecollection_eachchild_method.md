---
sidebar_label: eachChild()
title: JavaScript TreeCollection - eachChild Method 
description: You can explore the eachChild method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# eachChild()

@short: iterates through child items of a control

@signature: {'eachChild(id: string | number, callback: function, direct?: boolean, checkItem?: (item: object) => boolean): void;'}

@params:
- `id: string` - the ID of a control
- `callback: function` - the function that will be applied to every child of the item. The function takes three parameters:
    - `item: object` - required, the object of an item
    - `index: number` - optional, the index of an item
    - `array: object[]` - optional, an array with items  
- `direct: boolean` - optional, defines whether the function should iterate through all children (of any level) of the specified item. If *false*, the function will iterate only through the first-level children of the item; *true* by default.
- `checkItem: function` - optional, the function that defines whether the callback function can be applied to the item. The function takes an object of a data item as a parameter and returns a *boolean* value. 

@example:
toolbar.data.eachChild("menu_1", item => {
    // disable items
    item.$disabled = true;
});
toolbar.paint();
