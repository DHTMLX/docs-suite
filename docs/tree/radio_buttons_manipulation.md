---
sidebar_label: Manipulating Radio Buttons
title: Manipulating Radio Buttons
---        

```tododelete не используется?``` 

Enabling/Disabling Radio Buttons  
--------------------------------

###Enabling/Disabling Radio Buttons for Tree 

dhtmlxTree supports radio buttons. To turn them on for the whole tree the user should call the following method:

~~~js
tree.enableRadiobuttons(true); // false - disables radio buttons for the whole tree
~~~

This method should be called before data loading in the tree takes place.



###Enabling/Disabling Radio Buttons for Items 


There is a possibility to enable radio buttons for child items of a certain node in the tree. 
In this case the checkboxes of these child items will be replaced by radio buttons:

~~~js
tree.enableCheckboxes(true); //enable checkboxes
//enable radio buttons for child items of a certain node; false to disable
tree.enableRadiobuttons(true, itemId); 
~~~

###Enabling/Disabling Single Radio Mode 

The enableSingleRadioMode() method changes the radio buttons logic in the way that there can be only one checked radio button in the whole tree.
To switch this mode on the user should write the following code line:

~~~js
tree.enableSingleRadioMode(mode, itemId);  
~~~

The parameters are:

-  mode (true/false) - whether single radio mode is enabled/disabled;
-  itemId - id of the item that will be checked.
