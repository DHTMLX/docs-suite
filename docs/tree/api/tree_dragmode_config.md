---
sidebar_label: dragMode
title: JavaScript Tree - dragMode Config 
description: You can explore the dragMode config of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# dragMode

@short: enables drag-n-drop in Tree

@signature: {'dragMode?: "target" | "source" | "both";'}

@example:
var tree = new dhx.Tree("tree_container", { 
    dragMode:"source"
});

@descr:

**Related sample**: [Tree. Drag Modes](https://snippet.dhtmlx.com/7idtw7i4)

Drag-n-drop can work in three modes: 

- "target" - a tree takes items from other trees, while its items can't be dragged out of it
- "source" - a tree allows dragging its items out and can't take items from other trees
- "both" - a tree both takes items from other trees and allows dragging its items out as well

[comment]: # (@related: tree/initialization_of_dhtmlxtree.md#initialize-tree tree/drag_and_drop_handling.md#drag-mode)
