---
sidebar_label: data
title: data
---          

@short: specifies an array of data objects to set into the grid

@signature: data: array[];

@example: 
var dataset = [
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


var treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [// columns config],
	data: dataset
});


@template:	api_config
@descr: 
1\. Starting with v7.1, you can specify the height of the cell via setting the number value to the **height** option when defining the data set: 

~~~js
var dataset = [
	{
    	"name": "Argentina",
        "native": "Argentina",
        "phone": "54",
        "continent": "SA",
		"capital": "Buenos Aires",
		"height": 70 /*!*/
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

**Related sample**:
- [TreeGrid. Row height](https://snippet.dhtmlx.com/kvl5y6nq)

{{note The **height** option has a higher priority than the [autoHeight:true](treegrid/api/treegrid_autoheight_config.md) configuration property of TreeGrid. <br>Thus, [autoHeight:true](treegrid/api/treegrid_autoheight_config.md) will be ignored for the cell that the **height** option is defined to.}}

2\. Starting with v7.1, it is possible to use the Date() object when specifying data for the "Date" column:

~~~js
var dataset = [
    {
        "country": "China",
        "date": new Date() /*!*/
    },
	  {
        "country": "India",
        "date": new Date(2010, 02, 10) /*!*/
	  }
];
~~~

**Related samples**:
- [Treegrid. Date column and support of the Date() object](https://snippet.dhtmlx.com/tb4o7ytt)


@related: treegrid/configuration.md#data
treegrid/initialization.md#initialize--treegrid

@relatedapi: treegrid/api/treegrid_autoheight_config.md

**Related sample**: [TreeGrid. Basic initialization](https://snippet.dhtmlx.com/kob9385v)