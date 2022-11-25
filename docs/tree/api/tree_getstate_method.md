---
sidebar_label: getState()
title: JavaScript Tree - getState Method 
description: You can explore the getState method of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getState()

@short: gets the state of a tree

@signature: {'getState(): ITreeState;'}

@returns:
An object of *key:value* pairs, where *key* is the id of a tree item and *value* is its state.

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

The **treeState** object contains *key:value* pairs, where *key* is the id of a tree item and *value* is its state. The state object of a tree item includes two properties:

<table>
	<tbody>
        <tr>
			<td><b>selected</b></td>
			<td>(<i>number</i>) the status of a checkbox of an item: 
				<ul>
					<li>0 - unselected </li>
					<li>1 - selected  </li>
					<li>2 - indeterminate (for the parent item, in case its children are partially checked) </li>
				</ul>
			</td>
		</tr>
		<tr>
			<td><b>open</b></td>
			<td>(<i>boolean</i>) checks whether a tree item is open (for folders with items)</td>
		</tr>
    </tbody>
</table>

[comment]: # (@relatedapi: tree/api/tree_setstate_method.md)

[comment]: # (@related: tree/work_with_tree.md#settinggetting-tree-state)
