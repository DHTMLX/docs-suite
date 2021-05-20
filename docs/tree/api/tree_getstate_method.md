---
sidebar_label: getState()
title: getState()
---          

@short: gets the state of a tree

@signature: {'getState(): ITreeState;'}

`check`
@returns:
- treeState		object		an object of <i>key:value</i> pairs, where <i>key</i> is the id of a tree item and <i>value</i> is its state

@example:
var treeState = tree.getState();
/* -> 
{
	books: {open: true, selected: 2}, 
    mystery: {open: true, selected: 0}, 
    fantasy: {open: undefined, selected: 0}
}
*/

@descr:

**Related sample**: [Tree. Getting Tree State](https://snippet.dhtmlx.com/xo6y6xi6)

The **treeState** object contains *key:value* pairs, where *key* is the id of a tree item and *value* is its state. The state object of a tree item includes two properties:

<table>
	<tbody>
        <tr>
			<td><b>selected</b></td>
			<td>(<i>number</i>) the status of a checkbox of an item: 
				<ul>
					<li>0 - unselected </li>
					<li>1 - selected  </li>
					<li>indeterminate (for the parent item, in case its children are partially checked) </li>
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
