---
sidebar_label: icon
title: icon
---          

@short: allows adding custom icons for tree items

@signature: {'icon?: ITreeCustomIcon;'}

@example: 
var tree = new dhx.Tree("tree_container", {
	icon: {
		folder: "fas fa-book",
		openFolder: "fas fa-book-open",
		file: "fas fa-file"
	}
});

@template:	api_config
@descr: 
There are three types of [icons](tree/setting_tree_appearance.md#changingicons) that can be customized:

- file
- folder
- openFolder

You should specify the name of the necessary icon type in the **icon** object and set the name of an icon from the used icon pack as its value.

@related: tree/initialization_of_dhtmlxtree.md#initialize-tree
tree/setting_tree_appearance.md#changingicons

**Related samples**:
- [Tree. Custom Icons](https://snippet.dhtmlx.com/lpsgn3j7)
- [Tree. Custom Dataset Icons](https://snippet.dhtmlx.com/h7mlx21q)
