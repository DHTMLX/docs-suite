---
sidebar_label: Manipulating Nodes 
title: Manipulating Nodes 
---      

```tododelete не используется?``` 

Adding/Removing Items  
--------------------------

###Adding Parent Item 

Parent tree nodes can be easily added to the tree from script with the help of the **insertNewNext()** method.
The following incoming parameters should be indicated in this method:


-  siblingId - id of the item after which a new one will be created;
-  itemId - id of the new item;
-  label - text of the new item;
-  action - 0 in most cases, but it can be a custom function;
-  imageClosed - image for a collapsed item; if 0 is indicated - the default one is used;
-  imageOpen - image for an expanded item; if 0 is indicated - the default one is used;
-  imageLeaf - image for a leaf item; if 0 is indicated - the default one is used;
-  additional options - a comma-delimited string of the following possible values (upper case only):
	-  SELECT - move selection to this item after its creation;
	-  CALL - call a function on select;
	-  TOP - add this item to the top position;
	-  CHILD - the node contains child items;
	-  CHECKED - the checkbox is checked (if exists).

~~~js
tree.insertNewNext(1,2,"New Node 2",0,0,0,0,"CHILD,CHECKED");  
~~~

###Adding Child Node 

The **insertNewChild()** method allows adding a new child item for the chosen tree node. The parameters the user should indicate are:


-  parentId - id of the parent item in which the new child will be created;
-  itemId - id of the new item;
-  label - text of the new item;
-  action - 0 in most cases, but it can be a custom function;
-  imageClosed - image for a collapsed item; if 0 is indicated - the default one is used;
-  imageOpen - image for an expanded item; if 0 is indicated - the default one is used;
-  imageLeaf - image for a leaf item; if 0 is indicated - the default one is used;
-  additional options - a comma-delimited string of the following possible values (upper case only):
	-  SELECT - move selection to this item after its creation;
	-  CALL - call a function on item's select;
	-  TOP - add this item to the top position;
	-  CHILD - the node contains child items;
	-  CHECKED - the checkbox is checked (if exists).

~~~js
tree.insertNewChild(0,1,"New Node 1",0,0,0,0,"SELECT,CALL,TOP,CHILD,CHECKED");  
~~~

The item added as a child is always created as the last one of child items for the specified parent.



###Removing Item 

Any item can be easily removed from the tree in the following way:

~~~js
tree.deleteItem(itemId, selectParent); 
~~~

The parameters the user should specify are:

-  itemId - id of the item in question;
-  selectParent(true/false) - if set to **true**, the parent item of the removed child item becomes selected when the removal is done,
while **false** means that no items will be selected in the tree after removal of the indicated item.


###Removing All Child Items 


The following method allows the user to remove all child items of a certain node easily:

~~~js
tree.deleteChildItems(itemId);  
~~~

Collapsing/Expanding Items  
-----------------------------

###Expanding Parent Item on Child Adding 


There is a possibility in dhtmlxTree to set whether a parent item will be expanded or not when a child item is added to it.

~~~js
tree.openOnItemAdded(mode);
~~~

The method can be set either to true (the parent item will be expanded on child adding) or to false (the parent item won't be expanded).



###Collapsing/Expanding Item 


There is a possibility to expand/collapse any node in dhtmlxTree from script. 
The only value that the user should indicate is the id of the item in question:

~~~js
tree.openItem(itemId); // expand the indicated item
tree.closeItem(itemId); // collapse the indicated item
~~~

###Collapsing/Expanding All Items 

The user can also expand/collapse all items in the tree. 
The mandatory parameter here is the id of the item starting from which all items will be expanded/collapsed:

~~~js   
tree.openAllItems(itemId); // expand all items
tree.closeAllItems(itemId); // collapse all items  
~~~

One more method to expand all tree items that is similar to the above mentioned one but works in dynamic trees:

~~~js
tree.openAllItemsDynamic(itemId); // expands all items in a dynamic tree 
~~~

###Expanding Item's List 


The method to expand a list of tree items in a dynamic tree (items are expanded one by one, 
the next item will be opened only when the previous one is loaded):

~~~js
tree.openItemsDynamic(list,flag);
~~~

The parameters are:

-  list - list of the ids of the nodes that will be expanded;
-  flag (true/false) - indicates whether the last node in the list will be selected (true) or not (false).

###Prevent Item from Collapsing 


There is a method that can prevent the item from collapsing:

~~~js
tree.setItemCloseable(itemId,flag);
~~~

The parameters here are as follows:

-  itemId - id of the node;
-  flag(true/false) - if set to false, prevents the item from collapsing.

###Getting Item's State 

Item's state (expanded/collapsed) can be got in the following way:

~~~js
var state = tree.getOpenState(itemId);
~~~

The method returns true if the item in question is expanded, and false if the item is collapsed.

###Locking Tree/Item 


By locking the tree the user denies expanding/collapsing tree nodes. A tree isn't locked (false) by default. 
To lock the tree, the lockTree() method should be set to true:

~~~js
tree.lockTree(true); // false to unlock the tree 
~~~

Any item, whether it is a parent or a child one, can also be locked by the lockItem() method:

~~~js
tree.lockItem(itemId); // id of the item as the input parameter 
~~~

###Getting Locked/Unlocked State 


To get the state (locked/unlocked) of any item in the tree, the user should apply the following method:

~~~js
var itemState = tree.isLocked(itemId); // returns current item's state
~~~

If the item in question is locked, the method returns **true**, if it is unlocked, **false** is returned.


Editing Items  
-------------

###Making Items Editable 


Any item in the tree can be made editable: double click on the item allows editing its title text. 
All items in the tree are not editable (false) by default. To make them editable the user should write the following code line:

~~~js
tree.enableItemEditor(true); // false to deny items editing
~~~

###Activating Editor for Item 

The user can activate the editor for a specified item from script with the help of the editItem() method. 
The only parameter that should be specified is the id of the item:

~~~js
tree.editItem(itemId);  
~~~

###Deactivating Editor for Item 

Item's editor can be easily deactivated from script bringing the item back to its normal view:

~~~js
tree.stopEdit(); 
~~~

###Defining Editing Event

The event that starts an item's editing can be defined from script in the following way:

~~~js
tree.setEditStartAction(click, dblclick); 
~~~

The parameters define the following:

-  click(true/false) - item's editing will be activated by a click on the selected item;
-  dblclick(true/false) - item's editing will be activated by a double click on the selected item.

Integration with Cookies  
---------------------------

###Saving Items' States to Cookies 

The user has the possibility to store the states of items to cookies in the following way:

~~~js
tree.saveOpenStates(cookie_name,cookie_param); 
~~~

The parameters of this method are:

-  cookie_name - name of the cookie (optional parameter);
-  cookie_param - additional parameters added to cookie.

###Restoring Items' States from Cookies 

There is a method that restores items' states (expanded/collapsed) from cookie's information:

~~~js
tree.loadOpenStates(cookie_name); // the parameter is optional 
~~~

###Saving Selection to Cookies 

Item's selection can also be stored in cookies in the following way:

~~~js
tree.saveSelectedItem(cookie_name,cookie_param);
~~~

The parameters of this method are:

-  cookie_name - name of the cookie (optional parameter);
-  cookie_param - additional parameters added to cookie.

###Restoring Selection from Cookies 

Item's selection can be restored from cookie in the following way:

~~~js
tree.restoreSelectedItem(cookie_name); // the parameter is optional
~~~

###Saving Tree to Cookies 

The saveState() method stores the whole tree to cookies:

~~~js
tree.saveState(cookie_name,cookie_param);
~~~

The parameters of this method are:

-  cookie_name - name of the cookie (optional parameter);
-  cookie_param - additional parameters added to cookie

###Restoring Tree from Cookies 

The loadState() method restores the whole tree from cookies:

~~~js
tree.loadState(cookie_name); // the parameter is optional
~~~

###Enabling Item's Auto Saving 

dhtmlxTree allows its users to save the selected node automatically in cookies. 
The enableAutoSavingSelected() method is used to switch this functionality on/off in the tree:

~~~js
tree.enableAutoSavingSelected(mode,cookieName);
~~~

The parameters are:

- mode(true/false) - indicates whether the auto saving is on/off;
- cookieName - name of the cookie.

Item's Text, Tooltip, Color Manipulation  
---------------------------------------

###Setting Item's Label 


The user can set the label (text) of a tree node in the following way:

~~~js
tree.setItemText(itemId, newLabel, newTooltip);
~~~

The parameters are as follows:

- itemId - id of the item in question;
- newLabel - new text for item's label;
- newTooltip - the text indicated in this parameter will be used as item's tooltip text (optional parameter).

###Getting Item's Label 


The user has the possibility to get text of an item's label by indicating the item's id in the following way:

~~~js
var text = tree.getItemText(itemId);
~~~

The user can also get the text of the currently selected item in the following way:

~~~js
var textSelected = tree.getSelectedItemText();
~~~

###Setting Item's Color 

The following line of code is responsible for specifying a node's color (text color) in the tree:

~~~js
tree.setItemColor(itemId, defaultColor, selectedColor);
~~~

The parameters the user should specify are as follows:

-  itemId - id of the item in question;
-  defaultColor - the item's color;
-  selectedColor - the item's color for a selected state.

###Getting Item's Color 

Item's color can be easily received by an item's id in the following way:

~~~js
car color = tree.getItemColor(itemId);
~~~

The object returned by the above mentioned method has the parameters { acolor:"value", scolor:"value" } where:


-  acolor - means the color for the normal state of the item;
-  scolor - means the color for the selected state of the item.

The format of the color will be the same as it was set by the setItemColor() method.

###Setting Item's Tooltip 

There are three ways to set tooltip for an item in Tree:

- using a node's text ("label" attribute of a node) as a tooltip. In this case the following method should be used:

	~~~js
	tree.enableAutoTooltips(true/false); // false by default 
	~~~

- using the "tooltip" attribute of a node in XML (it is used by default if this attribute was specified);
- using the **setItemText**() method specifying its third parameter.

###Getting Item's Tooltip 


Item's tooltip is also easy to get with the help of the **getItemTooltip()** method by indicating an item's id:

~~~js
var tooltip = tree.getItemTooltip(itemId);
~~~


Refreshing and Updating Items  
-----------------------------

###Refreshing Item/Items 


The following method is used to refresh data for the specified node:

~~~js
// if an item's id isn't indicated, the id of the top tree item will be used  
tree.refreshItem(itemId); 
~~~

The above mentioned code line presupposes that all the child items of the indicated node are removed, 
an XML file (indicated in the setXMLAutoLoading() method; auto loading should be activated) is loaded from the server. 
The data from this file is used for creating new child items of the node in question.

The following method is used to refresh data for several nodes:

~~~js
tree.refreshItems(itemIdList, source);  
~~~

The parameters of this method include the list of items that should be refreshed and the path to the XML file from which new data will be loaded.
In this case the data is refreshed only for the nodes indicated in the itemIdList parameter (not their children).

###Smart Branch Refreshing 

There is one more possibility to refresh data in the tree. The **smartRefreshBranch()** method is able to load XML from the server
and refresh data for the specified branch (text, icons, items).
It should be noted that the current position and all the changes introduced by the user stay the same in this case.

~~~js
tree.smartRefreshBranch(itemId,source);
~~~

The parameters here are responsible for:

-  itemId - id of the item from which the refreshing starts in the branch;
-  source - a server-side script, optional parameter. If it is not set, the system will use the source indicated in setXMLAutoLoading().

###Smart Item Refreshing 

The **smartRefreshItem()** method is responsible for loading XML the data of which is used for refreshing the specified item in the tree. 
The same as the previous method, this one keeps the current position of the item and all other changes introduced by the user.

~~~js
tree.smartRefreshItem(itemId,source);  
~~~

The parameters are as follows:

-  itemId - id of the item in question;
-  source - a server-side script, optional parameter. If it is not set, the system will use the source indicated in setXMLAutoLoading().

###Updating Item 

There is a simple way of updating items in dhmlxTree - the **updateItem()** method. 
The used should indicate the id of the item that should be updated and the parameters that should be updated:

~~~js
tree.updateItem(itemId,name,im0,im1,im2,achecked);  
~~~

The parameters of this method are as follows:

-  itemId - id of the item in question;
-  name - the title text of the item;
-  im0 - the icon for a leaf node;
-  im1 - the icon for an expanded parent node;
-  im2 - the icon for a collapsed parent node;
-  achecked(true/false) - whether the checkbox is checked (true) or not (false).

Items' Ids Manipulation  
------------------------

###Getting List of Parent Items' Ids 

The following methods allow the user to get ids of all parent tree nodes:

~~~js
var parents = tree.getAllItemsWithKids(); // returns an array of nodes' ids
~~~

###Getting List of Leaf Items' Ids 

The user can get the list of ids of all tree's items that don't have child nodes (childless items):

~~~js
var childless = tree.getAllChildless(); // returns an array of nodes' ids
~~~

###Getting List of Sub-Items' Ids 

The user can easily get the ids of all sub-items starting from the item the id of which is indicated in this method:

~~~js
var subItems = tree.getAllSubItems(itemId);
~~~

Getting the list of all sub-items' ids for the specified item is quite easy. This parent item's id should be specified:

~~~js
tree.getSubItems(itemId);
~~~

###Changing Item's Id 

The user can change any node's id, if there's such a need, in the following way:

~~~js
tree.changeItemId(itemCurrentId,itemNewId);  
~~~

###Getting Child Item's Id 

The user can get any child item's id by its index (sequence number) and the id of its parent:

~~~js 
var childId = tree.getItemIdByIndex(itemId,index);
~~~

The parameters are:

-  itemId - id of the parent item;
-  index - sequence number of the child item (starting with 0).


###Getting Child Item's Index 

Child item's index (sequence number) can be easily got by its id:

~~~js
var childIndex = tree.getIndexById(itemId);
~~~

The parameter is the id of the child item the index of which the user wants to get.



###Getting Item's Parent Id 


The getParentId() method can be used to get an item's parent id:

~~~js
var parent = tree.getParentId(itemId);
~~~

The id of the item should be indicated as the parameter.



###Getting List of Checked/Unchecked Tree Items' Ids


The ids of all checked/unchecked items in the tree can be easily got by the getAllChecked() method:

~~~js
var list = tree.getAllChecked(); //returns an array of all checked items' ids
	//or
var list = tree.getAllUnchecked(); // returns an array of all unchecked items' ids
~~~


###Getting List of Partially Checked Items' Ids


The method, similar to the above mentioned ones, exists for getting the ids of all the partially checked items in the tree:

~~~js
var list = tree.getAllPartiallyChecked(); // returns an array of all checked items' ids 
~~~

###Getting List of Checked Branches' Ids 

Ids of all checked branches in the tree can be got like this:

~~~js
var list = tree.getAllCheckedBranches(); // returns an array of all checked branches' ids
~~~

###Getting Selected Item's Id 


Selected item's id is easy to get through the getSelectedItemId() method which takes an item's id as a parameter:

~~~js
var selectId = tree.getSelectedItemId();
~~~

###Setting List Separator 

There is a simple way of setting list separator in Tree:

~~~js
tree.setListDelimeter(separator); // by default the separator is ","
~~~

There is only one parameter here - separator. It's a char or a string used for separating items in a list. 


Items Position Manipulation  
-----------------------------

###Moving Items 

Any item in the tree can be moved with the help of the moveItem() method.

~~~js
tree.moveItem(itemId, mode, targetId, targetTree); 
~~~

The following parameters should be specified for this method:


-  itemId - id of the item in question;
-  mode - one of the moving modes available:
	-  left - the item will be moved to the left of the node's current position;
	-  up - the item will be moved one level up in the hierarchy;
	-  up_strict - the item will be moved one position up, but will remain in the same level of the hierarchy;
	-  down - the item will be moved one level down in the hierarchy;
	-  down_strict - the item will be moved one position down, but will remain in the same level of the hierarchy;
	-  item_child - the item will be made a child of the target item;
	-  item_sibling - the item will be made a sibling of the target item, and will be placed before the target item;
	-  item_sibling_next - the item will be made a sibling of the target item, and will be placed after the target item;
-  targetId - id of the item, relative to which the item in question will be moved;
-  targetTree (optional) - the object of some other tree, the item in question is moved into.


###Cutting/Pasting Items 

One more way of moving nodes is the use of the doCut() and doPaste() commands. But they work only with selected items:

~~~js
tree.doCut(); // marks the selected item as cut
tree.doPaste(itemId); // id of a new parent node
~~~

The cut item will be made a child node of the item indicated in the doPaste() method.



###Clearing Cut Mark  

To clear the mark made by the doCut() method, the user is advised to use the clearCut() one:

~~~js
tree.clearCut(); 
~~~

###Getting Item's Level 

There is a method in dhtmlxTree that allows the user to get an item's current level (position in the hierarchy) by indicating this item's id:

~~~js
var level = getLevel(itemId);
~~~

###Setting Item's Top Offset 

There is a possibility to set the top offset for a tree item using the following method:

~~~js
tree.setItemTopOffset(itemId,value);
~~~

The parameters are:

-  itemId - id of the item in question;
-  value - offset value.

Calculating Items  
-----------------

###Setting Calculation Mode 

The user can set the calculation mode for the tree in the following way:

~~~js
tree.setChildCalcMode(mode); // disabled by default
~~~

There are the following mode variants available:

-  child - direct child items, no recursive;
-  leafs - direct child items without sub-items, no recursive;
-  childrec - child items (leaf items and those with their own child items), recursive;
-  leafsrec - child items without sub-items, recursive;
-  disabled - disable this mode.

All tree child nodes will be calculated in this mode.



###Setting Calculation HTML 

Along with setting the calculation mode for child items the user can specify calculation HTML like this:

~~~js
tree.setChildCalcHTML(htmlA,htmlB); 
~~~

The parameters here are:

-  htmlA - prefix of the calculator ("[" by default);
-  htmlB - postfix of the calculator ("]" by default).


###Getting Number of Child Items 

The number of child items of a certain parent can be got in the following way:

~~~js
var childItems = tree.hasChildren(itemId);  
~~~


User Data Manipulation  
----------------------

###Setting User Data 

User data can be set for any tree item:

~~~js
tree.setUserData(itemId,name,value);      
~~~

The parameters of this method are:

-  itemId - id of the item in question;
-  name - name of user data;
-  value - value of user data.


###Getting User Data 

User data set for a tree node can be got in the following way:

~~~js
var userData = tree.getUserData(itemId,name);
~~~

The parameters of this method are:

-  itemId - id of the item in question;
-  name - name of user data.

Using Link-Like Functionality in Tree  
---------------------------------------

Any node of the tree can have the link-like functionality specified for it. The link for an item can be set by user in XML. 
The user should also specify the [onClick event](api/dhtmlxtree_onclick_event.md) for the item with link-like functionality.



