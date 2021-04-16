---
sidebar_label: Data Loading
title: Data Loading
---          

There are several simple ways of loading options into dhtmlxMenu:

- load data from an external file
- load data from a local data source

First, you need to prepare a data set that will be loaded into Menu.

Preparing data set
----------------------

dhtmlxMenu expects loaded data in the JSON format. Here is an example of an appropriate data set:

~~~js
var data = [
	{ value: "File", 
		items: [
        	{
        		value: "New File",
        		icon: "dxi dxi-file-outline",
        	},						
        	{
        		value: "Remove File",
        		icon: "dxi dxi-delete",
        	}        
        ]
	},
    {
    	type: "separator"
    },
	{ value: "Edit",
		items: [
			{
				value: "Undo",
				icon: "dxi dxi-undo",
			},
			{
				value:  "Redo",
				icon: "dxi dxi-redo",
			}
         ]
    },
    {
    	type: "spacer"
    }
]
~~~

A data set consists of objects with configurations of menu controls. Templates for Menu controls in JSON format are given [below](#jsonformattemplates).


Loading from a local source
-------------------

You can load data to a menu from an array with the **parse()** method of TreeCollection. Pass [a predefined data set](#preparingdataset) as a parameter of this method:

~~~js
menu.data.parse(data);
~~~

{{editor	https://snippet.dhtmlx.com/cg62qa9v	Menu. Basic Initialization}}

Loading from an external file
------------------

The **load** method of Tree Collection loads menu data from an external JSON file. All the data are loaded at once. The parameter of the method is the path to the JSON file.

~~~js
menu.data.load("[path to this file]/file.json");
~~~	

{{editor	https://snippet.dhtmlx.com/cg62qa9v	Menu. Basic Initialization}}
	
The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
menu.data.load("/some/data").then(function(){
   // some logic here
});
~~~


JSON format templates
-----------------

This section will give you the idea of JSON format templates for separate Menu controls.

### MenuItem

The **menuItem** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "menuItem"</td>
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
	id:		 	"print",			 
	type:	   	"menuItem",			 
	value:	  	"Print",			 
	icon:	   	"dxi-printer",		
	hotkey:	 	"Alt+P",			 	
	items:[						
		{
			type:   "menuItem",
			value:  "Print"
		},
		{
			type:   "menuItem",
			value:  "Preview and print",
			icon:	"dxi-magnify"
		}
	]
}
~~~

### NavItem

The **navItem** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "navItem". If not specified - the <a href="https://docs.dhtmlx.com/suite/menu__configuring_menu_items.html#menuitem">"menuItem"</a> type is applied by default.</td>
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
			<td>(<i>array</i>) an array of nested controls</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>twoState</b></td>
			<td>(<i>boolean</i>) adds two states to the item: active (pressed) and inactive (unpressed)</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>group</b></td>
			<td>(<i>string</i>) defines the name of a group of controls a navItem belongs to. If one of the navItems in the group becomes active, all others automatically become inactive</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>active</b></td>
			<td>(<i>boolean</i>) sets the state of a twoState item</td>
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

### Custom HTML

The **customHTML** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) required, the item type, set it to "customHTML". If not specified - the <a href="https://docs.dhtmlx.com/suite/menu__configuring_menu_items.html#menuitem">"menuItem"</a> type is applied by default.</td>
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
			<td>(<i>boolean</i>) defines whether a control is hidden</td>
		</tr>
    </tbody>
</table>

~~~js
// customHTML
{
    id: "custom",
	parent: "edit",
    type: "customHTML",
	html: "<img src='../logo.svg' alt=''/>",
	css: "custom-image"
});
~~~


###  Separator

You can add separators that will draw horizontal lines between menu options or vertical lines between menu items. The **separator** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the item type, set it to "separator". If not specified - the <a href="https://docs.dhtmlx.com/suite/menu__configuring_menu_items.html#menuitem">"menuItem"</a> type is applied by default.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the ID of a control, auto-generated if not set</td>
		</tr>
    </tbody>
</table>

~~~js 
// separator
{
    id:   "s_id",        
    type: "separator"   
}
~~~

### Spacer

The **spacer** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the item type, set it to "spacer". If not specified - the <a href="https://docs.dhtmlx.com/suite/menu__configuring_menu_items.html#menuitem">"menuItem"</a> type is applied by default.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the ID of a control, auto-generated if not set</td>
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


Saving and restoring state
----------------------------

To save the current state of a toolbar, use the **serialize()** method of Tree Collection. It converts the data of a menu into an array of JSON objects. 
Each JSON object contains the configuration of a separate Menu item.

~~~js
var state = menu1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different menu. For example:

~~~js
// creating a new menu
var menu2 = new dhx.Menu(document.body);
// parsing the state of menu1 into menu2
menu2.data.parse(state);
~~~

