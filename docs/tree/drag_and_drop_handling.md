---
sidebar_label: Drag-n-Drop
title: JavaScript Tree - Drag-n-Drop 
description: You can explore the drag-n-drop of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Drag-n-Drop

DHTMLX Tree supports drag-n-drop. Users can reorder items within a tree and drag items between trees. To enable drag-n-drop, set the `dragMode` property:

~~~js
const source = new dhx.Tree("tree-source", { dragMode: "source", dropBehaviour: "complex" });
const target = new dhx.Tree("tree-target", { dragMode: "target", dropBehaviour: "complex" });
~~~

## Drag mode

The `dragMode` property defines one of three drag-n-drop modes:

- `target` — a tree takes items from other trees but doesn't let you drag its items out
- `source` — a tree lets you drag its items out but can't take items from other trees
- `both` — a tree takes items from other trees and lets you drag its items out

For example, the following tree works in the `source` mode:

~~~jsx
const tree = new dhx.Tree("tree_container", { 
    dragMode: "source"
});
~~~

**Related sample**: [Tree. Drag modes](https://snippet.dhtmlx.com/7idtw7i4)

:::note 
Drag-n-drop within a tree works only if the tree has the `dragMode:"both"` setting in its configuration object.
:::

## Drop behaviour

You can specify the drag-n-drop behaviour of tree items with the [`dropBehaviour`](tree/api/tree_dropbehaviour_config.md) property in the configuration object of a tree. 

The property supports three modes:

- `child` — a dragged item becomes a child of the target item

![Tree drag-and-drop dropping an item as a child of the target folder in DHTMLX Suite](/img/tree/drag_behaviour_child.png)

- `sibling` — a dragged item becomes a sibling of the target item

![Tree drag-and-drop dropping an item as a sibling of the target item in DHTMLX Suite](/img/tree/drag_behaviour_sibling.png)

- `complex` — a dragged item becomes either a child or a sibling of the target item, depending on the drop position that the highlighting shows (see the images above)

## Copying dragged item

Instead of moving a dragged item to a new position in the same or a different tree, you can copy it. Set the [`dragCopy`](tree/api/tree_dragcopy_config.md) option to `true` in the configuration object of a tree:

~~~jsx
const treeSource = new dhx.Tree("tree-source", { dragMode: "source", dragCopy: true });
const treeTarget = new dhx.Tree("tree-target", { dragMode: "target", dragCopy: true });
~~~

**Related sample**: [Tree. Copy dragged item](https://snippet.dhtmlx.com/xm0lxbpj)
