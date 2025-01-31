---
sidebar_label: TreeGrid mode
title: JavaScript Grid - TreeGrid mode 
description: You can explore how to work with Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# TreeGrid mode

:::tip pro version only
The TreeGrid mode of the Grid component is available in the **PRO** version only.
:::

TreeGrid mode of the Grid component allows showing the nested tabular data. 

![](../assets/treegrid/treegrid_front.png)

## Initialization

To initialize Grid in the TreeGrid mode, make use of the [`type: "tree"`](grid/api/grid_type_config.md) configuration option.

~~~jsx {2} title="index.js"
const Grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
        { id: "name", header: [{ text: "Name" }], gravity: 1.5 },
        { id: "native", type: "string", header: [{ text: "Native name" }], gravity: 1.5 },
        { id: "capital", type: "string", header: [{ text: "Capital" }] },
        { id: "currency", type: "string", header: [{ text: "Currency" }] }
    ],
    data: dataset,
    autoWidth: true
});
~~~

## Configuration 

Grid in the TreeGrid mode uses all the same configuration options available in the [API of the default Grid](grid/configuration.md).

There is also a set of properties you can provide for Grid in the TreeGrid mode to optimize its configuration for your needs. 

### Collapsed mode 

To initialize Grid in the TreeGrid mode in the collapsed state, use the [collapsed](grid/api/treegrid_mode/grid_collapsed_config.md) property:

~~~jsx {7}
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [  
        // columns config
    ],  
    data: dataset,
    collapsed: true
});
~~~

**Related sample**: [Grid (TreeGrid). Collapsed mode](https://snippet.dhtmlx.com/t4iswa2y)

### Expanding collapsed rows on drag-n-drop 

If you have collapsed rows in your Grid in the TreeGrid mode, they will expand automatically when you move the mouse pointer over them during drag-n-drop. To disable this functionality, set the [dragExpand](grid/api/treegrid_mode/grid_dragexpand_config.md) property to *false*:

~~~jsx {7}
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
        // columns config
    ],
    dragItem: "row",
    dragExpand: false,
    data: dataset
});
~~~

**Related sample:** [Grid (TreeGrid). Multiselection and drag-n-drop](https://snippet.dhtmlx.com/hwddi1ki)

### Defining the id of the root parent 

To define the id of the root parent, use the [rootParent](grid/api/treegrid_mode/grid_rootparent_config.md) configuration property:

~~~jsx {3}
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    rootParent: "root", 
    columns: [
        { width: 340, id: "name", header: [{ text: "Name" }] },
        { width: 340, id: "native", type: "string", header: [{ text: "Native name" }] },
        { width: 260, id: "capital", type: "string", header: [{ text: "Capital" }] },
        { width: 260, id: "currency", type: "string", header: [{ text: "Currency" }] }
    ],
    data: dataset
});
~~~

When Grid is initialized in the TreeGrid mode, the root parent takes the id of the Grid container by default. If the id of the container is set to `null` or defined as an HTML element, the value of the root parent will be auto-generated.

## Data loading

There are several simple ways of loading data into Grid in the TreeGrid mode:

- [on initialization of Grid](#loading-data-on-grid-initialization)
- [after initialization of Grid](#loading-data-after-initialization)

First, you need to prepare a data set that will be loaded into Grid in the TreeGrid mode.

### Preparing data set

Grid in the TreeGrid mode expects loaded data in the JSON format. 

:::info
Please note that if you specify the `id` fields in the tree collection, their values should be **unique**. You can also omit the `id` fields in the tree collection. In this case they will be generated automatically.
:::

Here is an example of an appropriate data set:

~~~jsx
const dataset = [
    {
        "id": 0,
        "a": 1,
        "b": "Linwood Long long long",
        "c": "Petersen",
        "d": "Dahlgreen Place"
    },
    {
        "id": 1,
        "parent": 0,
        "a": 2,
        "b": "Edenburg",
        "c": "Agnes",
        "d": "Gem Street"
    },
    // more columns
];
~~~

Each object in the data set contains configuration of a grid row. The structure of a row is rather flexible. It may include:

<table>
    <tbody>
        <tr>
            <td><b>rowId</b></td>
            <td>(<i>string | number</i>) optional, the id of a row. In case you haven't specified ids of rows, they will be auto-generated</td>
        </tr>
        <tr>
            <td><b>parent</b></td>
            <td>(<i>string | number</i>) the ID of the parent row</td>
        </tr>
        <tr>
            <td><b>columnContent</b></td>
            <td>(<i>string | number</i>) content of a column as <i>key:value</i> pairs, where key is the id of a column and value is any content you want to add into the column</td>
        </tr>
    </tbody>
</table>

### Loading data on Grid initialization

You can specify data you want to load into Grid in the TreeGrid mode on the initialization stage. Make use of the [`data`](grid/api/grid_data_config.md) configuration property, as in:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
        // columns config
    ],
    data: dataset
});
~~~

**Related sample**: [Grid (TreeGrid). Initialization with config.data](https://snippet.dhtmlx.com/kob9385v)

### Loading data after initialization

There are two ways to load data into Grid in the TreeGrid mode after its initialization:

- [from a local data source](#loading-from-local-source)
- [from an external file](#external-data-loading)

#### Loading from local source

To load data from a local data source, use the [`parse()`](tree_collection/api/treecollection_parse_method.md) method of Tree Collection. Pass [a predefined data set](#preparing-data-set) as a parameter of this method:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
        // columns config
    ]
});
grid.data.parse(dataset);
~~~

**Related sample**: [Grid (TreeGrid). Initialization with data.parse()](https://snippet.dhtmlx.com/jc8gn40c)

#### External data loading

To load data from an external file, make use of the [`load()`](tree_collection/api/treecollection_load_method.md) method of Tree Collection. It takes the URL of the file with data as a parameter:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
        // columns config
    ]
});
grid.data.load("../common/dataset.json");
~~~

**Related sample**: [Grid (TreeGrid). Initialization with data.load()](https://snippet.dhtmlx.com/44rmxlmq)

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~jsx
grid.data.load("/some/data").then(function(){
   // some logic here
});
~~~

## Work with Grid in the TreeGrid mode 

While working with Grid in the TreeGrid mode, you can use the [API methods of DHTMLX Grid](/category/grid-methods/) which allow setting configuration of columns, getting an object of a particular column as well as the parameters of a certain cell. Besides, there are some methods specific for the TreeGrid mode of Grid. These are the methods for expanding/collapsing nodes.

### Expanding/collapsing nodes

#### Expanding/collapsing a certain node

To expand a particular node in a Grid in the TreeGrid mode by its id, use the [`expand()`](grid/api/treegrid_mode/grid_expand_method.md) method:

~~~jsx {5,13}
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
        { id: "name", header: [{ text: "Name" }], gravity: 1.5 },
        { id: "native", type: "string", header: [{ text: "Native name" }] },
        { id: "capital", type: "string", header: [{ text: "Capital" }] },
        { id: "currency", type: "string", header: [{ text: "Currency" }] }
    ],
    data: dataset,
    autoWidth: true
});

grid.expand("native");
~~~

To collapse a grid node, make use of the [`collapse()`](grid/api/treegrid_mode/grid_collapse_method.md) method:

~~~jsx {5,13}
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
        { id: "name", header: [{ text: "Name" }], gravity: 1.5 },
        { id: "native", type: "string", header: [{ text: "Native name" }] },
        { id: "capital", type: "string", header: [{ text: "Capital" }] },
        { id: "currency", type: "string", header: [{ text: "Currency" }] }
    ],
    data: dataset,
    autoWidth: true
});

grid.collapse("native");
~~~

**Related sample**: [Grid (TreeGrid). Expand / collapse rows](https://snippet.dhtmlx.com/1grpsaa2)

#### Expanding/collapsing all nodes

It is also possible to expand/collapse all the nodes of the Grid in the TreeGrid mode using the two corresponding methods - [`expandAll()`](grid/api/treegrid_mode/grid_expandall_method.md) and [`collapseAll()`](grid/api/treegrid_mode/grid_collapseall_method.md):

~~~jsx {14,16}
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
        { id: "name", header: [{ text: "Name" }], gravity: 1.5 },
        { id: "native", type: "string", header: [{ text: "Native name" }] },
        { id: "capital", type: "string", header: [{ text: "Capital" }] },
        { id: "currency", type: "string", header: [{ text: "Currency" }] }
    ],
    data: dataset,
    autoWidth: true
});

// expanding all the nodes
grid.expandAll();
// collapsing all the nodes
grid.collapseAll();
~~~

**Related sample**: [Grid (TreeGrid). Expand / collapse rows](https://snippet.dhtmlx.com/1grpsaa2)

## Event handling 

When you work with Grid in the TreeGrid mode, you can use the [API Events of DHTMLX Grid](/category/grid-events/). There is also a set of events specific for the TreeGrid mode of Grid that allow handling collapsing and expanding of nodes:

| Name                                                    | Description                                                   |
| ------------------------------------------------------- | ------------------------------------------------------------- |
| [](grid/api/treegrid_mode/grid_aftercollapse_event.md)  | @getshort(grid/api/treegrid_mode/grid_aftercollapse_event.md) |
| [](grid/api/treegrid_mode/grid_afterexpand_event.md)    | @getshort(grid/api/treegrid_mode/grid_afterexpand_event.md)   |
| [](grid/api/treegrid_mode/grid_beforecollapse_event.md) | @getshort(grid/api/treegrid_mode/grid_beforecollapse_event.md)|
| [](grid/api/treegrid_mode/grid_beforeexpand_event.md)   | @getshort(grid/api/treegrid_mode/grid_beforeexpand_event.md)  |
| [](grid/api/treegrid_mode/grid_expand_event.md)         | @getshort(grid/api/treegrid_mode/grid_beforecollapse_event.md)|

You can learn how to work with Grid events in the [related guide](/grid/events/).


