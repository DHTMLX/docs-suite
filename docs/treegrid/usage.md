---
sidebar_label: Work with TreeGrid
title: Work with TreeGrid
description: description
---          

Working with columns and cells
---------------------

The API of dhtmlxTreeGrid allows setting configuration of columns, getting an object of a particular column as well as the parameters of a certain cell.

### Setting columns configuration

You can specify the configuration of TreeGrid columns on the fly via the [setColumns()](treegrid/api/treegrid_setcolumns_method.md) method. It takes an array with columns objects as a parameter.

~~~js
treegrid.setColumns([
    { id: "a", header: [{ text: "New header for column a" }] },
    { id: "b", header: [{ text: "New header for column b" }] },
    // more columns objects
]);
~~~

You can find the full list of the available configuration options of a TreeGrid column [here](treegrid/api/api_treegridcolumn_properties.md).      

### Getting configuration of a column

It is possible to return an object with attributes of a column via its id. Use the [getColumn()](treegrid/api/treegrid_getcolumn_method.md) method for this purpose.

~~~js
var column = treegrid.getColumn("b"); // ->
// {width: 100, id: "b", header: Array(1), $cellCss: {…}, type: "string"
~~~

The method returns an object with configuration of the specified column. You can find the list of properties that the return object can contain [here](treegrid/api/treegrid_getcolumn_method.md).

### Getting configuration of a cell

There is the [getCellRect()](treegrid/api/treegrid_getcellrect_method.md) method that returns an object with coordinates of a cell. The method takes as parameters the ids of the row and the column the cell belongs to:

~~~js
var rect = treegrid.getCellRect("1","c");
// -> {x: 200, y: -40, height: 40, width: 200}
~~~

The return object includes the following attributes:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>x</b></td>
			<td>(<i>number</i>) the X coordinate of a cell</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>y</b></td>
			<td>(<i>number</i>) the Y coordinate of a cell</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>height</b></td>
			<td>(<i>number</i>) the height of a cell</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>width</b></td>
			<td>(<i>number</i>) the width of a cell</td>
		</tr>
    </tbody>
</table>

Getting header filter
---------------------

You may want to manipulate a filter specified in the header of a treegrid, for example, to set/unset the focus on the filter, to change the filter, or clear it. For that, you should get an object of the header filter by column id via the [getHeaderFilter](treegrid/api/treegrid_getheaderfilter_method.md) method: 

~~~js
var countryFilter = treegrid.getHeaderFilter("capital");
// -> return HTMLElement
// <label class="dhx_grid-filter__label dxi dxi-magnify">...</label>

countryFilter.focus();

// or

var countryFilter = treegrid.getHeaderFilter("name");
// -> return Combobox
// Combobox {_uid: "u1597322507580", config: {…}, events: EventSystem, 
// data: DataCollection, popup: Popup, …}

countryFilter.blur();
~~~

[TreeGrid. Get Header Filter](https://snippet.dhtmlx.com/vg5o912t)

The method returns either an HTML object or an object with Combobox configuration.

Hiding/showing a column
--------------------------

It is possible to show and hide a column in the grid via the [showColumn()](treegrid/api/treegrid_showcolumn_method.md) and [hideColumn()](treegrid/api/treegrid_hidecolumn_method.md) methods. 

~~~js
//showing a column
treegrid.showColumn(col);
//hiding a column
treegrid.hideColumn(col);
~~~

{{editor	https://snippet.dhtmlx.com/1gekn97m	TreeGrid. Show/Hide column}}

Since the object of a column has the [hidden](treegrid/configuration.md#hiddencolumns) property, the showColumn() method changes it value to *false* while the hideColumn() method changes the hidden property to *true*.

Checking visibility of a column
----------------------------------

You can check whether a column is hidden or shown on a page using the [](treegrid/api/treegrid_iscolumnhidden_method.md) method. The method returns *true*, if a column is visible, and *false* if it's hidden.

~~~js
treegrid.isColumnHidden("country"); // -> true|false
~~~

{{editor	https://snippet.dhtmlx.com/fcjfp19d	TreeGrid. Is column hidden}}

Hiding/showing a row
--------------------------

Starting from v7.0, it is possible to show and hide a row in the treegrid via the [showRow()](treegrid/api/treegrid_showrow_method.md) and [hideRow()](treegrid/api/treegrid_hiderow_method.md) methods. 

~~~js
//showing a row
treegrid.showRow(rowId);
//hiding a row
treegrid.hideRow(rowId);
~~~

[TreeGrid. Show/Hide Row](https://snippet.dhtmlx.com/6geqbtvv)


Checking visibility of a row
----------------------------------

You can check whether a row is hidden or shown on a page using the [](treegrid/api/treegrid_isrowhidden_method.md) method. The method returns *true*, if a row is hidden, and *false* if it's visible.

~~~js
treegrid.isRowHidden("1"); // -> true|false
~~~

[TreeGrid. Show/Hide Row](https://snippet.dhtmlx.com/6geqbtvv)

Adding/removing spans
---------------------

You can manipulate columns and rows spans inside the grid with the help of corresponding API methods: [addSpan()](treegrid/api/treegrid_addspan_method.md), [removeSpan()](treegrid/api/treegrid_removespan_method.md) and [getSpan()](treegrid/api/treegrid_getspan_method.md).

###Adding spans

In order to add a col/row span into the grid, use the [addSpan()](treegrid/api/treegrid_addspan_method.md) method. Pass an object with configuration of a span as a parameter:

~~~js
treegrid.addSpan({ 
    row: "0", 
    column: "a", 
    rowspan: 5 
});
~~~

These are possible fields of a span object:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>row</b></td>
			<td>(<i>string|number</i>) mandatory, the id of a row</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>column</b></td>
			<td>(<i>string|number</i>) mandatory, the id of a column</td>
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
			<td>(<i>string|number</i>) optional, the text in a spanned row/column</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) optional, the name of the CSS class that will be applied to a span</td>
		</tr>
    </tbody>
</table>

###Getting spans

You can return the col/row span a cell is a part of using the [getSpan()](treegrid/api/treegrid_getspan_method.md) method. It takes the ids of the row and the column the cell belongs to as parameters:

~~~js
var span = treegrid.getSpan("10","a"); 
// -> {row:"10", column:"a", colspan:4, text:"Some header", css:"myCustomColspan"}
~~~

As a result, you'll get an object with a span configuration, if any span includes the specified cell. Attributes of a span object are described above.

###Removing spans

To remove an existing span, make use of the [removeSpan()](treegrid/api/treegrid_removespan_method.md) method. It takes the ids of the row and the column as parameters: 

~~~js
treegrid.removeSpan("10","a");
~~~

Controlling scroll behavior 
-----------------------------

The API of dhtmlxTreeGrid provides the possibility to set scrolls to the nevessary position and to get the current state of scrolls.

### Scrolling to specific coordinates

You can scroll grid content to exact position defined by x and y coordinates via the [scroll()](treegrid/api/treegrid_scroll_method.md) method. Pass the coordinates as parameters of the method.

~~~js
treegrid.scroll(75,230);
~~~

### Scrolling to specific treegrid cell   

It is also possible to scroll treegrid content to a particular cell. Pass the ids of the row and the column as parameters:

~~~js
treegrid.scrollTo("15","c");
~~~

{{editor	https://snippet.dhtmlx.com/kxytdnvi	TreeGrid. Controlling Scroll Behavior}}

### Getting the state of scroll

To return the current state of scroll, use the [getScrollState()](treegrid/api/treegrid_getscrollstate_method.md) method. 

~~~js
var state = treegrid.getScrollState(); // -> {x:0,y:0}
~~~

It returns an object with x,y coordinates of a position the grid has been scrolled to.


Grouping data
-----------------

To make data in TreeGrid well-structured and easily understood you can group data with the help of the [groupBy()](treegrid/api/treegrid_groupby_method.md) method. There are two options of grouping data.

###Grouping by a column

To group the content of a treegrid by values of the specified column, pass the id of the column as a parameter to the **groupBy()** method:

- **id** - (*string*) the id of a column

~~~
treegrid.groupBy("age");
~~~

[TreeGrid. Group data items by a property](https://snippet.dhtmlx.com/bue6zm6w)

###Grouping by the result of calculation

You can pass a function with a rule of grouping data in the treegrid as a parameter to the **groupBy()** method. The function returns the name of a group and takes one parameter: 

- **item** - a data item

~~~js
treegrid.groupBy(function (item) {
	if (!item.area || item.area < 0) {
		return "N.A.";
	}
	if (item.area < 25000) {
		return "Small";
	} else if (item.area < 60000) {
		return "Medium";
	}
	return "Big";
});
~~~

[TreeGrid. Group data items by a property](https://snippet.dhtmlx.com/bue6zm6w)

If necessary, you can set a template to the title of the group via the [](treegrid/api/treegrid_grouptitletemplate_config.md) configuration option.

Filtering data
------------------

You can filter grid data by the specified criteria with the help of the **filter()** method of data collection. The method takes as a parameter an object with the properties described below:

<table>
	<tbody>
        <tr>
			<td><b>rule</b></td>
			<td>(<i>object|function</i>) the filtering criteria. It can be:
			<ul>
			<li>a filtering function. It takes as a parameter a data item and returns an object with a filtering rule.</li>
				or:
				<li>an object with the following attributes:<br/>
					- <b>by</b> - (<i>string</i>) mandatory, the id of a column<br/>
					- <b>match</b> - (<i>string</i>) mandatory, a pattern to match <br/>
					- <b>compare</b> - (<i>function</i>) a function for extended filtering that takes three parameters:
					<ol>- <b>value</b> - the value to compare (e.g. a column in a row) </ol>
					<ol>- <b>match</b> - a pattern to match </ol>
					<ol>- <b>item</b> - a data item the values of which should be compared (e.g. a row) </ol>
				</li>
			</ul></td>
		</tr>
        <tr>
			<td><b>config</b></td>
			<td>(<i>object</i>) optional, an object with two properties:
				<ul><li><b>type</b> (<i>string</i>) optional, defines the area the filtering will be applied: "all", "level", "leafs"</li>
				<li><b>level</b> (<i>number</i>) optional, the level the filtering will be applied to</li>
				<li><b>add</b> (<i>boolean</i>) defines whether each next filtering will be applied to the already filtered data (<i>true</i>), or to the initial data (<i>false</i>, default)</li>
				<li><b>multiple</b> (<i>boolean</i>) defines whether a filtering rule will be added to the already applied filters (<i>true</i>, default), or previous filters should be removed in advance (<i>false</i>)</li>
				</ul>
				</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
// filtering by the specified rule
tree.data.filter(function (item) {
    return item.value.toLowerCase().indexOf("a") !== -1;
});

// filtering the "b" column by value "Tyro"
treegrid.data.filter({ by:"b", match:"Tyro" });

// filtering data by several criteria at once
treegrid.data.filter({
	by:"b",
    compare:function(val,match,item){
		if(item.a!=="Some"){
			return val === "New"
		}
		return false;
	}
});
~~~

{{editor	https://snippet.dhtmlx.com/epsslwcd	TreeGrid. Basic Filter}}

{{editor	https://snippet.dhtmlx.com/zdecovib	TreeGrid. External filter}}

Sorting data
--------------

It is possible to sort data in the grid via the **sort()** method of data collection. The method takes an object with the following attributes:

<table>
	<tbody>
        <tr>
			<td><b>by</b></td>
			<td>(<i>string</i>) the id of a column</td>
		</tr>
		<tr>
			<td><b>dir</b></td>
			<td>(<i>string</i>) the direction of sorting "asc" or "desc"</td>
		</tr>
		<tr>
			<td><b>as</b></td>
			<td>(<i>function</i>) a function that specifies the type to sort data as</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
treeGrid.data.sort({
	by: "price",
	dir: "asc",
	as: function (value) { return value ? value : "" }
});
~~~

{{editor	https://snippet.dhtmlx.com/bvfnpvwv	TreeGrid. Sorting data}}

To discard all applied sorting rules, call the method without parameters:

~~~js
treegrid.data.sort();
~~~

### Custom sorting

You can also specify the **rule** attribute in a passed object instead of the default ones and set a custom function for sorting. For example:

~~~js
treegrid.data.sort({
	rule: (a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0) 
});
~~~

Getting the sorting state
--------------------------

To get the current state of sorting data in TreeGrid, use the [](treegrid/api/treegrid_getsortingstate_method.md) method. The method returns an object with two attributes:

<table>
	<tbody>
        <tr>
			<td><b>dir</b></td>
			<td>(<i>string</i>) the sorting direction (desc, asc)</td>
		</tr>
		<tr>
			<td><b>by</b></td>
			<td>(<i>string</i>)the id of a column that the treegrid is sorted by</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
var state = treegrid.getSortingState(); 
// -> {dir: "desc", by: "country"}
~~~

{{editor	https://snippet.dhtmlx.com/bdwwhvls	TreeGrid. Get sorting state}}

Editing data
------------------

You can easily edit the desired cell of a treegrid with the help of the [editCell()](treegrid/api/treegrid_editcell_method.md) method. It takes two parameters:

<table>
	<tbody>
        <tr>
			<td><b>row</b></td>
			<td>(<i>string</i>) the id of a row</td>
		</tr>
		<tr>
			<td><b>col</b></td>
			<td>(<i>string</i>) the id of a column</td>
		</tr>
    </tbody>
</table>

For example, you can edit the first cell of the "project" column like this:

~~~js
treegrid.editCell(grid.data.getId(0),"project");
~~~

{{editor	https://snippet.dhtmlx.com/zm6wh1ss	TreeGrid. Editing data}}

To finish editing of a cell, use the [editEnd()](treegrid/api/treegrid_editend_method.md) method. The method takes a *boolean* value as a parameter to define whether the edited data will be saved after the editing of a cell is complete (if *true*, the made changes won't be saved).

~~~js
treegrid.editEnd(); // the edited data will be saved

treegrid.editEnd(true); // the edited data won't be saved
~~~

{{note The [editEnd()](treegrid/api/treegrid_editend_method.md) method does not work if [the type of the column editor](treegrid/configuration.md#columneditors) is defined as **checkbox**.}}


Expanding/collapsing nodes
-------------------------

### Expand/collapse a certain node

To expand a particular node in a treegrid by its id, use the [](treegrid/api/treegrid_expand_method.md) method:

~~~js
treegrid.expand("native");
~~~

To collapse a treegrid node, make use of the [](treegrid/api/treegrid_collapse_method.md) method:

~~~js
treegrid.collapse("native");
~~~

{{editor	https://snippet.dhtmlx.com/1grpsaa2	TreeGrid. Expand/Collapse nodes}}

### Expand/collapse all nodes

It is also possible to expand/collapse all TreeGrid nodes using the two corresponding methods - [](treegrid/api/treegrid_expandall_method.md) and treegrid/api/treegrid_collapseall_method.md:

~~~js
// expand all treegrid nodes
treegrid.expandAll();
// collapse all treegrid nodes
treegrid.collapseAll();
~~~

{{editor	https://snippet.dhtmlx.com/1grpsaa2	TreeGrid. Expand/Collapse nodes}}

Exporting TreeGrid
-------------------

You can easily export data of TreeGrid into the Excel or CSV format.

###Exporting data to Excel 

dhtmlxTreeGrid provides the possibility to export data from TreeGrid into an Excel file by calling the **export()** method of the export module. The method takes an object with export settings as a parameter.

~~~js
treegrid.export.xls({
	url: "//export.dhtmlx.com/excel"
});
~~~

{{editor	https://snippet.dhtmlx.com/zyfois4q	TreeGrid. Export}}

Export settings include:

<table>
	<tbody>
        <tr>
			<td><b>url</b></td>
			<td>(<i>string</i>) the link to the server side where export will be processed. <br/>By default, it is <b>"//export.dhtmlx.com/excel"</b></td>
		</tr>
		<tr>
			<td><b>name</b></td>
			<td>(<i>string</i>) the name of a ready Excel file</td>
		</tr>
    </tbody>
</table>

###Exporting data to CSV

You can export data from TreeGrid to the CSV format with the **csv()** method of the Export module. The method takes an object with export settings as a parameter:

<table>
	<tbody>
        <tr>
			<td><b>asFile</b></td>
			<td>(<i>boolean</i>) defines whether TreeGrid should be exported to a file, <i>true</i> by default. To export TreeGrid only as a CSV string, you need to set <i>asFile:false</i>.</td>
		</tr>
		<tr>
			<td><b>name</b></td>
			<td>(<i>string</i>) the name of the exported CSV file (if asFile is not set to <i>false</i>).</td>
		</tr>
		<tr>
			<td><b>flat</b></td>
			<td>(<i>boolean</i>) defines whether TreeGrid data should be exported as a flat structure; <i>false</i> by default. </td>
		</tr>
		<tr>
			<td><b>rowDelimiter</b></td>
			<td>(<i>string</i>) a newline ("\n") by default. A separator between rows, can be a tab - "\t", or any other value. </td>
		</tr>
		<tr>
			<td><b>columnDelimiter</b></td>
			<td>(<i>string</i>) a comma (",") by default. A separator between columns, can be a semicolon - ";", or any other value.</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
treegrid.export.csv({
	name:"treegrid_data", // data will be exported to a CSV file named "treegrid_data"
    rowDelimiter: "\t", // the tab delimiter will be used to separate rows
    columnDelimiter: ";" // the semicolon delimiter will be used to separate columns
});
~~~

{{editor	https://snippet.dhtmlx.com/zyfois4q	TreeGrid. Export}}

The **csv()** method returns a CSV string with TreeGrid data.


Repainting TreeGrid
------------------

In case you've changed some configuration settings of a treegrid, you can repaint it on a page via the **paint()** method:

~~~js
treegrid.paint();
~~~

Destructing TreeGrid
-------------------

When it's necessary to release resources occupied by TreeGrid during its activity, you can make use of the **destructor()** method:

~~~js
treegrid.destructor();
~~~

Using Selection API
--------------------

For information on using Selection API, read [Work with Selection Object](treegrid/usage_selection.md).


