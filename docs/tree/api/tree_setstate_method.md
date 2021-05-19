---
sidebar_label: setState()
title: setState()
---          

@short: sets state for a tree

@signature: {'setState(state: ITreeState): void;'}

`check`
@params:
- treeState 	object 		an object of <i>key:value</i> pairs, where <i>key</i> is the id of a tree item and <i>value</i> is its state

@example:
// getting the state of a tree
var treeState = tree.getState();

// restoring the state of a tree
tree.setState(treeState);

@descr:

**Related sample**: [Tree. Setting Tree State](https://snippet.dhtmlx.com/g0539az1)

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
