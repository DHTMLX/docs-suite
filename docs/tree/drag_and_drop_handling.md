---
sidebar_label: Drag-n-Drop
title: Drag-n-Drop
---          

dhtmlxTree possesses an advanced drag-n-drop functionality. With this feature, it is possible to reorder items in a tree and drag items between trees. To enable drag-n-drop, you should define the drag mode.

~~~js
var source = new dhx.Tree("tree-source",{dragMode:"source", dropBehaviour:"complex"});
var target = new dhx.Tree("tree-target",{dragMode:"target", dropBehaviour:"complex"});
~~~


## Drag mode

There are three modes of drag-n-drop available in a tree:

- "target" - a tree takes items from other trees, while its items can't be dragged out of it
- "source" - a tree allows dragging its items out and can't take items from other trees
- "both" - a tree both takes items from other trees and allows dragging its items out as well

By setting the drag mode, you automatically enable the drag-n-drop functionality.

~~~js
var tree = new dhx.Tree("tree_container", { 
    dragMode:"source"
});
~~~

{{editor	https://snippet.dhtmlx.com/7idtw7i4	Tree. Drag Modes}}

{{note Please note that drag-n-drop within a tree works, if it has **dragMode:"both"** setting in its configuration object.}}

## Drop behaviour

You can specify the drag-n-drop behaviour of tree items with the [](tree/api/tree_dropbehaviour_config.md) in the configuration object of a tree. 

There are three modes of behaviour of a dragged tree item:

- "child" - a dragged item becomes a child of the item it is dragged to

![Child](../assets/tree/drag_behaviour_child.png)

- "sibling" - a dragged item becomes a sibling of the item it is dragged to

![Sibling](../assets/tree/drag_behaviour_sibling.png)

- "complex" - a dragged item can become both a child or a sibling of a target item, depending on the position specified by highlighting (check the above images)


## Copying dragged item

Instead of moving a dragged item to a new position in the same or a different tree, you can copy it. Use the [](tree/api/tree_dragcopy_config.md) option in the configuration object of a tree.

~~~js
var treeSource = new dhx.Tree("tree-source", {dragMode: "source", dragCopy: true});
var treeTarget = new dhx.Tree("tree-target", {dragMode: "target", dragCopy: true});
~~~

{{editor	https://snippet.dhtmlx.com/xm0lxbpj	Tree. Copy Dragged Item}}