---
sidebar_label: editItem()
title: JavaScript Tree - editItem Method 
description: You can explore the editItem method of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# editItem()

@short: edits a Tree item

@signature: {'editItem(id: Id, config: IEditorConfig): void;'}

@params:
- `id: string | number` - the id of an item
- `config: object` - optional, the config object of an editor

@example:
tree.events.on("itemDblClick", function (id) {
    tree.editItem(id);
});

@descr:

The **config** parameter includes the following properties:

<table>
	<tbody>
        <tr>
			<td><b>mode</b></td>
			<td>(<i>string</i>) the type of an editor:
				<ul><li>"text" (by default) for an input</li>
				<li>"select" for a select</li></ul>
			</td>
		</tr>
		<tr>
			<td><b>options</b></td>
			<td>(<i>array</i>) optional, an array of additional options<br> This property works only with <i>mode: "select"</i></td>
		</tr>
    </tbody>
</table>
<br>

For instance:

~~~js
tree.events.on("itemDblClick", function (id) {
    tree.editItem(id,{ mode: "select", options: [1, 2, 3, 4, 5] });
});
~~~

[comment]: # (@related: tree/work_with_tree.md#editing-an-item)

[comment]: # (@relatedapi: tree/api/tree_editable_config.md)
