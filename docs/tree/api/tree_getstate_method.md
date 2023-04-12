---
sidebar_label: getState()
title: JavaScript Tree - getState Method 
description: You can explore the getState method of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getState()

@short: gets the state of a tree

@signature: {'getState(): { [id: string]: { selected: number, open: boolean }};'}

@returns:
An object of *key:value* pairs, where *key* is the id of a tree item and *value* is an object which includes two properties:
- `selected: number` - the status of a checkbox of an item: 
	- 0 - unselected
	- 1 - selected
	- 2 - indeterminate (for the parent item, in case its children are partially checked)
- `open: boolean` - checks whether a tree item is open (for folders with items)

@example:
const treeState = tree.getState();
/* -> 
{
	books: {open: true, selected: 2}, 
    mystery: {open: true, selected: 0}, 
    fantasy: {open: undefined, selected: 0}
}
*/

@descr:

**Related sample**: [Tree. Getting Tree state](https://snippet.dhtmlx.com/xo6y6xi6)

[comment]: # (@relatedapi: tree/api/tree_setstate_method.md)

[comment]: # (@related: tree/work_with_tree.md#settinggetting-tree-state)
