---
sidebar_label: Work with Tree
title: Work with Tree
---          

Working with checkboxes
-------------------



You can [enable checkbox for tree items](tree/configuration.md#checkboxes-for-items) with the [](tree/api/tree_checkbox_config.md) configuration option. Then you can manipulate items with checkboxes with the help of Tree API.


### Check/uncheck checkboxes

To check the checkbox of a particular tree item, apply the [](tree/api/tree_checkitem_method.md) method. It takes the id of an item as a parameter:

~~~js
tree.checkItem("history");
~~~

The [](tree/api/tree_uncheckitemnew_method.md) method will uncheck a tree item by its id together with its sub-items. 

~~~js
tree.uncheckItem("history");
~~~

**Related sample**: [Tree. Check/Uncheck Item](https://snippet.dhtmlx.com/uzz6uknx)

### Get checked checkboxes

There is a possibility to get the list of all checked items in a tree with the [](tree/api/tree_getchecked_method.md) method. It returns an array of ids of checked items, e.g.:

~~~js
tree.getChecked(); // -> ["jmf", "rle", "sk", "km", "af", "jw"]
~~~

**Related sample**: [Tree. Get Checked Items](https://snippet.dhtmlx.com/cz7xypgz)

Expanding/collapsing items
------------------

### Expand/collapse a certain item

To expand a particular folder in a tree by its id, use the [](tree/api/tree_expand_method.md) method:

~~~js
tree.expand("history");
~~~

To collapse a tree item, make use of the [](tree/api/tree_collapse_method.md) method:

~~~js
tree.collapse("history");
~~~

**Related sample**: [Tree. Expand Item](https://snippet.dhtmlx.com/esxb15hm)


You can also alternately expand/collapse a tree item (folder) via the [](tree/api/tree_toggle_method.md) method:

~~~js
tree.toggle("history");
~~~

**Related sample**: [Tree. Toggle Item](https://snippet.dhtmlx.com/qjk56co2)

### Expand/collapse all items

It is also possible to expand/collapse all Tree items using the two corresponding methods - [](tree/api/tree_expandall_method.md) and [](tree/api/tree_collapseall_method.md):

~~~js
// expand all tree items
tree.expandAll();
// collapse all tree items
tree.collapseAll();
~~~

**Related sample**: [Tree. Expand All Items](https://snippet.dhtmlx.com/c0nqyz60)

Editing an item
-------------------

There is the [](tree/api/tree_edititem_method.md) method that allows editing a certain tree item. Pass the id of an item to the method to initiate editing:

~~~js
tree.editItem(id);
~~~

**Related sample**: [Tree. Edit Item](https://snippet.dhtmlx.com/jaqx0rb4)

The method can also take a second parameter to configure the editing process. It may include two properties:

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

Setting/getting Tree state
-------------------

You can get/set the state of a tree using the Tree API - [](tree/api/tree_setstate_method.md) and [](tree/api/tree_getstate_method.md). **getState()** returns an object with the state of a tree, while **setState()** takes an
object with tree state as a parameter:

~~~js
// getting the state of a tree
var treeState = tree.getState();
 
// restoring the state of a tree
tree.setState(treeState);
~~~

**Related sample**: [Tree. Getting Tree State](https://snippet.dhtmlx.com/xo6y6xi6)

**Related sample**: [Tree. Setting Tree State](https://snippet.dhtmlx.com/g0539az1)

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

	"bsthrillers": {
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

Using Tree Collection API
---------------------------

You can manipulate Tree items with the help of the [Tree collection API](tree_collection/index.md).

### Adding items into Tree

It is possible to add more items into the initialized Tree on the fly. Use the **add()** method of Tree Collection. It takes three parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>config</b></td>
			<td>(<i>object</i>) the configuration object of the added item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>index</b></td>
			<td>(<i>number</i>) optional, the position to add an item at</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>parent</b></td>
			<td>(<i>string</i>) the ID of the future parent item</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
tree.data.add({"value": "Life"}, -1, "Magazines");
~~~

**Related sample**: [Tree. Adding Data](https://snippet.dhtmlx.com/hugcdfo9)

### Updating Tree items

You can change config options of the item via the **update()** method of Tree Collection. It takes two parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>the id of the item</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>config</b></td>
			<td>an object with new configuration of the item</td>
		</tr>
    </tbody>
</table>

For example, you can change the value of an item:

~~~js
tree.data.update("item_id", {value: "New value"});
~~~

**Related sample**: [Tree. Data Update](https://snippet.dhtmlx.com/e0vgry6n)

### Removing items from Tree 

To remove an item, make use of the **remove()** method of Tree Collection. Pass the id of the item that should be removed to the method:

~~~js
tree.data.remove("id");
~~~

**Related sample**: [Tree. Delete Data](https://snippet.dhtmlx.com/efy72vz8)


{{note Check the full list of [Tree collection API](tree_collection/index.md).}}


