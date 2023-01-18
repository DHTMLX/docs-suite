---
sidebar_label: dropBehaviour
title: JavaScript Tree - dropBehaviour Config 
description: You can explore the dropBehaviour config of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# dropBehaviour

@short: Optional. Defines the behaviour of a dragged item

@signature: {'dropBehaviour?: "child" | "sibling" | "complex";'}

@example:
const source = new dhx.Tree("tree-source",{dragMode:"source", dropBehaviour:"complex"});
const target = new dhx.Tree("tree-target",{dragMode:"target", dropBehaviour:"complex"});

@descr:

**Related sample**: [Tree. Drop behaviour](https://snippet.dhtmlx.com/80mh3hly)

{{note Don't forget to enable drag-n-drop via the [](tree/api/tree_dragmode_config.md) property to use dropBehaviour.}}

There are three modes of behaviour of a dragged tree item, depending on the value set for the **dropBehaviour** option in the configuration object of a tree:

- "child" - a dragged item becomes a child of the item it is dragged to

![](../../assets/tree/drag_behaviour_child.png)

- "sibling" - a dragged item becomes a sibling of the item it is dragged to

![](../../assets/tree/drag_behaviour_sibling.png)

- "complex" - a dragged item can become both a child or a sibling of a target item, depending on the position specified by highlighting (check the above images)

[comment]: # (@related: tree/initialization_of_dhtmlxtree.md#initialize-tree tree/drag_and_drop_handling.md#drop-behaviour)
