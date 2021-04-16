---
sidebar_label: Data Loading
title: Data Loading
---          

There are several simple ways of loading data into dhtmlxTree:

- load data from an external file
- load data from a local data source

First, you need to prepare a data set that will be loaded into Tree.

Preparing data set
-------------------

dhtmlxTree expects loaded data in the JSON format. Here is an example of an appropriate data set:

~~~js
var dataset = [
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

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>value</b></td>
			<td>(<i>string</i>) the name of an item</td>
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
			<td>(<i>array</i>) an array of nested items</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>icon</b></td>
			<td>(<i>object</i>) allows adding <a href="https://docs.dhtmlx.com/suite/tree__api__tree_icon_config.html">custom icons</a> for a tree item</td>
		</tr>
    </tbody>
</table>


External data loading
--------------------

To load data from an external file, make use of the **load** method of Tree Collection. It takes the URL of the file with data as a parameter:

~~~js
var tree = new dhx.Tree("tree_container");
tree.data.load("../common/dataset.json");
~~~

{{editor	https://snippet.dhtmlx.com/oz4jd5hc	Tree. Basic Initialization}}

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
tree.data.load("/some/data").then(function(){
   // some logic here
});
~~~


Loading from local source
------------------

To load data from a local data source, use the **parse** method of Tree Collection. Pass [a predefined data set](#preparingdataset) as a parameter of this method:

~~~js
var tree = new dhx.Tree("tree_container");
tree.data.parse(dataset);
~~~

{{editor	https://snippet.dhtmlx.com/oz4jd5hc	Tree. Basic Initialization}}

Saving and restoring state
----------------------------

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

