---
sidebar_label: setState()
title: JavaScript Tree - setState Method 
description: You can explore the setState method of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# setState()

@short: sets state for a tree

@signature: {'setState(state: ITreeState): void;'}

@params:
- `state: object` - an object of *key:value* pairs, where *key* is the id of a tree item and *value* is its state

@example:
// getting the state of a tree
const treeState = tree.getState();

// restoring the state of a tree
tree.setState(treeState);

@descr:

**Related sample**: [Tree. Setting Tree state](https://snippet.dhtmlx.com/g0539az1)

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

Here is an example of a treeState object:

~~~js
{
	"books": {
		"open": true,
		"selected": 2
	},

	"mystery": {
		"open": true,
		"selected": 2
	},

	"thrillers": {
		"selected": 1
	},

	"rc": {
		"selected": 0
	},

	"ir": {
		"selected": 1
	},

	"history": {
		"selected": 0
	},

	"jmf": {
		"selected": 0
	},

	"jd": {
		"selected": 0
	}
}
~~~

[comment]: # (@relatedapi: tree/api/tree_getstate_method.md)

[comment]: # (@related: tree/work_with_tree.md#settinggetting-tree-state)
