---
sidebar_label: Work with Selection Object
title: Work with Selection Object
---          

You can manipulate with List items via the API of the **selection** object. It is possible to select an item, remove selection, and get the id or even the object of a selected List item.

Enabling/Disabling Selection object
---------------------------------

Starting from v7.0, you can activate selection of items via the [](list/api/selection/selection_enable_method.md) method of the selection object.

~~~js
list.selection.enable();
~~~

To disable selection of items in List, make use of the [](list/api/selection/selection_disable_method.md) method of the selection object:

~~~js
list.selection.disable();
~~~

[List. Disable/Enable Selection](https://snippet.dhtmlx.com/i4zj985o)


Here is a list of events that you can apply while working with selection of items:
todotw возможно отправлять на страницу со списком апи
- list/api/selection/selection_afterselect_event.md
- list/api/selection/selection_afterunselect_event.md
- list/api/selection/selection_beforeselect_event.md
- list/api/selection/selection_beforeunselect_event.md

Selecting an item
--------------------

To select a particular List item, make use of the **add()** method of the **selection** object. As a parameter the method takes the id of an item. 

~~~js
var id = list.selection.getId(); // -> "2"
list.selection.add("2");
~~~

{{editor	https://snippet.dhtmlx.com/io8oxxg2	List. Set Selection}}

Starting from v7.0, the method selects all unselected items when calling without parameters:

~~~js
list.selection.add();
~~~

Unselecting an item
--------------------

To remove selection from a selected item, apply the **remove()** method of the **selection** object. The method may take the id of an item as a parameter:

~~~js
list.selection.remove("2"); 
~~~

Starting from v7.0, the method unselects all previously selected items when calling without parameters:

~~~js
list.selection.remove();
~~~

Getting id of a selected item
----------------------------

You can get the id of the currently selected item with the **getId()** method of the **selection** object:

~~~js
var selected = list.selection.getId(); // -> "2"
~~~

{{editor	https://snippet.dhtmlx.com/elonnovx	List. Get Selection}}

Starting from v7.0, the method can also return an array with ids of selected items if the [multiselection](list/api/list_multiselection_config.md) property of List is enabled.


Getting object of a selected item
---------------------------------

It is also possible to get the object of a selected item using the **getItem()** method of the **selection** object:

~~~js
var item = list.selection.getItem();
~~~

Starting from v7.0, the method can also return an array of selected items if the [multiselection](list/api/list_multiselection_config.md) property of List is enabled.

