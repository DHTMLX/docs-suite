---
sidebar_label: Configuration
title: JavaScript TreeGrid - Configuration 
description: You can explore the configuration of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration

DHTMLX TreeGrid possesses flexible configuration that let you get desired look and feel via a collection of versatile properties.

## Width/height

You can specify necessary size of your TreeGrid via the configuration properties [](treegrid/api/treegrid_width_config.md) and [](treegrid/api/treegrid_height_config.md):

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [  
        // columns config
    ], 
    width: 400,   
    height: 400,  
    data: dataset
});
~~~

:::info
If the **width** and **height** options aren't set in the TreeGrid configuration, the TreeGrid will take the size of its container. If you don't specify the height for the container, it will be equal to "0px" and TreeGrid won't be visible on the page.
:::

### Autoheight for TreeGrid

You may enable the auto height mode of TreeGrid. For this, set the value of the [height](treegrid/api/treegrid_height_config.md) property to "auto". In this mode, TreeGrid will expand on adding new rows, and will shrink on removing rows not to occupy external place.

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [  
        // columns config
    ], 
    width: 700,   
    height: "auto",  
    data: dataset
});
~~~

This functionality is available from v8.1.

**Related sample**: [TreeGrid. Set automatic height](https://snippet.dhtmlx.com/wg7xosq8)

If needed, you may set the minimal and maximal height for the container via the **min-height** and **max-height** CSS properties:

~~~html
<div class="treegrid" id="treegrid_container"></div>

<style>
    .treegrid {
        min-height: 400px;
        max-height: 600px;
    }
</style>
~~~

## Collapsed mode

To initialize a treegrid in the collapsed state, use the [collapsed](treegrid/api/treegrid_collapsed_config.md) property:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [  
        // columns config
    ],  
    data: dataset,
    collapsed: true
});
~~~

**Related sample**: [TreeGrid. Collapsed mode](https://snippet.dhtmlx.com/t4iswa2y)

## Columns

It is possible to adjust the configuration of grid columns via the corresponding [](treegrid/api/treegrid_columns_config.md) option. As a value it takes an array with objects each of which contains config of a column.
The full list of properties you can set for a column is given in the API reference.

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        { width: 100, id: "a", header: [{ text: "#" }] },
        { width: 100, id: "b", header: [{ text: "Title" }] },
        { width: 200, id: "c", header: [{ text: "Name" }] },
        { width: 200, id: "d", header: [{ text: "Address" }] }
    ],
    data: dataset
});
~~~

**Related sample**: [TreeGrid. Initialization with config.data](https://snippet.dhtmlx.com/kob9385v)

Each column object may contain a set of properties. You will find the full list of the configuration properties of a TreeGrid column [here](treegrid/api/api_treegridcolumn_properties.md).

### Alignment

Starting from v6.5, there is the ability to align data in a column as well as to align data in the column's header via the **align** option:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        { id: "name", header:  [{ text: "Name", align: "center" }], align: "right"} 
        // more options
    ],
    data: dataset
});
~~~

**Related sample**: [TreeGrid. Content align](https://snippet.dhtmlx.com/g38rr3so)

The available values of the option are "left", "center" and "right".

### Autosize for columns

You can configure columns' settings so that their width would automatically adjust to their content. Use the [](treegrid/api/treegrid_adjust_config.md) property for this purpose. The property can take one of 4 values:

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
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [  
        // columns config
    ], 
    adjust: "header", 
    data: dataset
});
~~~

**Related sample**: [TreeGrid. Adjust columns by header, data, all](https://snippet.dhtmlx.com/lgvoz0ar)

It is also possible to set the [](treegrid/api/treegrid_adjust_config.md) property in the configuration of a separate column:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", { 
    columns: [
        { id: "country", header: [{ text: "Country" }], adjust: "header" }, 
        { id: "population", header: [{ text: "Population" }] }
    ],
    adjust: false, 
    data: dataset
});
~~~

### Autowidth for columns

It is possible to adjust the size of TreeGrid columns to the size of TreeGrid with the help of the [](treegrid/api/treegrid_autowidth_config.md) configuration option, like this:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [ 
        // columns config
    ], 
    autoWidth: true, 
    data: dataset
});
~~~

**Related sample**: [TreeGrid. Columns auto width](https://snippet.dhtmlx.com/irybslog)

You can disable this functionality for a specified column via setting the [](treegrid/api/treegrid_autowidth_config.md) property to *false* in the configuration of the column:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [
		{ width: 200, id: "country", header: [{ text: "Country" }], autoWidth: false }, 
		{ width: 150, id: "population", header: [{ text: "Population" }] },
	],
	autoWidth: true, 
	data: dataset
});
~~~

### Formatting columns

Starting from v7.1, you can display the values of the cells of a TreeGrid column in the desired format:

1\. To define the format for numeric values, apply the **format** configuration option of the column:

~~~js
{ 
	width: 150, id: "price", header: [{ text: "Price" }],  
	type: "number", format: "# #.000" 
}
// -> 4564.2 will be displayed as 4 564.200
~~~

The following characters can be used:

- **#** - the integer part of the number
- **0** - the fractional part of the number. The **0** placeholder displays insignificant zeros if a number has fewer digits than there are zeros in the format string, for instance, the **.00** format will display 0.298 as 0.30. <br>If a number has more digits to the right of the decimal point than there are placeholders in the format string, the number rounds to as many decimal places as there are placeholders, for instance, the **.000** format will display 0.2 as 0.200.
- **# #** - sets the thousands separator in a number (123 456)
- **#.0** - sets the separator for the decimal point in a number (123 456.357)

2\. You can display the percentage value in the necessary format by setting the **type: "percent"** configuration option of a column together with the **format** option:

~~~js
{ 
	width: 150, id: "inStock", header: [{ text: "In stock" }], 
	type: "percent", format: "#.00" 
}
// -> 0.0039 will be displayed as 0.39%
~~~

When using just the **type: "percent"** configuration option of a column, the result will be the following:

~~~js
{ 
	width: 150, id: "inStock", header: [{ text: "In stock" }], 
	type: "percent" 
}
// -> 0.0039 will be displayed as 0%
~~~

3\. To define the format for dates, set the **type: "date"** property for a column and define the [format of dates](calendar/api/calendar_dateformat_config.md) with the help of the **format** option:

~~~js
{ 
	width: 150, id: "start_date", 
    header: [{ text: "Calendar", colspan: 2 }, { text: "Start date" }], 
    type: "date", format: "%d/%m/%Y"  
}
~~~

:::info
The date format must include delimiters (space or symbol), otherwise an error will be thrown
:::

**Related sample**: [TreeGrid. Data formats (percent, currency, date and combination with templates)](https://snippet.dhtmlx.com/ampo9hsc)

### Frozen columns

You can fix (or "freeze") a column or several columns, so that they will become static when you scroll the treegrid, while the rest of columns remain movable. 

- To fix columns to the left side of the treegrid, use the [leftSplit](treegrid/api/treegrid_leftsplit_config.md) property. 
- To fix columns to the right side of the treegrid, use the [rightSplit](treegrid/api/treegrid_rightsplit_config.md) property. 

Just set the number of columns you want to freeze as a value of the related property in the TreeGrid configuration.

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [  
        // columns config
    ], 
    leftSplit:1,
    rightSplit: 2, 
    data: dataset
});
~~~

**Related sample**: [TreeGrid. Frozen columns and rows](https://snippet.dhtmlx.com/46me58ze)

### Hidden columns

You can set the **hidden:true** property in the [config of a column](treegrid/configuration.md#columns) so that it doesn't appear on a page.

~~~js
{ 
	width: 150, id: "population", header: [{ text: "Population" }] 
},
{ 
	hidden: true, width: 150, id: "yearlyChange", header: [{ text: "Yearly Change" }] 
}
~~~

**Related sample**: [TreeGrid. Hidden columns](https://snippet.dhtmlx.com/w3yg99la)

### Sortable columns

By default, DHTMLX TreeGrid allows sorting content of any TreeGrid column by clicking on its header.

To disable this option, set the [](treegrid/api/treegrid_sortable_config.md) property in the TreeGrid configuration to *false*:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [  
        // columns config
    ], 
    sortable: false,   
    data: dataset
});
~~~

**Related sample**: [TreeGrid. Sortable columns](https://snippet.dhtmlx.com/r4xfph82)

#### Making separate columns sortable

You can make separate columns sortable by specifying the [sortable:true](treegrid/api/treegrid_sortable_config.md) property in the configuration of a column.

In the example below all columns will be sortable, except for the second one:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        { width: 200, id: "country", header: [{ text: "Country" }], sortable: true }, 
        { width: 150, id: "land", header: [{ text: "Land" }] },
        { width: 150, id: "density", header: [{ text: "Density" }], sortable: true } 
    ],
    data: dataset,
    sortable: false,    
});
~~~

The following sample demonstrates the same situation:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        { width: 200, id: "country", header: [{ text: "Country" }] },
        { width: 150, id: "land", header: [{ text: "Land" }], sortable: false }, 
        { width: 150, id: "density", header: [{ text: "Density" }] }
    ],
    data: dataset
});
~~~

### Resizable columns

Columns of TreeGrid have fixed width with no possibility to change them from UI. You can switch on the corresponding [](treegrid/api/treegrid_resizable_config.md) configuration option to make all columns of TreeGrid resizable.

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [  
        // columns config
    ], 
    data: dataset,
    resizable: true 
});
~~~

Then you will be able to change the width of columns using the mouse. Grab the right border with the cursor and drag to the desired width.

{{note If you also set the **autoWidth** configuration option, you will be able to change the width of columns only inside the container of TreeGrid. }}

You can disable the resizing of any column by setting the **resizable:false** property in the config of a column.

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        { width: 150, id: "test1", header: [{ text: "Test1" }] },
        { width: 150, id: "test2", header: [{ text: "Test2" }], resizable: false } 
    ],
    data: dataset,
    resizable: true 
});
~~~

**Related sample**: [TreeGrid. Resizable columns](https://snippet.dhtmlx.com/vq3i9maq)

{{note To define the resizing limits, set necessary values to the **minWidth**/**maxWidth** properties in the config of a column.
}}

### HTML content of TreeGrid columns

DHTMLX TreeGrid allows adding HTML content into TreeGrid cells (such as images, icons, text styles, etc.). You can enable the possibility to add HTML content both for the whole TreeGrid and for a particular column, or even for a certain column header/footer. Below you'll find all the available options:

- setting HTML content for all TreeGrid columns

This way presupposes making each cells of TreeGrid capable of displaying the HTML content via using the [htmlEnable](treegrid/api/treegrid_htmlenable_config.md) property in the configuration object of TreeGrid.

~~~js
const dataset = [
	{
		"name": "A Time to Kill",
		"inStock": "80 <input type='checkbox' checked />"
	},
];

const treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [  
        // columns config
    ], 
	data: dataset,
    htmlEnable: true 
});
~~~

- setting HTML content for a particular column

![](../assets/treegrid/html_content.png)

If you want to add custom elements into cells of the specified column, you need to set the **htmlEnable:true** property in the [configuration of a column](treegrid/api/api_treegridcolumn_properties.md):

~~~js
const dataset = [
	{
		"name": "A Time to Kill",
		"inStock": "80 <input type='checkbox' checked />"
	},
];

const treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [
		{ width: 280, id: "name", header: [{ text: "Book Name" }] },
		{
            width: 160, id: "inStock", type: "string", 
            header: [{ text: "In stock" }], 
            htmlEnable: true 
        },
		// more columns
	],
	data: dataset
});
~~~

**Related sample**: [TreeGrid. HTML in data](https://snippet.dhtmlx.com/iubccmoi)

- setting HTML content for the header/footer of a column

You can set HTML content in the header or the footer of a column independently. The **htmlEnable** property enabled for the header/footer redefines the value of the same config specified for the parent column and for the whole TreeGrid:

~~~js {8}
const treeGrid = new dhx.TreeGrid("treegrid", {
    columns: [
        {
            id: "name",
            header: [
                {
                    text: "<span style='font-size: 16px; padding: 0; color: blue;'>Book Name</span>",
                    htmlEnable: true,
                }
            ],
            gravity: 1.5,
        },
        // other columns' config
    ],
    data: dataset,
    autoWidth: true,
});
~~~

**Related sample**: [TreeGrid. Styling header cells (custom CSS)](https://snippet.dhtmlx.com/vf0ws454?tag=treegrid)

### Event handlers for HTML content

#### HTML elements defined in the data set

Starting from v7.0, you can add event handlers to the [HTML elements defined in the data set of TreeGrid](treegrid/configuration.md#html-content-of-treegrid-columns) with the help of the [](treegrid/api/treegrid_eventhandlers_config.md) configuration property, for instance:

~~~js
const data = [
	{
		"name": "A Time to Kill",
		"price": "12.25",
		"cover": "Hardcover",
		"ships": "12 hours",
		"inStock": "<div class='cell__html'><input type='checkbox' checked />80</div>", 
		"parent": "c.1"
	},
    // more options
];

const treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [
        { 
            width: 160, id: "inStock", type: "string", 
            header: [{ text: "In stock" }], 
            htmlEnable: true 
        }, 
        // more options
    ],
	data: data,
    eventHandlers: { 
		onmouseover: { 
			cell__html: function(event, data) { 
				console.log(JSON.stringify(data.col, null, 2)); 
			} 
		}
	} 
});
~~~

**Related sample**: [TreeGrid. Handling events in template](https://snippet.dhtmlx.com/la7u1xqy)

#### HTML elements in the header/footer cell

The Suite version 8.3 brought the possibility to add events handlers for the header/footer cell's content. Use the [](treegrid/api/treegrid_eventhandlers_config.md) configuration property for this purpose:

~~~js
const treeGrid = new dhx.TreeGrid("treegrid", {
    columns: [
        {
            width: 60,
            id: "paid",
            header: [
                {
                  text: `
                    <label class="dhx_checkbox dhx_cell-editor__checkbox ">
                        <input type="checkbox" class="dhx_checkbox__input dhx_checkbox--check-all">
                        <span class="dhx_checkbox__visual-input "></span>
                    </label>
                  `,
                   rowspan: 2,
                   htmlEnable: true,
                }
            ],
            type: "boolean",
            sortable: false,
        },
        // more columns
    ],
    data: projects,
    eventHandlers: { 
        onclick: { 
            "dhx_checkbox--check-all": function(event, data) {
                treeGrid.data.forEach(row => {
                    treeGrid.data.update(row.id, {
                        [data.col.id]: event.target.checked,
                    });
                });
            }
        },
    },
});
~~~

**Related sample**: [TreeGrid. Rich example with templates and different editors](https://snippet.dhtmlx.com/0gd4dn8p?tag=treegrid)

## Editing TreeGrid and separate columns

DHTMLX TreeGrid provides the editing feature that includes two options:

- editing of the whole TreeGrid, i.e. of all its columns

To make all columns of the TreeGrid editable, specify the [](treegrid/api/treegrid_editable_config.md) option in the configuration of TreeGrid:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [  
        // columns config
    ], 
	data: data,
	editable: true 
});
~~~

**Related sample**: [TreeGrid. Editing with different editors (multiselect, combobox, select, boolean, date)](https://snippet.dhtmlx.com/sdbfbv2n)

- editing of the specified columns only

This option implies that you can enable/disable editing of particular columns by setting the **editable: true** property in the configuration of a column:

In the example below all columns will be editable, except for the first one:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [
		{ 
        	width: 150, id: "project",
            editable: false, 
            header: [
        	  {text: "Project"}, {content: "selectFilter"}
            ]
        },
		{ width: 150, id: "owner", header: [{text: "Owner"},{content: "inputFilter"}]},
		{ width: 150, id: "hours", header: [{text: "Hours"}, {content: "inputFilter"}]},
		// more columns
	],
	data: data,
	editable: true
});
~~~

And the following example demonstrates an opposite situation when only the first column is editable:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [
		{ 
           width: 150, id: "project",
           editable: true,
           header: [
        	{text: "Project"}, {content: "selectFilter"}
           ]
        },
		{ width: 150, id: "owner", header: [{text: "Owner"},{content: "inputFilter"}]},
		{ width: 150, id: "hours", header: [{text: "Hours"}, {content: "inputFilter"}]},
		// more columns
	],
	data: data
});
~~~

### Types of column editor

You can specify the way of editing the cells of a TreeGrid column depending on its content. The type of the used editor can be defined either by the **editorType** or via the **type** property of a column.

There are several types of column editors:

- #### input

An editor for cells with a simple text (the default one, unless a column has **type:"date"**).

~~~js
// cells of the "project" column will be edited as inputs
const treegrid = new dhx.TreeGrid("treegrid_container", {
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

- #### datePicker

An editor for cells with dates (default for a column with **type:"date"**).

To use this editor, you should specify the **type:"date"** property for a column. It is also possible to set the necessary [format of date](calendar/api/calendar_dateformat_config.md) while editing a cell content with the help of the **format** option.

~~~js
{ 
	// if the type:"date" config is set in the column config, 
    // there's no need to specify the type of the editor
	width: 150, id: "start_date", 
    header: [{ text: "Calendar", colspan: 2 }, { text: "Start date" }], 
    type: "date", format: "%d/%m/%Y" 
}
~~~

:::info
You can configure the date picker by passing [properties of Calendar](category/calendar-properties.md) (**except for** the *value*, *range*, and *dateFormat* ones) to the <b>editorConfig</b> object, as in:

~~~js
{ 
	id: "start_date", 
	header: [{ text: "Start date" }], 
	type: "date", 
    format: "%d/%m/%Y %H:%i",
	editorConfig: { 
		timePicker: true, 
		weekStart: "sunday", 
		thisMonthOnly: true, 
		weekNumbers: true
	} 
}
~~~
:::

- #### textarea

An editor for cells that contain text.

To use this editor, you should specify the **editorType:"textarea"** property for a column.

The **textarea** editor allows editing multiple lines of text when the [autoHeight:true](treegrid/api/treegrid_autoheight_config.md) configuration option of TreeGrid is enabled.

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [
		{
			id: "name", header: [{ text: "Book Name" }], gravity: 1.5, 
			editorType: "textarea" 
		},
        // more columns
	],
	data: data,
	editable: true,
	autoHeight: true 
});
~~~

- #### checkbox

An editor for cells with a two-state check box.

To use this editor, you need to specify the **type: "boolean"** property for a column.

~~~js
{ 
	// if the type:"boolean" config is set in the column config, 
    // there's no need to specify the type of the editor
	width: 160, id: "test", 
    header: [{ text: "Test" }], 
    type: "boolean" 
}
~~~

**Related sample**: [TreeGrid. Editing with different editors (multiselect, combobox, select, boolean, date)](https://snippet.dhtmlx.com/sdbfbv2n)

{{note If you specify the **editable** option in the configuration of TreeGrid, then editing of a column with checkbox will always be enabled.}}

- #### select

An editor for cells that should contain several options to choose from.

To set this editor type you need to specify the **editorType:"select"** property for a column and define a list of options via the **options** property. 

You may either specify the same list of editor options for all cells of the column. For that, use either an array of string values or an array of options' objects as a value of the property as in:

~~~js
{
	width: 150, id: "status", header: [{text: "Status"}, {content: "selectFilter"}],
	editorType: "select", options: ["Done", "In Progress", "Not Started"]
} 

// or
{
    width: 150, id: "status", header: [{text: "Status"}, {content: "selectFilter"}],
    editorType: "select", 
	options: [
		{ id: "done", value: "Done" }, 
		{ id: "in progress", value: "In Progress" }, 
		{ id: "not started", value: "Not Started" },
	],
}
~~~

**Related sample**: [TreeGrid. Editing with different editors (multiselect, combobox, select, boolean, date)](https://snippet.dhtmlx.com/sdbfbv2n)

Or define unique lists of options for different column cells. For that, use a function as a value of the property:

~~~js
{
    id: "select_example",
    header: [{ text: "Select example" }],
    editorType: "select",
    options: (col, row) => getCurrentOptions(row),
},
~~~

**Related sample**: [TreeGrid. Individual option lists for select, multiselect and combobox editors](https://snippet.dhtmlx.com/1t8vvm07)

- #### multiselect

An editor for cells that enables selection of multiple options. You can select one option, several options, all options, or no options.

To set this editor type you need to specify the **editorType:"multiselect"** property for a column and define a list of options via the **options** property.

You may either specify the same list of editor options for all cells of the column. For that, use either an array of string values or an array of options' objects as a value of the property as in:

~~~js
{
    id: "renewals", type: "string",
    header: [{ text: "Number of renewals" }],
    editorType: "multiselect",
    options: ["1 time", "1-2 times", "more than 5 times"],
},

// or
{
    id: "renewals", type: "string",
    header: [{ text: "Number of renewals" }],
    editorType: "multiselect",
	options: [
		{ id: "1", value: "1 time" }, 
		{ id: "1-2", value: "1-2 times" }, 
		{ id: "5 and more", value: "more than 5 times" },
	],
}
~~~

**Related sample**: [TreeGrid. Editing with different editors (multiselect, combobox, select, boolean, date)](https://snippet.dhtmlx.com/sdbfbv2n)

Or define unique lists of options for different column cells. For that, use a function as a value of the property:

~~~js
{
    id: "multiselect_example",
    header: [{ text: "Multiselect example" }],
    type: "string",
    editorType: "multiselect",
    options: (col, row) => getCurrentOptions(row),
    minWidth: 360
},
~~~

**Related sample**: [TreeGrid. Individual option lists for select, multiselect and combobox editors](https://snippet.dhtmlx.com/1t8vvm07)

If you use the **multiselect** editor, you can predefine several options to be shown in a cell. You should separate the options in the dataset using the `,` separator.

~~~js
const data = [
    {
        renewals: "1 time" // one option is shown in a cell
        ...
    },
    {
        renewals: "more than 5 times, 1 time" // two options are shown in a cell
        ...
    }
];
~~~

#### Configuring the multiselect editor

There is a list of [configuration settings](treegrid/api/api_treegridcolumn_properties.md#editorconfig) you may provide for the **multiselect** editor type. Use the **editorConfig** property to specify the desired settings:

~~~js
{
    id: "renewals", type: "string",
    header: [{ text: "Number of renewals" }],
    editorType: "multiselect",
    options: ["1 time", "1-2 times", "more than 5 times"],
    editorConfig: {selectAllButton:true}
}
~~~

- #### combobox

An editor for cells that should contain several options to choose from. There is a possibility to find an option by entering text in the edit control.

To use this editor you need to specify the **editorType: "combobox"** property for a column and define a list of options via the **options** property.

You may either specify the same list of editor options for all cells of the column. For that, use either an array of string values or an array of options' objects as a value of the property as in:

~~~js
{
    width: 160, id: "test", header: [{ text: "Test" }], type: "string", 
    editorType: "combobox", options: ["1 time", "1-2 times", "more than 5 times"]
}

// or
{
    width: 160, id: "test", header: [{ text: "Test" }], type: "string", 
    editorType: "combobox",
	options: [
		{ id: "1", value: "1 time" }, 
		{ id: "1-2", value: "1-2 times" }, 
		{ id: "5+", value: "more than 5 times" },
	],
}
~~~

**Related sample**: [TreeGrid. Editing with different editors (multiselect, combobox, select, boolean, date)](https://snippet.dhtmlx.com/sdbfbv2n)

Or define unique lists of options for different column cells. For that, use a function as a value of the property:

~~~js
{
    id: "combobox_example",
    header: [{ text: "Combobox example" }],
    editorType: "combobox",
    options: (col, row) => getCurrentOptions(row),
    minWidth: 160
},
~~~

**Related sample**: [TreeGrid. Individual option lists for select, multiselect and combobox editors](https://snippet.dhtmlx.com/1t8vvm07)

#### Configuring the combobox editor

There is a list of [configuration settings](treegrid/api/api_treegridcolumn_properties.md#editorconfig) you may provide for the **combobox** editor type. Use the **editorConfig** property to specify the desired settings:

~~~js
{
    width: 160, id: "test", header: [{ text: "Test" }], type: "string", 
    editorType: "combobox", options: ["1 time", "1-2 times", "more than 5 times"],
    editorConfig: {readonly:true}
}
~~~

### Editing columns with the "number" type

For columns with the **type:"number"** setting the **editorConfig** object may contain the following properties. They are:

- **min** - (optional) the minimum allowed value
- **max** - (optional) the maximum allowed value

~~~js
const treegrid = new dhx.TreeGrid("treegrid", {
  columns: [
    {
      id: "col1",
      width: 180,
      type: "number",
      editorConfig: { min: 5, max: 100 },
    },
    // more columns
  ]
});
~~~

In case a user enters a value that goes beyond the limits specified by the above settings, the entered value is highlighted in red:

![Validation of columns with the number type](../assets/grid/col_number_validation.png)

If the user ignores the warning and still tries to enter an unallowable value, it will be replaced with the minimum/maximum value defined in the **editorConfig** object by the **min/max** values. Thus, in the above example the entered value `200` will be replaced with `100`, since it is the upper limit set in the editor configuration.

#### Styling the warning

There is a possibility to redefine the style of the warning on entering an invalid number value. You need to change the `dhx_cell-editor__input--not-valid` class for this purpose. Here is what it looks like:

~~~css
.dhx_cell-editor__input--not-valid {
    color: var(--dhx-color-primary);
    font-weight: var(--dhx-font-weight-medium);
}
~~~

### Editable combobox

From v7.3, you may allow end users to add new options into the combobox editor ([editorType: "combobox"](#types-of-column-editor)) from UI. To activate the functionality, specify the **newOptions: true** attribute of the **editorConfig** property in the configuration of the [column](treegrid/api/api_treegridcolumn_properties.md):

~~~js {7}
{
    width: 120,
    id: "status",
    header: [{ text: "Status" }, { content: "selectFilter" }],
    editorType: "combobox",
    // enables the ability to add new values into the combobox editor of the "Status" column
    editorConfig: { newOptions: true }, 
    options: ["Done", "In Progress", "Not Started"]
},
~~~

**Related sample:** [TreeGrid. Rich example with templates and different editors](https://snippet.dhtmlx.com/0gd4dn8p)

The new option will be added into the combobox after the user types a new value into the input field and either presses "Enter" or clicks on the appeared *Create "newValue"* option in the drop-down list.

![](../assets/treegrid/combobox_editor.png)

At the same time, the created option will also appear in the drop-down list of the header/footer filters ([content: "selectFilter" | "comboFilter"](#headerfooter-filters)) of the column.

![](../assets/treegrid/new_combobox_option.png)

> To localize the *Create* option, translate the corresponding string and apply a ready locale to the Combobox component:

~~~js
const locale = {
  	en: {
    	createItem: "Create"
  	},
  	de: {
    	createItem: "Schaffen"
  	}
};

dhx.i18n.setLocale("combobox", locale["de"]);
~~~

### Opening editor with one click

By default, you can open the editor by double-clicking on a cell. But if you need the editor to open after a single click, apply the [](treegrid/api/treegrid_cellclick_event.md) event of the treegrid.

{{note Note, that it does not work for the select editor (*editorType: "select"*) and you need to use the combobox editor (*editorType:"combobox"*) if you want a drop-down list to open on the mouse click.}}

## Header/footer filters

There are three types of filters that you can specify in the header/footer content of a TreeGrid column:

- **inputFilter** - provides a way of filtering data of a TreeGrid column by using a text field

~~~js
{ 
    width: 160, id: "budget", 
    header: [{ text: "Budget" }, { content: "inputFilter" }]
}
~~~

- **selectFilter** - allows end users to filter data of a column by choosing an option from a presented dropdown list

~~~js
{ 
    width: 160, id: "status", 
    header: [{ text: "Status" }, { content: "selectFilter" }],
    editorType: "select", 
    options: ["Done", "In Progress", "Not Started"] 
}
~~~

- **comboFilter** - provides a way to filter data of a column by choosing an option from a presented dropdown list. To find an option quickly you can enter text into the edit control

~~~js
{
    width: 160, id: "renewals", 
    header: [{ text: "Number of renewals" }, { content: "comboFilter" }],
    type: "string", editorType: "combobox", 
    options: ["1 time", "1-2 times", "more than 5 times"] 
}
~~~

If you specify **comboFilter** as the header or footer content of a column, you can set an additional config with properties for it.

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        {
            width: 150, 
            id: "migrants", 
            header: [
                { text: "Migrants (net)" }, 
                { content: "comboFilter", filterConfig: {readonly: true }}
            ] 
        }   
    ],
    data: dataset
});
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
			<td><b>placeholder</b></td>
			<td>(<i>string</i>) sets a placeholder in the input of ComboBox</td>
		</tr>
        <tr>
			<td><b>virtual</b></td>
			<td>(<i>boolean</i>) enables dynamic loading of data on scrolling the list of options</td>
		</tr>
    </tbody>
</table>

### Customizing header/footer filters

To add a custom function with your you own logic for the filter of a TreeGrid column, you need to set the **customFilter** attribute when configuring the header/footer content of the [column](treegrid/api/api_treegridcolumn_properties.md). 

{{note The **customFilter** attribute can be used when [*content: "inputFilter" | "selectFilter" | "comboFilter"*](#headerfooter-filters) is set.}}

~~~js {11}
const treeGrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        {
            width: 130,
            id: "hours",
            header: [
                { text: "Number of hours" },
                { 
                    content: "inputFilter",
                    // specifies custom filter in TreeGrid
                    customFilter: (value, match) => value < Number(match)
                }
            ],
            footer: [{ content: "sum" }],
            format: "#",
        },   
    ],
    data: dataset
});
~~~

**Related sample**: [TreeGrid. Custom filter in the header](https://snippet.dhtmlx.com/jk64c5gr)

The **customFilter** attribute is a function which compares the value of each cell of the column with the value which is selected in the header/footer filter of the column. If the value of the cell matches the specified criteria, the function returns *true*, otherwise, it returns *false*.

## Header/footer height

You can change the height of the header/footer in one of the following ways:

1. Specify the necessary height of the rows in the header/footer via the related API options

The height of the header/footer of TreeGrid is calculated as a sum of rows which are included into it. To set the height of a row inside the header/footer, use the [](treegrid/api/treegrid_headerrowheight_config.md) / [](treegrid/api/treegrid_footerrowheight_config.md) properties, correspondingly. The default value of the mentioned properties is 40.

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [  
        // columns config
    ], 
    // footerRowHeight:50
    headerRowHeight: 50
});
~~~

**Related sample**: [TreeGrid. Rows height](https://snippet.dhtmlx.com/xl0i3yof)

2. Provide the automatic adjustment of the header/footer height for the content to fit in

Use the [](treegrid/api/treegrid_headerautoheight_config.md) and [](treegrid/api/treegrid_footerautoheight_config.md) configuration options of TreeGrid. These properties redefine the **autoHeight** config for the header and the footer, correspondingly:

~~~js
// enabling autoheight only in the content
const treegrid = new dhx.TreeGrid("treegrid", {
    columns: [
        // columns config
    ],
    data: dataset,
    autoHeight: true, // enable autoHeight in the data (content)
    headerAutoHeight: false, // disable autoHeight in the header
    footerAutoHeight: false, // disable autoHeight in the footer
});

// enabling autoheight only in the header
const treegrid = new dhx.TreeGrid("treegrid", {
    columns: [
        // columns config
    ],
    data: dataset,
    autoHeight: false, // disable autoHeight in the data, the header and the footer
    headerAutoHeight: true, // enable autoHeight in the header
});
~~~

**Related sample**: [TreeGrid. Header/footer autoHeight mode](https://snippet.dhtmlx.com/7kgj0b4e?tag=treegrid)

## Rows

### Row height

The default height of a grid row is 40. You can change it and set any other height via the [](treegrid/api/treegrid_rowheight_config.md) property, e.g.:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [  
        // columns config
    ], 
    rowHeight: 30, 
    data: dataset
});
~~~

**Related sample**: [TreeGrid. Rows height](https://snippet.dhtmlx.com/xl0i3yof)

In this case, the height of each row is 30.

### Setting height for a separate row

Starting with v7.1, it is possible to specify the height for the necessary row of data in TreeGrid via setting the number value to the **height** option when defining the [data set](treegrid/api/treegrid_data_config.md):

~~~js
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
    }
];
~~~

**Related sample**: [TreeGrid. Row height](https://snippet.dhtmlx.com/kvl5y6nq)

{{note The **height** option has a higher priority than the [autoHeight:true](treegrid/api/treegrid_autoheight_config.md) configuration property of TreeGrid.}}

### Autoheight for rows

Starting from v7.1, you can set the [autoHeight: true](treegrid/api/treegrid_autoheight_config.md) option in the configuration of TreeGrid to make long text to split into multiple lines automatically based on the width of the column:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [  
        // columns config
    ], 
	autoHeight: true, 
	data: dataset
});
~~~

**Related sample**: [TreeGrid. Rows auto height](https://snippet.dhtmlx.com/4158ftak)

As a result, the height of the cells will automatically adjust to their content.

:::note
Please note that the **autoHeight** option does not adjust the height in the cells of the header/footer of TreeGrid. 
:::

The option just makes their text split into multiple lines, but the height of the cells will remain the same. To set the height of the rows in the header/footer, you can:

- use the [](treegrid/api/treegrid_headerrowheight_config.md) and [](treegrid/api/treegrid_footerrowheight_config.md) configuration options of TreeGrid to set specific values for the header/footer rows height
- use the [](treegrid/api/treegrid_headerautoheight_config.md) and [](treegrid/api/treegrid_footerautoheight_config.md) configuration options of TreeGrid to enable autoheight for the header/footer rows

### Automatic adding of empty row into TreeGrid

There is a possibility to automatically add an empty row after the last filled row in the treegrid. Use the [](treegrid/api/treegrid_autoemptyrow_config.md) property in the TreeGrid configuration object to enable this feature:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    autoEmptyRow:true,
    data: dataset
});
~~~

### Frozen rows

You can fix (or "freeze") a row or several rows, so that they will become static when you scroll the treegrid, while the rest of rows remain movable. 

- To fix rows on the top of the treegrid, use the [topSplit](treegrid/api/treegrid_topsplit_config.md) property. 
- To fix rows on the bottom of the treegrid, use the [bottomSplit](treegrid/api/treegrid_bottomsplit_config.md) property. 

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
		// columns config
	],
    topSplit: 3,
	bottomSplit: 2,
    data: dataset
});
~~~

**Related sample**: [TreeGrid. Frozen columns and rows](https://snippet.dhtmlx.com/46me58ze)

## Drag-n-drop

### Drag-n-drop inside the grid

There is the ability to reorder rows and columns by drag and drop in TreeGrid. To enable the functionality, define the [dragItem: "both"](treegrid/api/treegrid_dragitem_config.md) property in the configuration object of TreeGrid:

~~~js {5}
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [  
        // columns config
    ], 
    dragItem:"both",   
    data: dataset
});
~~~

To activate the functionality for columns or rows separately, set the value of **dragItem** to *"column"* or *"row"* respectively.

If needed, you can disable the drag-n-drop functionality for a separate column via the **draggable** configuration option of the column:

~~~js {3}
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        { width: 200, id: "name", header: [{ text: "Name" }], draggable: false }, 
        { width: 260, id: "native", type: "string", header: [{ text: "Native name" }] },
        { width: 200, id: "currency", type: "string", header: [{ text: "Currency" }] } 
    ],
    data: dataset,
    dragItem: "column",    
});
~~~

**Related sample**: [TreeGrid. Drag-n-drop](https://snippet.dhtmlx.com/ax5vs4a8)

{{note To make the process of working with drag and drop more flexible, you can apply the related drag-n-drop events of TreeGrid for [columns](treegrid/api/api_overview.md#column-drag-and-drop) and [rows](treegrid/api/api_overview.md/#row-drag-and-drop).}}

### Drag-n-drop between grids

DHTMLX TreeGrid supports drag-n-drop of rows between grids in several modes. To begin with, you should specify the [](treegrid/api/treegrid_dragmode_config.md) property in the configuration object of TreeGrid. Then define which mode you need:

- "target" - a grid takes rows from other grids, while its row can't be dragged out of it
- "source" - a grid allows dragging its rows out and can't take rows from other grids
- "both" - a grid both takes rows from other grids and allows dragging its rows out as well

~~~js {7}
const treegrid = new dhx.TreeGrid("treegrid_container", { 
    columns: [
        { id: "country", header: [{ text: "Country" }] },
        { id: "population", header: [{ text: "Population" }] }
    ],
    data: dataset,
    dragMode: "source"
});
~~~

**Related sample**: [TreeGrid. Drag-n-drop between grids](https://snippet.dhtmlx.com/43covmy2)

### Drag-n-drop of multiple rows

To allow a user to drag-n-drop multiple rows at once, you need to enable [multiselection](#multiple-selection-of-treegrid-cells) of rows when configuring drag-n-drop. For example:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    data: data,
    selection: "row",
	//drag-n-drop rows inside the treegrid
    multiselection: true,
    dragItem: "both" // or dragItem: "row"
});
~~~

**Related sample:** [TreeGrid. Multiselection and drag-n-drop](https://snippet.dhtmlx.com/hwddi1ki)

or

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    data: dataset,
    selection: "row",
	//drag-n-drop rows between treegrids
    multiselection: true,
    dragMode: "both" // or dragMode: "source"
});
~~~

### Expanding collapsed rows on drag-n-drop

If you have collapsed rows in your treegrid, they will expand automatically when you move the mouse pointer over them during drag-n-drop. To disable this functionality, set the [dragExpand](treegrid/api/treegrid_dragexpand_config.md) property to *false*:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    dragItem: "row",
    dragExpand: false,
    data: dataset
});
~~~

**Related sample:** [TreeGrid. Multiselection and drag-n-drop](https://snippet.dhtmlx.com/hwddi1ki)

## Selection

DHTMLX TreeGrid includes the selection feature that allows highlighting TreeGrid elements depending on the chosen mode. The [](treegrid/api/treegrid_selection_config.md) property enables selection in a grid. It can take three values:

<table>
	<tbody>
        <tr>
			<td><b>row</b></td>
			<td>to move selection between TreeGrid rows</td>
		</tr>
        <tr>
			<td><b>cell</b></td>
			<td>to move selection between TreeGrid cells</td>
		</tr>
        <tr>
			<td><b>complex</b></td>
			<td>to highlight both a selected cell and the row it belongs to</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [  
        // columns config
    ], 
    selection: "complex",   
    data: dataset
});
~~~

**Related sample**: [TreeGrid. Selection](https://snippet.dhtmlx.com/v0dyh06q)

### Multiple selection of TreeGrid cells

While setting the [selection](treegrid/configuration.md#selection) property to *"row"*, *"cell"*, or *"complex"* value, you can enable the [](treegrid/api/treegrid_multiselection_config.md) property to allow a user to select multiple TreeGrid elements:

~~~js
const grid = new dhx.Grid("grid_container", {
    columns: [
		// columns config
	],
    multiselection: true,
    selection: "row",
    data: dataset
});
~~~

Since the **multiselection** configuration option is set to *true*, using the "Ctrl + Click" combination allows selecting the desired cells or rows.

## Spans

The component has the [](treegrid/api/treegrid_spans_config.md) property that allows you to specify all necessary columns and rows spans right through the initial configuration. It represents an array with spans objects.
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
const treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [  
        // columns config
    ], 
	spans: [
		{row:"0", column:"a", rowspan:5 },
		{row:"0", column:"b", rowspan:9, text:"<h2>Some content here</h2>"},
		{row:"0", column:"c", colspan:2, text:"Some content"},
		{row:"10", column:"a", colspan:4, text:"Some header", css:"myCustomColspan"}
	],
	data: dataset
});
~~~

**Related sample**: [TreeGrid. Span cells](https://snippet.dhtmlx.com/o62liqew)

**Note**, that if both the **spans** and [leftSplit](treegrid/api/treegrid_leftsplit_config.md) properties are set in the TreeGrid config, the following rules will be applied:

- All necessary columns or rows will be in a span if the **spans** property is set for the columns located within the frozen area.
- If the **spans** property is set for a number of columns or rows placed as in the frozen part as in the movable one, then the columns remained in the movable part only will be in a span.

## Tooltip

### TreeGrid tooltips

The default configuration of TreeGrid provides tooltips that are rendered when a user hovers over the content of a column's cell. All the tooltips can be controlled via the [](treegrid/api/treegrid_tooltip_config.md) configuration property of TreeGrid. By default, the tooltips are enabled. You can disable them, by setting the config to *false*:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [  
        // columns config
    ], 
    data: dataset,
    tooltip: false 
});
~~~

**Related sample**: [TreeGrid. Hiding tooltips](https://snippet.dhtmlx.com/jaib6ovf)

It is also possible to control the header and footer tooltips, independently. There are the [headerTooltip](treegrid/api/treegrid_headertooltip_config.md) and [footerTooltip](treegrid/api/treegrid_footertooltip_config.md) TreeGrid configuration properties, that you can use for this purpose:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    data: dataset,
    tooltip: false, // Disable all tooltips
    headerTooltip: true, // Enable all header tooltips
    footerTooltip: true, // Enable all footer tooltips
});
~~~

### Column tooltips

There is also the possibility to enable/disable tooltips for separate columns or spans by using the **tooltip** option in the configuration object of the [columns](treegrid/configuration.md#columns) or [spans](treegrid/configuration.md#spans) accordingly:

~~~js {3,9}
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        { width: 280, id: "name", header: [{ text: "Book Name" }], tooltip: true },
        { width: 160, id: "cover", type: "string", header: [{}, { text: "Cover" }] },
        { width: 160, id: "ships", type: "string", header: [{ text: "Ships in" }] },
        { width: 160, id: "inStock", type: "string", header: [{ text: "In stock" }] }
    ],
    data: dataset,
    tooltip: false
});
~~~

**Related sample**: [TreeGrid. Hiding tooltips](https://snippet.dhtmlx.com/jaib6ovf)

The tooltip set for a column enables/disables all its tooltips. However, you can control the tooltips of the column header/footer separately, by specifying the **tooltip** property in the corresponding header/footer object inside the column:

~~~js {4}
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // Enables a tooltip for the country title
        { id: "country", header: [{ text: "Country", tooltip: true }] }, 
        { id: "population", header: [{ text: "Population" }] },
        // more columns
    ],
    data: dataset,
    tooltip: false,
});
~~~

What is more, you can specify a necessary template for the header/footer tooltip via the **tooltipTemplate** configuration property, as in:

~~~js {8-10,16}
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        {
            id: "country",
            header: [
                {
                    text: "Country",
                    tooltipTemplate: (value, header, column) => {
                        return `This is column template: ${value}`
                    }
                },
            ],
            footer: [
                {
                    text: "Total",
                    tooltipTemplate: (value, footer, column) => false, // Disabled footer tooltip
                }
            ],
        },
        // more columns
    ],
    data: dataset,
});
~~~

**Related sample**: [TreeGrid. Header/footer tooltip](https://snippet.dhtmlx.com/51nbo9re)

#### Tooltips for complex data

You can specify a tooltip as a value for a complex header/footer content, such as
the methods processing column values: "avg" | "sum" | "max" | "min" | "count". What is more, you can provide a tooltip template for the header/footer content of any type, which allows showing tooltips for filters.

Check the example below:

~~~js {14,27}
const balanceTemplate = value => {
    return value > 0
        ? `<div style='color:green'>⬆ $${value}</div>`
        : `<div style='color:red'>⬇ $${value}</div>`;
};

const treegrid = new dhx.TreeGrid("treegrid", {
    columns: [
        {
            minWidth: 150,
            id: "project",
            header: [
                {text: "Project"},
                {content: "comboFilter", tooltipTemplate: () => "Select project"}
            ],
            footer: [{text: "Total"}],
            resizable: true,
            draggable: false
        },
        {
            width: 130,
            id: "balance",
            header: [{text: "Balance"}, {content: "inputFilter"}],
            footer: [
                {
                    content: "sum",
                    tooltipTemplate: balanceTemplate
                },
            ],
            template: balanceTemplate,
            htmlEnable: true,
            format: "#.0",
        },
    ],
});
~~~

