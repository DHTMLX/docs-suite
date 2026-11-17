---
sidebar_label: Data loading
title: JavaScript Tree - Data Loading 
description: You can explore the data loading of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Data loading

You can load data into DHTMLX Tree in two ways:

- During Tree initialization
- After Tree initialization

Both ways start from a prepared data set.

## Preparing data set

DHTMLX Tree expects loaded data in the JSON format. 

:::info
If you specify `id` fields in the tree collection, their values must be **unique**. You can also omit these fields. In this case Tree generates the values automatically.
:::

Here is an example of an appropriate data set:

~~~jsx
const dataset = [
    {
        "value": "Books",
        "id": "Books",
        "opened": true,
        "items": [
            {
                "value": "Thrillers",
                "id": "Thrillers",
                "opened": true,
                "items": [
                    {
                        "value": "Bestsellers",
                        "id": "Bestsellers",
                        "items": [
                            {
                                "value": "Lawrence Block",
                                "id": "Lawrence Block",
                            }
                        ]
                    },
                    {
                        "value": "Robert Crais",
                        "id": "Robert Crais",
                    },
                    {
                        "value": "Ian Rankin",
                        "id": "Ian Rankin",
                    },
                    {
                        "value": "James Johns",
                        "id": "James Johns",
                        "checked": true,
                    },
                    {
                        "value": "Nancy Atherton",
                        "id": "Nancy Atherton",
                        "checked": true
                    }
                ]
            },            
            {
                "value": "Fiction & Fantasy",
                "id": "Fiction & Fantasy",
                "items": [
                    {
                        "value": "Audrey Niffenegger",
                        "id": "Audrey Niffenegger"
                    },
                    {
                        "value": "Philip Roth",
                        "id": "Philip Roth"
                    }
                ]
            },
        ]
    },
];

const tree = new dhx.Tree("tree", {
    checkbox: true,
});

tree.data.parse(dataset);
~~~

Each object in the data set configures a tree item. An item object can include the following properties:

<table>
    <tbody>
        <tr>
            <td><b>value</b></td>
            <td>(<i>string</i>) the name of an item</td>
        </tr>
        <tr>
            <td><b>id</b></td>
            <td>(<i>string | number</i>) the id of an item</td>
        </tr>
        <tr>
            <td><b>opened</b></td>
            <td>(<i>boolean</i>) optional, defines whether an item is initially open</td>
        </tr>
        <tr>
            <td><b>checkbox</b></td>
            <td>(<i>boolean</i>) optional, shows or hides the checkbox of a tree item</td>
        </tr>
        <tr>
            <td><b>checked</b></td>
            <td>(<i>boolean</i>) optional, checks or unchecks the checkbox of a tree item; works when the <code>checkbox</code> property is <code>true</code></td>
        </tr>
        <tr>
            <td><b>items</b></td>
            <td>(<i>array</i>) an array of nested items</td>
        </tr>
        <tr>
            <td><b>icon</b></td>
            <td>(<i>object</i>) adds <a href="../api/tree_icon_config/">custom icons</a> to a tree item</td>
        </tr>
    </tbody>
</table>

## Loading data on initialization

You can load a [predefined data set](#preparing-data-set) into Tree during initialization. Use the [`data`](tree/api/tree_data_config.md) configuration property:

~~~jsx
const tree = new dhx.Tree("tree_container", {
    data: dataset
});
~~~

**Related sample**: [Tree. Initialization with config.data](https://snippet.dhtmlx.com/r49y51k3)

## Loading data after initialization

You can load data into Tree after initialization in two ways:

- [From a local data source](#loading-from-local-source)
- [From an external file](#external-data-loading)

### Loading from a local source {#loading-from-local-source}

The `parse()` method of TreeCollection loads data into a tree from an array. Pass [a predefined data set](#preparing-data-set) to this method:

~~~jsx
const tree = new dhx.Tree("tree_container");
tree.data.parse(dataset);
~~~

**Related sample**: [Tree. Initialization with data.parse()](https://snippet.dhtmlx.com/orm283hq)

### Loading from an external file {#external-data-loading}

The `load()` method of TreeCollection loads tree data from an external file. The method takes the URL of the data file as a parameter:

~~~jsx
const tree = new dhx.Tree("tree_container");
tree.data.load("../common/dataset.json");
~~~

**Related sample**: [Tree. Initialization with data.load()](https://snippet.dhtmlx.com/oz4jd5hc)

The component makes an AJAX call and expects the remote URL to return valid JSON data.

Tree loads data asynchronously, so place the code that depends on the loaded data into the `then()` callback:

~~~jsx
tree.data.load("/some/data").then(function(){
   // some logic here
});
~~~


## Saving and restoring state

The `serialize()` method of TreeCollection saves the current state of a tree. The method converts tree data into an array of JSON objects. Each JSON object contains the configuration of a tree item.

~~~jsx
const state = tree1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different tree. For example:

~~~jsx
// creating a new Tree
const tree2 = new dhx.Tree("tree_container2");
// parsing the state of tree1 into tree2
tree2.data.parse(state);
~~~
