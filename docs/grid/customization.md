---
sidebar_label: Customization
title: JavaScript Grid - Customization 
description: You can explore the customization of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Styling grid

There is a possibility to make changes in the look and feel of a grid. 

![Styling grid](../assets/grid/styling_grid.png)

**Related sample**: [Grid. Styling (custom CSS)](https://snippet.dhtmlx.com/c5tr3s5r)

For this you need to take the following steps:

- add a new CSS class(es) with desired settings in the &lt;style&gt; section of your HTML page or in your file with styles (don't forget to include your file on the page in this case)

~~~html
<style>
	.my-first-class {
		/*some styles*/
	}
    
    .my-second-class {
		/*some styles*/
	}
</style>
~~~

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [css](grid/api/grid_css_config.md) property in the Grid configuration:

~~~js
const grid = new dhx.Grid("grid_container", { 
    css:"my-first-class my-second-class"
});
~~~

For example:

~~~html
<style>
    .custom {
        --dhx-font-color-primary: #fff;
        --dhx-background-primary: #3A434A;
        --dhx-s-grid-header-background: #2C3338;

        --dhx-border-color: #4A555E;
        --dhx-border: var(--dhx-border-width) solid var(--dhx-border-color);
    }
</style>

<script>
	const grid = new dhx.Grid("grid_container", {
    	columns: [
        	{ minWidth: 150, id: "country", header: [{ text: "Country" }] },
        	{ id: "population", header: [{ text: "Population" }] },
        	{ id: "yearlyChange", header: [{ text: "Yearly Change" }] },
        	// more columns
    	],
    	adjust: true,
    	data: dataset,
    	css: "custom",
	});
</script>
~~~

## Styling selection

![Styling selection](../assets/grid/styling_selection.png)

**Related sample**: [Grid. Styling selection (custom CSS)](https://snippet.dhtmlx.com/xs7bixmg)

Here is an example of how you can style selection in Grid:

~~~html
<style>
    .custom {
        --dhx-color-primary: #ff5252;
        --dhx-s-grid-selection-background: rgba(255, 198, 198, 1);
    }
</style>

<script>
	const grid = new dhx.Grid("grid_container", {
    	columns: [
        	{ minWidth: 150, id: "country", header: [{ text: "Country" }] },
        	{ id: "population", header: [{ text: "Population" }] },
        	{ id: "yearlyChange", header: [{ text: "Yearly Change" }] },
        	// more columns
    	],
    	adjust: true,
    	data: dataset,
		selection: true,
    	css: "custom"
	});
</script>
~~~

## Styling header cells

![](../assets/grid/styling_header.png)

You can easily set some styling to the text of header cells by applying some inline style or a CSS class to the **text** property of the header of a column:

~~~html
<style>
	.title {
		font-size: 1.2em;
		color: tomato;
	}
    
</style>

<script>
	const grid = new dhx.Grid("grid_container", {
		columns: [
	  		{ width: 200, id: "country", header: [{ text: "<span style='font-size:2em'>Country</span>" }] },
      		{ width: 150, id: "population", header: [{ text: "<span class='title'>Population</span>" }] },
      		{ width: 150, id: "yearlyChange", header: [{ text: "Yearly Change" }] },
      		{ width: 150, id: "netChange", header: [{ text: "Net Change" }] },
      		{ width: 150, id: "density", header: [{ text: "Density (P/Km²)" }] },
      		{ width: 150, id: "area", header: [{ text: "Land Area (Km²)" }] },
		],
		data: dataset
	});
</script>
~~~

**Related sample**: [Grid. Styling header cells (custom CSS)](https://snippet.dhtmlx.com/7o4elf48)

## Styling footer cells

You can easily set some styling to the text of footer cells by applying some inline style or a CSS class to the **text** property of the footer of a column:

~~~html
<style>	    
    .custom_footer{
		font-size: 18px;
		text-decoration: underline;
	}    
</style>

<script>
	const grid = new dhx.Grid("grid_container", {
		columns: [
		  	{
				width: 100, id: "a", header: [{ text: "#" }], footer: [
					{ text: '<div class="custom_footer">Total</div>', colspan: 3 },
					{ text: '<div class="custom_footer">Minimal value</div>', colspan: 3 }
				]
	      	},
		  	{ width: 100, id: "b", header: [{ text: "Title" }] },
		  	{ width: 200, id: "c", header: [{ text: "Order" }] },
		  	{ width: 200, id: "d", header: [{ text: "Price" }], footer: [
	      			{ content: "sum" }, { content: "min" }        
	      		] 
	      	}
		],
		data: dataset
	});
</script>
~~~

**Related sample**: [Grid. Styling footer cells (custom CSS)](https://snippet.dhtmlx.com/d254hcvp)

## Styling rows

![](../assets/grid/rowcss.png)

It is possible to change the appearance of grid rows by applying custom CSS styles to them. There are two ways to do it:

- via the **rowCss** property in the configuration of Grid. As a value of property set a function that takes the id of a row as a parameter and returns a string with the name of a CSS class.

~~~html {12}
<style>
	.my_custom_row {
		background: coral;
	}
</style>

<script>
	const grid = new dhx.Grid("grid_container", {
		columns: [
			// columns config
		],
		rowCss: function (row) { return row.custom ? "my_custom_row" : "" },
		data: dataset
	});
</script>
~~~

**Related sample**: [Grid. Custom row style](https://snippet.dhtmlx.com/2dxtwf9n)

- with the help of the **addRowCss()** method:

~~~html {9}
<style>
	.myCustomClass{
		background:greenyellow;
	}
</style>

<script>
	const rowId = grid.data.getId(1);
	grid.addRowCss(rowId, "myCustomClass");
</script>
~~~

**Related sample**: [Grid. Add row CSS](https://snippet.dhtmlx.com/idvmge2d)

where:

<table>
	<tbody>
        <tr>
			<td><b>rowId</b></td>
			<td>(<i>string,number</i>) the id of a row</td>
		</tr>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) the name of a CSS class</td>
		</tr>
    </tbody>
</table>

## Styling cells

![](../assets/grid/cellcss.png)

It is easy to style necessary cells using the **addCellCss()** method. It takes three parameters:

<table>
	<tbody>
        <tr>
			<td><b>row</b></td>
			<td>(<i>string,number</i>) the id of a row</td>
		</tr>
		<tr>
			<td><b>col</b></td>
			<td>(<i>string,number</i>) the id of a column</td>
		</tr>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) the name of the CSS class</td>
		</tr>
    </tbody>
</table>

~~~html {18}
<style>
.myCustomClass{
	background:greenyellow;
}
</style>

<script>
	const grid = new dhx.Grid("grid_container", {
    	columns: [
    	    // columns config
    	],
    	data: dataset,
    	adjust: true
	});

	const rowId = grid.data.getId(1);

	grid.addCellCss(rowId, "country", "my_сustom_сlass");
</script>
~~~

**Related sample**: [Grid. Add cell CSS](https://snippet.dhtmlx.com/hskmp8rh)

## Adding custom marks to cells

![](../assets/grid/markcells.png)

You can mark particular cells in a grid using the **mark** property of a column configuration. You need to set its value as a function that takes the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>cell</b></td>
			<td>(<i>string</i>) the value of a cell</td>
		</tr>
		<tr>
			<td><b>columnCells</b></td>
			<td>(<i>array</i>) an array of all cell values in the specified column</td>
		</tr>
		<tr>
			<td><b>row</b></td>
			<td>(<i>object</i>) an object with all cells in a row</td>
		</tr>
		<tr>
			<td><b>col</b></td>
			<td>(<i>object</i>) the config of a column (see the columns config)</td>
		</tr>
    </tbody>
</table>

The function should return a string with a custom CSS class for your mark.

~~~html {17-19,24}
<style>
	.my_custom_mark {
		background: lightcoral;
	}
	
	.total_col {
		background: #f2f2f2;
	}
</style>

<script>
	const grid = new dhx.Grid("grid_container", {
		columns: [
			{
				id: "population", header: [{ text: "Population" }],
				// marks specified cells in a column
				mark: function (cell, data, row, col) {
					return cell > 100000000 ? "my_custom_mark" : ""
				}
			}, 
			{
				id: "density", header: [{ text: "Density (P/Km²)" }],
				// marks all cells in a column
				mark: function (cell, data) { return "total_col"; }
			},
		],
		data: dataset
	});
</script>
~~~

**Related sample**: [Grid. Conditional formatting. Marking cells with colors](https://snippet.dhtmlx.com/9whjve0v)

It is also possible to highlight cells with minimum and (or) maximum values in a grid using the **mark** property of a column configuration. The property is an object which takes two optional parameters:

<table>
	<tbody>
        <tr>
			<td><b>min</b></td>
			<td>(<i>string</i>) a custom CSS class to mark a cell that contains the minimum value</td>
		</tr>
		<tr>
			<td><b>max</b></td>
			<td>(<i>string</i>) a custom CSS class to mark a cell that contains the maximum value</td>
		</tr>
    </tbody>
</table>
<br/>

~~~html {19-22}
<style>
	.max_cell {
    	background: #f44336;
    	color: #FFF;
	}

	.min_cell {
    	background: #4CAF50;
    	color: #FFF
	}
</style>

<script>
	const grid = new dhx.Grid("grid_container", {
		columns: [
			{ width: 200, id: "country", header: [{ text: "Country" }] },
			{
				width: 150, id: "population", header: [{ text: "Population" }],
				mark: {
					min: "min_cell",
					max: "max_cell"
				}
			},
			// more options
		],
		data: dataset
	});
</script>
~~~

![](../assets/grid/mark_cell.png)

**Related sample**: [Grid. Mark cells](https://snippet.dhtmlx.com/buirf16n)

## Adding template to cells

![](../assets/grid/cell_templates.png)

It is possible to customize the content of cells of Grid via the **template** property of a [column configuration](grid/api/api_gridcolumn_properties.md). The template option is a function that takes three parameters:

<table>
	<tbody>
        <tr>
			<td><b>cellValue</b></td>
			<td>(<i>any</i>) the value of a cell</td>
		</tr>
		<tr>
			<td><b>row</b></td>
			<td>(<i>object</i>) an object with all cells in a row</td>
		</tr>
		<tr>
			<td><b>col</b></td>
			<td>(<i>object</i>) the config of a column</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js {7-9}
const grid = new dhx.Grid("grid_container", {
	columns: [
		{ width: 200, id: "country", header: [{text: "Country"}] },
		{ width: 150, id: "population", header: [{text: "Population"}] },
		{ width: 150, id: "netChange", header: [{text: "Net Change"}],
		  htmlEnable: true,
		  template: function (text, row, col) {
			return "<input type=\"checkbox\" " + (text > 300000 ? "checked": "")  + ">";
		  }
		}
	],
	data: dataset
});
~~~

**Related sample**: [Grid. Cell templates](https://snippet.dhtmlx.com/9txizaow)

### Event handlers for the template

Starting from v7.0, you can assign event handlers to HTML elements of a custom template of Grid cells via using the [](grid/api/grid_eventhandlers_config.md) configuration property of Grid, for instance:

~~~js {7-10,15-21}
const grid = new dhx.Grid("grid_container", {
	columns: [
		{ width: 200, id: "country", header: [{ text: "Country" }], htmlEnable: true },
		{ width: 150, id: "netChange", header: [{text: "Net Change"}],
			htmlEnable: true,
			tooltip: false,
			template: function (text, row, col) { 
				return "<div class='cell__template'><input type='checkbox' 
                    disabled " + (text > 3000000 ? "checked" : "") + " ></div>";
			}
		},
        // more options
    ],
	data: data,
	eventHandlers: { 
		onmouseover: { 
			cell__template: function(event, data) { 
				display(JSON.stringify(data.row, null, 2)); 
			} 
	    } 
    } 
});
~~~

**Related sample**: [Grid. Handling events in template](https://snippet.dhtmlx.com/zcv5drxc)

## Adding template to tooltip

![](../assets/grid/tooltip_template.png)

Starting with v7.1, you can customize the content of the tooltip of a column via the [tooltipTemplate](grid/api/api_gridcolumn_properties.md) configuration option of the [column](grid/configuration.md#columns). The **tooltipTemplate** function takes three parameters:

<table>
	<tbody>
        <tr>
			<td><b>value</b></td>
			<td>(<i>any</i>) the value of a cell</td>
		</tr>
		<tr>
			<td><b>row</b></td>
			<td>(<i>object</i>) an object with all cells in a row</td>
		</tr>
		<tr>
			<td><b>col</b></td>
			<td>(<i>object</i>) the config of a column</td>
		</tr>
    </tbody>
</table>
<br>

~~~js {6-14}
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
			width: 200, id: "country", header: [{ text: "Country" }], align: "left",
			htmlEnable: true, 
            tooltipTemplate: function (value, row, col) { 
				if (row.country === "Bangladesh") {
                    return false; // prevent a tooltip from being shown
                }
                return `<div class="custom-tooltip"> 
                    <img src="../data/common/img/02/${row.avatar}.jpg" /> 
                    <span>Last edit time:<br>${row.editing.toUTCString()}</span> 
                </div>`; 
            } 
        },
        { width: 150, id: "population", header: [{ text: "Population" }] },
        { width: 150, id: "yearlyChange", header: [{ text: "Yearly Change" }] },
		// more options
    ],
    data: dataset
});
~~~

:::info
To prevent a tooltip from being shown, return `false` from the function (from v7.1.12).
:::

**Related sample**: [Grid. Rich tooltip template for the first column](https://snippet.dhtmlx.com/md8tr3pr)

**Related sample**: [Grid. Tooltip template](https://snippet.dhtmlx.com/954f7h9m)

{{note You should enable the [htmlEnable](grid/configuration.md#html-content-of-grid-columns) option in the configuration of Grid (or configuration of the column) to activate HTML support for the tooltip.}}
