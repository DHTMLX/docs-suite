---
sidebar_label: Simultaneous Server Update
title: Simultaneous Server Update
---     

```tododelete не используется?``` 

dataProcessor Module  
------------------------

Common tree manipulations like drag-n-drop (including d-n-d between trees), removing an item, inserting an item, 
or updating an item's label can be simultaneously reflected in the server database now (since v.1.3) using dataProcessor module.

The main features of this module are:

-  An updated/inserted item is marked with the bold text, the text of a deleted item is strikethrough;
-  You can define the mode of data processing (automatic/manual).

The data of the updated/deleted items is sent to the server to the specified URL (we call it serverProcessor). 

The serverProcessor should return a simple XML or JSON of the specified format to let the tree know about successful or unsuccessful processing.
All the necessary after-save procedures will be done automatically.

Enabling dataProcessor Module  
--------------------------------

To enable this feature the user should do the following:

-  Create dataProcessor object for the tree;
-  Initialize dataProcessor.

~~~js
<script>
	...
	tree.init();
	myDataProcessor = new dataProcessor(serverProcessorURL);
	myDataProcessor.init(treeObj); // tree object to assign dataProcessor to, mandatory
</script>
~~~

The mandatory parameter for dataProcessor is:

-  serverProcessorURL - URL of the file that will process the incoming data. If our server-side routines are used, 
"dhtmlxDataProcessor/server_code/PHP/update.php?ctrl=tree" should be indicated.


Server-Side dataProcessor Handling  
------------------------------------

Using the server-side dataProcessor the user should bear in mind the following:

-  All data comes in GET scope:
	-  tr_id - a node's id;
	-  tr_order - a node's sequence on the level;
	-  tr_pid - parent id;
	-  tr_text - a node's text(label);
	-  Userdata blocks are passed with their names.
	-  !nativeeditor_status - values can be as follows:
		-  "inserted" - item is inserted;
		-  "deleted" - item is deleted;
		-  "updated" or item doesn't exist - item is updated.
-  serverProcessor should return a valid XML of the following format:

~~~xml
<data>
<action type='insert/delete/update' sid='incoming_node_ID' tid='outgoing_node_ID'/>
</data>
~~~

In the above mentioned snippet, "incoming_node_ID" and "outgoing_node_ID" may be different
for insert action only, but they are equal for other actions.

