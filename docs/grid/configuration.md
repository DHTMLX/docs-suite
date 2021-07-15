---
sidebar_label: Configuration
title: JavaScript Grid - Configuration 
description: You can explore the configuration of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Configuration

DHTMLX Grid possesses flexible configuration that let you get desired look and feel via a collection of versatile properties.

## Columns

It is possible to adjust the configuration of grid columns via the corresponding option [columns](grid/api/grid_columns_config.md). As a value it takes an array with objects each of which contains config of a column.
The full list of properties you can set for a column is given in the API reference.

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 100, id: "a", header: [{ text: "#" }] },
        { width: 100, id: "b", header: [{ text: "Title" }] },
        { width: 200, id: "c", header: [{ text: "Name" }] },
        { width: 200, id: "d", header: [{ text: "Address" }] }
    ],
    data: dataset
});
~~~

Each column object may contain a set of properties.

{{note You will find the full list of the configuration properties of a Grid column [here](grid/api/api_gridcolumn_properties.md).}}

## Alignment

Starting from v6.5, there is the ability to align data in a column as well as to align data in the column's header via the **align** option:

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "name", header:  [{ title: "Name", align: "center" }], align: "right"} /*!*/
        // more options
    ],
    data: dataset
});
~~~

**Related sample**: [Grid. Content Align](https://snippet.dhtmlx.com/eyreddku)

The available values of the option are "left", "center" and "right".

## Automatic adding of empty row into Grid

There is a possibility to automatically add an empty row after the last filled row in the grid. Use the [](grid/api/grid_autoemptyrow_config.md) property in the Grid configuration object to enable this feature:

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    autoEmptyRow:true,   /*!*/
    data: dataset
});
~~~

**Related sample**: [Grid. Auto Empty Row](https://snippet.dhtmlx.com/rkytig73)

## Autosize for columns

You can configure columns' settings so that their width would automatically adjust to their content. Use the [](grid/api/grid_adjust_config.md) property for this purpose. The property can take one of four values:

<table>
	<tbody>
        <tr>
			<td><b>"header"</b></td>
			<td>adjusts the columns to the width of their header</td>
		</tr>
        <tr>
			<td><b>"footer"</b></td>
			<td>adjusts the columns to the width of their footer</td>
		</tr>
        <tr>
			<td><b>"data"</b></td>
			<td>adjusts the columns to the width of their content</td>
		</tr>
        <tr>
			<td><b>true</b></td>
			<td>combines the above mentioned modes and adjusts the column to the bigger value</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    adjust: "header", /*!*/
    data: dataset
});
~~~

**Related sample**: [Grid. Adjust Columns](https://snippet.dhtmlx.com/zfrpe22d)

It is also possible to set the [](grid/api/grid_adjust_config.md) property to *true* in the configuration of a separate column to make its width to adjust automatically to the content:

~~~js
var grid = new dhx.Grid("grid_container", { 
    columns: [
        { id: "country", header: [{ text: "Country" }], adjust: "header" }, /*!*/
        { id: "population", header: [{ text: "Population" }] }
    ],
    adjust: false, /*!*/
    data: dataset
});
~~~

{{note  In case complex HTML content is added into a column, the column width may be calculated incorrectly.}}

## Autoheight for columns

Starting from v7.1, you can set the [autoHeight:true](grid/api/grid_autoheight_config.md) option in the configuration of Grid to make long text to split into multiple lines automatically based on the width of the column

~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	autoHeight: true,  /*!*/
	data: dataset
});
~~~

**Related sample**: [Grid. Auto height](https://snippet.dhtmlx.com/zkcsyazg)

As a result, the height of the cells will automatically adjust to their content.

But, **note**, that the **autoHeight** option does not adjust the height of the cells of the header/footer of Grid. The option just makes their text to split into multiple lines, but the height of the cells will remain the same. To set the height of the rows in the header/footer, you should apply the [](grid/api/grid_headerrowheight_config.md) and [](grid/api/grid_footerrowheight_config.md) configuration options of Grid.

## Autowidth for columns

It is possible to automatically adjust the size of Grid columns to the size of Grid with the help of the [](grid/api/grid_autowidth_config.md) configuration option, like this:

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    autoWidth: true, /*!*/
    data: dataset
});
~~~

**Related sample**: [Grid. Auto Width](https://snippet.dhtmlx.com/4as4y3l4)

You can disable this functionality for a specified column via setting the [](grid/api/grid_autowidth_config.md) property to *false* in the configuration of the column:

~~~js
var grid = new dhx.Grid("grid", {
	columns: [
		{ width: 200, id: "country", header: [{ text: "Country" }], autoWidth: false }, /*!*/
		{ width: 150, id: "population", header: [{ text: "Population" }] },
	],
	autoWidth: true, /*!*/
	data: dataset
});
~~~

## Data

You can specify data for your grid before initialization via the [data](grid/api/grid_data_config.md) configuration property. There are also API methods for loading data into grid on the fly. Check the details in the [](grid/data_loading.md) article.

~~~js
const grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    data: dataset /*!*/
});
~~~

## Drag-n-drop inside the grid

{{pronote This functionality requires PRO version of the dhtmlxGrid (or DHTMLX suite) package.}}

It is possible to reorder rows and columns of Grid by drag and drop. To enable the functionality, define the [dragItem: "both"](grid/api/grid_dragitem_config.md) property in the configuration object of Grid:

~~~js {3}
const grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    dragItem: "both",
    data: dataset
});
~~~

**Related sample**: [Setup drag column (Pro)](https://snippet.dhtmlx.com/dfdlzpqb)

To activate the functionality for columns or rows separately, set the value of **dragItem** to *"column"* or *"row"* respectively.

If needed, you can disable the drag-n-drop functionality for a separate column via the **draggable** configuration option of the column:

~~~js {8}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 200, id: "country", header: [{ text: "Country" }]}, /*!*/
        { width: 150, id: "land", header: [{ text: "Land" }] },
        { width: 150, id: "density", header: [{ text: "Density" }], draggable: false } /*!*/
    ],
    data: dataset,
    dragItem: "column", /*!*/   
});
~~~

**Related sample**: [Setup drag column (Pro)](https://snippet.dhtmlx.com/dfdlzpqb)

{{note To make the process of work with drag and drop more flexible, you can apply the related drag-n-drop events of Grid for [columns](grid/api/api_overview.md#column-drag-and-drop) and [rows](grid/api/api_overview.md/#row-drag-and-drop).}}

## Drag-n-drop between grids

dhtmlxGrid supports drag-n-drop of rows between grids in several modes. To begin with, you should specify the [dragMode](grid/api/grid_dragmode_config.md) property in the configuration object of Grid. Then define which mode you need:

- "target" - a grid takes rows from other grids, while its row can't be dragged out of it
- "source" - a grid allows dragging its rows out and can't take rows from other grids
- "both" - a grid both takes rows from other grids and allows dragging its rows out as well

~~~js {7}
const grid = new dhx.Grid("grid_container", { 
    columns: [
        { id: "country", header: [{ text: "Country" }] },
        { id: "population", header: [{ text: "Population" }] }
    ],
    data: dataset,
    dragMode: "source"
});
~~~

**Related sample**: [Grid. Setup Drag Mode](https://snippet.dhtmlx.com/qx9a86ax)

## Editing Grid and separate columns

dhtmlxGrid provides the editing feature that includes two options:

- editing of the whole Grid, i.e. of all its columns

To make all columns of the Grid editable, specify the [](grid/api/grid_editable_config.md) option in the configuration of Grid:

~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	data: data,
	editable: true /*!*/
});
~~~

**Related sample**: [Grid. Editable Data](https://snippet.dhtmlx.com/w2cdossn)

- editing of the specified columns only

This option implies that you can enable/disable editing of particular columns by setting the [editable: true](grid/api/grid_editable_config.md) property in the configuration of a column:

In the example below all columns will be editable, except for the first one:

~~~js
var grid = new dhx.Grid("grid", {
	columns: [
		{ 
        	width:150,id:"project",
            editable:false, /*!*/
            header: [
        	  {text:"Project"}, {content:"selectFilter"}
            ]
        },
		{ width:150, id:"owner", header: [{text:"Owner"},{content:"inputFilter"}]},
		{ width:150, id:"hours", header: [{text:"Hours"}, {content:"inputFilter"}]},
		// more columns
	],
	data: data,
	editable: true
});
~~~

And the following example demonstrates an opposite situation when only the first column is editable:

~~~js
var grid = new dhx.Grid("grid", {
	columns: [
		{ 
           width:150,id:"project",
           editable:true, /*!*/
           header: [
        	{text:"Project"}, {content:"selectFilter"}
           ]
        },
		{ width:150, id:"owner", header: [{text:"Owner"},{content:"inputFilter"}]},
		{ width:150, id: "hours", header: [{text:"Hours"}, {content:"inputFilter"}]},
		// more columns
	],
	data: data
});
~~~

### Setting type of column editor

You can specify the way of editing the cells of a Grid column depending on its content as simple input, date picker, select control,  checkbox, combobox, textarea or multiselect. The type of the used editor can be defined either by the **editorType** property of a [column](grid/api/grid_columns_config.md) or via the **type** one.
There are several types of column editors:

- **input** - an editor for cells with a simple text (the default one, unless a column has **type:"date"**)

~~~js
// cells of the "project" column will be edited as inputs
var grid = new dhx.Grid("grid", {
	columns: [
		{
			width: 150,
			id: "project",
			header: [{ text: "Project" }, { content: "selectFilter" }]
		}
    // more columns
	],
	data: data,
	editable: true
});
~~~

**Related sample**: [Grid. Editable Data](https://snippet.dhtmlx.com/w2cdossn)

- **datePicker** - an editor for cells with dates (default for a column with **type:"date"**)

To use this editor, you should specify the **type:"date"** property for a column. It is also possible to set the necessary [format of date](calendar/api/calendar_dateformat_config.md) while editing a cell content with the help of the **format** option.

~~~js
{ 
	// if the type:"date" config is set in the column config, 
    // there's no need to specify the type of the editor
	width: 150, id: "start_date", 
    header: [{ text: "Calendar", colspan: 2 }, { text: "Start date" }], 
    type: "date", format: "%d/%m/%Y"  /*!*/
}
~~~

**Related sample**: [Grid. Editable Data](https://snippet.dhtmlx.com/w2cdossn)

- **select** - an editor for cells that should contain several options to choose from

To set this editor type you need to provide the **options** property with an array of options to be displayed in the editor, e.g.:

~~~js
{
	width: 150, id: "status", header: [{text: "Status"}, {content: "selectFilter"}],
	editorType: "select", options: ["Done", "In Progress", "Not Started"] /*!*/
} 
~~~

**Related sample**: [Grid. Editable Data](https://snippet.dhtmlx.com/w2cdossn)

- **checkbox** - an editor for cells with a two-state check box

To use this editor, you need to specify the **type: "boolean"** property for a column.

~~~js
{ 
	// if the type:"boolean" config is set in the column config, 
    // there's no need to specify the type of the editor
	width: 160, id: "test", 
    header: [{ text: "Test" }], 
    type: "boolean" /*!*/
}
~~~

**Related sample**: [Grid. Editable Data](https://snippet.dhtmlx.com/w2cdossn)

{{note If you specify the editing option in the configuration of Grid, then editing of a column with checkbox will always be enabled.}}

- **combobox** - an editor for cells that should contain several options to choose from

To use this editor you need to specify the **editorType: "combobox"** property for a column and provide the **options** property with an array of options to be displayed in the editor, e.g.:

```js
{
    width: 160, id: "test", header: [{ text: "Test" }], type: "string", 
    editorType: "combobox", options: ["1 time", "1-2 times", "more than 5 times"]  /*!*/
}
```

Or provide the **options** property with an array of objects with a set of *key:value* pairs - attributes of options and their values.

- The **id** attribute is displayed in the grid
- The **value** attribute is displayed in the input field

```js
{
    width: 160, id: "test", header: [{ text: "Test" }], type: "string", 
    editorType: "combobox", 
	options: [
		{ id: "1 time", value: "1" }, 
		{ id: "1-2 times", value: "1-2 " }, 
		{ id: "more than 5 times", value: "5+" }
		]  /*!*/
}
```

**Related sample**: [Grid. Editable Data](https://snippet.dhtmlx.com/w2cdossn)

- **textarea** - an editor for cells that contain text

To use this editor, you should specify the **editorType:"textarea"** property for a column.

{{note The **textarea** editor allows editing multiple lines of text when the [autoHeight:true](grid/api/grid_autoheight_config.md) configuration option of Grid is enabled. The functionality is available only in PRO version of the dhtmlxGrid (or DHTMLX suite) package.}}

~~~js
var grid = new dhx.Grid("grid", {
	columns: [
		{
			width: 150, id: "project", 
			header: [{ text: "Project" }, { content: "selectFilter" }], 
			editorType: "textarea" /*!*/
		}
    // more columns
	],
	data: data,
	editable: true,
	autoHeight: true /*!*/
});
~~~

**Related sample**: [Grid. Editable Data](https://snippet.dhtmlx.com/w2cdossn)

- **multiselect** - an editor for cells that enables selection of multiple options. You can select one option, several options, all options, or no options.

```js
columns: [
    {
        id: "renewals", type: "string",
        header: [{ text: "Number of renewals" }],
        editorType: "multiselect",
        options: ["1 time", "1-2 times", "more than 5 times"],
    },
```

**Related sample**: [Grid. Editable Data](https://snippet.dhtmlx.com/w2cdossn)

If you use multiselect editor, you can predefine several options to be shown in a cell. You should separate the options in the dataset using the `,` separator.

```js
{
    renewals: "1 time" //one option is shown in a cell
},
{
    renewals: "more than 5 times, 1 time" //two options are shown in a cell
}
```

## Formatting columns

Starting from v7.1, you can display the values of the cells of a Grid column in the desired format:

1\. To define the format for numeric values, apply the **format** configuration option of the column:

~~~js
{ 
	width: 150, id: "population", header: [{ text: "Population" }],  
	format: "# #.0" /*!*/
}
// -> 1415045928 will be displayed as 1 415 045 928.0
~~~

The following characters can be used:

- **#** - the integer part of the number
- **0** - the fractional part of the number. The **0** placeholder displays insignificant zeros if a number has fewer digits than there are zeros in the format string, for instance, the **.00** format will display 0.298 as 0.30. <br>If a number has more digits to the right of the decimal point than there are placeholders in the format string, the number rounds to as many decimal places as there are placeholders, for instance, the **.000** format will display 0.2 as 0.200.
- **# #** - sets the thousands separator in a number (123 456)
- **#.0** - sets the separator for the decimal point in a number (123 456.357)

2\. You can display the percentage value in the necessary format by setting the **type: "percent"** configuration option of a column together with the **format** option:

~~~
{ 
	width: 150, id: "yearlyChange", header: [{ text: "Yearly Change" }], 
	type: "percent", format: "#.00" /*!*/
}
// -> 0.0039 will be displayed as 0.39%
~~~

When using just the **type: "percent"** configuration option of a column, the result will be the following:

~~~js
{ 
	width: 150, id: "yearlyChange", header: [{ text: "Yearly Change" }], 
	type: "percent" /*!*/
}
// -> 0.0039 will be displayed as 0%
~~~

3\. To define the format for dates, set the **type: "date"** property for a column and define the [format of dates](calendar/api/calendar_dateformat_config.md) with the help of the **format** option:

~~~js
{ 
	width: 150, id: "date", header: [{ text: "Date" }], 
	type: "date", format: "%M %d %Y" /*!*/
}
~~~

**Related sample**: [Grid. Data formats](https://snippet.dhtmlx.com/ox37nvdm)

## Frozen columns

You can fix (or "freeze") a column or several columns, so that they will become static, while the rest of columns remain scrollable. 
There is the [leftSplit](grid/api/grid_leftsplit_config.md) property that splits grid columns into the frozen and movable parts. Just set the number of columns (from the left side of the grid) you want to freeze 
as a value of the property in the Grid configuration.

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    leftSplit:1,   /*!*/
    data: dataset
});
~~~

**Related sample**: [Grid. Frozen Columns](https://snippet.dhtmlx.com/hcgl9nth)

## Header/footer content

There are three types of filters that you can specify in the header/footer content of a [Grid column](grid/api/grid_columns_config.md):

- **inputFilter** - provides a way of filtering data of a Grid column by using a text field

~~~js
{ 
    width: 160, id: "budget", 
    header: [{ text: "Budget" }, { content: "inputFilter" }] /*!*/
}
~~~

**Related sample**: [Grid. Header Filter](https://snippet.dhtmlx.com/4qz8ng3c)

- **selectFilter** - allows end users to filter data of a column by choosing an option from a presented dropdown list

~~~js
{ 
    width: 160, id: "status", 
    header: [{ text: "Status" }, { content: "selectFilter" }], /*!*/
    editorType: "select", 
    options: ["Done", "In Progress", "Not Started"] 
}
~~~

**Related sample**: [Grid. Header Filter](https://snippet.dhtmlx.com/4qz8ng3c)

- **comboFilter** - provides a way to filter data of a column by choosing an option from a presented dropdown list. To find an option quickly you can enter text into the edit control.

~~~js
{
    width: 160, id: "renewals", 
    header: [{ text: "Number of renewals" }, { content: "comboFilter" }], /*!*/
    type: "string", editorType: "combobox", 
    options: ["1 time", "1-2 times", "more than 5 times"] 
}
~~~

**Related sample**: [Grid. Header Filter](https://snippet.dhtmlx.com/4qz8ng3c)

If you specify **comboFilter** as the header or footer content of a column, you can set an additional config with properties for it.

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [
        {
            width: 150, 
            id: "migrants", 
            header: [
                { text: "Migrants (net)" }, 
                { content: "comboFilter", filterConfig: {readonly: true }} /*!*/
            ] 
        }   
    ],
    data: dataset
}
~~~

### The list of configuration properties for comboFilter

<table>
	<tbody>
        <tr>
			<td><b>filter</b></td>
			<td>(<i>function</i>) sets a custom function for filtering Combo Box options</td>
		</tr>
		<tr>
			<td><b>multiselection</b></td>
			<td>(<i>boolean</i>) enables selection of multiple options</td>
		</tr>
        <tr>
			<td><b>readonly</b></td>
			<td>(<i>boolean</i>) makes ComboBox readonly (it is only possible to select options from the list, without entering words in the input)</td>
		</tr>
        <tr>
			<td><b>template</b></td>
			<td>(<i>function</i>) sets a template of displaying options in the popup list</td>
		</tr>
        <tr>
			<td><b>placeholder</b></td>
			<td>(<i>string</i>) sets a placeholder in the input of ComboBox</td>
		</tr>
        <tr>
			<td><b>virtual</b></td>
			<td>(<i>boolean</i>) enables dynamic loading of data on scrolling the list of options</td>
		</tr>
    </tbody>
</table>
<br/>

## Header/footer height

The height of the header/footer of Grid is calculated as a sum of rows which are included into it. To set the height of a row inside the header/footer, use the [headerRowHeight](grid/api/grid_headerrowheight_config.md)/[footerRowHeight](grid/api/grid_footerrowheight_config.md)
properties, correspondingly.

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    // footerRowHeight:50   /*!*/
    headerRowHeight: 50    /*!*/
});
~~~

**Related sample**: [Grid. Rows Height](https://snippet.dhtmlx.com/wjcjl80i)

The default value of the mentioned properties is 40.

## Hidden columns

You can set the **hidden:true** property in the [config of a column](grid/configuration.md#columns) so that it doesn't appear on a page.

~~~js				
{ 
	width: 150, id: "population", header: [{ text: "Population" }] 
},
{ 
	hidden: true, width: 150, id: "yearlyChange", header: [{ text: "Yearly Change" }] /*!*/
}
~~~

**Related sample**: [Grid. Hidden Columns](https://snippet.dhtmlx.com/lh7ma639)

## HTML content of Grid columns

dhtmlxGrid allows adding an image or an icon into Grid cells in two ways:

- by specifying the HTML content of all Grid columns

This way presupposes making each cell of Grid capable of displaying the HTML content via using the [htmlEnable](grid/api/grid_htmlenable_config.md) property in the configuration object of Grid.

~~~js
var dataset = [
	{
		"country": "China",
        "flag": "<img src='../flags/cn.jpg' />",
	    "id": "1"
	}
];

var grid = new dhx.Grid("grid", {
	columns: [// columns config],
	data: dataset,
    htmlEnable: true /*!*/
});
~~~

- by specifying the HTML content of a separate column

![](../assets/grid/html_content.png)

If you want to add custom elements into cells of the specified column, you need to set the **htmlEnable:true** property in the configuration of a column:

~~~js
var dataset = [
	{
		"country": "<span>China</span><img src='../flags/cn.jpg' />",
	    "id": "1"
	}
];

var grid = new dhx.Grid("grid", {
	columns: [
		{
            width: 200, id: "country", header: [{ text: "Country" }],
            htmlEnable: true /*!*/
        }, 
		{ 
            width: 150, id: "urban", header: [{ text: "Urban Pop" }] 
        }, 
		// more columns	
	],
	data: dataset
});
~~~

**Related sample**: [Grid. Html In Data](https://snippet.dhtmlx.com/chitkvkc)

## Event handlers for HTML content

Starting from v7.0, you can add event handlers to the HTML elements defined in a data set of Grid with the help of the [](grid/api/grid_eventhandlers_config.md) configuration property, for instance:

~~~js
const data = [
	{
		"country": "<div class='cell__html'><span>China</span> /*!*/
            <img src='../flags/cn.svg'></div>", /*!*/
		"population": "1415045928", "yearlyChange": "0.0039",
		"netChange": "5528531", "density": "151",
		"urban": "0.5800", "id": "1"
	},
    // more options
];

const grid = new dhx.Grid("grid", {
	columns: [
        { width: 200, id: "country", header: [{ text: "Country" }], htmlEnable: true }, /*!*/
        // more options
    ],
	data: data,
    eventHandlers: { /*!*/
		onclick: { /*!*/
			cell__html: function(event, data) { /*!*/
				display(JSON.stringify(data.col, null, 2)); /*!*/
			}, /*!*/
		}, /*!*/
		onmouseover: { /*!*/
			cell__html: function(event) { /*!*/
				display("You are over " + event.target.tagName); /*!*/
			}, /*!*/
		} /*!*/
	} /*!*/
});
~~~

**Related sample**: [Grid. Handling events in template](https://snippet.dhtmlx.com/zcv5drxc)

The **eventHandlers** object includes a set of *key:value* pairs, where:

<table>
	<tbody>
        <tr>
			<td><i>key</i></td>
			<td> the name of the event. Note, that at the beginning of the event name the <b>'on'</b> prefix is used (onclick, onmouseover).</td>
		</tr>
        <tr>
			<td><i>value</i></td>
			<td>an object that contains a <i>key:value</i> pair, where <i>key</i> is the css class name that the handler will be applied to and <i>value</i> is a function that takes two parameters:
            <ul>
                <li><b>event</b> - an event object</li>
                <li><b>object</b> - an object with two attributes:
                <ol>- <b>row</b> - an object with a row configuration</ol>
                <ol>- <b>column</b> - an object with a column configuration</ol></li>
            </ul></td>
		</tr>
    </tbody>
</table>
<br/>

## Keyboard Navigation

dhtmlxGrid provides the keyboard navigation that will help you manipulate your grid faster. 

### Default shortcut keys

There are four navigation keys that Grid enables by default:

<table>
	<tbody>
        <tr>
			<td><b>PageUp</b></td>
			<td>scroll Grid up to the height of the visible content (without change of the selected cell)</td>
		</tr>
        <tr>
			<td><b>PageDown</b></td>
			<td>scroll Grid down to the height of the visible content (without change of the selected cell)</td>
		</tr>
        <tr>
			<td><b>Home</b></td>
			<td>navigate to the beginning of the Grid content (without change of the selected cell)</td>
		</tr>
        <tr>
			<td><b>End</b></td>
			<td>navigate to the end of the Grid content (without change of the selected cell)</td>
		</tr>
    </tbody>
</table>

If you need to disable this functionality, set the [keyNavigation](grid/api/grid_keynavigation_config.md) property to false. 

~~~js
var grid = new dhx.Grid("grid", {
	columns: [// columns config],
	data: dataset,
	keyNavigation: false /*!*/
});
~~~

**Related sample**: [Grid. Key Navigation](https://snippet.dhtmlx.com/y9kdk0md)

### Arrow shortcut keys

In case you want to enable the arrow keys that allow moving the selection between cells, you need to specify the [selection](grid/api/grid_selection_config.md) property for Grid.

~~~js
var grid = new dhx.Grid("grid", {
	columns: [// columns config],
	data: dataset,
	selection: "complex", /*!*/
	keyNavigation: true // true - by default
});
~~~

**Related sample**: [Grid. Key Navigation](https://snippet.dhtmlx.com/y9kdk0md)

The list of the arrow shortcut keys:

<table>
	<tbody>
        <tr>
			<td><b>ArrowUp</b></td>
			<td>move selection to the previous vertical cell</td>
		</tr>
        <tr>
			<td><b>ArrowDown</b></td>
			<td>move selection to the next vertical cell</td>
		</tr>
        <tr>
			<td><b>ArrowLeft</b></td>
			<td>move selection to the previous horizontal cell</td>
		</tr>
        <tr>
			<td><b>ArrowRight</b></td>
			<td>move selection to the next horizontal cell</td>
		</tr>
        <tr>
			<td><b>Ctrl+ArrowUp</b></td>
			<td>move selection to the first vertical cell</td>
		</tr>
        <tr>
			<td><b>Ctrl+ArrowDown</b></td>
			<td>move selection to the last vertical cell</td>
		</tr>
        <tr>
			<td><b>Ctrl+ArrowLeft</b></td>
			<td> move selection to the first horizontal cell</td>
		</tr>
        <tr>
			<td><b>Ctrl+ArrowRight</b></td>
			<td> move selection to the last horizontal cell</td>
		</tr>
        <tr>
			<td><b>Tab</b></td>
			<td> move selection to the next horizontal cell or the first cell of the next row</td>
		</tr>
        <tr>
			<td><b>Shit+Tab</b></td>
			<td> move selection to the previous horizontal cell or to the first cell of the previous row</td>
		</tr>
    </tbody>
</table>

The arrow shortcut keys listed below do not work when the **selection** property is set to *"complex"*. Use another mode (*"cell" or "row"*) in case you you want to activate these navigation keys:

<table>
	<tbody>
        <tr>
			<td><b>Shift+ArrowUp</b></td>
			<td>move selection to the previous vertical cell with the change of the selected cells</td>
		</tr>
        <tr>
			<td><b>Shift+ArrowDown</b></td>
			<td>move selection to the next vertical cell with the change of the selected cells</td>
		</tr>
        <tr>
			<td><b>Shift+ArrowLeft</b></td>
			<td>move selection to the previous horizontal cell with the change of the selected cells</td>
		</tr>
        <tr>
			<td><b>Shift+ArrowRight</b></td>
			<td>move selection to the next horizontal cell with the change of the selected cells</td>
		</tr>
        <tr>
			<td><b>Ctrl+Shift+ArrowUp</b></td>
			<td>move selection to the first vertical cell with the change of the selected cells</td>
		</tr>
        <tr>
			<td><b>Ctrl+Shift+ArrowDown</b></td>
			<td>move selection to the last vertical cell with the change of the selected cells</td>
		</tr>
        <tr>
			<td><b>Ctrl+Shift+ArrowLeft</b></td>
			<td>move selection to the first horizontal cell with the change of the selected cells</td>
		</tr>
        <tr>
			<td><b>Ctrl+Shift+ArrowRight</b></td>
			<td>move selection to the last horizontal cell with the change of the selected cells</td>
		</tr>
    </tbody>
</table>

### Shortcut keys for editing

It is also possible to use shortcut keys for editing a cell in Grid by setting [editable:true](grid/api/grid_editable_config.md) property in the configuration object of Grid.

~~~js
var grid = new dhx.Grid("grid", {
	columns: [// columns config],
	data: dataset,
	selection: "complex", /*!*/
    editable: true, /*!*/
	keyNavigation: true // true - by default
});
~~~

**Related sample**: [Grid. Key Navigation](https://snippet.dhtmlx.com/y9kdk0md)

The list of the shortcut keys for editing:

<table>
	<tbody>
        <tr>
			<td><b>Enter</b></td>
			<td>open the editor in the selected cell. If the editor is currently opened - close the editor and save changes</td>
		</tr>
        <tr>
			<td><b>Escape</b></td>
			<td>close the editor of the selected cell without saving</td>
		</tr>
    </tbody>
</table>

## Multiple selection of Grid cells

While setting the [selection](grid/configuration.md#selection) property either to *"row"* or to *"cell"* value, you can enable the [](grid/api/grid_multiselection_config.md) property to allow a user to select multiple Grid elements:

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    multiselection:true, /*!*/
    selection:"row",
    data: dataset
});
~~~

**Related sample**: [Grid. Multiselection](https://snippet.dhtmlx.com/4nj0e9ye)

Since the **multiselection** configuration option is set to *true*, using the "Ctrl + Click" combination allows selecting the desired cells or rows.
A range of Grid cells/rows can be selected by clicking the first element to select and then, while holding down the Shift key, clicking the last element to select.

## Resizing

Columns of Grid have fixed width with no possibility to change them from UI. You can switch on the corresponding configuration option to make all columns of Grid resizable.

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    data: dataset,
    resizable: true /*!*/
}
~~~

Then you will be able to change the width of columns using the mouse. With the cursor grab the right border and drag to the desired width.

{{note If you also set the **autoWidth** configuration option, you will be able to change the width of columns only inside the container of Grid. }}

You can disable the resizing of any column by setting the [resizable:false](grid/api/grid_resizable_config.md) property in the config of a column.

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 150, id: "test1", header: [{ text: "Test1" }] },
        { width: 150, id: "test2", header: [{ text: "Test2" }], resizable: false } /*!*/
    ],
    data: dataset,
    resizable: true /*!*/
}
~~~

**Related sample**: [Grid. Resizable Columns](https://snippet.dhtmlx.com/aeqzuks0)

{{note To define the resizing limits, set necessary values to the **minWidth**/**maxWidth** properties in the config of a column.
}}

## Row height

The default height of a grid row is 40. You can change it and set any other height via the [rowHeight](grid/api/grid_rowheight_config.md) property, e.g.:

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    rowHeight: 30, 	/*!*/
    data: dataset
});
~~~

**Related sample**: [Grid. Rows Height](https://snippet.dhtmlx.com/wjcjl80i)

In this case, the height of each row is 30.

### Setting height for a separate row

Starting with v7.1, it is possible to specify the height for the necessary row of data in Grid via setting the number value to the **height** option when defining the [data set](grid/api/grid_data_config.md): 

~~~js
var dataset = [
	{
		"country": "China",
		"population": "1415045928",
		"height": 80, /*!*/
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

{{note The **height** option has a higher priority than the [autoHeight:true](grid/api/grid_autoheight_config.md) configuration property of Grid. }}

## Row style

There is a possibility to apply some styling to a row via the [rowCss](grid/api/grid_rowcss_config.md) property. It is a function that takes the id of a row as a parameter and returns a string with the name of a CSS class.

~~~js
<style>
    .my_custom_row {
        background: coral;
    }
</style>
 
 
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    rowCss: function (row) { return row.custom ? "my_custom_row" : "" }, /*!*/
    data: dataset
});
~~~

**Related sample**: [Grid. Custom Row Style](https://snippet.dhtmlx.com/2dxtwf9n)

## Selection

dhtmlxGrid includes the selection feature that allows highlighting Grid elements depending on the chosen mode. The [selection](grid/api/grid_selection_config.md) property enables selection in a grid. It can take three values:

<table>
	<tbody>
        <tr>
			<td><b>row</b></td>
			<td>to move selection between Grid rows</td>
		</tr>
        <tr>
			<td><b>cell</b></td>
			<td>to move selection between Grid cells</td>
		</tr>
        <tr>
			<td><b>complex</b></td>
			<td>to highlight both a selected cell and the row it belongs to</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    selection:"complex",    /*!*/
    data: dataset
});
~~~

**Related sample**: [Grid. Selection](https://snippet.dhtmlx.com/ad6roqsx)

## Sorting columns

By default, dhtmlxGrid allows sorting content of any Grid column by clicking on its header. 

To disable this option, set the [](grid/api/grid_sortable_config.md) property in the Grid configuration to *false*:

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    sortable:false, /*!*/  
    data: dataset
});
~~~

**Related sample**: [Grid. Sortable Columns](https://snippet.dhtmlx.com/r3prvlmo)

### Sorting separate columns

You can make separate columns sortable by specifying the [sortable:true](grid/api/grid_sortable_config.md) property in the configuration of a column:

In the example below all columns will be sortable, except for the second one:

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 200, id: "country", header: [{ text: "Country" }], sortable: true }, /*!*/
        { width: 150, id: "land", header: [{ text: "Land" }] },
        { width: 150, id: "density", header: [{ text: "Density" }], sortable: true } /*!*/
    ],
    data: dataset,
    sortable: false, /*!*/   
});
~~~

The following sample demonstrates the same situation:

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 200, id: "country", header: [{ text: "Country" }] },
        { width: 150, id: "land", header: [{ text: "Land" }], sortable: false }, /*!*/
        { width: 150, id: "density", header: [{ text: "Density" }] }
    ],
    data: dataset
});
~~~

## Spans

The component has the [spans](grid/api/grid_spans_config.md) property that allows you to specify all necessary columns and rows spans right through the initial configuration. It represents an array with spans objects.
Each span object contains the following properties:

<table>
	<tbody>
        <tr>
			<td><b>row</b></td>
			<td>(<i>string|number</i>) obligatory, the id of a row</td>
		</tr>
        <tr>
			<td><b>column</b></td>
			<td>(<i>string|number</i>) obligatory, the id of a column</td>
		</tr>
        <tr>
			<td><b>rowspan</b></td>
			<td>(<i>number</i>) optional, the number of rows in a span</td>
		</tr>
        <tr>
			<td><b>colspan</b></td>
			<td>(<i>number</i>) optional, the number of columns in a span</td>
		</tr>
        <tr>
			<td><b>text</b></td>
			<td>(<i>string|number</i>) optional, the content of a span</td>
		</tr>
        <tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) optional, the name of a CSS class applied to a span</td>
		</tr>
        <tr>
			<td><a href="#tooltip"><b>tooltip</b></a></td>
			<td>(<i>boolean</i>) enables a tooltip on hovering over the content of a span, <i>true</i> by default</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	spans: [
		{row:"0", column:"a", rowspan:5 },
		{row:"0", column:"b", rowspan:9, text:"<h2>Some content here</h2>"},
		{row:"0", column:"c", colspan:2, text:"Some content"},
		{row:"10", column:"a", colspan:4, text:"Some header", css:"myCustomColspan"}
	],
	data: dataset
});
~~~

**Related sample**: [Grid. Spans Cells](https://snippet.dhtmlx.com/1775dwbl)

**Note**, that if both the **spans** and [leftSplit](grid/api/grid_leftsplit_config.md) properties are set in the Grid config, the following rules will be applied:

- All necessary columns or rows will be in a span if the **spans** property is set for the columns located within the frozen area.
- If the **spans** property is set for a number of columns or rows placed as in the frozen part as in the movable one, then the columns remained in the movable part only will be in a span.

## Tooltip

The default configuration of Grid provides tooltips that are rendered when a user hovers over the content of a column. Starting from v6.5, you can hide the tooltips via setting the [](grid/api/grid_tooltip_config.md) configuration property of Grid to *false*:

~~~js
var grid = new dhx.Grid("grid", {
    columns: [//columns config],
    data: dataset,
    tooltip: false 
});
~~~

**Related sample**: [Grid. Hiding Tooltips](https://snippet.dhtmlx.com/mq4t3t3w)

There is also the possibility to enable/disable tooltips for separate columns or spans by using the **tooltip** option in the configuration object of the [columns](grid/configuration.md#columns) or [spans](grid/configuration.md#spans) accordingly:

~~~js
var grid = new dhx.Grid("grid", {
	columns: [
		{ width: 200, id: "country", header: [{ text: "Country" }], tooltip: true }, /*!*/
		{ width: 150, id: "population", header: [{ text: "Population" }] },
	],
	spans: [
		{ row: "1", column: "country", rowspan: 5, tooltip: true }, /*!*/
	],
	data: dataset,
	tooltip: false /*!*/
});
~~~

## Width/height

You can specify necessary size of your Grid via the configuration properties [width](grid/api/grid_width_config.md) and [height](grid/api/grid_height_config.md):

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    width: 400,   /*!*/
    height: 400,  /*!*/
    data: dataset
});
~~~

**Related sample**: [Grid. Custom Sizes](https://snippet.dhtmlx.com/ffxj6se0)

In case these options aren't set in the Grid configuration, the component will take the size of the container.
