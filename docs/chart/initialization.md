---
sidebar_label: Initialization
title: Initialization
---          

To initialize dhtmlxChart in an application, you need to take the following steps:

- [Download the dhtmlxChart package](https://dhtmlx.com/docs/products/dhtmlxChart/download.shtml) and unpack it into a folder of your project
- [Include source files](#includesourcefiles)
- [Create a container](#createacontainer)
- [Initialize Chart](#initializechart) with the object constructor
- [Load data into Chart](#loaddataintochart)

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

{{editor    https://snippet.dhtmlx.com/id9nbujd	Chart. Basic Initialization Bar Chart}}

Include source files
----------------------

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

Create a container 
-----------------

Add a container for Chart and give it an id, "chart_container", for example: 

``` html title="index.html"
<div id="chart_container"></div>
```

Initialize Chart
----------------------

Initialize Chart with the `dhx.Chart` object constructor. The constructor has two parameters:

- a container to place a Chart into. You've defined it at the previous step.
- an object with configuration properties. See the full list below.

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

See the full list of all available configuration properties in the article chart/configuration_properties.md.

## Load data into Chart

Finally, you are to load the chart with data. You can load inline or external data into the chart.

- to load data from a local source, use the [](data_collection/api/parse.md) method of the Data Collection object:

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

{{editor    https://snippet.dhtmlx.com/id9nbujd	Chart. Basic Initialization Bar Chart}}

- to load data from an external file, use the [](data_collection/api/load.md) method of the Data Collection object:

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

{{editor    https://snippet.dhtmlx.com/qah8exx2	Chart. Load Data}}

