---
sidebar_label: dragCopy
title: JavaScript Tree - dragCopy Config 
description: You can explore the dragCopy config of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# dragCopy

@short: defines that an item is copied to a target during drag-n-drop

@signature: {'dragCopy?: boolean;'}

@example:
var treeSource = new dhx.Tree("tree-source", {dragMode: "source", dragCopy: true});
var treeTarget = new dhx.Tree("tree-target", {dragMode: "target", dragCopy: true});

@descr:

**Related sample**: [Tree. Copy dragged item](https://snippet.dhtmlx.com/xm0lxbpj)

{{note Don't forget to enable drag-n-drop via the [](tree/api/tree_dragmode_config.md) property to use dragCopy.}}

[comment]: # (@related: tree/initialization_of_dhtmlxtree.md#initialize-tree tree/drag_and_drop_handling.md#copying-dragged-item)
