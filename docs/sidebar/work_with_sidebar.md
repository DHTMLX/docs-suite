---
sidebar_label: Work with Sidebar
title: Work with Sidebar
---          

Adding a tooltip to a control
--------------------

You can attach a tooltip to a control. For this you need to provide the **tooltip** property with the tooltip text in the control object before the sidebar initialization:

~~~js
{
    type: "menuItem",
    value: "test1",
    tooltip: "tooltip for test1"
}
~~~

Hiding and showing controls
-----------------

You can show or hide controls by their IDs. Pass them to the corresponding methods - [show()](sidebar/api/sidebar_show_method.md) and [hide()](sidebar/api/sidebar_hide_method.md):

~~~js
sidebar.hide(id); // hides a control
sidebar.show(id); // shows a control
~~~

{{editor	https://snippet.dhtmlx.com/5hsowdoy	Sidebar. Show/Hide}}

Starting from v7.0, it is possible to hide/show all Sidebar controls on the page at once by using the methods without parameters:

~~~js
// hides all Sidebar controls
sidebar.hide();
// shows all Sidebar controls
sidebar.show();
~~~

Expanding and collapsing Sidebar
----------------------------------

It is possible to expand/collapse a sidebar using two corresponding methods - [expand()](sidebar/api/sidebar_expand_method.md) and [collapse()](sidebar/api/sidebar_collapse_method.md):

~~~js
sidebar.expand(); // expands a sidebar
sidebar.collapse(); // collapses a sidebar
~~~

{{editor	https://snippet.dhtmlx.com/ydlltdq6	Sidebar. Collapse/Expand}}

Checking if Sidebar is collapsed
------------------------------

To check whether Sidebar is collapsed, make use of the [isCollapsed()](sidebar/api/sidebar_iscollapsed_method.md) method of the Sidebar API. The method returns *true*, if a sidebar is collapsed, and *false* if it's expanded.

~~~js
sidebar.isCollapsed(); // -> true/false
~~~


Disabling and enabling controls
---------------------

You can disable or enable controls. The related methods - [enable()](sidebar/api/sidebar_enable_method.md) and [disable()](sidebar/api/sidebar_disable_method.md) - take the IDs of controls as parameters:

~~~js
sidebar.disable(id); // disables a control
sidebar.enable(id);  // enables a control
~~~

{{editor	https://snippet.dhtmlx.com/ea9fywne	Sidebar. Enable/Disable}}

Starting from v7.0, it is possible to disable/enable all Sidebar controls on the page at once by using the methods without parameters:

~~~js
// disables all Sidebar controls
sidebar.disable();
// enables all Sidebar controls
sidebar.enable();
~~~

Checking if a sidebar item is disabled
-------------------------------------

To check if an item of Sidebar is disabled, call the [isDisabled()](sidebar/api/sidebar_isdisabled_method.md) method. The method takes one parameter:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) an id of a sidebar item</td>
		</tr>
    </tbody>
</table>

~~~js
sidebar.isDisabled("1"); // -> true/false
~~~

{{editor	https://snippet.dhtmlx.com/ea9fywne	Sidebar. Enable/Disable}}

Selecting/Unselecting an item
-----------------------------------------

### Selecting a sidebar item

To select a particular Sidebar item, make use of the [select()](sidebar/api/sidebar_select_method.md) method of Sidebar. The method takes two parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of an item</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>unselect</b></td>
			<td>(<i>boolean</i>) optional, <i>true</i> - to unselect previously selected items, otherwise - <i>false</i>; <i>true</i> by default</td>
		</tr>
    </tbody>
</table>

~~~js
sidebar.select("categoryPost");
~~~

[Sidebar. Select/Unselect](https://snippet.dhtmlx.com/3odod5v1)

### Unselecting a sidebar item

To remove selection from a selected item, apply the [unselect()](sidebar/api/sidebar_unselect_method.md) method of Sidebar. The method may take the id of an item as a parameter:

~~~js
// unselects a specified selected item
sidebar.unselect("categoryPost");
~~~

It is also possible to remove selection from all previously selected items of Sidebar via the [unselect()](sidebar/api/sidebar_unselect_method.md) method:

~~~js
// unselects all previously selected items
sidebar.unselect();
~~~

[Sidebar. Select/Unselect](https://snippet.dhtmlx.com/3odod5v1)

Checking if a sidebar item is selected
-------------------------------------

To check if an item of Sidebar is selected, call the [isSelected()](sidebar/api/sidebar_isselected_method.md) method. The method takes one parameter:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) an id of a sidebar item</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
sidebar.isSelected("categoryPost"); // -> returns true/false
~~~

[Sidebar. Select/Unselect](https://snippet.dhtmlx.com/3odod5v1)

Getting selected items
---------------------------

To get the selected items, call the [getSelected()](sidebar/api/sidebar_getselected_method.md) method. The method returns an array of IDs of selected items:

~~~js
sidebar.getSelected(); // -> ["selected_1", "selected_1.1"]
~~~

Toggling Sidebar
---------------

You can collapse and expand a sidebar with the help of the [toggle()](sidebar/api/sidebar_toggle_method.md) method as easy as that:

~~~js
sidebar.toggle();
~~~

{{editor	https://snippet.dhtmlx.com/wll2h9nd	Sidebar. Toggle}}


Using Tree collection API
---------------

You can manipulate the controls of Sidebar with the help of the [Tree collection API](tree_collection/api/refs/treecollection.md). 


### Adding new controls into Sidebar

It is possible to add more controls into the initialized Sidebar on the fly. Use the **add()** method of Tree Collection. It takes three parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>config</b></td>
			<td>(<i>object</i>) the configuration object of the added control</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>index</b></td>
			<td>(<i>number</i>) optional, the position to add a control at</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>parent</b></td>
			<td>(<i>string</i>) optional, the id of a parent control (for the <i>menuItem</i> control type)</td>
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

{{editor	https://snippet.dhtmlx.com/jcnw95ac	Sidebar. Data Add}}

Templates for Sidebar controls in the JSON format are given [here](sidebar/data_loading.md#jsonformattemplates).

### Updating config of controls

You can change config options of the control via the **update()** method of Tree Collection. It takes two parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>the id of the control</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>config</b></td>
			<td>an object with new configuration of the control</td>
		</tr>
    </tbody>
</table>

For example, you can change the icon of a control:

~~~js
sidebar.data.update("add", { 
    icon: "icon_name" 
});
~~~

{{editor	https://snippet.dhtmlx.com/p1zu63le	Sidebar. Data Update}}

### Removing controls from Sidebar

To remove a control, make use of the **remove()** method of Tree Collection. Pass the id of the control that should be removed to the method:

~~~js
sidebar.data.remove("control-id");
~~~

{{editor	https://snippet.dhtmlx.com/ecp3etuf	Sidebar. Data Remove}}

### Rearranging controls

You can move menu controls to different positions with the **move()** method of Tree Collection. For example, this is how you can move an item with ID "2" to the left edge of the sidebar:

~~~js
sidebar.data.move("2",0);
~~~

{{note Check the full list of [Tree collection API](tree_collection/api/refs/treecollection.md).}}

@todo:
check 
