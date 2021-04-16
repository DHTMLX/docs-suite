---
sidebar_label: Step 4. Add a Grid
title: Step 4. Add a Grid
---          

``` todo страница не нужна

Now let’s consider  how start to work with such DHTMLX component as Grid.

<div style="font-weight:bold; color: rgb(65, 65, 65); padding-top: 10px; font-size: 15px;">To add a Grid on the page:</div>

1\. At first, we need to initialize a Grid with the dhx.Grid object constructor:  

~~~js
var grid = new dhx.Grid(null, {
	// the grid columns
    columns: 
    	[
           { id: "id", header: [{ text: "#", rowspan: 2 }] },
           { id: "first_name", header: [{ text: "First name" },
            	{ content: "inputFilter" }] },
           { id: "last_name", header: [{ text: "Last name" },
                { content: "inputFilter" }] }, 
           { id: "vip", header: [{ text: "Premium", rowspan: 2 }], 
     //returns a template with content "Premium user" or "Default user"  for a cell(s)
                template: function (text, row, col) { 
                   return text ? "Premium user" : "Default user"
                } 
           }
           // other columns
        ],
   	fitToContainer: true, //makes a grid to fit the size of a container
    selection: "row", //enables row selection  in a grid
});
~~~

<i>The constructor takes two parameters:

- the first parameter, which is the HTML container for Grid will be `null`, as we are attaching the grid to the layout, not to an HTML container 
- the second parameter is an object where we specify a set of Grid properties </i>

You can read more about Grid properties in the [API](grid/api/refs/grid.md) and in the [Configuration](grid/configuration.md#data) article. 

2\. Next, we can easily attach the grid to the "grid-cell" of Layout, as well as we did with the toolbar:

~~~js
layout.cell("grid-cell").attach(grid);
~~~

<img style="margin: 19px" src="tutorial/basic_application/grid_003.png"/>

3\. Also we need to prepare a data set that will be loaded into the Grid later. An example of a Grid data set is given below:

~~~js
var grid_dataset = [
	{
		"id": 1, "first_name": "Gary", "last_name": "Ortiz",
  		"email": "gortiz0@mapy.cz", "country": "Indonesia", "vip": false 
 	},
 	{
 		"id": 2, "first_name": "Albert", "last_name": "Williamson", 
  		"email": "awilliamson1@narod.ru", "country": "China","vip": true 
 	},
 	{ 
  		"id": 3, "first_name": "Mildred", "last_name": "Fuller", 
  		"email": "mfuller2@npr.org", "country": "Peru", "vip": true 
 	}
    //more options 
]; 
~~~



<div id="tutorial_step">
    <a id="next_step" href="tutorial/basic_application/step5.md"></a>
</div>

```
