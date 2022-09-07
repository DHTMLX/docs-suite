---
sidebar_label: data
title: JavaScript Grid - data Config 
description: You can explore the data config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# data

@short: specifies an array of data objects to set into the grid

@signature: {'data?: any[];'}

@example:
const dataset = [
    {
        "country": "China",
        "population": "1415045928",
        "yearlyChange": "0.0039",
        "netChange": "5528531",
        "id": "1"
    },
    {
        "country": "India",
        "population": "1354051854",
        "yearlyChange": "0.0111",
        "netChange": "14871727",
        "id": "2"
    },
    // more columns
];

const grid = new dhx.Grid("grid_container", {
	columns: [
        // columns config
    ],
	data: dataset
});

@descr:

**Related samples**:
- [Grid. Initialization with data.load()](https://snippet.dhtmlx.com/svkb27d5)
- [Grid. Initialization with external DataCollection](https://snippet.dhtmlx.com/qrw1x949)

1. Starting with v7.1, you can specify the height for the necessary row of data via setting the number value to the <b>height</b> option when defining the data set: 

~~~js {5}
const dataset = [
	{
		"country": "China",
		"population": "1415045928",
		"height": 80,
		"id": "1"
	},
	{
		"country": "India",
		"population": "1354051854",
		"id": "2",
	}
];
~~~

**Related sample**: [Grid. Row height](https://snippet.dhtmlx.com/2jo5lcuj)

{{note The **height** option has a higher priority than the [autoHeight:true](grid/api/grid_autoheight_config.md) configuration property of Grid. <br>Thus, [autoHeight:true](grid/api/grid_autoheight_config.md) will be ignored for the cell that the **height** option is defined to.}}

2. Starting with v7.1, it is possible to use the Date() object when specifying data for the "Date" column:

~~~js {4,8}
const dataset = [
    {
        "country": "China",
        "date": new Date()
    },
	{
        "country": "India",
        "date": new Date(2010, 02, 10)
	}
];
~~~

**Related sample**: [Grid. Date column and support of the Date() object](https://snippet.dhtmlx.com/ylbu791i)

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#data)

[comment]: # (@relatedapi: grid/api/grid_autoheight_config.md)
