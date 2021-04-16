---
sidebar_label: Searching and Sorting in Tree 
title: Searching and Sorting in Tree 
---     

```tododelete не используется?``` 

Searching in Tree  
----------------------

###Enabling Auto Search 

First of all, the meaning of auto search should be explained. When auto search is switched on, the user can just select any item in the tree and start typing.

The search starts from the currently selected item.
The Tree item the name of which meets the search conditions best of all will be selected. 

To restart the search click the Backspace button.

Auto search can be enabled only after enabling the keyboard navigation:

~~~js
tree.enableKeyboardNavigation(true);
tree.enableKeySearch(true); // false to disable  
~~~

This method should be called before any of the data loading methods.



###Searching Tree 

The search in Tree can be implemented from script with the help of the findItem() and findItemIdByLabel() methods. 
The methods differ in one thing: whether the searched item will be selected and focused when found or not:

~~~js  
// the item will be selected and focused when found
tree.findItem(searchStr, direction, top); 
//or
//the item will not be selected and focused when found 
tree.findItemIdByLabel(searchStr, direction, top); 
~~~

The parameters of both these methods are:

-  searchStr - the search query;
-  direction(false/true) - direction of the search, from the top to the bottom (false), and vice versa (true);
-  top(true/false) - start searching from the top (true) or start searching from the currently selected item (false).


Sorting in Tree  
-------------------

###Sorting Tree 

dhtmlxTree allows its users to sort the tree in either ASC or DES orders:

~~~js
tree.sortTree(itemId, oder, all_levels);  
~~~

The user should indicate the following parameters:

-  itemId - id of the node sorting starts from;
-  oder(ASC/DES) - sorting order;
-  all_levels(true/false) - sorting the tree by all levels (true), or by the current level.


###Custom Defined Sorting 

The user can set a custom sort function. The function should have two parameters: id_of_item1, id_of_item2. For example:

~~~js
//define the comparator (in our case it compares the second words in labels)
function mySortFunc(idA,idB){
	a=(tree.getItemText(idA)).split(" ")[1]||"";
	b=(tree.getItemText(idB)).split(" ")[1]||"";
    return ((a&amp;gt;b)?1:-1);
}  
~~~

Then the setCustomSortFunction() method should be called. It takes the name of the function as the incoming parameter:

~~~js
//attach the comparator to the tree
tree.setCustomSortFunction(mySortFunc); 
~~~

It should be noted that if a custom comparator is specified, the sortTree() method will use it for sorting.
