---
sidebar_label: map
title: map
---          

@short: iterates through items

@params:
- cb 		function		 the function that will be applied to every item
- id        string           the ID of a control the child items of which will be included
- direct    boolean          defines whether only direct children of the control will be included in the iteration   

@example:
toolbar.data.map((item)=>{
    //remove all icons
    item.icon = "";
});
toolbar.paint();

@template: api_method
@descr:
To work with all childs of a particular control, pass one more parameter to **map()** - the ID of the control:

~~~js
toolbar.data.map((item)=>{
    // disable items
    item.$disabled = true;
},"menu_1");
toolbar.paint();
~~~

If you want to iterate only through immediate children, set the third parameter to _false_:

~~~js
toolbar.data.map((item)=>{
    // add a css class to each item
    item.css = "highlight";
},"menu_1",false);
toolbar.paint();
~~~