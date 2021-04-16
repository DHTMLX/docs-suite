---
sidebar_label: Configuration
title: Configuration
---          



dhtmlxTreeGrid possesses flexible configuration that let you get desired look and feel via a collection of versatile properties.

Columns
-----------

It is possible to adjust the configuration of grid columns via the corresponding option treegrid/api/treegrid_columns_config.md. As a value it takes an array with objects each of which contains config of a column.
The full list of properties you can set for a column is given in the API reference.

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        { width: 100, id: "a", header: [{ text: "#" }] },
        { width: 100, id: "b", header: [{ text: "Title" }] },
        { width: 200, id: "c", header: [{ text: "Name" }] },
        { width: 200, id: "d", header: [{ text: "Address" }] }
    ],
    data: dataset
});
~~~

{{editor	https://snippet.dhtmlx.com/kob9385v	TreeGrid. Basic initialization}}

Each column object may contain a set of properties described below:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string|number</i>) the id of a column</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>width</b></td>
			<td>(<i>number</i>) the width of a column</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>header</b></td>
			<td>(<i>array</i>) an array of objects with header rows configuration. Each header object may include:
                <ul>
                    <li><a href="https://docs.dhtmlx.com/suite/treegrid__customization.html#stylingheadercells"><b>text</b></a> - (<i>string|number</i>) the text of a header</li>
                    <li><a href="https://docs.dhtmlx.com/suite/treegrid__configuration.html#alignment"><b>align</b></a> - (<i>string</i>) aligns data in the header: "left"|"center"|"right"</li>
                    <li><b>colspan</b> - (<i>number</i>) the number of columns in a colspan</li>
                    <li><b>rowspan</b> - (<i>number</i>) the number of rows in a rowspan <br/> {{editor	https://snippet.dhtmlx.com/t8iust6j	TreeGrid. Header spans}}</li>
                    <li><b>css</b> - (<i>any</i>) styling to be applied to a header</li>
                    <li><a href="https://docs.dhtmlx.com/suite/treegrid__configuration.html#headerfootercontent"><b>content</b></a> - (<i>string</i>) additional content of a header, which can be:
                    <ol>- a filter: "inputFilter" | "selectFilter" | "comboFilter"</ol>
                    <ol>- one of the methods that process values in a column and show result in the header:<br/> "avg" | "sum" | "max" | "min" </ol>
                    <ol> - some other string</ol>
                    </li>
                    <li><b>filterConfig</b> - (<i>object</i>) optional, a configuration object for "comboFilter". It can contain a set of properties:
                    <ol>- <b>filter</b> - (<i>function</i>) sets a custom function for filtering Combo Box options</ol>
                    <ol>- <b>readonly</b> - (<i>boolean</i>) makes ComboBox readonly (it is only possible to select options from the list, without entering words in the input)</ol>
                    <ol>- <b>template</b> - (<i>function</i>) sets a template of displaying options in the popup list</ol>
                    <ol>- <b>placeholder</b> - (<i>string</i>) sets a placeholder in the input of ComboBox</ol>
                    <ol>- <b>virtual</b> - (<i>boolean</i>) enables dynamic loading of data on scrolling the list of options</ol>
                    </li>
                </ul>
            </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/treegrid__configuration.html#htmlcontentoftreegridcolumns"><b>htmlEnable</b></a></td>
			<td>(<i>boolean</i>) if set to <i>true</i>, specifies the HTML content (inner HTML) of a column. If set to <i>false</i>, the content of the column cells will be displayed as a <i>string</i> value <br/> {{editor	https://snippet.dhtmlx.com/iubccmoi	TreeGrid. Html In Data}}</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>footer</b></td>
			<td>(<i>array</i>) an array of objects with footer rows configuration. Each footer object may include:
                <ul>
                    <li><a href="https://docs.dhtmlx.com/suite/treegrid__customization.html#stylingfootercells"><b>text</b></a> - (<i>string|number</i>) the text of a footer</li>
                    <li><b>colspan</b> - (<i>number</i>) the number of columns in a colspan</li>
                    <li><b>rowspan</b> - (<i>number</i>) the number of rows in a rowspan</li>
                    <li><b>css</b> - (<i>any</i>) styling to be applied to a footer</li>
                    <li><a href="https://docs.dhtmlx.com/suite/treegrid__configuration.html#headerfootercontent"><b>content</b></a> - (<i>string</i>) additional content of a footer, which can be:
                    <ol>- a filter: "inputFilter" | "selectFilter" | "comboFilter"</ol>
                    <ol>- one of the methods that process values in a column and show result in the footer:<br/> "avg" | "sum" | "max" | "min" </ol>
                    <ol> - some other string</ol>
                    </li>
                </ul>
            </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>maxWidth</b></td>
			<td>(<i>number</i>) the maximal width to be set for a column <br/> {{editor	https://snippet.dhtmlx.com/pyrloz7y	TreeGrid. Max Width}}</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>minWidth</b></td>
			<td>(<i>number</i>) the minimal width to be set for a column <br/> {{editor	https://snippet.dhtmlx.com/cpgjyoxn	TreeGrid. Min Width}}</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/treegrid__customization.html#addingcustommarkstocells"><b>mark</b></a></td>
			<td>(<i>object|function</i>) returns a template for marking a cell(s)
                <ul>
                    <li>as an <i>object</i> contains <b>min</b> and <b>max</b> properties, to apply desired CSS classes to cells with minimal|maximal values in a column </li>
                    <li>as a <i>function</i> takes several parameters:
                        <ol>- <b>cell</b> - (<i>string</i>) the value of a cell</ol>
                        <ol>- <b>columnCells</b> - (<i>array</i>) an array of all cell values in the specified column</ol>
                        <ol>- <b>row</b> - (<i>object</i>) an object with all cells in a row</ol>
                        <ol>- <b>col</b> - (<i>object</i>) the config of a column (see the <b>columns</b> config)</ol>
                    </li>    
                </ul>
            </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/treegrid__configuration.html#resizing"><b>resizable</b></a></td>
			<td>(<i>boolean</i>) defines whether a column can be resized</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a column: "string"|"number"|"boolean"|"any"|"date"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>dateFormat</b></td>
			<td>(<i>string</i>) defines <a href="https://docs.dhtmlx.com/suite/calendar__api__calendar_dateformat_config.html">the format of dates</a> (type:"date")</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/treegrid__configuration.html#columneditors"><b>editorType</b></a></td>
			<td>(<i>string</i>) the type of an editor used in a column: "input"|"select"|"datePicker"|"checkbox"|"combobox"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>options</b></td>
			<td>(<i>array</i>) a set of options to be displayed in the editor of a cell (editorType: "select"|"combobox")</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/treegrid__customization.html#addingtemplatetocells"><b>template</b></a></td>
			<td>(<i>function</i>) returns a template with content for a cell(s). Takes 3 parameters:
                <ul>
                    <li><b>cellValue</b> - (<i>any</i>) the value of a cell</li>
                    <li><b>row</b> - (<i>object</i>) an object with all cells in a row</li>
                    <li><b>col</b> - (<i>object</i>) the config of a column (see the <b>columns</b> config)</li>
                </ul>
            </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a column is <a href="https://docs.dhtmlx.com/suite/treegrid__configuration.html#hiddencolumns">hidden</a></td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/treegrid__configuration.html#dragndropofgridcolumns"><b>draggable</b></a></td>
			<td>(<i>boolean</i>) defines whether a column is draggable</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/treegrid__configuration.html#editinggridandseparatecolumns"><b>editable</b></a></td>
			<td>(<i>boolean</i>) defines whether a column is editable</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/treegrid__configuration.html#sortingcolumns"><b>sortable</b></a></td>
			<td>(<i>boolean</i>) defines whether a column is sortable</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/treegrid__configuration.html#autosizeforcolumns"><b>adjust</b></a></td>
			<td>(<i>boolean|string</i>) defines whether the width of a column is automatically adjusted to its content</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/treegrid__configuration.html#autowidthforcolumns"><b>autoWidth</b></a></td>
			<td>(<i>boolean</i>) enables/disables the ability of a column to adjust its size to the size of TreeGrid</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/treegrid__configuration.html#alignment"><b>align</b></a></td>
			<td>(<i>string</i>) aligns data in a column: "left" | "center" | "right"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/treegrid__configuration.html#tooltip"><b>tooltip</b></a></td>
			<td>(<i>boolean</i>) enables a tooltip on hovering over the content of a column, <i>true</i> by default</td>
		</tr>
    </tbody>
</table>


Alignment
---------------

Starting from v6.5, there is the ability to align data in a column as well as to align data in the column's header via the **align** option:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        { id: "name", header:  [{ title: "Name", align: "center" }], align: "right"} /*!*/
        // more options
    ],
    data: dataset
});
~~~

[https://snippet.dhtmlx.com/g38rr3so](https://snippet.dhtmlx.com/g38rr3so)

The available values of the option are "left", "center" and "right".

Autosize for columns
----------------------

You can configure columns' settings so that their width would automatically adjust to their content. Use the [](treegrid/api/treegrid_adjust_config.md) property for this purpose. The property can take one of 4 values:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>"header"</b></td>
			<td>adjusts the columns to the width of their header</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>"footer"</b></td>
			<td>adjusts the columns to the width of their footer</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>"data"</b></td>
			<td>adjusts the columns to the width of their content</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>true</b></td>
			<td>combines the above mentioned modes and adjusts the column to the bigger value</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    adjust: "header", /*!*/
    data: dataset
});
~~~

{{editor	https://snippet.dhtmlx.com/lgvoz0ar	TreeGrid. Adjust Columns}}

It is also possible to set the [](treegrid/api/treegrid_adjust_config.md) property to *true* in the configuration of a separate column to make its width adjust automatically to the content:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", { 
    columns: [
        { id: "country", header: [{ text: "Country" }], adjust: "header" }, /*!*/
        { id: "population", header: [{ text: "Population" }] }
    ],
    adjust: false, /*!*/
    data: dataset
});
~~~

Autowidth for columns
--------------------

It is possible to adjust the size of TreeGrid columns to the size of TreeGrid with the help of the [](treegrid/api/treegrid_autowidth_config.md) configuration option, like this:


~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    autoWidth: true, /*!*/
    data: dataset
});
~~~

{{editor	https://snippet.dhtmlx.com/irybslog	TreeGrid. Auto Width}}

You can disable this functionality for a specified column via setting the [](treegrid/api/treegrid_autowidth_config.md) property to *false* in the configuration of the column:

~~~js
var treegrid = new dhx.TreeGrid("grid", {
	columns: [
		{ width: 200, id: "country", header: [{ text: "Country" }], autoWidth: false }, /*!*/
		{ width: 150, id: "population", header: [{ text: "Population" }] },
	],
	autoWidth: true, /*!*/
	data: dataset
});
~~~

Data
---------

You can specify data for your grid before initialization via the [](treegrid/api/treegrid_data_config.md) configuration property. There are also API methods for loading data into grid on the fly. Check the details in the article
treegrid/data_loading.md.

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    data: dataset /*!*/
});
~~~

{{editor	https://snippet.dhtmlx.com/kob9385v	TreeGrid. Basic initialization}}

Drag-n-drop of Grid columns
----------------------------

Starting from v6.5, you can add the ability to reorder columns of TreeGrid by drag and drop via using the [](treegrid/api/treegrid_dragitem_config.md) configuration property and setting its value to *"column"*.

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    dragItem:"column",    /*!*/
    data: dataset
});
~~~

You can disable this functionality for a separate column via the **draggable** configuration option of the column:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        { width: 200, id: "name", header: [{ text: "Name" }], draggable: false }, /*!*/
        { width: 260, id: "native", type: "string", header: [{ text: "Native name" }] },
        { width: 200, id: "currency", type: "string", header: [{ text: "Currency" }] } 
    ],
    data: dataset,
    dragItem: "column", /*!*/   
});
~~~

{{editor	https://snippet.dhtmlx.com/ax5vs4a8	Setup drag column}}

To make the process of reordering columns by drag and drop more flexible, apply the related events:

- treegrid/api/treegrid_aftercolumndrag_event.md
- treegrid/api/treegrid_aftercolumndrop_event.md
- treegrid/api/treegrid_beforecolumndrag_event.md
- treegrid/api/treegrid_beforecolumndrop_event.md
- treegrid/api/treegrid_cancolumndrop_event.md
- treegrid/api/treegrid_cancelcolumndrop_event.md
- treegrid/api/treegrid_dragcolumnin_event.md
- treegrid/api/treegrid_dragcolumnout_event.md
- treegrid/api/treegrid_dragcolumnstart_event.md

Drag-n-drop of Grid rows
-------------------------

dhtmlxTreeGrid supports drag-n-drop of rows between grids in several modes. To begin with, you should specify the [](treegrid/api/treegrid_dragmode_config.md) property in the configuration object of TreeGrid. Then define which mode you need:

- "target" - a grid takes rows from other grids, while its row can't be dragged out of it
- "source" - a grid allows dragging its rows out and can't take rows from other grids
- "both" - a grid both takes rows from other grids and allows dragging its rows out as well

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", { 
    columns: [
        { id: "country", header: [{ text: "Country" }] },
        { id: "population", header: [{ text: "Population" }] }
    ],
    data: dataset,
    dragMode: "source" /*!*/
});
~~~

{{editor	https://snippet.dhtmlx.com/43covmy2	TreeGrid. Setup Drag Mode}}

Here is a list of drag-n-drop events that you can use while drag-n-drop of rows is enabled:

- treegrid/api/treegrid_afterrowdrag_event.md
- treegrid/api/treegrid_afterrowdrop_event.md
- treegrid/api/treegrid_beforerowdrag_event.md
- treegrid/api/treegrid_beforerowdrop_event.md
- treegrid/api/treegrid_canrowdrop_event.md
- treegrid/api/treegrid_cancelrowdrop_event.md
- treegrid/api/treegrid_dragrowin_event.md
- treegrid/api/treegrid_dragrowout_event.md
- treegrid/api/treegrid_dragrowstart_event.md

Editing Grid and separate columns
--------------------

dhtmlxGrid provides the editing feature that includes two options:

- editing of the whole Grid, i.e. of all its columns

To make all columns of the Grid editable, specify the [](treegrid/api/treegrid_editable_config.md) option in the configuration of Grid:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [// columns config],
	data: data,
	editable: true /*!*/
});
~~~

{{editor	https://snippet.dhtmlx.com/sdbfbv2n	TreeGrid. Editable Data}}

- editing of the specified columns only

This option implies that you can enable/disable editing of particular columns by setting the **editable: true** property in the configuration of a column:

In the example below all columns will be editable, except for the first one:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
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
var treegrid = new dhx.TreeGrid("treegrid_container", {
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

<h3 id="columneditors">Setting type of column editor</h3>

You can specify the way of editing the cells of a Grid column depending on its content as simple inputs, select controls or date pickers. The type of the used editor is defined by the **editorType** property of a column.
There are three types of column editors:

- **input** - an editor for cells with a simple text (the default one, unless a column has **type:"date"**)

~~~js
// cells of the "project" column will be edited as inputs
var treegrid = new dhx.TreeGrid("treegrid_container", {
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

- **datePicker** - an editor for cells with dates (default for a column with **type:"date"**)

To use this editor, you should specify the **type:"date"** property for a column. It is also possible to set the necessary [format of date](calendar/api/calendar_dateformat_config.md) while editing a cell content 
with the help of the **dateFormat** option.

~~~js
{ 
	// if the type:"date" config is set in the column config, 
    // there's no need to specify the type of the editor
	width: 150, id: "start_date", 
    header: [{ text: "Calendar", colspan: 2 }, { text: "Start date" }], 
    type: "date", dateFormat: "%d/%m/%Y"  /*!*/
}
~~~

- **select** - an editor for cells that should contain several options to choose from

To set this editor type you need to provide the **options** property with an array of options to be displayed in the editor, e.g.:

~~~js
{
	width: 150, id: "status", header: [{text: "Status"}, {content: "selectFilter"}],
	editorType: "select", options: ["Done", "In Progress", "Not Started"] /*!*/
} 
~~~

{{editor	https://snippet.dhtmlx.com/sdbfbv2n	TreeGrid. Editable Data}}


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

{{editor	https://snippet.dhtmlx.com/sdbfbv2n	TreeGrid. Editable Data}}

{{note If you specify the **editable** option in the configuration of Grid, then editing of a column with checkbox will always be enabled.}}

- **combobox** - an editor for cells that should contain several options to choose from. There is a possibility to find an option by entering text in the edit control

To use this editor you need to specify the **editorType: "combobox"** property for a column and provide the **options** property with an array of options to be displayed in the editor, e.g.:

~~~js
{
    width: 160, id: "test", header: [{ text: "Test" }], type: "string", 
    editorType: "combobox", options: ["1 time", "1-2 times", "more than 5 times"]  /*!*/
}
~~~

{{editor	https://snippet.dhtmlx.com/sdbfbv2n	TreeGrid. Editable Data}}

Frozen columns
---------------

You can fix (or "freeze") a column or several columns, so that they will become static, while the rest of columns remain scrollable. 
There is the [](treegrid/api/treegrid_leftsplit_config.md) property that splits grid columns into the frozen and movable parts. Just set the number of columns (from the left side of the grid) you want to freeze 
as a value of the property in the Grid configuration.

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    leftSplit:1,   /*!*/
    data: dataset
});
~~~

{{editor	https://snippet.dhtmlx.com/46me58ze	TreeGrid. Frozen Columns}}

Header/footer content
----------------------------

There are three types of filters that you can specify in the header/footer content of a Grid column:

- **inputFilter** - provides a way of filtering data of a Grid column by using a text field

~~~js
{ 
    width: 160, id: "budget", 
    header: [{ text: "Budget" }, { content: "inputFilter" }] /*!*/
}
~~~

- **selectFilter** - allows end users to filter data of a column by choosing an option from a presented dropdown list

~~~js
{ 
    width: 160, id: "status", 
    header: [{ text: "Status" }, { content: "selectFilter" }], /*!*/
    editorType: "select", 
    options: ["Done", "In Progress", "Not Started"] 
}
~~~

- **comboFilter** - provides a way to filter data of a column by choosing an option from a presented dropdown list. To find an option quickly you can enter text into the edit control.

~~~js
{
    width: 160, id: "renewals", 
    header: [{ text: "Number of renewals" }, { content: "comboFilter" }], /*!*/
    type: "string", editorType: "combobox", 
    options: ["1 time", "1-2 times", "more than 5 times"] 
}
~~~

If you specify **comboFilter** as the header or footer content of a column, you can set an additional config with properties for it.

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
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

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>filter</b></td>
			<td>(<i>function</i>) sets a custom function for filtering Combo Box options</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>readonly</b></td>
			<td>(<i>boolean</i>) makes ComboBox readonly (it is only possible to select options from the list, without entering words in the input)</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>template</b></td>
			<td>(<i>function</i>) sets a template of displaying options in the popup list</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>placeholder</b></td>
			<td>(<i>string</i>) sets a placeholder in the input of ComboBox</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>virtual</b></td>
			<td>(<i>boolean</i>) enables dynamic loading of data on scrolling the list of options</td>
		</tr>
    </tbody>
</table>

Header/footer height
------------------------

The height of the header/footer of Grid is calculated as a sum of rows which are included into it. To set the height of a row inside the header/footer, use the [](treegrid/api/treegrid_headerrowheight_config.md) / treegrid/api/treegrid_footerrowheight_config.md
properties, correspondingly.

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    // footerRowHeight:50   /*!*/
    headerRowHeight: 50    /*!*/
});
~~~

{{editor	https://snippet.dhtmlx.com/xl0i3yof	TreeGrid. Rows Height}}

The default value of the mentioned properties is 40.

Hidden columns
----------------

You can set the **hidden:true** property in the [config of a column](treegrid/configuration.md#columns) so that it doesn't appear on a page.

~~~js				
{ 
	width: 150, id: "population", header: [{ text: "Population" }] 
},
{ 
	hidden: true, width: 150, id: "yearlyChange", header: [{ text: "Yearly Change" }] /*!*/
}
~~~

{{editor	https://snippet.dhtmlx.com/w3yg99la	TreeGrid. Hidden Columns}}

HTML content of TreeGrid columns
---------------------------------

dhtmlxTreeGrid allows adding HTML content into TreeGrid cells in two ways:

- by specifying the HTML content of all TreeGrid columns

This way presupposes making each cells of TreeGrid capable of displaying the HTML content via using the [htmlEnable](treegrid/api/treegrid_htmlenable_config.md) property in the configuration object of TreeGrid.

~~~js
var dataset = [
	{
		"name": "A Time to Kill",
		"inStock": "80 <input type='checkbox' checked />"
	},
];

var treegrid = new dhx.TreeGrid("treegrid", {
	columns: [// columns config],
	data: dataset,
    htmlEnable: true /*!*/
});
~~~

- by specifying the HTML content of a separate column

![](../assets/treegrid/html_content.png)

If you want to add custom elements into cells of the specified column, you need to set the **htmlEnable:true** property in the configuration of a column:

~~~js
var dataset = [
	{
		"name": "A Time to Kill",
		"inStock": "80 <input type='checkbox' checked />"
	},
];

var treegrid = new dhx.TreeGrid("treegrid", {
	columns: [
		{ width: 280, id: "name", header: [{ text: "Book Name" }] },
		{
            width: 160, id: "inStock", type: "string", 
            header: [{ text: "In stock" }], 
            htmlEnable: true /*!*/
        } 
		// more columns	
	],
	data: dataset
});
~~~

{{editor	https://snippet.dhtmlx.com/iubccmoi	TreeGrid. Html In Data}}

Event handlers for HTML content
-----------------------------------

Starting from v7.0, you can add event handlers to the [HTML elements defined in the data set of TreeGrid](treegrid/configuration.md#htmlcontentoftreegridcolumns) with the help of the [](treegrid/api/treegrid_eventhandlers_config.md) configuration property, for instance:

~~~js
const data = [
	{
		"name": "A Time to Kill",
		"price": "12.25",
		"cover": "Hardcover",
		"ships": "12 hours",
		"inStock": "<div class='cell__html'><input type='checkbox' checked />80</div>", /*!*/
		"parent": "c.1"
	},
    // more options
];

const grid = new dhx.Grid("grid", {
	columns: [
        { 
            width: 160, id: "inStock", type: "string", 
            header: [{ text: "In stock" }], 
            htmlEnable: true 
        }, 
        // more options
    ],
	data: data,
    eventHandlers: { /*!*/
		onmouseover: { /*!*/
			cell__html: function(event, data) { /*!*/
				display(JSON.stringify(data.col, null, 2)); /*!*/
			} /*!*/
		} /*!*/
	} /*!*/
});
~~~

[TreeGrid. Handling Events in Template](https://snippet.dhtmlx.com/la7u1xqy)

The **eventHandlers** object includes a set of *key:value* pairs, where:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><i>key</i></td>
			<td> the name of the event. Note, that at the beginning of the event name the <b>'on'</b> prefix is used (onclick, onmouseover).</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><i>value</i></td>
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

Resizing
--------------

Columns of Grid have fixed width with no possibility to change them from UI. You can switch on the corresponding [](treegrid/api/treegrid_resizable_config.md) configuration option to make all columns of Grid resizable.

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    data: dataset,
    resizable: true /*!*/
}
~~~

Then you will be able to change the width of columns using the mouse. With the cursor grab the right border and drag to the desired width.

{{note If you also set the **autoWidth** configuration option, you will be able to change the width of columns only inside the container of Grid. }}

You can disable the resizing of any column by setting the **resizable:false** property in the config of a column.

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

{{editor	https://snippet.dhtmlx.com/vq3i9maq	TreeGrid. Resizable Columns}}

{{note To define the resizing limits, set necessary values to the **minWidth**/**maxWidth** properties in the config of a column.
}}

Row height
----------

The default height of a grid row is 40. You can change it and set any other height via the [](treegrid/api/treegrid_rowheight_config.md) property, e.g.:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    rowHeight: 30, 	/*!*/
    data: dataset
});
~~~

{{editor	https://snippet.dhtmlx.com/xl0i3yof	TreeGrid. Rows Height}}

Row style
------------

There is a possibility to apply some styling to a row via the [](treegrid/api/treegrid_rowcss_config.md) property. It is a function that takes the id of a row as a parameter and returns a string with the name of a CSS class.


~~~js
<style>
    .my_custom_row {
        background: coral;
    }
</style>
 
 
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    rowCss: function (row) { return row.custom ? "my_custom_row" : "" }, /*!*/
    data: dataset
});
~~~

{{editor	https://snippet.dhtmlx.com/3ojyoryn	TreeGrid. Custom Row Style}}

Selection
------------

dhtmlxTreeGrid includes the selection feature that allows highlighting TreeGrid elements depending on the chosen mode. The [](treegrid/api/treegrid_selection_config.md) property enables selection in a grid. It can take three values:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>row</b></td>
			<td>to move selection between Grid rows</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>cell</b></td>
			<td>to move selection between Grid cells</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>complex</b></td>
			<td>to highlight both a selected cell and the row it belongs to</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    selection:"complex",    /*!*/
    data: dataset
});
~~~

{{editor	https://snippet.dhtmlx.com/v0dyh06q	TreeGrid. Selection}}

Sorting columns
--------------------

By default, dhtmlxTreeGrid allows sorting content of any TreeGrid column by clicking on its header. 

To disable this option, set the [](treegrid/api/treegrid_sortable_config.md) property in the TreeGrid configuration to *false*:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    sortable:false, /*!*/  
    data: dataset
});
~~~

{{editor	https://snippet.dhtmlx.com/r4xfph82	TreeGrid. Sortable Columns}}

###Sorting separate columns

You can make separate columns sortable by specifying the [sortable:true](treegrid/api/treegrid_sortable_config.md) property in the configuration of a column.

In the example below all columns will be sortable, except for the second one:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
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
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        { width: 200, id: "country", header: [{ text: "Country" }] },
        { width: 150, id: "land", header: [{ text: "Land" }], sortable: false }, /*!*/
        { width: 150, id: "density", header: [{ text: "Density" }] }
    ],
    data: dataset
});
~~~

Spans
-------------

The component has the [](treegrid/api/treegrid_spans_config.md) property that allows you to specify all necessary columns and rows spans right through the initial configuration. It represents an array with spans objects.
Each span object contains the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>row</b></td>
			<td>(<i>string|number</i>) obligatory, the id of a row</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>column</b></td>
			<td>(<i>string|number</i>) obligatory, the id of a column</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>rowspan</b></td>
			<td>(<i>number</i>) optional, the number of rows in a span</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>colspan</b></td>
			<td>(<i>number</i>) optional, the number of columns in a span</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>text</b></td>
			<td>(<i>string|number</i>) optional, the content of a span</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) optional, the name of a CSS class applied to a span</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><a href="https://docs.dhtmlx.com/suite/treegrid__configuration.html#tooltip"><b>tooltip</b></a></td>
			<td>(<i>boolean</i>) enables a tooltip on hovering over the content of a span, <i>true</i> by default</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
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

{{editor	https://snippet.dhtmlx.com/o62liqew	TreeGrid. Spans Cells}}

**Note**, that if both the **spans** and [splitAt](treegrid/configuration.md#frozencolumns) properties are set in the Grid config, the following rules will be applied:

- All necessary columns or rows will be in a span if the **spans** property is set for the columns located within the frozen area.
- If the **spans** property is set for a number of columns or rows placed as in the frozen part as in the movable one, then the columns remained in the movable part only will be in a span.

Tooltip
-----------

The default configuration of TreeGrid provides tooltips that are rendered when a user hovers over the content of a column. Starting from v6.5, you can hide the tooltips via setting the [](treegrid/api/treegrid_tooltip_config.md) configuration property of TreeGrid to *false*:

~~~js
var treegrid = new dhx.TreeGrid("treegrid", {
    columns: [//columns config],
    data: dataset,
    tooltip: false 
});
~~~

[TreeGrid. Hiding tooltips](https://snippet.dhtmlx.com/jaib6ovf)

There is also the possibility to enable/disable tooltips for separate columns or spans by using the **tooltip** option in the configuration object of the [columns](treegrid/configuration.md#columns) or [spans](treegrid/configuration.md#spans) accordingly:

~~~js
var treeGrid = new dhx.TreeGrid("treegrid", {
    columns: [
        { width: 280, id: "name", header: [{ text: "Book Name" }], tooltip: true }, /*!*/
        { width: 160, id: "cover", type: "string", header: [{}, { text: "Cover" }] },
        { width: 160, id: "ships", type: "string", header: [{ text: "Ships in" }] },
        { width: 160, id: "inStock", type: "string", header: [{ text: "In stock" }] }
    ],
    data: dataset,
    tooltip: false /*!*/
});
~~~

[TreeGrid. Hiding tooltips](https://snippet.dhtmlx.com/jaib6ovf)

Width/height
--------------

You can specify necessary size of your TreeGrid via the configuration properties [](treegrid/api/treegrid_width_config.md) and treegrid/api/treegrid_height_config.md:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    width: 400,   /*!*/
    height: 400,  /*!*/
    data: dataset
});
~~~

In case these options aren't set in the TreeGrid configuration, the component will take the size of the container.

