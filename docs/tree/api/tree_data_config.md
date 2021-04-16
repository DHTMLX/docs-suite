---
sidebar_label: data
title: data
description: description
---          

@short: sets a dataset for a tree

@signature: data?: array;

@example: 
var data = new dhx.TreeCollection();
data.load("../common/treedata.json");
var tree = new dhx.Tree("tree", {data: data});

@template:	api_config
@descr: 
Each **data** object can have the following properties:

``` todo
<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>value</b></td>
			<td>(<i>string</i>) the value of an item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of an item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>opened</b></td>
			<td>(<i>boolean</i>) optional, defines whether an item is opened by default</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>checkbox</b></td>
			<td>(<i>boolean</i>) optional, enables/disables displaying a checkbox for a tree item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>items</b></td>
			<td>(<i>array</i>) an array of children items</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>icon</b></td>
			<td>(<i>object</i>) allows adding <a href="https://docs.dhtmlx.com/suite/tree__api__tree_icon_config.html">custom icons</a> for a tree item <br/> <b>Related sample:</b> <a href="https://snippet.dhtmlx.com/h7mlx21q">Tree. Custom Dataset Icons</a></td>
		</tr>
    </tbody>
</table>
``` 
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

You can disable displaying a checkbox for a tree item via the [update](tree_collection/api/update.md) method of tree collection.

~~~js
tree.data.update("Books", {checkbox:false});
~~~

- **parent** - (*string*) the id of the parent of a tree item

For example, you can get the parent of an item using the [getItem](tree_collection/api/getitem.md) method of tree collection.

~~~js
tree.data.getItem("Thrillers").parent
// "Books"

tree.data.getItem("Books").parent
// "_ROOT_u1574768464563"
~~~

@related: tree/initialization_of_dhtmlxtree.md#initializetree
tree/loading_data.md#preparingdataset

@relatedsample: 
https://snippet.dhtmlx.com/r49y51k3	Tree. Config Data
https://snippet.dhtmlx.com/osjo7t0h	Tree. Init With External Data

