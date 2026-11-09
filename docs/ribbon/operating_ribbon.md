---
sidebar_label: Work with Ribbon
title: JavaScript Ribbon - Work with Ribbon 
description: You can explore how to work with Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Ribbon

## Set and get values and states {#settinggetting-values-and-states}

Use the [`setState()`](ribbon/api/ribbon_setstate_method.md) method to change the value of a control or the state of a `twoState` button. The method takes one parameter: an object with *key-value* pairs, where the key is the ID of a control and the value is its new value or state.

The following code sets the state of a `twoState` button:

~~~js
{ type:"button", twoState:true, id:"check" }
...
ribbon.setState({"check":true});
ribbon.setState({"check":false});
~~~

**Related sample**: [Ribbon. Set state](https://snippet.dhtmlx.com/i7kabram)

The following code changes the value of an input:

~~~js
{ type:"input", id: "file_name" }
...
ribbon.setState({"file_name":"My file"});
~~~

Use the [`getState()`](ribbon/api/ribbon_getstate_method.md) method to get the current values and states of controls.

The method returns the following object for a `twoState` button:

~~~js
{ type:"button", twoState:true, id:"check" }
...
ribbon.getState();
// { check:true }
// or
// { check:false }
~~~

**Related sample**: [Ribbon. Get state](https://snippet.dhtmlx.com/coei9fys)

The method returns the following object for an input:

~~~js
{ type:"input", id:"file_name", value:"My file" }
...
ribbon.getState();

// {"file_name":"My file"}
~~~

## Show and hide controls {#hiding-and-showing-controls}

The [`show()`](ribbon/api/ribbon_show_method.md) and [`hide()`](ribbon/api/ribbon_hide_method.md) methods show and hide controls by their IDs. Pass the ID of a control or an array of IDs to the methods:

~~~js
ribbon.hide("add_btn");
ribbon.show(["save_btn","del_btn"]);
~~~

**Related sample**: [Ribbon. Show/hide Ribbon item](https://snippet.dhtmlx.com/1jkf7954)

Starting from v7.0, you can call the methods without parameters to hide or show all Ribbon controls at once:

~~~js
// hides all Ribbon controls
ribbon.hide();
// shows all Ribbon controls
ribbon.show();
~~~

## Enable and disable controls {#disabling-and-enabling-controls}

The [`enable()`](ribbon/api/ribbon_enable_method.md) and [`disable()`](ribbon/api/ribbon_disable_method.md) methods enable and disable controls by their IDs. Pass the ID of a control or an array of IDs to the methods:

~~~js
ribbon.disable("add_btn");
ribbon.enable(["save_btn","del_btn"]);
~~~

**Related sample**: [Ribbon. Enable / disable Ribbon item](https://snippet.dhtmlx.com/l3f8pq2g)

Starting from v7.0, you can call the methods without parameters to disable or enable all Ribbon controls at once:

~~~js
// disables all Ribbon controls
ribbon.disable();
// enables all Ribbon controls
ribbon.enable();
~~~

## Check if a Ribbon item is disabled {#checking-if-a-ribbon-item-is-disabled}

The [`isDisabled()`](ribbon/api/ribbon_isdisabled_method.md) method checks whether a Ribbon item is disabled. The method takes one parameter:

<table>
    <tbody>
        <tr>
            <td><code>id</code></td>
            <td>(<code>string | number</code>) the ID of an item</td>
        </tr>
    </tbody>
</table>
<br/>

~~~js
ribbon.isDisabled("1"); // -> true/false
~~~

**Related sample**: [Ribbon. Enable / disable Ribbon item](https://snippet.dhtmlx.com/l3f8pq2g)

## Select and unselect an item {#selectingunselecting-an-item}

### Select a Ribbon item {#selecting-a-ribbon-item}

The [`select()`](ribbon/api/ribbon_select_method.md) method of Ribbon selects a particular item. The method takes two parameters:

<table>
    <tbody>
        <tr>
            <td><code>id</code></td>
            <td>(<code>string | number</code>) the ID of an item</td>
        </tr>
        <tr>
            <td><code>unselect</code></td>
            <td>(<code>boolean</code>) optional, <code>true</code> to unselect previously selected items, otherwise <code>false</code> (default: <code>true</code>)</td>
        </tr>
    </tbody>
</table>
<br/>

~~~js
ribbon.select("print");
~~~

**Related sample**: [Ribbon. Select / unselect](https://snippet.dhtmlx.com/0vy8uk4s)

### Unselect a Ribbon item {#unselecting-a-ribbon-item}

The [`unselect()`](ribbon/api/ribbon_unselect_method.md) method of Ribbon removes selection from a selected item. The method takes the ID of an item as an optional parameter:

~~~js
// unselects a specified selected item
ribbon.unselect("print");
~~~

Call the method without parameters to remove selection from all selected Ribbon items:

~~~js
// unselects all previously selected items
ribbon.unselect();
~~~

**Related sample**: [Ribbon. Select / unselect](https://snippet.dhtmlx.com/0vy8uk4s)

## Check if a Ribbon item is selected {#checking-if-a-ribbon-item-is-selected}

The [`isSelected()`](ribbon/api/ribbon_isselected_method.md) method checks whether a Ribbon item is selected. The method takes one parameter:

<table>
    <tbody>
        <tr>
            <td><code>id</code></td>
            <td>(<code>string | number</code>) the ID of a Ribbon item</td>
        </tr>
    </tbody>
</table>
<br/>

~~~js
ribbon.isSelected("print"); // -> returns true/false
~~~

**Related sample**: [Ribbon. Select / unselect](https://snippet.dhtmlx.com/0vy8uk4s)

## Get selected items {#getting-selected-items}

The [`getSelected()`](ribbon/api/ribbon_getselected_method.md) method returns an array with the IDs of selected items:

~~~js
ribbon.getSelected(); // -> ["selected_1", "selected_1.1"]
~~~

## Use the TreeCollection API {#using-tree-collection-api}

### Add controls {#adding-controls}

Use the `add()` method of [TreeCollection](/tree_collection/) to add controls dynamically:

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

### Get controls by IDs {#getting-controls-by-ids}

Use the `getItem()` method to get a Ribbon control by its ID:

~~~js
const add_btn = ribbon.data.getItem("add_btn");
~~~

To get the ID of the parent of a control, call the `getParent()` method:

~~~js
const parentId = ribbon.data.getParent("add_btn");
~~~

The `getItems()` method returns the children of a control:

~~~js
const items = ribbon.data.getItems("block1");
~~~

The `getLength()` method of TreeCollection counts the children of a control:

~~~js
ribbon.data.getLength("block1");
~~~

### Iterate through controls {#iterating-through-controls}

Use the `forEach()` method of TreeCollection to work with all (or some) Ribbon controls:

~~~js
ribbon.data.forEach(function(item){
    // remove all icons
    item.icon = "";
});
ribbon.paint();
~~~

### Iterate through children {#iterating-through-children}

The `forEach()` method can also iterate through all controls of a block. Pass the ID of the block as the second parameter:

~~~js
ribbon.data.forEach(function(item){
    // remove all icons
    item.icon = "";
},"bl_1");
ribbon.paint();
~~~

To iterate only through the immediate children, pass `1` as the third parameter:

~~~js
ribbon.data.forEach(function(item){
    // remove all icons
    item.icon = "";
}, "bl_1", 1);
ribbon.paint();
~~~

The `eachChild()` method of TreeCollection also iterates through the children of a control:

~~~js
ribbon.data.eachChild("bl_1",function(item){
    // remove all icons
    item.icon = "";
});
ribbon.paint();
~~~

To iterate only through the immediate children, set the `direct` parameter to `false`:

~~~js
ribbon.data.eachChild("bl_1", function(item){
    // remove all icons
    item.icon = "";
},false);
ribbon.paint();
~~~

To check whether an item has children, use the `haveItems()` method of TreeCollection:

~~~js
ribbon.data.haveItems("block1");
// -> true
~~~

### Iterate through parents {#iterating-through-parents}

The `eachParent()` method of TreeCollection iterates through all parents of an item, from the immediate parent up to the ribbon itself:

~~~js
ribbon.data.eachParent("new_btn",function(item){
    console.log(item)
});
~~~

### Rearrange Ribbon controls {#rearranging-ribbon-controls}

Use the `move()` method of TreeCollection to move Ribbon items to different positions. For example, the following code moves the block with the `"bl_2"` ID to the right edge of the ribbon:

~~~js
ribbon.data.move("bl_2",-1);
~~~

{{note
The ID should always be a string, even if you set it as a number in the control configuration.
}}

To get the current position of a block, use the `getIndex()` method of TreeCollection:

~~~js
ribbon.data.getIndex("bl_2");
~~~

### Copy controls {#making-copies-of-controls}

Use the `copy()` method of TreeCollection to add a copy of a control and place it at the specified position on the ribbon:

~~~js
ribbon.data.copy("block1",2);
~~~

The following code copies a control into a block of the same ribbon:

~~~js
ribbon.data.copy("save_btn",1,ribbon.data,"block2");
~~~

The following code copies a control into a block of another ribbon:

~~~js
ribbon1.data.copy("save_btn",1,ribbon2.data,"block3");
~~~

### Clear Ribbon {#clearing-ribbon}

The `removeAll()` method of TreeCollection removes all controls from Ribbon. After that, you can load other controls:

~~~js
ribbon.data.removeAll();
ribbon.data.parse(new_controls);
~~~
