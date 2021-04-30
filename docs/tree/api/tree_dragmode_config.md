---
sidebar_label: dragMode
title: dragMode
---          

@short: enables drag-n-drop in Tree

@signature: dragMode?:  "target" | "both" | "source";;

@example: 
var tree = new dhx.Tree("tree_container", { 
    dragMode:"source"
});

@template:	api_config
@descr: 
Drag-n-drop can work in three modes: 

- "target" - a tree takes items from other trees, while its items can't be dragged out of it
- "source" - a tree allows dragging its items out and can't take items from other trees
- "both" - a tree both takes items from other trees and allows dragging its items out as well

**Related sample**: [Tree. Drag Modes](https://snippet.dhtmlx.com/7idtw7i4)

@related: tree/initialization_of_dhtmlxtree.md#initialize-tree
tree/drag_and_drop_handling.md#dragmode