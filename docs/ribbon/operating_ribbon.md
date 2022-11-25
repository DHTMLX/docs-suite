---
sidebar_label: Work with Ribbon
title: JavaScript Ribbon - Work with Ribbon 
description: You can explore how to work with Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Work with Ribbon

## Setting/getting values and states

You can change the value or state (for a TwoState button) of a control with the help of the [setState()](ribbon/api/ribbon_setstate_method.md) method. It takes one parameter: a *key-value* pair with the ID of the control and its new value (state).

This is how you can set the state of a twoState button:

~~~js
{ type:"button", twoState:true, id:"check" }
...
ribbon.setState({"check":true});
ribbon.setState({"check":false});
~~~

**Related sample**: [Ribbon. Set state](https://snippet.dhtmlx.com/i7kabram)

And this is how you can change the value of an input:

~~~js
{ type:"input", id: "file_name" }
...
ribbon.setState({"file_name":"My file"});
~~~

To get the current value of the control, use the [getState()](ribbon/api/ribbon_getstate_method.md) method. 

This is what the method returns for a TwoState button:

~~~js
{ type:"button", twoState:true, id:"check" }
...
ribbon.getState();
// { check:true }
// or
// { check:false }
~~~

**Related sample**: [Ribbon. Get state](https://snippet.dhtmlx.com/coei9fys)

And this is how you can get the current value of an input:

~~~js
{ type:"input", id:"file_name", value:"My file" }
...
ribbon.getState();

// {"file_name":"My file"}
~~~

## Hiding and showing controls

You can show or hide controls by their IDs. Pass them to the corresponding methods - [show()](ribbon/api/ribbon_show_method.md) and [hide()](ribbon/api/ribbon_hide_method.md):

~~~js
ribbon.hide("add_btn");
ribbon.show(["save_btn","del_btn"]);
~~~

**Related sample**: [Ribbon. Show/hide Ribbon item](https://snippet.dhtmlx.com/1jkf7954)

Starting from v7.0, it is possible to hide/show all Ribbon controls on the page at once by using the methods without parameters:

~~~js
// hides all Ribbon controls
ribbon.hide();
// shows all Ribbon controls
ribbon.show();
~~~

## Disabling and enabling controls

You can disable or enable controls. The related methods - [enable()](ribbon/api/ribbon_enable_method.md) and [disable()](ribbon/api/ribbon_disable_method.md) - take the IDs of controls as parameters:

~~~js
ribbon.disable("add_btn");
ribbon.enable(["save_btn","del_btn"]);
~~~

**Related sample**: [Ribbon. Enable / disable Ribbon item](https://snippet.dhtmlx.com/l3f8pq2g)

Starting from v7.0, it is possible to disable/enable all Ribbon controls on the page at once by using the methods without parameters:

~~~js
// disables all Ribbon controls
ribbon.disable();
// enables all Ribbon controls
ribbon.enable();
~~~

## Checking if a Ribbon item is disabled

To check if an item of Ribbon is disabled, call the [isDisabled()](ribbon/api/ribbon_isdisabled_method.md) method. The method takes one parameter:

<table>
	<tbody>
        <tr>
			<td><b>id</b></td>
			<td>(<i>string, number</i>) an id of an item</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
ribbon.isDisabled("1"); // -> true/false
~~~

**Related sample**: [Ribbon. Enable / disable Ribbon item](https://snippet.dhtmlx.com/l3f8pq2g)

## Selecting/Unselecting an item

### Selecting a ribbon item

To select a particular Ribbon item, make use of the [select()](ribbon/api/ribbon_select_method.md) method of Ribbon. The method takes two parameters:

<table>
	<tbody>
        <tr>
			<td><b>id</b></td>
			<td>(<i>string, number</i>) an id of an item</td>
		</tr>
        <tr>
			<td><b>unselect</b></td>
			<td>(<i>boolean</i>) optional, <i>true</i> - to unselect previously selected items, otherwise - <i>false</i>; <i>true</i> by default</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
ribbon.select("print");
~~~

**Related sample**: [Ribbon. Select / unselect](https://snippet.dhtmlx.com/0vy8uk4s)

### Unselecting a ribbon item

To remove selection from a selected item, apply the [unselect()](ribbon/api/ribbon_unselect_method.md) method of Ribbon. The method may take the id of an item as a parameter:

~~~js
// unselects a specified selected item
ribbon.unselect("print");
~~~

It is also possible to remove selection from all previously selected items of Ribbon via the [unselect()](ribbon/api/ribbon_unselect_method.md) method:

~~~js
// unselects all previously selected items
ribbon.unselect();
~~~

**Related sample**: [Ribbon. Select / unselect](https://snippet.dhtmlx.com/0vy8uk4s)

## Checking if a ribbon item is selected

To check if an item of Ribbon is selected, call the [isSelected()](ribbon/api/ribbon_isselected_method.md) method. The method takes one parameter:

<table>
	<tbody>
        <tr>
			<td><b>id</b></td>
			<td>(<i>string, number</i>) an id of a ribbon item</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
ribbon.isSelected("print"); // -> returns true/false
~~~

**Related sample**: [Ribbon. Select / unselect](https://snippet.dhtmlx.com/0vy8uk4s)

## Getting selected items

To get the selected items, call the [getSelected()](ribbon/api/ribbon_getselected_method.md) method. The method returns an array of IDs of selected items:

~~~js
ribbon.getSelected(); // -> ["selected_1", "selected_1.1"]
~~~

## Using Tree collection API

### Adding controls

You can add controls dynamically with the **add()** method of [TreeCollection](tree_collection.md).

~~~js
ribbon.data.add({
    type:"button",
    icon:"dxi-plus",
    value:"New"
},-1,"blockId");
~~~

**Related sample**: [Ribbon. Add item](https://snippet.dhtmlx.com/bphk7h9u)

This is how you can add a block of controls:

~~~js
ribbon.data.add({
    label:"File",
    type:"block",
    id:"files",
    direction:"row",
	items: [
		{
			icon: "dxi dxi-undo",
			size: "small",
			ribbonHeight: "double"
		},
		{
			icon: "dxi dxi-redo",
			size: "small",
			ribbonHeight: "double"
		}
	]
});
~~~

### Getting controls by IDs

You can get a particular Ribbon control by its ID via the **getItem()** method:

~~~js
const add_btn = ribbon.data.getItem("add_btn");
~~~

To get the ID of the parent of the control, call the **getParent()** method:

~~~js
const parentId = ribbon.data.getParent("add_btn");
~~~

You can also access the children of a control with the **getItems()** method:

~~~js
const items = ribbon.data.getItems("block1");
~~~

You can use the **getLength()** method of TreeCollection to count children of a control:

~~~js
ribbon.data.getLength("block1");
~~~

### Iterating through controls

You can work with all (or some) Ribbon controls with the help of the **forEach()** method of TreeCollection:

~~~js
ribbon.data.forEach(function(item){
    // remove all icons
    item.icon = "";
});
ribbon.paint();
~~~

### Iterating through children

To iterate through all controls in a particular block, pass one more parameter to **forEach()** - the ID of the block:

~~~js
ribbon.data.forEach(function(item){
    // remove all icons
    item.icon = "";
},"bl_1");
ribbon.paint();
~~~

If you want to iterate only through immediate children, pass a third parameter - *1*:

~~~js
ribbon.data.forEach(function(item){
    // remove all icons
    item.icon = "";
}, "bl_1", 1);
ribbon.paint();
~~~

Iterating through children is also can be done with the **eachChild()** method of TreeCollection:

~~~js
ribbon.data.eachChild("bl_1",function(item){
    // remove all icons
    item.icon = "";
});
ribbon.paint();
~~~

To access only the immediate children, add the **direct** parameter and set it to _false_:

~~~js
ribbon.data.eachChild("bl_1", function(item){
    // remove all icons
    item.icon = "";
},false);
ribbon.paint();
~~~

To check whether an item has childs, use the **haveItems()** method of TreeCollection:

~~~js
ribbon.data.haveItems("block1");
// -> true
~~~

### Iterating through parents

To iterate through all the parent items (the immediate parent and its parent, etc. until the parent is the ribbon itself), use the **eachParent()** method of TreeCollection:

~~~js
ribbon.data.eachParent("new_btn",function(item){
	console.log(item)
});
~~~

### Rearranging Ribbon controls

You can move Ribbon items to different positions with the **move()** method of TreeCollection. For example, this is how you can move a block with ID "bl_2" to the right edge of the Ribbon:

~~~js
ribbon.data.move("bl_2",-1);
~~~

{{note
The ID should always be a string, even if in the configuration of control you've set it as a number.
}}

To get the current position of a block, use the **getIndex()** method of TreeCollection:

~~~js
ribbon.data.getIndex("bl_2");
~~~

### Making copies of controls

You can add a copy of a control and place it in the specified position on the ribbon with the **copy()** method of TreeCollection:

~~~js
ribbon.data.copy("block1",2);
~~~

You can copy a control into a block of the same ribbon:

~~~js
ribbon.data.copy("save_btn",1,ribbon.data,"block2");
~~~

You can also copy a control and place it into another ribbon:

~~~js
ribbon1.data.copy("save_btn",1,ribbon2.data,"block3");
~~~

### Clearing Ribbon

To remove all controls from Ribbon, users should call the **removeAll()** method of TreeCollection. Afterwards, you can load other items.

~~~js
ribbon.data.removeAll();
ribbon.data.parse(new_controls);
~~~
