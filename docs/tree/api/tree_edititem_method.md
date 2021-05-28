---
sidebar_label: editItem()
title: JavaScript Tree - editItem Method 
hide_title: true
description: You can explore the editItem method of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# editItem()

@short: edits a Tree item

@signature: {'editItem(id: Id, config: IEditorConfig): void;'}

@params:
- `id: string` - the id of an item
- `config: object` - optional, the config object of an editor

@example:
tree.editItem(id);

@descr:

**Related sample**: [Tree. Edit Item](https://snippet.dhtmlx.com/jaqx0rb4)

The **config** parameter includes the following properties:

<table>
	<tbody>
        <tr>
			<td><b>mode</b></td>
			<td>(<i>string</i>) the type of an editor:
				<ul><li>"text" for an input</li>
				<li>"select" for a select</li></ul>
			</td>
		</tr>
		<tr>
			<td><b>options</b></td>
			<td>(<i>array</i>) optional, an array of additional options</td>
		</tr>
    </tbody>
</table>

[comment]: # (@related: tree/work_with_tree.md#editing-an-item)

[comment]: # (@relatedapi: tree/api/tree_editable_config.md)
