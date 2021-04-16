---
sidebar_label: Work with Selection Object
title: Work with Selection Object
---          

You can manipulate with DataView items via the API of the **selection** object. It is possible to select an item, remove selection, and get the id or even the object of a selected DataView item.


Enabling/Disabling Selection object
---------------------------------

Starting from v7.0, you can activate selection of items via the [enable()](dataview/api/selection/selection_enable_method.md) method of the selection object.

~~~js
dataview.selection.enable();
~~~

To disable selection of items in DataView, make use of the [disable()](dataview/api/selection/selection_disable_method.md) method of the selection object:

~~~js
dataview.selection.disable();
~~~

[Dataview. Disable/Enable selection](https://snippet.dhtmlx.com/kn42gb50)

Here is a list of events that you can apply while working with selection of items:

todotw возможно отправлять на страницу с перечислениями
- dataview/api/selection/selection_afterselect_event.md
- dataview/api/selection/selection_afterunselect_event.md
- dataview/api/selection/selection_beforeselect_event.md
- dataview/api/selection/selection_beforeunselect_event.md

Selecting an item
----------------------

To select a particular DataView item, make use of the **add()** method of the **selection** object. As a parameter the method takes the id of an item. 

~~~js
var id = dataview.selection.getId(); // -> "2"
dataview.selection.add("2");
~~~

Starting from v7.0, the method selects all unselected items when calling without parameters:

~~~js
dataview.selection.add();
~~~

Unselecting an item
--------------------

To remove selection from a selected item, apply the **remove()** method of the **selection** object. The method may take the id of an item as a parameter:

~~~js
dataview.selection.remove("2"); 
~~~

Starting from v7.0, the method unselects all previously selected items when calling without parameters:

~~~js
dataview.selection.remove();
~~~

Getting id of a selected item
-----------------------------

You can get the id of the currently selected item with the **getId()** method of the **selection** object:

~~~js
var selected = dataview.selection.getId(); // -> "2"
~~~

Starting from v7.0, the method can also return an array with ids of selected items if the [multiselection](dataview/api/dataview_multiselection_config.md) property of DataView is enabled.


Getting object of a selected item
---------------------------------

It is also possible to get the object of a selected item using the **getItem()** method of the **selection** object:

~~~js
var item = dataview.selection.getItem();
~~~

Starting from v7.0, the method can also return an array of selected items if the [multiselection](dataview/api/dataview_multiselection_config.md) property of DataView is enabled.
