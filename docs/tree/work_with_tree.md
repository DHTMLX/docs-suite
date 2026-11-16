---
sidebar_label: Work with Tree
title: JavaScript Tree - Work with Tree 
description: You can explore how to work with Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Tree

## Work with checkboxes {#working-with-checkboxes}

You can [enable checkboxes for tree items](tree/configuration.md#checkboxes-for-items) with the [](tree/api/tree_checkbox_config.md) configuration option. Then you can manage the checkboxes with the Tree API.

### Check and uncheck checkboxes {#checkuncheck-checkboxes}

The [](tree/api/tree_checkitem_method.md) method checks the checkbox of a tree item. The method takes the id of the item as a parameter:

~~~js
tree.checkItem("history");
~~~

The [](tree/api/tree_uncheckitemnew_method.md) method unchecks a tree item and its sub-items by the item id:

~~~js
tree.uncheckItem("history");
~~~

**Related sample**: [Tree. Check / uncheck Item](https://snippet.dhtmlx.com/uzz6uknx)

### Get checked checkboxes

The [](tree/api/tree_getchecked_method.md) method returns an array with the ids of all checked items in a tree, for example:

~~~js
tree.getChecked(); // -> ["jmf", "rle", "sk", "km", "af", "jw"]
~~~

**Related sample**: [Tree. Get checked items](https://snippet.dhtmlx.com/cz7xypgz)

## Expand and collapse items {#expandingcollapsing-items}

### Expand and collapse an item {#expandcollapse-a-certain-item}

The [](tree/api/tree_expand_method.md) method expands a folder by its id:

~~~js
tree.expand("history");
~~~

The [](tree/api/tree_collapse_method.md) method collapses a tree item:

~~~js
tree.collapse("history");
~~~

**Related sample**: [Tree. Expand item](https://snippet.dhtmlx.com/esxb15hm)

The [](tree/api/tree_toggle_method.md) method expands a collapsed folder and collapses an expanded one:

~~~js
tree.toggle("history");
~~~

**Related sample**: [Tree. Toggle item](https://snippet.dhtmlx.com/qjk56co2)

### Expand and collapse all items {#expandcollapse-all-items}

The [](tree/api/tree_expandall_method.md) and [](tree/api/tree_collapseall_method.md) methods expand and collapse all Tree items:

~~~js
// expand all tree items
tree.expandAll();
// collapse all tree items
tree.collapseAll();
~~~

**Related sample**: [Tree. Expand all items](https://snippet.dhtmlx.com/c0nqyz60)

## Edit an item {#editing-an-item}

The [](tree/api/tree_edititem_method.md) method starts editing a tree item. Pass the id of the item to the method:

~~~js
tree.editItem(id);
~~~

The method can also take a second parameter that configures the editor. This parameter is an object that can include two properties:

<table>
    <tbody>
        <tr>
            <td><b>mode</b></td>
            <td>(<i>string</i>) the type of an editor:<ul><li><code>"text"</code> (default) for an input</li><li><code>"select"</code> for a select</li></ul></td>
        </tr>
        <tr>
            <td><b>options</b></td>
            <td>(<i>array</i>) optional, an array of additional options<br> This property works only with <code>mode: "select"</code></td>
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

## Set and get Tree state {#settinggetting-tree-state}

The [](tree/api/tree_getstate_method.md) method returns an object with the state of a tree. The [](tree/api/tree_setstate_method.md) method takes this object as a parameter and restores the tree state:

~~~js
// getting the state of a tree
const treeState = tree.getState();
 
// restoring the state of a tree
tree.setState(treeState);
~~~

**Related sample**: [Tree. Getting Tree state](https://snippet.dhtmlx.com/xo6y6xi6)

**Related sample**: [Tree. Setting Tree state](https://snippet.dhtmlx.com/g0539az1)

The `treeState` object contains `key:value` pairs, where `key` is the id of a tree item and `value` is its state. The state object of a tree item includes two properties:

<table>
    <tbody>
        <tr>
            <td><b>selected</b></td>
            <td>(<i>number</i>) the status of a checkbox of an item:<ul><li>0 - unselected </li><li>1 - selected  </li><li>2 - indeterminate (for a parent item if only some of its children are checked) </li></ul></td>
        </tr>
        <tr>
            <td><b>open</b></td>
            <td>(<i>boolean</i>) defines whether a tree item is open (for folders with items)</td>
        </tr>
    </tbody>
</table>

Here is an example of a `treeState` object:

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

## Use the TreeCollection API {#using-tree-collection-api}

You can manipulate Tree items with the [TreeCollection API](/tree_collection/).

### Add items to Tree {#adding-items-into-tree}

Use the `add()` method of TreeCollection to add items to an initialized tree. The method takes three parameters:

<table>
    <tbody>
        <tr>
            <td><b>config</b></td>
            <td>(<i>object</i>) the configuration object of the added item</td>
        </tr>
        <tr>
            <td><b>index</b></td>
            <td>(<i>number</i>) optional, the position to add an item at</td>
        </tr>
        <tr>
            <td><b>parent</b></td>
            <td>(<i>string</i>) the ID of the future parent item</td>
        </tr>
    </tbody>
</table>
<br/>

~~~js
tree.data.add({"value": "Life"}, -1, "Magazines");
~~~

**Related sample**: [Tree. Adding and removing items](https://snippet.dhtmlx.com/k0os4lk2)

### Update Tree items {#updating-tree-items}

The `update()` method of TreeCollection changes the configuration options of an item. The method takes two parameters:

<table>
    <tbody>
        <tr>
            <td><b>id</b></td>
            <td>the id of the item</td>
        </tr>
        <tr>
            <td><b>config</b></td>
            <td>an object with the new configuration of the item</td>
        </tr>
    </tbody>
</table>

For example, you can change the value of an item:

~~~js
tree.data.update("item_id", {value: "New value"});
~~~

You can also hide the checkbox of a tree item:

~~~js
tree.data.update("Books", {checkbox:false});
~~~

### Get the parent of an item {#getting-parent-of-item}

The [`getItem()`](tree_collection/api/treecollection_getitem_method.md) method of TreeCollection returns an item object. Its `parent` property contains the id of the parent item:

~~~js
tree.data.getItem("Thrillers").parent
// "Books"

tree.data.getItem("Books").parent
// "_ROOT_u1574768464563"
~~~

where

- `parent` — (`string`) the id of the parent of a tree item

**Related sample**: [Tree. Data update](https://snippet.dhtmlx.com/e0vgry6n)

### Remove items from Tree {#removing-items-from-tree}

The `remove()` method of TreeCollection removes an item. Pass the id of the item to the method:

~~~js
tree.data.remove("id");
~~~

**Related sample**: [Tree. Adding and removing items](https://snippet.dhtmlx.com/k0os4lk2)

:::note
Check the full list of [TreeCollection API](/tree_collection/) methods.
:::
