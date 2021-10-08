---
sidebar_label: data
title: JavaScript Tree - data Config 
description: You can explore the data config of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# data

@short: sets a dataset for a tree

@signature: {'data?: array;'}

@example:
var data = new dhx.TreeCollection();
data.load("../common/treedata.json");
var tree = new dhx.Tree("tree", {data: data});

@descr:

**Related samples**:
- [Tree. Config Data](https://snippet.dhtmlx.com/r49y51k3)
- [Tree. Init With External Data](https://snippet.dhtmlx.com/osjo7t0h)

Each **data** object can have the following properties:

<table>
	<tbody>
        <tr>
			<td><b>value</b></td>
			<td>(<i>string</i>) the value of an item</td>
		</tr>
		<tr>
			<td><b>id</b></td>
			<td>(<i>string, number</i>) the id of an item</td>
		</tr>
		<tr>
			<td><b>opened</b></td>
			<td>(<i>boolean</i>) optional, defines whether an item is opened by default</td>
		</tr>
		<tr>
			<td><b>checkbox</b></td>
			<td>(<i>boolean</i>) optional, enables/disables displaying a checkbox for a tree item</td>
		</tr>
		<tr>
			<td><b>items</b></td>
			<td>(<i>array</i>) an array of children items</td>
		</tr>
		<tr>
			<td><b>icon</b></td>
			<td>(<i>object</i>) allows adding <a href="../../api/tree_icon_config">custom icons</a> for a tree item <br/> <b>Related sample:</b> <a href="https://snippet.dhtmlx.com/h7mlx21q">Tree. Custom Dataset Icons</a></td>
		</tr>
    </tbody>
</table>

~~~js
var tree = new dhx.Tree("tree", {
    data:[
        {
            "value": "Books",
            "id": "Books",
            "opened": true,
            "checkbox": true,
            "items": [
                {
                    "value": "Thrillers",
                    "id": "Thrillers",
                    "icon": { 
						"folder": "fas fa-book", 
						"openFolder": "fas fa-book-open", 
						"file": "fas fa-file"
					}
                }
            ]
        }
    ]
});
~~~

You can disable displaying a checkbox for a tree item via the [update](tree_collection/api/treecollection_update_method.md) method of tree collection.

~~~js
tree.data.update("Books", {checkbox:false});
~~~

- **parent** - (*string*) the id of the parent of a tree item

For example, you can get the parent of an item using the [getItem](tree_collection/api/treecollection_getitem_method.md) method of tree collection.

~~~js
tree.data.getItem("Thrillers").parent
// "Books"

tree.data.getItem("Books").parent
// "_ROOT_u1574768464563"
~~~

[comment]: # (@related: tree/initialization_of_dhtmlxtree.md#initialize-tree tree/loading_data.md#preparing-data-set)
