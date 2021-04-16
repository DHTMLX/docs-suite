---
sidebar_label: dragCopy
title: dragCopy
---          

@short: defines that an item is copied to a target during drag-n-drop

@signature: dragCopy?: boolean;

@type: boolean

@example: 
var treeSource = new dhx.Tree("tree-source", {dragMode: "source", dragCopy: true});
var treeTarget = new dhx.Tree("tree-target", {dragMode: "target", dragCopy: true});

@template:	api_config
@descr: 
{{note Don't forget to enable drag-n-drop via the [](tree/api/tree_dragmode_config.md) property to use dragCopy.}}


@relatedsample: https://snippet.dhtmlx.com/xm0lxbpj	Tree. Copy Dragged Item

@related: tree/initialization_of_dhtmlxtree.md#initializetree
tree/drag_and_drop_handling.md#copyingdraggeditem