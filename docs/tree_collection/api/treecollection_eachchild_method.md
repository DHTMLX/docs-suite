---
sidebar_label: eachChild()
title: JavaScript TreeCollection - eachChild Method 
hide_title: true
description: You can explore the eachChild method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# eachChild()

@short: iterates through child items of a control

@signature: {'eachChild(id: Id, callback: DataCallback<T>, direct?: boolean, checkItem?: (item: IDataItem) => boolean): void;'}

@params:
- `id: string` - the ID of a control
- `callback: function` - the function that will be applied to every child of the item  
- `direct: boolean` - optional, defines whether the function should iterate through all children (of any level) of the item. If *false*, the function will iterate only through the children of the first level of the item; *true* by default
- `checkItem: function` - optional, the function that defines whether the callback function can be applied to the item. The function takes an object of a data item as a parameter and returns a *boolean* value. 

@example:
toolbar.data.eachChild("menu_1", item => {
    // disable items
    item.$disabled = true;
});
toolbar.paint();
