---
sidebar_label: Step 6. Add a Chart
title: Step 6. Add a Chart
---          

It's time to add a chart on the page. 

The process of initializing a chart is similar to creating a grid or a toolbar.

<div style="font-weight:bold; color: rgb(65, 65, 65); padding-top: 10px; font-size: 15px;">To add a Chart on the page:</div>

1\. First, initialize the chart with the dhx.Chart object constructor in the following way:  

~~~js
var chart = new dhx.Chart(null, { 
	type: "pie", //the type of the chart is pie
	series: [ 
		//an array of series objects
	    {
    		paddings: 170, // paddings between the chart and layout borders
    		useLines: true, // shows lines between chart sectors and labels
    		subType: "percentOnly", // puts % on the chart
            // for data communication: 
            // a chart value takes the value from a dataset (see step 7)
			value: "value", 			
   			color: "color",
            // sets templates "Premium"/"Default Users" 
            // for labels of data items rendered on a scale 
    		text: "text", 
			stroke: "#FFFFFF",
    		strokeWidth: 2,
    		tooltip: true, //shows values of data items in tooltips
            // the template function takes the "point" array as an argument 
    		tooltipTemplate: function(point) { 			
				//The array elements are value and text
       			return point[0] + (point[0] > 1 ? " Users" : " User");
            }
		}
	]
});
~~~

2\. Then attach the chart to the "chart-cell" of Layout as in:

~~~js
// attaching the chart to the "chart-cell" of the layout
layout.cell("chart-cell").attach(chart);
~~~

You can learn more about chart configuration options in the [Configuration](chart/configuration_properties.md) article.


<div id="tutorial_step">
    <a id="next_step" href="tutorial/basic_application/step7.md"></a>
</div>

