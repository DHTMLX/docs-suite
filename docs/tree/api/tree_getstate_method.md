---
sidebar_label: getState
title: getState
---          

@short: gets the state of a tree

@signature: getState(): object;

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


@template: api_method
@descr:
The **treeState** object contains *key:value* pairs, where *key* is the id of a tree item and *value* is its state. The state object of a tree item includes two properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>selected</b></td>
			<td>(<i>number</i>) the status of a checkbox of an item: 
				<ul>
					<li>0 - unselected </li>
					<li>1 - selected  </li>
					<li>indeterminate (for the parent item, in case its children are partially checked) </li>
				</ul>
			</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>open</b></td>
			<td>(<i>boolean</i>) checks whether a tree item is open (for folders with items)</td>
		</tr>
    </tbody>
</table>



@relatedapi:
tree/api/tree_setstate_method.md

@relatedsample: https://snippet.dhtmlx.com/xo6y6xi6	Tree. Getting Tree State

@changelog:

@related: tree/work_with_tree.md#settinggettingtreestate


