---
sidebar_label: Work with Toolbar
title: Work with Toolbar
---          


Setting/getting values and states
------------------

### Setting values/states

You can change the value or state (for a TwoState button) of a control with the help of the [setState()](toolbar/api/toolbar_setstate_method.md) method. It takes one parameter: a *key-value* pair with the ID of the control and its new value (state).

Here is how you can use it to change the state of a TwoState button:

~~~js
{type:"button", twoState:true, id:"check"}
...
toolbar.setState({"check":true});
//or
toolbar.setState({"check":false});
~~~

And this is how you can change the value of an input:

~~~js
{type:"input", id:"name", value:""}
...
toolbar.setState({"name":"Maintenance"});
~~~

{{editor	https://snippet.dhtmlx.com/h34uh1dr	Toolbar. Set State}}

### Getting values/states

To get the current value of the control, use the [getState()](toolbar/api/toolbar_getstate_method.md) method. 

Starting from v7.0, the method can take the id of a Toolbar control as a parameter and return the value/state of the control. If id is not specified, the method returns an object with IDs of controls and their values/states.

This is what the method returns for a TwoState button:

~~~js
{type:"button", twoState:true, id:"check"}
...
toolbar.getState("check"); // -> true/false
// or
toolbar.getState(); // -> { "check":true } or { "check":false }
~~~

And this is a possible return value for an input:

~~~js
{type:"input", id:"name", value:"Maintenance"}
...
toolbar.getState("name"); // -> "Maintenance"
// or
toolbar.getState(); // -> {"name":"Maintenance"}
~~~

{{editor	https://snippet.dhtmlx.com/kvttdgad	Toolbar. Get State}}

Hiding and showing controls
-----------------

You can show or hide controls by their IDs. Pass them to the corresponding methods - [show()](toolbar/api/toolbar_show_method.md) and [hide()](toolbar/api/toolbar_hide_method.md):

~~~js
toolbar.hide(id); // hides a control
toolbar.show(id); // shows a control
~~~

{{editor	https://snippet.dhtmlx.com/cldp89u4	Toolbar. Hide/Show}}

Starting from v7.0, it is possible to hide/show all Toolbar controls on the page at once by using the methods without parameters:

~~~js
// hides all Toolbar controls
toolbar.hide();
// shows all Toolbar controls
toolbar.show();
~~~

Disabling and enabling controls
---------------------

You can disable or enable controls. The related methods - [enable()](toolbar/api/toolbar_enable_method.md) and [disable()](toolbar/api/toolbar_disable_method.md) - take the IDs of controls as parameters:

~~~js
toolbar.disable(id); // disables a control
toolbar.enable(id);  // enables a control
~~~

{{editor	https://snippet.dhtmlx.com/ovblenaf	Toolbar. Enable/Disable}}

Starting from v7.0, it is possible to disable/enable all Toolbar controls on the page at once by using the methods without parameters:

~~~js
// disables all Toolbar controls
toolbar.disable();
// enables all Toolbar controls
toolbar.enable();
~~~

Checking if a Toolbar item is disabled
----------------------------------------

To check if an item of Toolbar is disabled, call the [isDisabled()](toolbar/api/toolbar_isdisabled_method.md) method. The method takes one parameter:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) an id of a toolbar item</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
menu.isDisabled("1"); // -> true/false
~~~

{{editor	https://snippet.dhtmlx.com/ovblenaf	Toolbar. Enable/Disable}}

Adding a tooltip to a control
--------------------

You can attach a tooltip to a control. For this you need to provide the **tooltip** property with the tooltip text in the control object before the toolbar initialization:

~~~js
{
    type: "text",
    value: "test1",
    tooltip: "tooltip for test1"
}
~~~

Selecting/Unselecting an item
-----------------------------------------

### Selecting a toolbar item

To select a particular Toolbar item, make use of the [select()](toolbar/api/toolbar_select_method.md) method of Toolbar. The method takes two parameters:

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
toolbar.select("web");
~~~

[Toolbar. Select/Unselect](https://snippet.dhtmlx.com/mi7qjwg2)

### Unselecting a toolbar item

To remove selection from a selected item, apply the [unselect()](toolbar/api/toolbar_unselect_method.md) method of Toolbar. The method may take the id of an item as a parameter:

~~~js
// unselects a specified selected item
toolbar.unselect("web");
~~~

It is also possible to remove selection from all previously selected items of Toolbar via the [unselect()](toolbar/api/toolbar_unselect_method.md) method:

~~~js
// unselects all previously selected items
toolbar.unselect();
~~~

[Toolbar. Select/Unselect](https://snippet.dhtmlx.com/mi7qjwg2)

Checking if a toolbar item is selected
-------------------------------------

To check if an item of Toolbar is selected, call the [isSelected()](toolbar/api/toolbar_isselected_method.md) method. The method takes one parameter:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) an id of a toolbar item</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
toolbar.isSelected("web"); // -> returns true/false
~~~

[Toolbar. Select/Unselect](https://snippet.dhtmlx.com/mi7qjwg2)

Getting selected items
---------------------------

To get the selected items, call the [getSelected()](toolbar/api/toolbar_getselected_method.md) method. The method returns an array of IDs of selected items:

~~~js
toolbar.getSelected(); // -> ["selected_1", "selected_1.1"]
~~~

{{editor	https://snippet.dhtmlx.com/105levtd	Toolbar. Tooltips}}

Using Tree collection API
---------------

You can manipulate the controls of Toolbar with the help of the [Tree collection API](tree_collection/api/refs/treecollection.md). 


### Adding new controls into Toolbar

It is possible to add more controls into the initialized Toolbar on the fly. Use the **add()** method of Tree Collection. It takes three parameters:

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

{{editor	https://snippet.dhtmlx.com/r6jv9kk2	Toolbar. Add}}

Templates for Toolbar controls in the JSON format are given [here](toolbar/load_data.md#jsonformattemplates).

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
toolbar.data.update("edit", { 
    icon: "mdi mdi-pencil" 
});
~~~

{{editor	https://snippet.dhtmlx.com/xfs5gh5t	Toolbar. Update}}

### Removing controls from Toolbar

To remove a control, make use of the **remove()** method of Tree Collection. Pass the id of the control that should be removed to the method:

~~~js
toolbar.data.remove("control-id");
~~~

{{editor	https://snippet.dhtmlx.com/w8jcn1t2	Toolbar. Remove}}

### Rearranging controls

You can move menu controls to different positions with the **move()** method of Tree Collection. For example, this is how you can move an item with ID "2" to the left edge of the toolbar:

~~~js
toolbar.data.move("2",0);
~~~

{{note Check the full list of [Tree collection API](tree_collection/api/refs/treecollection.md).}}

@todo:
check, add info about adding popup into toolbar
