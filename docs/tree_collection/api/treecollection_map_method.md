---
sidebar_label: map()
title: JavaScript TreeCollection - map Method
description: You can explore the map method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# map()

@short: iterates through items

@signature: {'map(callback: function, id?: string | number, direct?: boolean): any;'}

@params:
- `callback: function` - the function that will be applied to every item. The function is called with the following parameters:
    - `item: object` - the object of an item
    - `index: number` - the index of an item
    - `array: object[]` - an array of items the method was called upon  
- `id: string | number` - the ID of a control the child items of which will be included
- `direct: boolean` - defines whether only direct children of the control will be included in the iteration

@example:
toolbar.data.map((item)=>{
    //remove all icons
    item.icon = "";
});
toolbar.paint();

@descr:

To work with all children of a particular control, pass one more parameter to **map()** - the ID of the control:

~~~jsx
toolbar.data.map((item)=>{
    // disable items
    item.disabled = true;
},"menu_1");
toolbar.paint();
~~~

If you want to iterate only through immediate children, set the third parameter to *false*:

~~~jsx
toolbar.data.map((item)=>{
    // add a css class to each item
    item.css = "highlight";
},"menu_1",false);
toolbar.paint();
~~~
