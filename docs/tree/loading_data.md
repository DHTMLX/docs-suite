---
sidebar_label: Data loading
title: JavaScript Tree - Data Loading 
description: You can explore the data loading of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Data loading

There are several simple ways of loading data into dhtmlxTree:

- on initialization of Tree
- after initialization of Tree

First, you need to prepare a data set that will be loaded into Tree.

## Preparing data set

dhtmlxTree expects loaded data in the JSON format. Here is an example of an appropriate data set:

~~~js
const dataset = [
    {
		"value": "Books",
		"id": "books",
		"opened": true,
		"items": [			
			{
				"value": "History",
				"id": "history",
				"items": [{
					"value": "John Mack Faragher",
					"id": "jmf",
                	"icon": {
                        "folder": "fas fa-book",
                        "openFolder": "fas fa-book-open",
                        "file": "fas fa-file"
                    }
				},
				{
					"value": "Jim Dwyer",
					"id": "jd"
				},
				{
					"value": "Larry Schweikart",
					"id": "ls"
				}]
			},
			{
				"value": "Fiction & Fantasy",
				"id": "fantasy",
				"items": [{
					"value": "Audrey Niffenegger",
					"id": "af"
				},
				{
					"value": "Philip Roth",
					"id": "pr"
				}]
			},
			{
				"value": "Teens",
				"id": "teens",
				"items": [{
					"value": "Joss Whedon",
					"id": "jw"
				},
				{
					"value": "Meg Cabot",
					"id": "mc"
				},
				{
					"value": "Garth Nix",
					"id": "gn"
				}]
			}
		]
	}
];
~~~

Each object in the data set contains configuration of a tree item. The structure of an item is rather flexible. It may include:

<table>
	<tbody>
        <tr>
			<td><b>value</b></td>
			<td>(<i>string</i>) the name of an item</td>
		</tr>
		<tr>
			<td><b>id</b></td>
			<td>(<i>string</i>) the id of an item</td>
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
			<td>(<i>array</i>) an array of nested items</td>
		</tr>
		<tr>
			<td><b>icon</b></td>
			<td>(<i>object</i>) allows adding <a href="../api/tree_icon_config">custom icons</a> for a tree item</td>
		</tr>
    </tbody>
</table>

## Loading data on initialization

You can load a [predefined data set](#preparing-data-set) into Tree on the initialization stage. Use the [data](tree/api/tree_data_config.md) configuration property, as in:

~~~js
const tree = new dhx.Tree("tree_container", {
  	data: dataset
});
~~~

**Related sample**: [Tree. Initialization with config.data](https://snippet.dhtmlx.com/r49y51k3)

## Loading data after initialization

There are two ways to load data into Sidebar after its initialization:

- [from a local data source](#loading-from-local-source)
- [from an external file](#external-data-loading)

### Loading from local source

To load data from a local data source, use the **parse** method of Tree Collection. Pass [a predefined data set](#preparing-data-set) as a parameter of this method:

~~~js
var tree = new dhx.Tree("tree_container");
tree.data.parse(dataset);
~~~

**Related sample**: [Tree. Initialization with data.parse()](https://snippet.dhtmlx.com/orm283hq)

### External data loading

To load data from an external file, make use of the **load** method of Tree Collection. It takes the URL of the file with data as a parameter:

~~~js
var tree = new dhx.Tree("tree_container");
tree.data.load("../common/dataset.json");
~~~

**Related sample**: [Tree. Initialization with data.load()](https://snippet.dhtmlx.com/oz4jd5hc)

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
tree.data.load("/some/data").then(function(){
   // some logic here
});
~~~


## Saving and restoring state

To save the current state of a tree, use the **serialize** method of Tree Collection. It converts the data of a tree into an array of JSON objects. 
Each JSON object contains the configuration of a separate row.

~~~js
var state = tree1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different tree. For example:

~~~js
// creating a new Tree
var tree2 = new dhx.Tree(document.body);
// parsing the state of tree1 into tree2
tree2.data.parse(state);
~~~
