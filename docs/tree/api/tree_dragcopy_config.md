---
sidebar_label: dragCopy
title: dragCopy
---          

@short: defines that an item is copied to a target during drag-n-drop

@signature: {'dragCopy?: boolean;'}

@example: 
var treeSource = new dhx.Tree("tree-source", {dragMode: "source", dragCopy: true});
var treeTarget = new dhx.Tree("tree-target", {dragMode: "target", dragCopy: true});


@descr:

{{note Don't forget to enable drag-n-drop via the [](tree/api/tree_dragmode_config.md) property to use dragCopy.}}


**Related sample**: [Tree. Copy Dragged Item](https://snippet.dhtmlx.com/xm0lxbpj)

@related: tree/initialization_of_dhtmlxtree.md#initialize-tree
tree/drag_and_drop_handling.md#copying-dragged-item
