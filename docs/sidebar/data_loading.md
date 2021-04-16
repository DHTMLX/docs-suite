---
sidebar_label: Data Loading
title: Data Loading
---          

There are several simple ways of loading data into dhtmlxSidebar:

- load data from an external file
- load data from a local data source

First, you need to prepare a data set that will be loaded into Sidebar.


Preparing data set
----------------------

dhtmlxSidebar expects loaded data in the JSON format. Here is an example of an appropriate data set:

~~~js
var data = [
    {
        "id": "dashboard",
        "value": "Dashboard",
        "icon": "mdi mdi-view-dashboard"
    },
    {
        "id": "statistics",
        "value": "Statistics",
        "icon": "mdi mdi-chart-line"
    },
    {
        "id": "reports",
        "value": "Reports",
        "icon": "mdi mdi-file-chart"
    }
];
~~~

A data set consists of objects with configurations of sidebar controls. Templates for Sidebar controls in JSON format are given [below](#jsonformattemplates).

Loading from a local source
-------------------

You can load data to a sidebar from an array with the **parse()** method of TreeCollection. Pass [a predefined data set](#preparingdataset) as a parameter of this method:

~~~js
sidebar.data.parse(data);
~~~

{{editor	https://snippet.dhtmlx.com/x0qpt7pk	Sidebar. Basic Initialization}}

Loading from an external file
------------------

The **load** method loads the sidebar data from an external JSON file. All the data are loaded at once. The parameter of the method is the path to the JSON file.

~~~js
sidebar.data.load("[path to this file]/file.json");
~~~	

{{editor	https://snippet.dhtmlx.com/mq4ggjmm	Sidebar. Init Load}}
	
The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
sidebar.data.load("/some/data").then(function(){
   // some logic here
});
~~~

Saving and restoring state
----------------------------

To save the current state of a sidebar, use the **serialize()** method of Tree Collection. It converts the data of a sidebar into an array of JSON objects. 
Each JSON object contains the configuration of a separate Sidebar control.

~~~js
var state = sidebar1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different sidebar. For example:

~~~js
// creating a new sidebar
var sidebar2 = new dhx.Sidebar(document.body);
// parsing the state of sidebar1 into sidebar2
sidebar2.data.parse(state);
~~~

JSON format templates
-----------------

This section will give you the idea of JSON format templates for separate Sidebar controls.

### Common template

~~~js
// common
[
	{id: "item_a", type: "menuItem", ...},
	{id: "item_b", type: "input", ...},
	{id: "item_c", type: "title", ...}
]
~~~

### Custom HTML

The **customHTML** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) required, the item type, set it to "customHTML". If not specified - the <a href="https://docs.dhtmlx.com/suite/sidebar__navitem.html">"navItem"</a> type is applied by default.</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of an item, auto-generated if not set</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>parent</b></td>
			<td>(<i>string</i>) the parent of the item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>html</b></td>
			<td>(<i>string</i>) a string with HTML that should be inserted into the item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string|string[]</i>) adds style classes</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether an item is hidden</td>
		</tr>
    </tbody>
</table>


~~~js
// custom HTML button
{
	id: "custom_html",
	type: "customHTML",
    html:"<div style='height:30px; border: 2px solid'>My HTML button</div>"
}
~~~

### MenuItem

The **menuItem** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "menuItem". If not specified - the <a href="https://docs.dhtmlx.com/suite/sidebar__navitem.html">"navItem"</a> type is applied by default.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of a control, auto-generated if not set</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>parent</b></td>
			<td>(<i>string</i>) the parent of the item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>value</b></td>
			<td>(<i>string</i>)  a value for the menu item. You need to set either the <b>value</b> or <b>html</b> property to the item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>html</b></td>
			<td>(<i>string</i>) optional, a string with HTML that should be inserted into the menu item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string|string[]</i>) adds style classes</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>icon</b></td>
			<td>(<i>string</i>) the name of an <a href="https://docs.dhtmlx.com/suite/menu__fa_icons.html">icon</a> from the used icon font</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>items</b></td>
			<td>(<i>array</i>) an array of children controls (note that all the children should have the type <i>menuItem</i>)</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hotkey</b></td>
			<td>(<i>string</i>) the name of a keyboard shortcut for a menu item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>tooltip</b></td>
			<td>(<i>string</i>) a tooltip for the menuItem</td>
		</tr>
         <tr>
			<td class="webixdoc_links0"><b>count</b></td>
			<td>(<i>number|string</i>) a badge with a number</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>countColor</b></td>
			<td>(<i>string</i>) the color of a badge with number: "danger" | "secondary" | "primary" | "success" </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a control is hidden</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>disabled</b></td>
			<td>(<i>boolean</i>) defines whether an item is disabled</td>
		</tr>
    </tbody>
</table>

~~~js
// menuItem
{
	type:"menuItem", 
	value:"Some",
    icon:"dxi dxi-menu-right"
}
~~~

### NavItem

The **navItem** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "navItem"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of a control, auto-generated if not set</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>parent</b></td>
			<td>(<i>string</i>) the parent of the item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>value</b></td>
			<td>(<i>string</i>) a value of the navItem. You need to set either the <b>value</b> or <b>html</b> property to the navItem</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>html</b></td>
			<td>(<i>string</i>) optional, a string with HTML that should be inserted into the navItem</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string|string[]</i>) adds style classes to a navItem</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>icon</b></td>
			<td>(<i>string</i>) an <a href="https://docs.dhtmlx.com/suite/menu__fa_icons.html">icon</a> of the navItem</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>items</b></td>
			<td>(<i>array</i>) an array of nested controls. You can find the full list of all available controls <a href="https://docs.dhtmlx.com/suite/menu__configuring_menu_items.html">here</a>. If the type of a nested control is not specified, the <i>menuItem</i> type will be applied by default. </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>twoState</b></td>
			<td>(<i>boolean</i>) adds two states to the item: active (pressed) and inactive  (unpressed)</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>active</b></td>
			<td>(<i>boolean</i>) sets the state of a twoState item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>group</b></td>
			<td>(<i>string</i>) defines the name of a group of controls a navItem belongs to. If one of the navItems in the group becomes active, all others automatically become inactive</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>hotkey</b></td>
			<td>(<i>string</i>) the name of a keyboard shortcut for a menu item</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>count</b></td>
			<td>(<i>number</i>) a badge with a number</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>countColor</b></td>
			<td>(<i>string</i>) the color of a badge with number: "danger" | "secondary" | "primary" | "success" </td>
		</tr>
       <tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether an item is hidden</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>disabled</b></td>
			<td>(<i>boolean</i>) defines whether an item is disabled</td>
		</tr>
    </tbody>
</table>

~~~js
// navItem
{
    type:  "navItem", 
    value: "Some",
    icon:  "dxi-check",
    count: 10
}
~~~

###  Separator

The **separator** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the item type, set it to "separator". If not specified - the <a href="https://docs.dhtmlx.com/suite/sidebar__navitem.html">"navItem"</a> type is applied by default.</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of a control, auto-generated if not set</td>
		</tr>
    </tbody>
</table>


~~~js
// separator
{
	id:	 	"sepId",		
	type:   "separator"	 	
}
~~~

### Spacer

The **spacer** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "spacer". If not specified - the <a href="https://docs.dhtmlx.com/suite/sidebar__navitem.html">"navItem"</a> type is applied by default.</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of a control, auto-generated if not set</td>
		</tr>
    </tbody>
</table>


~~~js
// spacer
{
	id:	 	"spacerId",	  	
	type:   "spacer"		
}
~~~

### Title

The **title** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the item type, set it to "title". If not specified - the <a href="https://docs.dhtmlx.com/suite/sidebar__navitem.html">"navItem"</a> type is applied by default.</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of a control, auto-generated if not set</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>parent</b></td>
			<td>(<i>string</i>) the parent of the item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>value</b></td>
			<td>(<i>string</i>) the value of the Title control. You need to set either the <b>value</b> or <b>html</b> property to the title</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>html</b></td>
			<td>(<i>string</i>) optional, a string with HTML that should be inserted into the title</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) adds a custom CSS class</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>tooltip</b></td>
			<td>(<i>string</i>) a tooltip for the control</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a control is hidden</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>disabled</b></td>
			<td>(<i>boolean</i>) defines whether a control is disabled</td>
		</tr>
    </tbody>
</table>

~~~js
// title
{
	id:		 	"collection",		
	type:	   	"title", 				
	value:	  	"Music",				
	tooltip:	"Current collection"	
}
~~~