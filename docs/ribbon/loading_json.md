---
sidebar_label: Data Loading
title: Data Loading
---          



There are several simple ways of loading data into dhtmlxRibbon:

- load data from an external file
- load data from a local data source

First, you need to prepare a data set that will be loaded into Ribbon.


Preparing data set
----------------------

dhtmlxRibbon expects loaded data in the JSON format. Here is an example of an appropriate data set:

~~~js
var data = [
	{
    	type: "block",
    	items: [
    		{
    			value: "New",
    			icon: "dxi dxi-file-outline",
                size: "small"               
            }
    	]
    },
    {
    	type: "block",
    	direction: "col",
    	items: [
    		{
    			value: "Add",
    			icon: "dxi dxi-plus",
    			size: "small"
    		},
    		{
            	value: "Remove",
            	icon: "dxi dxi-delete",
            	size: "small"
    		}
    	]
    }

];
~~~

A data set consists of objects with configurations of Ribbon controls. Templates for Ribbon controls in JSON format are given [below](#jsonformattemplate).

Loading from a local source
-------------------

You can load data to a ribbon from an array with the **parse()** method of TreeCollection. Pass [a predefined data set](#preparingdataset) as a parameter of this method:

~~~js
ribbon.data.parse(data);
~~~

{{editor	https://snippet.dhtmlx.com/1gd5tbcf	Ribbon. Initialization}}

Loading from an external file
------------------

The **load** method loads the ribbon data from an external JSON file. All the data are loaded at once. The parameter of the method is the path to the JSON file.

~~~js
ribbon.data.load("[path to this file]/file.json");
~~~	

{{editor	https://snippet.dhtmlx.com/1gd5tbcf	Ribbon. Initialization}}

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
ribbon.data.load("/some/data").then(function(){
   // some logic here
});
~~~

Saving and restoring state
----------------------------

To save the current state of a ribbon, use the **serialize()** method of Tree Collection. It converts the data of a ribbon into an array of JSON objects. 
Each JSON object contains the configuration of a separate Ribbon control.

~~~js
var state = ribbon1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different ribbon. For example:

~~~js
// creating a new ribbon
var ribbon2 = new dhx.Ribbon(document.body);
// parsing the state of ribbon1 into ribbon2
ribbon2.data.parse(state);
~~~


JSON format templates
------------------------

This section will give you the idea of JSON format templates for separate Ribbon controls.

### Common template

~~~js
// common
[
	{id: "item_a", type: "button", ...},
	{id: "item_b", type: "input", ...},
	{id: "item_c", type: "title", ...}
]
~~~

{{editor	https://snippet.dhtmlx.com/lek4v9m7	Ribbon. Config Data}}

### Block

The **Block** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "block". If not specified - the <a href="https://docs.dhtmlx.com/suite/ribbon__navitem.html">"navItem"</a> type is applied by default.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of a control, auto-generated if not set</td>
		</tr>
         <tr>
			<td class="webixdoc_links0"><b>parent</b></td>
			<td>(<i>string</i>) the parent of the block</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) adds a custom CSS class to the block</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>items</b></td>
			<td>(<i>array</i>) an array of nested controls</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>title</b></td>
			<td>(<i>string</i>) sets a text label beneath the block</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>direction</b></td>
			<td>(<i>string</i>) defines the layout of controls within the block: "col" or "row"; controls that do not fit in one row/column are automatically placed in the next row/column</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a block is hidden</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>disabled</b></td>
			<td>(<i>boolean</i>) defines whether a block is disabled</td>
		</tr>
    </tbody>
</table>

~~~js
// block
{
	type: "block",
   	title: "Action",        
   	items: [
    	{ id: "copy", icon: "mdi mdi-content-copy", value: "Copy" },
     	{ id: "cut", icon: "mdi mdi-content-cut", value: "Cut" }
   	]
}
~~~

### Button

The **button** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "button". If not specified - the <a href="https://docs.dhtmlx.com/suite/ribbon__navitem.html">"navItem"</a> type is applied by default. </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of a control, auto-generated if not set </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>parent</b></td>
			<td>(<i>string</i>) the parent of the button</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>value</b></td>
			<td>(<i>string</i>) a value of the button. You need to set either the <b>value</b> or <b>html</b> property to the button</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>html</b></td>
			<td>(<i>string</i>) optional, a string with HTML that should be inserted into the button</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a button </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>icon</b></td>
			<td>(<i>string</i>) an <a href="https://docs.dhtmlx.com/suite/ribbon__fa_icons.html#icons">icon</a> of the button</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>items</b></td>
			<td>(<i>array</i>) an array of nested controls. You can find the full list of all available controls <a href="https://docs.dhtmlx.com/suite/menu__configuring_menu_items.html">here</a>. If the type of a nested control is not specified, the <i>menuItem</i> type will be applied by default. </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>twoState</b></td>
			<td>(<i>boolean</i>) the flag that defines whether a button can be used in two states: active (pressed) and inactive (unpressed)</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>group</b></td>
			<td>(<i>string</i>) defines the name of a group of controls a button belongs to. If one of the buttons in the group becomes active, all others automatically become inactive.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>active</b></td>
			<td>(<i>boolean</i>) for <i>twoState</i> buttons, if <i>true</i>, the button is in the active state</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hotkey</b></td>
			<td>(<i>string</i>) the name of the hot key for the button</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>tooltip</b></td>
			<td>(<i>string</i>) a tooltip for the button</td>
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
			<td class="webixdoc_links0"><b>multiClick</b></td>
			<td>(<i>boolean</i>) defines the behavior of the Undo/Redo buttons:
            <ul>
                <li><i>true</i> all the actions are reverted/re-applied one by one when the Undo/Redo button is clicked and held</li>
                <li><i>false</i> one action is reverted/re-applied on each click of the Undo/Redo button</li>
            </ul>
            </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>view</b></td>
			<td>(<i>string</i>) defines the look of a button: "flat"|"link"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>size</b></td>
			<td>(<i>string</i>) defines the size of a button: "small"|"medium"|"auto" <br/> {{editor	https://snippet.dhtmlx.com/1ayiafd1	Ribbon. Button Height}}</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>color</b></td>
			<td>(<i>string</i>) defines the color scheme of a button: "danger"|"secondary"|"primary"|"success"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>full</b></td>
			<td>(<i>boolean</i>) extends a button to the full width of a form</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>circle</b></td>
			<td>(<i>boolean</i>) makes the corners of a button round</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>loading</b></td>
			<td>(<i>boolean</i>) adds a spinner into a button</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a button is hidden</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>disabled</b></td>
			<td>(<i>boolean</i>) defines whether a button is disabled</td>
		</tr>
    </tbody>
</table>

~~~js 
// button
{
	id:	"add",		  		
	type: "button",	   		
	icon: "dxi-plus",	 		
	value: "Add",		  		
	count: 11,			 				   		
	tooltip: "Add a new user"	
}
~~~

### Custom HTML 

The **customHTML** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) required, the item type, set it to "customHTML". If not specified - the <a href="https://docs.dhtmlx.com/suite/ribbon__navitem.html">"navItem"</a> type is applied by default.</td>
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
// custom HTML
{
	id: "custom_html",
	type: "customHTML",
    html:"<div style='height:30px; border: 2px solid'>My HTML button</div>"
}
~~~

### ImageButton

The **imageButton** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "imageButton". If not specified - the <a href="https://docs.dhtmlx.com/suite/ribbon__navitem.html">"navItem"</a> type is applied by default.</td>
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
			<td class="webixdoc_links0"><b>src</b></td>
			<td>(<i>string</i>) the path to the image</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string|string[]</i>) adds style classes to a button </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>twoState</b></td>
			<td>(<i>boolean</i>) adds two states to the button: active (pressed) and inactive  (unpressed)</td>
		</tr>
		  <tr>
			<td class="webixdoc_links0"><b>group</b></td>
			<td>(<i>string</i>) defines the name of a group of controls a button belongs to. If one of the buttons in the group becomes active, all others automatically become inactive</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>active</b></td>
			<td>(<i>boolean</i>) sets the state of a twoState button</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hotkey</b></td>
			<td>(<i>string</i>) the name of the hot key for the button</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>tooltip</b></td>
			<td>(<i>string</i>) a tooltip for the button</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>count</b></td>
			<td>(<i>number</i>) a badge with a number</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>countColor</b></td>
			<td>(<i>string</i>) the color of a badge with number: "danger" | "secondary" | "primary" | "success"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>size</b></td>
			<td>(<i>string</i>) defines the size of a button: "small"|"medium"|"auto"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a button is hidden</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>disabled</b></td>
			<td>(<i>boolean</i>) defines whether a button is disabled</td>
		</tr>
    </tbody>
</table>

~~~js
// imageButton
{
	id:		  "user",				
	type:	  "imageButton",		
	src:	  "../img/avatar.png"				
}
~~~

### Input

The **input** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "input". If not specified - the <a href="https://docs.dhtmlx.com/suite/ribbon__navitem.html">"navItem"</a> type is applied by default.</td>
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
			<td>(<i>string</i>) the initial value of the field</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>icon</b></td>
			<td>(<i>string</i>) the name of an <a href="https://docs.dhtmlx.com/suite/ribbon__fa_icons.html#icons">icon</a> from the used icon font</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string|string[]</i>) adds style classes to an input</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>placeholder</b></td>
			<td>(<i>string</i>) a tip for the input</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>width</b></td>
			<td>(<i>number</i>) the width of the input field</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>label</b></td>
			<td>(<i>string</i>) a text label for the Input control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>tooltip</b></td>
			<td>(<i>string</i>) a tooltip for an input</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether an input is hidden</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>disabled</b></td>
			<td>(<i>boolean</i>) defines whether an input is disabled</td>
		</tr>
    </tbody>
</table>


~~~js 
// input
{
	id:	"lookup",					  
	type: "input", 					  
	value: "",						 
	placeholder: "Type in to search...",	  
	width: 100,						  
	label: "Search"
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
			<td>(<i>string</i>) an <a href="https://docs.dhtmlx.com/suite/ribbon__fa_icons.html#icons">icon</a> of the navItem</td>
		</tr>
		 <tr>
			<td class="webixdoc_links0"><b>items</b></td>
			<td>(<i>array</i>) an array of nested controls. You can find the full list of all available controls <a href="https://docs.dhtmlx.com/suite/menu__configuring_menu_items.html">here</a>. If the type of a nested control is not specified, the <i>menuItem</i> type will be applied by default.</td>
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
			<td>(<i>string</i>) the name of the hot key for the item</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>tooltip</b></td>
			<td>(<i>string</i>) a tooltip for the navItem</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>size</b></td>
			<td>(<i>string</i>) defines the size of a navItem: "small"|"medium"|"auto"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>count</b></td>
			<td>(<i>number</i>) a badge with a number</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>countColor</b></td>
			<td>(<i>string</i>) the color of a badge with number: "danger" | "secondary" | "primary" | "success"</td>
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
// navItem
{
    type:"navItem", value:"Some",
    icon:"dxi-check"
}
~~~

### SelectButton

The **selectButton** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "selectButton". If not specified - the <a href="https://docs.dhtmlx.com/suite/ribbon__navitem.html">"navItem"</a> type is applied by default.</td>
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
			<td>(<i>string</i>) the value of the button</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string|string[]</i>) adds style classes to a button</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>icon</b></td>
			<td>(<i>string</i>) the name of an <a href="https://docs.dhtmlx.com/suite/ribbon__fa_icons.html#icons">icon</a> from the used icon font</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>items</b></td>
			<td>(<i>array</i>) an array of nested controls. You can find the full list of all available controls <a href="https://docs.dhtmlx.com/suite/menu__configuring_menu_items.html">here</a>. If the type of a nested control is not specified, the <i>menuItem</i> type will be applied by default.</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>size</b></td>
			<td>(<i>string</i>) defines the size of a button: "small"|"medium"|"auto"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>count</b></td>
			<td>(<i>number</i>) a badge with a number</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>countColor</b></td>
			<td>(<i>string</i>) the color of a badge with number: "danger" | "secondary" | "primary" | "success"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>tooltip</b></td>
			<td>(<i>string</i>) a tooltip for the control</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a button is hidden</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>disabled</b></td>
			<td>(<i>boolean</i>) defines whether a button is disabled</td>
		</tr>
    </tbody>
</table>

~~~js
// selectButton
{
	id:"select",
    type:"selectButton",
    icon:"dxi-some",
    items:[]
}
~~~

###  Separator

The **separator** object has the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the item type, set it to "separator". If not specified - the <a href="https://docs.dhtmlx.com/suite/ribbon__navitem.html">"navItem"</a> type is applied by default.</td>
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
			<td>(<i>string</i>) the item type, set it to "spacer". If not specified - the <a href="https://docs.dhtmlx.com/suite/ribbon__navitem.html">"navItem"</a> type is applied by default.</td>
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
			<td>(<i>string</i>) the item type, set it to "title". If not specified - the <a href="https://docs.dhtmlx.com/suite/ribbon__navitem.html">"navItem"</a> type is applied by default.</td>
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
