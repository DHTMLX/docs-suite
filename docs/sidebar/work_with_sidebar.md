---
sidebar_label: Work with Sidebar
title: JavaScript Sidebar - Work with Sidebar 
description: You can explore how to work with Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Sidebar

## Expand and collapse Sidebar {#expanding-and-collapsing-sidebar}

The [`expand()`](sidebar/api/sidebar_expand_method.md) and [`collapse()`](sidebar/api/sidebar_collapse_method.md) methods expand and collapse a sidebar:

~~~js
sidebar.expand(); // expands a sidebar
sidebar.collapse(); // collapses a sidebar
~~~

**Related sample**: [Sidebar. Collapse/expand](https://snippet.dhtmlx.com/ydlltdq6)

## Toggle Sidebar {#toggling-sidebar}

The [`toggle()`](sidebar/api/sidebar_toggle_method.md) method collapses an expanded sidebar and expands a collapsed one:

~~~js
sidebar.toggle();
~~~

**Related sample**: [Sidebar. Toggle](https://snippet.dhtmlx.com/wll2h9nd)

## Check if Sidebar is collapsed {#checking-if-sidebar-is-collapsed}

The [`isCollapsed()`](sidebar/api/sidebar_iscollapsed_method.md) method checks whether a sidebar is collapsed. The method returns `true` if the sidebar is collapsed and `false` if it is expanded:

~~~js
sidebar.isCollapsed(); // -> true/false
~~~

## Show and hide controls {#hiding-and-showing-controls}

The [`show()`](sidebar/api/sidebar_show_method.md) and [`hide()`](sidebar/api/sidebar_hide_method.md) methods show and hide controls by their IDs:

~~~js
sidebar.hide(id); // hides a control
sidebar.show(id); // shows a control
~~~

**Related sample**: [Sidebar. Show/hide](https://snippet.dhtmlx.com/5hsowdoy)

Starting from v7.0, you can call the methods without parameters to hide or show all Sidebar controls at once:

~~~js
// hides all Sidebar controls
sidebar.hide();
// shows all Sidebar controls
sidebar.show();
~~~

## Enable and disable controls {#disabling-and-enabling-controls}

The [`enable()`](sidebar/api/sidebar_enable_method.md) and [`disable()`](sidebar/api/sidebar_disable_method.md) methods enable and disable controls by their IDs:

~~~js
sidebar.disable(id); // disables a control
sidebar.enable(id);  // enables a control
~~~

**Related sample**: [Sidebar. Enable/disable](https://snippet.dhtmlx.com/ea9fywne)

Starting from v7.0, you can call the methods without parameters to disable or enable all Sidebar controls at once:

~~~js
// disables all Sidebar controls
sidebar.disable();
// enables all Sidebar controls
sidebar.enable();
~~~

## Check if a Sidebar item is disabled {#checking-if-a-sidebar-item-is-disabled}

The [`isDisabled()`](sidebar/api/sidebar_isdisabled_method.md) method checks whether a Sidebar item is disabled. The method takes one parameter:

<table>
    <tbody>
        <tr>
            <td><code>id</code></td>
            <td>(<code>string | number</code>) the ID of a Sidebar item</td>
        </tr>
    </tbody>
</table>

~~~js
sidebar.isDisabled("1"); // -> true/false
~~~

**Related sample**: [Sidebar. Enable/disable](https://snippet.dhtmlx.com/ea9fywne)

## Select and unselect an item {#selectingunselecting-an-item}

### Select a Sidebar item {#selecting-a-sidebar-item}

The [`select()`](sidebar/api/sidebar_select_method.md) method of Sidebar selects a particular item. The method takes two parameters:

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
sidebar.select("categoryPost");
~~~

**Related sample**: [Sidebar. Select / unselect](https://snippet.dhtmlx.com/3odod5v1)

### Unselect a Sidebar item {#unselecting-a-sidebar-item}

The [`unselect()`](sidebar/api/sidebar_unselect_method.md) method of Sidebar removes selection from a selected item. The method takes the ID of an item as an optional parameter:

~~~js
// unselects a specified selected item
sidebar.unselect("categoryPost");
~~~

Call the method without parameters to remove selection from all selected Sidebar items:

~~~js
// unselects all previously selected items
sidebar.unselect();
~~~

**Related sample**: [Sidebar. Select / unselect](https://snippet.dhtmlx.com/3odod5v1)

## Check if a Sidebar item is selected {#checking-if-a-sidebar-item-is-selected}

The [`isSelected()`](sidebar/api/sidebar_isselected_method.md) method checks whether a Sidebar item is selected. The method takes one parameter:

<table>
    <tbody>
        <tr>
            <td><code>id</code></td>
            <td>(<code>string | number</code>) the ID of a Sidebar item</td>
        </tr>
    </tbody>
</table>
<br/>

~~~js
sidebar.isSelected("categoryPost"); // -> returns true/false
~~~

**Related sample**: [Sidebar. Select / unselect](https://snippet.dhtmlx.com/3odod5v1)

## Get selected items {#getting-selected-items}

The [`getSelected()`](sidebar/api/sidebar_getselected_method.md) method returns an array with the IDs of selected items:

~~~js
sidebar.getSelected(); // -> ["selected_1", "selected_1.1"]
~~~

## Use the TreeCollection API {#using-tree-collection-api}

You can manipulate Sidebar controls with the [TreeCollection API](/tree_collection/).

### Add new controls to Sidebar {#adding-new-controls-into-sidebar}

Use the `add()` method of TreeCollection to add controls to an initialized sidebar. The method takes three parameters:

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
sidebar.data.add({
    type:"navItem", value:"Music"
});
sidebar.data.add({
    type:"separator"
});
sidebar.data.add({
    type:"menuItem", value:"Photos"
});
~~~

**Related sample**: [Sidebar. Data add](https://snippet.dhtmlx.com/jcnw95ac)

Check the [JSON format templates](sidebar/data_loading.md#json-format-templates) for Sidebar controls.

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
sidebar.data.update("add", { 
    icon: "icon_name" 
});
~~~

**Related sample**: [Sidebar. Data update](https://snippet.dhtmlx.com/p1zu63le)

### Remove controls from Sidebar {#removing-controls-from-sidebar}

The `remove()` method of TreeCollection removes a control. Pass the ID of the control to the method:

~~~js
sidebar.data.remove("control-id");
~~~

**Related sample**: [Sidebar. Data remove](https://snippet.dhtmlx.com/ecp3etuf)

### Rearrange controls {#rearranging-controls}

Use the `move()` method of TreeCollection to move Sidebar controls to different positions. For example, the following code moves the item with the `"2"` ID to the top of the sidebar:

~~~js
sidebar.data.move("2",0);
~~~

{{note Check the full [TreeCollection API](/tree_collection/) reference.}}
