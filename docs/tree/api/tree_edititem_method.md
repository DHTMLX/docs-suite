---
sidebar_label: editItem
title: editItem
---          

@short: edits a Tree item

@signature:     editItem(id: string, config: object): void;

@params:
- id		string		the id of an item
- config	object		optional, the config object of an editor

@example:
tree.editItem(id);


@template: api_method
@descr:
The **config** parameter includes the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>mode</b></td>
			<td>(<i>string</i>) the type of an editor:
				<ul><li>"text" for an input</li>
				<li>"select" for a select</li></ul>
			</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>options</b></td>
			<td>(<i>array</i>) optional, an array of additional options</td>
		</tr>
    </tbody>
</table>


@related: tree/work_with_tree.md#editinganitem

@relatedapi: tree/api/tree_editable_config.md

@changelog:

@relatedsample: https://snippet.dhtmlx.com/jaqx0rb4	Tree. Edit Item


