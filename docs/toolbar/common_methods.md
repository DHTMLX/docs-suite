---
sidebar_label: Work with Toolbar
title: JavaScript Toolbar - Work with Toolbar 
description: You can explore how to work with Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Toolbar

## Set and get values and states {#settinggetting-values-and-states}

### Set values and states {#setting-valuesstates}

The [`setState()`](toolbar/api/toolbar_setstate_method.md) method changes the value of a control or the state of a TwoState navItem. The method takes one parameter: a key-value pair with the ID of the control and its new value or state.

The following example changes the state of a TwoState navItem:

~~~js
{type:"navItem", twoState:true, id:"check"}
...
toolbar.setState({"check":true});
//or
toolbar.setState({"check":false});
~~~

The following example changes the value of an input:

~~~js
{type:"input", id:"name", value:""}
...
toolbar.setState({"name":"Maintenance"});
~~~

**Related sample**: [Toolbar. Set state](https://snippet.dhtmlx.com/h34uh1dr)

### Get values and states {#getting-valuesstates}

The [`getState()`](toolbar/api/toolbar_getstate_method.md) method returns the current value or state of a control.

Starting from v7.0, the method takes the ID of a Toolbar control as an optional parameter and returns the value or state of this control. If you omit the `id` parameter, the method returns an object with the IDs of all controls and their values or states.

The method returns the following values for a TwoState navItem:

~~~js
{type:"navItem", twoState:true, id:"check"}
...
toolbar.getState("check"); // -> true/false
// or
toolbar.getState(); // -> { "check":true } or { "check":false }
~~~

The method returns the following values for an input:

~~~js
{type:"input", id:"name", value:"Maintenance"}
...
toolbar.getState("name"); // -> "Maintenance"
// or
toolbar.getState(); // -> {"name":"Maintenance"}
~~~

**Related sample**: [Toolbar. Get state](https://snippet.dhtmlx.com/kvttdgad)

## Show and hide controls {#hiding-and-showing-controls}

The [`show()`](toolbar/api/toolbar_show_method.md) and [`hide()`](toolbar/api/toolbar_hide_method.md) methods show and hide controls by their IDs:

~~~js
toolbar.hide(id); // hides a control
toolbar.show(id); // shows a control
~~~

**Related sample**: [Toolbar. Hide / show items](https://snippet.dhtmlx.com/cldp89u4)

Starting from v7.0, you can call the methods without parameters to hide or show all Toolbar controls at once:

~~~js
// hides all Toolbar controls
toolbar.hide();
// shows all Toolbar controls
toolbar.show();
~~~

## Enable and disable controls {#disabling-and-enabling-controls}

The [`enable()`](toolbar/api/toolbar_enable_method.md) and [`disable()`](toolbar/api/toolbar_disable_method.md) methods enable and disable controls by their IDs:

~~~js
toolbar.disable(id); // disables a control
toolbar.enable(id);  // enables a control
~~~

**Related sample**: [Toolbar. Enable / disable items](https://snippet.dhtmlx.com/ovblenaf)

Starting from v7.0, you can call the methods without parameters to disable or enable all Toolbar controls at once:

~~~js
// disables all Toolbar controls
toolbar.disable();
// enables all Toolbar controls
toolbar.enable();
~~~

## Check if a Toolbar item is disabled {#checking-if-a-toolbar-item-is-disabled}

The [`isDisabled()`](toolbar/api/toolbar_isdisabled_method.md) method checks whether a Toolbar item is disabled. The method takes one parameter:

<table>
    <tbody>
        <tr>
            <td><code>id</code></td>
            <td>(<code>string | number</code>) the ID of a Toolbar item</td>
        </tr>
    </tbody>
</table>
<br/>

~~~js
menu.isDisabled("1"); // -> true/false
~~~

**Related sample**: [Toolbar. Enable / disable items](https://snippet.dhtmlx.com/ovblenaf)

## Add a tooltip to a control {#adding-a-tooltip-to-a-control}

You can attach a tooltip to a control. Specify the tooltip text in the `tooltip` property of the control before you initialize the toolbar:

~~~js
{
    type: "text",
    value: "test1",
    tooltip: "tooltip for test1"
}
~~~

## Select and unselect an item {#selectingunselecting-an-item}

### Select a Toolbar item {#selecting-a-toolbar-item}

The [`select()`](toolbar/api/toolbar_select_method.md) method of Toolbar selects a particular item. The method takes two parameters:

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

~~~js
toolbar.select("web");
~~~

**Related sample**: [Toolbar. Select / unselect items](https://snippet.dhtmlx.com/mi7qjwg2)

### Unselect a Toolbar item {#unselecting-a-toolbar-item}

The [`unselect()`](toolbar/api/toolbar_unselect_method.md) method of Toolbar removes selection from a selected item. The method takes the ID of an item as an optional parameter:

~~~js
// unselects a specified selected item
toolbar.unselect("web");
~~~

Call the method without parameters to remove selection from all selected Toolbar items:

~~~js
// unselects all previously selected items
toolbar.unselect();
~~~

**Related sample**: [Toolbar. Select / unselect items](https://snippet.dhtmlx.com/mi7qjwg2)

## Check if a Toolbar item is selected {#checking-if-a-toolbar-item-is-selected}

The [`isSelected()`](toolbar/api/toolbar_isselected_method.md) method checks whether a Toolbar item is selected. The method takes one parameter:

<table>
    <tbody>
        <tr>
            <td><code>id</code></td>
            <td>(<code>string | number</code>) the ID of a Toolbar item</td>
        </tr>
    </tbody>
</table>
<br/>

~~~js
toolbar.isSelected("web"); // -> returns true/false
~~~

**Related sample**: [Toolbar. Select / unselect items](https://snippet.dhtmlx.com/mi7qjwg2)

## Get selected items {#getting-selected-items}

The [`getSelected()`](toolbar/api/toolbar_getselected_method.md) method returns an array with the IDs of selected items:

~~~js
toolbar.getSelected(); // -> ["selected_1", "selected_1.1"]
~~~

**Related sample**: [Toolbar. Tooltips](https://snippet.dhtmlx.com/105levtd)

## Use the TreeCollection API {#using-tree-collection-api}

You can manipulate Toolbar controls with the [TreeCollection API](/tree_collection/).

### Add new controls to Toolbar {#adding-new-controls-into-toolbar}

Use the `add()` method of TreeCollection to add controls to an initialized toolbar. The method takes three parameters:

<table>
    <tbody>
        <tr>
            <td><code>config</code></td>
            <td>(<code>object</code>) the configuration object of the added control</td>
        </tr>
        <tr>
            <td><code>index</code></td>
            <td>(<code>number</code>) optional, the position to add a control at</td>
        </tr>
        <tr>
            <td><code>parent</code></td>
            <td>(<code>string</code>) optional, the ID of a parent control (for the <code>menuItem</code> control type)</td>
        </tr>
    </tbody>
</table>
<br/>

~~~js
toolbar.data.add({
    type:"button", value:"Add"
});
toolbar.data.add({
    type:"separator"
});
toolbar.data.add({
    type:"button", value:"Remove"
});
~~~

**Related sample**: [Toolbar. Add new item](https://snippet.dhtmlx.com/r6jv9kk2)

Check the [JSON format templates](toolbar/load_data.md#json-format-templates) for Toolbar controls.

### Update the configuration of controls {#updating-config-of-controls}

The `update()` method of TreeCollection changes the configuration options of a control. The method takes two parameters:

<table>
    <tbody>
        <tr>
            <td><code>id</code></td>
            <td>the ID of a control</td>
        </tr>
        <tr>
            <td><code>config</code></td>
            <td>an object with the new configuration of the control</td>
        </tr>
    </tbody>
</table>

For example, you can change the icon of a control:

~~~js
toolbar.data.update("edit", { 
    icon: "mdi mdi-pencil" 
});
~~~

**Related sample**: [Toolbar. Update item](https://snippet.dhtmlx.com/xfs5gh5t)

### Remove controls from Toolbar {#removing-controls-from-toolbar}

The `remove()` method of TreeCollection removes a control. Pass the ID of the control to the method:

~~~js
toolbar.data.remove("control-id");
~~~

**Related sample**: [Toolbar. Remove item](https://snippet.dhtmlx.com/w8jcn1t2)

### Rearrange controls {#rearranging-controls}

Use the `move()` method of TreeCollection to move Toolbar controls to different positions. For example, the following code moves the item with the `"2"` ID to the left edge of the toolbar:

~~~js
toolbar.data.move("2",0);
~~~

{{note Check the full [TreeCollection API](/tree_collection/) reference.}}
