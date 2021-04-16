---
sidebar_label: Work with Menu
title: Work with Menu
---          



Hiding/showing menu options
------------------

You can hide and show menu items (one or several at once) with the help of the [hide()](menu/api/menu_hide_method.md) / [show()](menu/api/menu_show_method.md) methods:

~~~js
menu.hide(id);
menu.show(id);
~~~

{{editor	https://snippet.dhtmlx.com/a9vbhxgd	Menu. Show/Hide Menu Item}}

Both methods can take one parameter - the ID of a menu item or an array with IDs of menu items.

Starting from v7.0, it is possible to hide/show all Menu items on the page at once by using the methods without parameters:

~~~js
// hides all Menu items
menu.hide();
// shows all Menu items
menu.show();
~~~

Disabling/enabling menu options
----------------------

You can disable one menu option or several options at a time with the [disable()](menu/api/menu_disable_method.md) method:

~~~js
menu.disable("1");
menu.disable(["2","3"]);
~~~

To enable one menu option or several options at a time, use the [enable()](menu/api/menu_enable_method.md) method:

~~~js
menu.enable("1");
menu.enable(["1","3"]);
~~~

{{editor	https://snippet.dhtmlx.com/zuoam7r7	Menu. Enable/Disable Menu Item}}

Both methods can take one parameter: the ID of a menu item or an array of IDs.

Starting from v7.0, it is possible to disable/enable all Menu items on the page at once by using the methods without parameters:

~~~js
// disables all Menu items
menu.disable();
// enables all Menu items
menu.enable();
~~~

Checking if a menu option is disabled
-------------------------------------

To check if an item of Menu is disabled, call the [isDisabled()](menu/api/menu_isdisabled_method.md) method. The method takes one parameter:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) an id of a menu item</td>
		</tr>
    </tbody>
</table>

~~~js
menu.isDisabled("1"); // -> true/false
~~~

{{editor	https://snippet.dhtmlx.com/zuoam7r7	Menu. Enable/Disable Menu Item}}

Selecting/Unselecting an item
-----------------------------------------

### Selecting a menu item

To select a particular Menu item, make use of the [select()](menu/api/menu_select_method.md) method of Menu. The method takes two parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) an id of an item</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>unselect</b></td>
			<td>(<i>boolean</i>) optional, <i>true</i> - to unselect previously selected items, otherwise - <i>false</i>; <i>true</i> by default</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
menu.select("align-left");
~~~

[Menu. Select/Unselect](https://snippet.dhtmlx.com/9qqah8ex)

### Unselecting a menu item

To remove selection from a selected item, apply the [unselect()](menu/api/menu_unselect_method.md) method of Menu. The method may take the id of an item as a parameter:

~~~js
// unselects a specified selected item
menu.unselect("align-left");
~~~

It is also possible to remove selection from all previously selected items of Menu via the [unselect()](menu/api/menu_unselect_method.md) method:

~~~js
// unselects all previously selected items
menu.unselect();
~~~

[Menu. Select/Unselect](https://snippet.dhtmlx.com/9qqah8ex)

Checking if a menu item is selected
-------------------------------------

To check if an item of Menu is selected, call the [isSelected()](menu/api/menu_isselected_method.md) method. The method takes one parameter:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) an id of a menu item</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
menu.isSelected("align-left"); // -> returns true/false
~~~

[Menu. Select/Unselect](https://snippet.dhtmlx.com/9qqah8ex)

Getting selected items
---------------------------

To get the selected items, call the [getSelected()](menu/api/menu_getselected_method.md) method. The method returns an array of string values with IDs of selected items:

~~~js
menu.getSelected(); // -> ["selected_1", "selected_1.1"]
~~~

Using Tree collection API
---------------

You can manipulate the controls of Menu with the help of the [Tree collection API](tree_collection/api/refs/treecollection.md). 


### Adding menu items

You can add menu items with the **add()** method of tree collection:

~~~js
menu.data.add({
    type:"separator"
});

menu.data.add({
    value:"Open", items:[
        { value:"File", hotkey:"Ctrl+F" },
        { value:"Folder" }
    ]
});
~~~

{{editor	https://snippet.dhtmlx.com/nood4bfx	Menu. Add/Remove Item}}

### Rearranging menu items

You can move menu items to different positions with the **move()** method. For example, this is how you can move an item with ID "2" to the left edge of the menu:

~~~js
menu.data.move("2",0);
~~~

{{note
The ID should always be a string, even if in menu item configuration you set it as a number.
}}

To get the current position, use the **getIndex()** method of TreeCollection:

~~~js
menu.data.getIndex("id");
~~~

{{note
Indexes are counted from 0.
}}

### Iterating menu items

You can work with all (or some) menu items with the help of the **map()** method of TreeCollection:

~~~js
// remove all icons from the menu
menu.data.map(function(item){
    item.icon = "";
});
menu.paint();
~~~

### Setting item text 

You can set text labels for any menu item. Access the needed item with the **getItem()** method of the TreeCollection:

~~~js
menu.data.getItem("id").value = "Open";
menu.paint();
~~~

### Setting item hotkey

You can add a shortcut to a menu option by accessing it with the help of the **getItem()** method. After you add a hotkey, a label with the keys will be added to the option.

~~~js
menu.data.getItem("id").hotkey = "Ctrl+N";
menu.paint();
~~~


## Removing menu items  

You can remove any item from a menu with the **remove()** method. The item will be removed with all its sub-items.

~~~js
menu.data.remove("id");
~~~

{{editor	https://snippet.dhtmlx.com/nood4bfx	Menu. Add/Remove Item}}

To remove all items from Menu, call the **removeAll()** method. Afterwards, you can load other options.

~~~js
menu.data.removeAll();
menu.data.parse(new_options);
~~~

{{note Check the full list of [Tree collection API](tree_collection/api/refs/treecollection.md).}}

