---
sidebar_label: Compatibility with Other DHTMLX Components
title: Compatibility with Other DHTMLX Components
---      

```tododelete не используется?``` 

Enabling Context Menu  
---------------------------

A context menu can be easily added to dhtmlxTree. The content of this menu can be set with XML or script.
To enable a context menu the user should do the following:

~~~js      
//initialization of the menu      
menu = new dhtmlXMenuObject(null,"standard");
menu.setIconsPath("[full path to this folder]/images/");    
menu.renderAsContextMenu();
menu.loadStruct("_context.xml");
      
            
//initialization of the tree
tree = new dhtmlXTreeObject("treeboxbox_tree","100%","100%",0);
...
//link the context menu to the tree      
tree.enableContextMenu(aMenu);  
~~~


Context Menu Based on Item's Properties  
-------------------------------------------

One context menu's content can be attached to the whole tree. 
If the user wants the menu to be shown differently depending on the item it was called for,
the menu methods **hideButtons/showButtons** should be used.

Note: For more information on the above mentioned menu buttons refer to [Menu Guides](menu/index.md).

~~~html
<div id="treeboxbox_tree" style="width:200;height:200"></div>

<script> 
	function onButtonClick(menuitemId,type){
		var id = tree.contextID;
		tree.setItemColor(id,menuitemId.split("_")[1]);
	}
		//initialization of the menu
	menu = new dhtmlXMenuObject(null,"standard");
	menu.setIconsPath("[full path to this folder]/images/");
	menu.renderAsContextMenu();
	menu.setOpenMode("web");
	menu.attachEvent("onClick",onButtonClick);
	menu.loadStruct("_context.xml");
		//initialization of the tree
	tree=new dhtmlXTreeObject("treeboxbox_tree","100%","100%",0);
	tree.setImagesPath("../imgs/");
	tree.enableDragAndDrop(true);
	tree.enableContextMenu(menu);
		//link context menu to the tree
	tree.load("tree.xml")

	tree.attachEvent("onBeforeContextMenu",function(itemId){
		if (tree.hasChildren(itemId) > 0){
			menu.hideItem('outher');
		} else {
			menu.showItem('outher');
		}
		return true
	})
</script>

~~~


Contextual Menu for Individual Items  
--------------------------------------

If you want to set different menus for individual tree items use the following method:

~~~js
tree.setItemContextMenu(itemId,cMenu);   
~~~

The parameters of the method are responsible for:

-  itemId - id of the item the context menu will be attached to;
-  cMenu - context menu object that will be attached.


