---
sidebar_label: data
title: JavaScript TreeGrid - data Config 
description: You can explore the data config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# data

@short: Optional. Specifies an array of data objects to set into the grid

@signature: {'data?: any[];'}

@example:
const dataset = [
	{
    	"name": "Argentina",
        "native": "Argentina",
        "phone": "54",
        "continent": "SA",
        "capital": "Buenos Aires"
    },
    {
        "name": "American Samoa",
        "native": "American Samoa",
        "phone": "1684",
        "continent": "OC",
        "capital": "Pago Pago"
    },
    // more columns
];

const treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [
        // columns config
    ],
	data: dataset
});

@descr:

**Related sample**: [TreeGrid. Initialization with config.data](https://snippet.dhtmlx.com/kob9385v)

1\. Starting with v7.1, you can specify the height of the cell via setting the number value to the **height** option when defining the data set: 

~~~js {8}
const dataset = [
	{
    	"name": "Argentina",
        "native": "Argentina",
        "phone": "54",
        "continent": "SA",
		"capital": "Buenos Aires",
		"height": 70
    },
    {
        "name": "American Samoa",
        "native": "American Samoa",
        "phone": "1684",
        "continent": "OC",
        "capital": "Pago Pago"
    },
];
~~~

**Related sample**: [TreeGrid. Row height](https://snippet.dhtmlx.com/kvl5y6nq)

{{note The **height** option has a higher priority than the [autoHeight:true](treegrid/api/treegrid_autoheight_config.md) configuration property of TreeGrid. <br>Thus, [autoHeight:true](treegrid/api/treegrid_autoheight_config.md) will be ignored for the cell that the **height** option is defined to.}}

2\. Starting with v7.1, it is possible to use the Date() object when specifying data for the "Date" column:

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

**Related samples**: [Treegrid. Date column and support of the Date() object](https://snippet.dhtmlx.com/tb4o7ytt)

[comment]: # (@related: treegrid/configuration.md#data treegrid/initialization.md#initialize-treegrid)

[comment]: # (@relatedapi: treegrid/api/treegrid_autoheight_config.md)
