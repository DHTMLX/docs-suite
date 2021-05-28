---
sidebar_label: icon
title: JavaScript Tree - icon Config 
hide_title: true
description: You can explore the icon config of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# icon

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

@descr:

**Related samples**:
- [Tree. Custom Icons](https://snippet.dhtmlx.com/lpsgn3j7)
- [Tree. Custom Dataset Icons](https://snippet.dhtmlx.com/h7mlx21q)

There are three types of [icons](tree/setting_tree_appearance.md#changingicons) that can be customized:

- file
- folder
- openFolder

You should specify the name of the necessary icon type in the **icon** object and set the name of an icon from the used icon pack as its value.

[comment]: # (@related: tree/initialization_of_dhtmlxtree.md#initialize-tree tree/setting_tree_appearance.md#changing-icons)
