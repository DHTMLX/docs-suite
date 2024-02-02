---
sidebar_label: Work with TreeGrid
title: JavaScript TreeGrid - Work with TreeGrid 
description: You can explore how to work with TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with TreeGrid

## Working with columns and cells

The API of DHTMLX TreeGrid allows setting configuration of columns, getting an object of a particular column as well as the parameters of a certain cell.

### Setting columns configuration

You can specify the configuration of TreeGrid columns on the fly via the [`setColumns`](treegrid/api/treegrid_setcolumns_method.md) method. It takes an array with columns objects as a parameter.

~~~js
treegrid.setColumns([
    { id: "a", header: [{ text: "New header for column a" }] },
    { id: "b", header: [{ text: "New header for column b" }] },
    // more columns objects
]);
~~~

You can find the full list of the available configuration options of a TreeGrid column [here](treegrid/api/api_treegridcolumn_properties.md).

### Getting configuration of a column

It is possible to return an object with attributes of a column via its id. Use the [](treegrid/api/treegrid_getcolumn_method.md) method for this purpose.

~~~js
const column = treegrid.getColumn("b"); // ->
// {width: 100, id: "b", header: Array(1), $cellCss: {…}, type: "string"
~~~

The method returns an object with configuration of the specified column. You can find the list of properties that the return object can contain [here](treegrid/api/treegrid_getcolumn_method.md).

### Getting configuration of a cell

There is the [](treegrid/api/treegrid_getcellrect_method.md) method that returns an object with coordinates of a cell. The method takes as parameters the ids of the row and the column the cell belongs to:

~~~js
const rect = treegrid.getCellRect("1","c");
// -> {x: 200, y: -40, height: 40, width: 200}
~~~

The return object includes the following attributes:

<table>
    <tbody>
        <tr>
            <td><b>x</b></td>
            <td>(<i>number</i>) the X coordinate of a cell</td>
        </tr>
        <tr>
            <td><b>y</b></td>
        	<td>(<i>number</i>) the Y coordinate of a cell</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>number</i>) the height of a cell</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(<i>number</i>) the width of a cell</td>
		</tr>
    </tbody>
</table>

### Hiding/showing a column

It is possible to show and hide a column in the grid via the [](treegrid/api/treegrid_showcolumn_method.md) and [](treegrid/api/treegrid_hidecolumn_method.md) methods. 

~~~js
//showing a column
treegrid.showColumn(col);
//hiding a column
treegrid.hideColumn(col);
~~~

**Related sample**: [TreeGrid. Show/hide column](https://snippet.dhtmlx.com/1gekn97m)

Since the object of a column has the [hidden](treegrid/configuration.md#hidden-columns) property, the `showColumn()` method changes the value of the `hidden` property to *false* while the `hideColumn()` method changes the value of the property to *true*.

### Checking visibility of a column

You can check whether a column is hidden or shown on a page using the [](treegrid/api/treegrid_iscolumnhidden_method.md) method. The method returns *true*, if a column is visible, and *false* if it's hidden.

~~~js
treegrid.isColumnHidden("country"); // -> true|false
~~~

**Related sample**: [TreeGrid. Is column hidden](https://snippet.dhtmlx.com/fcjfp19d)

## Getting header filter

You may want to manipulate a filter specified in the header of a treegrid, for example, to set/unset focus on the filter, to change the filter, or clear it. To do that, you should apply the [](treegrid/api/treegrid_getheaderfilter_method.md) method to get an object with methods of the header filter and apply the necessary method. For example:

~~~js
// set a value by which a column will be filtered
treegrid.getHeaderFilter("name").setValue("Brazil");

// set focus on the filter
treegrid.getHeaderFilter("name").focus();

// remove focus from the filter
treegrid.getHeaderFilter("name").blur();

// get an object of the filter
const filter = treegrid.getHeaderFilter("name").getFilter();
console.log(filter);
// -> returns Combobox
//  {config: {…}, _uid: 'u1670576316762', events: o, data: d, popup: f, …}

// clear the value set in the filter
treegrid.getHeaderFilter("name").clear();
~~~

**Related sample**: [TreeGrid. Get header filter](https://snippet.dhtmlx.com/vg5o912t)

## Working with rows

### Adding/removing a row

#### Adding a row

You may add a new row into the treegrid by using the [](../tree_collection/api/treecollection_add_method.md) method of **TreeCollection**:

~~~js
treegrid.data.add({
    "name": "The Daughter of the Commandant",
    "price": "6.99",
    "cover": "Paperback",
    "ships": "24 hours",
    "inStock": "3 <input type='checkbox' checked />",
	"parent": "c.3"
});
~~~

#### Removing a row

To remove the necessary row from the treegrid, apply the [](../tree_collection/api/treecollection_remove_method.md) method of **TreeCollection**. Pass the id of the row that should be removed to the method:

~~~js
treegrid.data.remove("5");
~~~

Here is an example of removing a currently selected row: 

~~~js
const cell = treegrid.selection.getCell();
treegrid.data.remove(cell.row.id);
~~~

**Related sample**: [TreeGrid. Delete row](https://snippet.dhtmlx.com/dymxt5pf)

For more information about the selection functionality in TreeGrid, read the [Selection](treegrid/configuration.md/#selection) and [Work with selection object](treegrid/usage_selection.md) articles.

#### Removing all rows

If you need to remove all rows at once, use the [](../tree_collection/api/treecollection_removeall_method.md) method of **TreeCollection**:

~~~js
treegrid.data.removeAll();
~~~

### Hiding/showing a row

Starting from v7.0, it is possible to show and hide a row in the treegrid via the [](treegrid/api/treegrid_showrow_method.md) and [](treegrid/api/treegrid_hiderow_method.md) methods. 

~~~js
//showing a row
treegrid.showRow(rowId);
//hiding a row
treegrid.hideRow(rowId);
~~~

**Related sample**: [TreeGrid. Show / hide row](https://snippet.dhtmlx.com/6geqbtvv)

### Checking visibility of a row

You can check whether a row is hidden or shown on a page using the [](treegrid/api/treegrid_isrowhidden_method.md) method. The method returns *true*, if a row is hidden, and *false* if it's visible.

~~~js
treegrid.isRowHidden("1"); // -> true|false
~~~

**Related sample**: [TreeGrid. Show / hide row](https://snippet.dhtmlx.com/6geqbtvv)

## Adding/removing spans

You can manipulate columns and rows spans inside the grid with the help of corresponding API methods: [](treegrid/api/treegrid_addspan_method.md), [](treegrid/api/treegrid_removespan_method.md) and [](treegrid/api/treegrid_getspan_method.md).

### Adding spans

In order to add a col/row span into the grid, use the [](treegrid/api/treegrid_addspan_method.md) method. Pass an object with configuration of a span as a parameter:

~~~js
treegrid.addSpan({ 
    row: "0", 
    column: "a", 
    rowspan: 5 
});
~~~

These are possible fields of a span object:

<table>
	<tbody>
        <tr>
			<td><b>row</b></td>
			<td>(<i>string|number</i>) mandatory, the id of a row</td>
		</tr>
		<tr>
			<td><b>column</b></td>
			<td>(<i>string|number</i>) mandatory, the id of a column</td>
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
			<td>(<i>string|number</i>) optional, the text in a spanned row/column</td>
		</tr>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) optional, the name of the CSS class that will be applied to a span</td>
		</tr>
    </tbody>
</table>

### Getting spans

You can return the col/row span a cell is a part of using the [](treegrid/api/treegrid_getspan_method.md) method. It takes the ids of the row and the column the cell belongs to as parameters:

~~~js
const span = treegrid.getSpan("10","a"); 
// -> {row:"10", column:"a", colspan:4, text:"Some header", css:"myCustomColspan"}
~~~

As a result, you'll get an object with a span configuration, if any span includes the specified cell. Attributes of a span object are described above.

### Removing spans

To remove an existing span, make use of the [](treegrid/api/treegrid_removespan_method.md) method. It takes the ids of the row and the column as parameters: 

~~~js
treegrid.removeSpan("10","a");
~~~

## Working with data

### Grouping data

To make data in TreeGrid well-structured and easily understood you can group data with the help of the [](treegrid/api/treegrid_groupby_method.md) method. There are two options of grouping data.

#### Grouping by a column

To group the content of a treegrid by values of the specified column, pass the id of the column as a parameter to the `groupBy()` method:

- **id** - (*string, number*) the id of a column

~~~
treegrid.groupBy("age");
~~~

**Related sample**: [TreeGrid. Group data items by a property](https://snippet.dhtmlx.com/bue6zm6w)

#### Grouping by the result of calculation

You can pass a function with a rule of grouping data in the treegrid as a parameter to the `groupBy()` method. The function returns the name of a group and takes one parameter: 

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

**Related sample**: [TreeGrid. Group data items by a property](https://snippet.dhtmlx.com/bue6zm6w)

If necessary, you can set a template to the title of the group via the [](treegrid/api/treegrid_grouptitletemplate_config.md) configuration option.

### Filtering data

You can filter grid data by the specified criteria with the help of the `filter()` method of data collection. The method takes as a parameter an object with the properties described below:

<table>
	<tbody>
        <tr>
			<td><b>rule</b></td>
			<td>(<i>function | object</i>) the filtering criteria. It can be:<ul><li>a filtering function. It takes as a parameter a data item and returns <i>true/false</i></li>or:<li>an object with the following attributes:<br/>- <b>by</b> - (<i>string | number</i>) mandatory, the id of a column<br/>- <b>match</b> - (<i>string</i>) mandatory, a pattern to match <br/>- <b>compare</b> - (<i>function</i>) a function for extended filtering that takes three parameters:<ol>- <b>value</b> - the value to compare (e.g. a column in a row) </ol><ol>- <b>match</b> - a pattern to match </ol><ol>- <b>item</b> - a data item the values of which should be compared (e.g. a row) </ol></li></ul></td>
		</tr>
        <tr>
			<td><b>config</b></td>
			<td>(<i>object</i>) optional, an object with the following properties:<ul><li><b>type</b> (<i>string</i>) optional, defines the area the filtering will be applied: "all", "level", "leafs"</li><li><b>level</b> (<i>number</i>) optional, the level the filtering will be applied to</li><li><b>add</b> (<i>boolean</i>) optional, defines whether each next filtering will be applied to the already filtered data (<i>true</i>), or to the initial data (<i>false</i>, default)</li><li><b>id</b> (<i>string</i>) optional, the id of the filter</li><li><b>permanent</b> (<i>boolean</i>) - optional, <i>true</i> to make the current filter permanent. It will be applied even if the next filtering doesn't have the <b>add:true</b> property in its configuration object. Such a filter can be removed just with the resetFilter() method</li></ul></td>
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

**Related sample**: [TreeGrid. Filter](https://snippet.dhtmlx.com/epsslwcd)

**Related sample**: [TreeGrid. External filter](https://snippet.dhtmlx.com/zdecovib)

### Sorting data

It is possible to sort data in the grid via the `sort()` method of data collection. The method takes an object with the following attributes:

<table>
	<tbody>
        <tr>
			<td><b>by</b></td>
			<td>(<i>string | number</i>) the id of a column</td>
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

**Related sample**: [TreeGrid. Sorting](https://snippet.dhtmlx.com/bvfnpvwv)

To discard all applied sorting rules, call the method without parameters:

~~~js
treegrid.data.sort();
~~~

#### Custom sorting

You can also specify the **rule** attribute in a passed object instead of the default ones and set a custom function for sorting. For example:

~~~js
treegrid.data.sort({
	rule: (a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0) 
});
~~~

#### Getting the sorting state

To get the current state of sorting data in TreeGrid, use the [](treegrid/api/treegrid_getsortingstate_method.md) method. The method returns an object with two attributes:

<table>
	<tbody>
        <tr>
			<td><b>dir</b></td>
			<td>(<i>string</i>) the sorting direction (desc, asc)</td>
		</tr>
		<tr>
			<td><b>by</b></td>
			<td>(<i>string | number</i>)the id of a column that the treegrid is sorted by</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
const state = treegrid.getSortingState(); 
// -> {dir: "desc", by: "country"}
~~~

**Related sample**: [TreeGrid. Get sorting state](https://snippet.dhtmlx.com/bdwwhvls)

### Editing data

You can easily edit the desired cell of a treegrid with the help of the [](treegrid/api/treegrid_editcell_method.md) method. It takes two parameters:

<table>
	<tbody>
        <tr>
			<td><b>row</b></td>
			<td>(<i>string, number</i>) the id of a row</td>
		</tr>
		<tr>
			<td><b>col</b></td>
			<td>(<i>string, number</i>) the id of a column</td>
		</tr>
		<tr>
			<td><b>editorType</b></td>
			<td>(<i>string</i>) optional, the type of an editor used in a cell: "input"|"select"|"datePicker"|"checkbox"|"combobox"|"textarea"|"multiselect"</td>
		</tr>
    </tbody>
</table>

For example, you can edit the first cell of the "project" column like this:

~~~js
treegrid.editCell(grid.data.getId(0),"project");
~~~

**Related sample**: [TreeGrid. Edit first cell](https://snippet.dhtmlx.com/zm6wh1ss)

To finish editing of a cell, use the [](treegrid/api/treegrid_editend_method.md) method. The method takes a *boolean* value as a parameter to define whether the edited data will be saved after the editing of a cell is complete (if *true*, the made changes won't be saved).

~~~js
treegrid.editEnd(); // the edited data will be saved

treegrid.editEnd(true); // the edited data won't be saved
~~~

:::note
The [](treegrid/api/treegrid_editend_method.md) method does not work if [the type of the column editor](treegrid/configuration.md#types-of-column-editor) is defined as **checkbox**.
:::

### Exporting data

You can easily export data of TreeGrid into the Excel, CSV, PDF or PNG format.

#### Exporting data to Excel

DHTMLX TreeGrid provides the possibility to export data from TreeGrid into an Excel file by calling the [`xlsx()`](treegrid/api/export/treegrid_xlsx_method.md) method of the export module. The method takes an object with export settings as a parameter.

~~~js
treegrid.export.xlsx({
	url: "//export.dhtmlx.com/excel"
});
~~~

**Related sample**: [TreeGrid. Export to .xlsx and .csv](https://snippet.dhtmlx.com/zyfois4q)

#### Exporting data to CSV

You can export data from TreeGrid to the CSV format with the [`csv()`](treegrid/api/export/treegrid_csv_method.md) method of the Export module. The method takes an object with export settings as a parameter.

~~~js
treegrid.export.csv({
	name:"treegrid_data", // data will be exported to a CSV file named "treegrid_data"
    rowDelimiter: "\t", // the tab delimiter will be used to separate rows
    columnDelimiter: ";" // the semicolon delimiter will be used to separate columns
});
~~~

**Related sample**: [TreeGrid. Export to .xlsx and .csv](https://snippet.dhtmlx.com/zyfois4q)

The **csv()** method returns a CSV string with TreeGrid data.

#### Exporting data to PDF

The [`pdf()`](treegrid/api/export/treegrid_pdf_method.md) method of the Export module allows you to export data from TreeGrid into a PDF file. The method takes an object with export settings as a parameter.

~~~js
treegrid.export.pdf({
    format: "A4",
    scale: 0.85,
    displayHeaderFooter: true,
    theme: "dark",
});
~~~

**Related sample**: [TreeGrid. Export to PDF/PNG](https://snippet.dhtmlx.com/iyqmmcoh)

#### Exporting data to PNG

The [`png()`](treegrid/api/export/treegrid_png_method.md) method of the Export module allows you to export data from TreeGrid into a PNG file. The method takes an object with export settings as a parameter.

~~~js
treegrid.export.pdf({
    theme: "dark",
});
~~~

**Related sample**: [TreeGrid. Export to PDF/PNG](https://snippet.dhtmlx.com/iyqmmcoh)

## Expanding/collapsing nodes

### Expand/collapse a certain node

To expand a particular node in a treegrid by its id, use the [](treegrid/api/treegrid_expand_method.md) method:

~~~js
treegrid.expand("native");
~~~

To collapse a treegrid node, make use of the [](treegrid/api/treegrid_collapse_method.md) method:

~~~js
treegrid.collapse("native");
~~~

**Related sample**: [TreeGrid. Expand / collapse rows](https://snippet.dhtmlx.com/1grpsaa2)

### Expand/collapse all nodes

It is also possible to expand/collapse all TreeGrid nodes using the two corresponding methods - [](treegrid/api/treegrid_expandall_method.md) and [](treegrid/api/treegrid_collapseall_method.md):

~~~js
// expand all treegrid nodes
treegrid.expandAll();
// collapse all treegrid nodes
treegrid.collapseAll();
~~~

**Related sample**: [TreeGrid. Expand / collapse rows](https://snippet.dhtmlx.com/1grpsaa2)

## Controlling scroll behavior

The API of DHTMLX TreeGrid provides the possibility to set scrolls to the nevessary position and to get the current state of scrolls.

### Scrolling to specific coordinates

You can scroll grid content to exact position defined by x and y coordinates via the [](treegrid/api/treegrid_scroll_method.md) method. Pass the coordinates as parameters of the method.

~~~js
treegrid.scroll(75,230);
~~~

### Scrolling to specific treegrid cell

It is also possible to scroll treegrid content to a particular cell. Pass the ids of the row and the column as parameters:

~~~js
treegrid.scrollTo("15","c");
~~~

**Related sample**: [TreeGrid. Controlling scroll behavior](https://snippet.dhtmlx.com/kxytdnvi)

### Getting the state of scroll

To return the current state of scroll, use the [](treegrid/api/treegrid_getscrollstate_method.md) method. 

~~~js
const state = treegrid.getScrollState(); // -> {x:0,y:0}
~~~

It returns an object with x,y coordinates of a position the grid has been scrolled to.

## Repainting TreeGrid

In case you've changed some configuration settings of a treegrid, you can repaint it on a page via the **paint()** method:

~~~js
treegrid.paint();
~~~

## Destructing TreeGrid

When it's necessary to release resources occupied by TreeGrid during its activity, you can make use of the **destructor()** method:

~~~js
treegrid.destructor();
~~~

## Using selection API

For information on using Selection API, read [Work with Selection Object](treegrid/usage_selection.md).
