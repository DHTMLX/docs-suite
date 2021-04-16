---
sidebar_label: Navigation and Selection in Tree 
title: Navigation and Selection in Tree 
---          

```tododelete не используется?``` 

Navigation Manipulation  
-----------------------------

###  Enabling Keyboard Navigation 

There is a possibility to enable keyboard navigation in dhtmlxTree. Using keyboard navigation the user can select any item in the tree and use the following keys:

-  Up arrow - selects the item above the currently selected one;
-  Down arrow - selects the item below the currently selected one;
-  Right arrow - opens the item;
-  Left arrow - closes the item;
-  Enter - calls the item's action;
-  F2 - edits the selected item;
-  Esc - closes the editor.

Keyboard navigation in the tree can be enabled/disabled in the following way:

~~~js
tree.enableKeyboardNavigation(true/false);  
~~~

This method should be called before any of the data loading methods.


###Assigning Navigation Keys 


The user can also set new navigation keys using the assignKeys() method:

~~~js
// should be called when keyboard navigation is already switched on 
tree.assignKeys([["up",104],["down",98],["open",102],["close",100],["call",101]]);    
~~~

The first parameter is the name of the action, the second one indicates the key code.


Selection Manipulation  
-----------------------

###Focusing Item 

The method below allows scrolling to the indicated item from script:

~~~js
tree.focusItem(itemId);  
~~~

In this case the item is not selected/highlighted.


###Selecting Item 


To select an item from script the user should call the following command:

~~~js
tree.selectItem(itemId,mode,preserve); 
~~~

The parameters of the method are as follows:

-  itemId - item id;
-  mode(true/false) - if set to true, script function for the selected item will be called;
-  preserve(true/false) - preserve earlier selected items, set to false by default.


###Clearing Selection 

The clearSelection() method removes the selection of the specified item in the tree:

~~~js
tree.clearSelection(itemId);  
~~~

###Enabling Multiselection 

Multiselection in the tree allows the user to select multiple items using Ctrl+click. Drag-and-drop is also supported in multiselection mode as well as the Cut and Paste functionality.

~~~js
tree.enableMultiselection(mode, strict); 
~~~

The parameters are as follows:

- mode(true/false) - this parameter is responsible for enabling/disabling multiselection;
- strict(true/false) - the strict mode is on/off; the strict mode presupposes that only items of the same level can be objects of multiselection.

###Enable Item Highlighting 

There is a possibility to switch on an item's highlighting feature. When this feature is on, an item's label will be highlighted when the mouse pointer is over it. This feature is operated like this:

~~~js
tree.enableHighlighting(true/false); // is switched off by default  
~~~

When this method is set to **false**, the highlighting is switched off, while setting the method to **true** switches this feature on.



