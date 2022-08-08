---
sidebar_label: Initialization
title: JavaScript Chart - Initialization 
description: You can explore the initialization of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

To initialize dhtmlxChart in an application, you need to take the following steps:

- [Download the dhtmlxChart package](https://dhtmlx.com/docs/products/dhtmlxChart/download.shtml) and unpack it into a folder of your project
- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize Chart](#initialize-chart) with the object constructor
- [Load data into Chart](#load-data-into-chart)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxChart</title>         
        <script type="text/javascript" src="../../codebase/chart.js"></script>
        <link rel="stylesheet" href="../../codebase/chart.css">
    </head>
    <body>
    	<div id="chart_container"></div>
        <script>
            // creating dhtmlxChart 
            var chart = new dhx.Chart("chart_container", {
    			type: "bar",
				scales: {
					"bottom" : {
						text: "month"
					},
					"left" : {
						maxTicks: 10,
						max: 100,
						min: 0
					}
				},
				series: [
					{
						id: "A",
						value: "company C",
						color: "#5E83BA",						
						fill: "#5E83BA"						
					}
				]
			});
        </script>
    </body>
</html>
~~~

**Related sample**: [Chart. Bar chart initialization](https://snippet.dhtmlx.com/id9nbujd)

## Include source files

Create an HTML file and place full paths to JS and CSS files of dhtmlxChart into the header of the created file. The Chart component can be used standalone or as a part of the Suite library.

**If you use dhtmlxChart standalone**, you need to include 2 files:

- chart.js
- chart.css

~~~html
<script type="text/javascript" src="../../codebase/chart.js"></script>
<link rel="stylesheet" href="../../codebase/chart.css">
~~~

**If you use dhtmlxChart as a part of the Suite package**, you need to include JS/CSS files of the dhtmlxSuite library:

- suite.js
- suite.css

~~~html
<link type="text/css" href="../codebase/suite.css">
<script src="../codebase/suite.js" type="text/javascript"></script>
~~~

## Create a container 

Add a container for Chart and give it an id, "chart_container", for example: 

``` html title="index.html"
<div id="chart_container"></div>
```

## Initialize Chart

Initialize Chart with the `dhx.Chart` object constructor. The constructor has two parameters:

- a container to place a Chart into. You've defined it at the previous step.
- an object with configuration properties

~~~js
var config = {
	type: "bar",
    scales: {
    	"bottom" : {
    		text: "month"
    	},
    	"left" : {
    		maxTicks: 10,
    		max: 100,
    		min: 0
    	}
    },
    series: [
    	{
    		id: "A",
    		value: "company C",
    		color: "#5E83BA",						
    		fill: "#5E83BA"						
    	}
    ]
};

var chart = new dhx.Chart("chart_container", config);
~~~

### Configuration properties

See the full list of all available configuration properties of Chart in the [Chart API overview](chart/api/api_overview.md#properties) article.

## Load data into Chart

Finally, you are to load the chart with data. You can load inline or external data into the chart.

- to load data from a local source, use the [parse()](data_collection/api/datacollection_parse_method.md) method of the Data Collection object:

~~~js
var data = [
	 { month: '\'02', 'company A': 20, 'company B': 52, 'company C': 72},
     { month: '\'03', 'company A': 55, 'company B': 33, 'company C': 90},
     { month: '\'04', 'company A': 40, 'company B': 30, 'company C': 81},
     { month: '\'05', 'company A': 80, 'company B': 11, 'company C': 62},
     { month: '\'06', 'company A': 60, 'company B': 14, 'company C': 68},
     // more data items
];

var chart = new dhx.Chart("chart_container",{
	type: "bar",
    scales: { // scales config }
    series: [
    	{
    		//series config					
    	}
    ]
});

chart.data.parse(data);
~~~

**Related sample**: [Chart. Bar chart initialization](https://snippet.dhtmlx.com/id9nbujd)

- to load data from an external file, use the [load()](data_collection/api/datacollection_load_method.md) method of the Data Collection object:

~~~js
var chart = new dhx.Chart( "chart_container",{
	type: "bar",
    scales: { // scales config }
    series: [
    	{
    		//series config					
    	}
    ]
});

chart.data.load("../common/dataset.json");
~~~

**Related sample**: [Chart. Load data](https://snippet.dhtmlx.com/qah8exx2)
