---
sidebar_label: Work with Grid
title: JavaScript Grid - Work with Grid 
description: You can explore how to work with Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Grid

## Working with columns and cells

The API of DHTMLX Grid allows setting configuration of columns, getting an object of a particular column as well as the parameters of a certain cell.

### Setting columns configuration

You can specify the configuration of Grid columns on the fly via the [](grid/api/grid_setcolumns_method.md) method. It takes an array with columns objects as a parameter.

~~~js
grid.setColumns([
    { id: "a", header: [{ text: "New header for column a" }] },
    { id: "b", header: [{ text: "New header for column b" }] },
    // more columns objects
]);
~~~

You can find the full list of the available configuration options of a Grid column [here](grid/api/api_gridcolumn_properties.md).

### Getting configuration of a column

It is possible to return an object with attributes of a column via its id. Use the [](grid/api/grid_getcolumn_method.md) method for this purpose.

~~~js
const column = grid.getColumn("b"); // ->
// -> { width: 100, id: "b", header: Array(1), $cellCss: {…}, type: "string" }
~~~

The method returns an object with configuration of the specified column. You can find the list of properties that the return object can contain [here](grid/api/grid_getcolumn_method.md).

### Getting configuration of a cell

There is the [](grid/api/grid_getcellrect_method.md) method that returns an object with coordinates of a cell. The method takes as parameters the ids of the row and the column the cell belongs to:

~~~js
const rect = grid.getCellRect("1", "c");
// -> { x: 200, y: -40, height: 40, width: 200 }
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

It is possible to show and hide a column in the grid via the [](grid/api/grid_showcolumn_method.md) and [](grid/api/grid_hidecolumn_method.md) methods.

~~~js
//showing a column
grid.showColumn(colId);
//hiding a column
grid.hideColumn(colId);
~~~

**Related sample**: [Grid. Show / hide column](https://snippet.dhtmlx.com/n4zjwsqj)

Since the object of a column has the [hidden](grid/configuration.md#hidden-columns) property, the `showColumn()` method changes the value of the `hidden` property to *false* while the `hideColumn()` method changes the value of the property to *true*.

### Checking visibility of a column

You can check whether a column is hidden or shown on a page using the [](grid/api/grid_iscolumnhidden_method.md) method. The method returns *true*, if a column is hidden, and *false* if it's visible.

~~~js
grid.isColumnHidden("country"); // -> true|false
~~~

**Related sample**: [Grid. Is column hidden](https://snippet.dhtmlx.com/rdqhwnjv)

## Getting header filter

You may want to manipulate a filter specified in the header of a grid, for example, to set/unset focus on the filter, to change the filter, or clear it. To do that, you should apply the [](grid/api/grid_getheaderfilter_method.md) method to get an object with methods of the header filter and apply the necessary method. For example:

~~~js
// set a value by which a column will be filtered
grid.getHeaderFilter("country").setValue("Brazil");

// set focus on the filter
grid.getHeaderFilter("country").focus();

// remove focus from the filter
grid.getHeaderFilter("country").blur();

// get an object of the filter
const filter = grid.getHeaderFilter("country").getFilter();
console.log(filter);
// -> returns Combobox
//  {config: {…}, _uid: 'u1670500020936', events: o, data: d, popup: f, …}

// clear the value set in the filter
grid.getHeaderFilter("country").clear();
~~~

**Related sample**: [Grid. Get header filter](https://snippet.dhtmlx.com/n8srjle3)

## Working with rows

### Adding/removing a row

#### Adding a row

You may add a new row into the grid by using the [](../data_collection/api/datacollection_add_method.md) method of **DataCollection**:

~~~js
grid.data.add({
    "country": "Estonia",
    "population": "1326535",
    "yearlyChange": "0.0070",
    "netChange": "3782",
    "density": "31",
    "area": "45339",
    "migrants": "3911",
    "fert": "1.59",
    "age": "42.4",
    "urban": "0.6790",
    "id": "136"
}, 0);
~~~

#### Removing a row

To remove the necessary row from the grid, apply the [](../data_collection/api/datacollection_remove_method.md) method of **DataCollection**. Pass the id of the row that should be removed to the method:

~~~js
grid.data.remove("5");
~~~

Here is an example of removing a currently selected row:

~~~js
const cell = grid.selection.getCell();
grid.data.remove(cell.row.id);
~~~

**Related sample**: [Grid. Delete row](https://snippet.dhtmlx.com/8ezuj7io)

For more information about the selection functionality in Grid, read the [Selection](grid/configuration.md/#selection) and [Work with selection object](grid/usage_selection.md) articles.

#### Removing all rows

If you need to remove all rows at once, use the [](../data_collection/api/datacollection_removeall_method.md) method of **DataCollection**:

~~~js
grid.data.removeAll();
~~~

### Hiding/showing a row

Starting from v7.0, it is possible to show and hide a row in the grid via the [](grid/api/grid_showrow_method.md) and [](grid/api/grid_hiderow_method.md) methods.

~~~js
//showing a row
grid.showRow(rowId);
//hiding a row
grid.hideRow(rowId);
~~~

**Related sample**: [Grid. Show / hide row](https://snippet.dhtmlx.com/8y83d6jv)

### Checking visibility of a row

You can check whether a row is hidden or shown on a page using the [](grid/api/grid_isrowhidden_method.md) method. The method returns *true*, if a row is hidden, and *false* if it's visible.

~~~js
grid.isRowHidden("1"); // -> true|false
~~~

**Related sample**: [Grid. Show / hide row](https://snippet.dhtmlx.com/8y83d6jv)

## Adding/removing spans

You can manipulate columns and rows spans inside the grid with the help of the corresponding API methods: `addSpan()`, `removeSpan()` and `getSpan()`.

### Adding spans

In order to add a column/row span into the grid, use the [](grid/api/grid_addspan_method.md) method. Pass an object with configuration of a span as a parameter:

~~~js
grid.addSpan({ 
    row: "0", 
    column: "a", 
    rowspan: 5 
});
// grid.paint();
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

You can return the column/row span a cell is a part of using the [](grid/api/grid_getspan_method.md) method. It takes the ids of the row and the column the cell belongs to as parameters:

~~~js
const span = grid.getSpan("10", "a"); 
// -> { row: "10", column: "a", colspan: 4, text: "Some header", css: "myCustomColspan" }
~~~

As a result, you'll get an object with a span configuration, if any span includes the specified cell. Attributes of a span object are described above.

### Removing spans

To remove an existing span, make use of the [](grid/api/grid_removespan_method.md) method. It takes the ids of the row and the column as parameters:

~~~js
grid.removeSpan("10", "a");
~~~

## Working with data

### Filtering data

You can filter grid data by the specified criteria with the help of the `filter()` method of [DataCollection](data_collection.md). The method takes as a parameter an object with the properties described below:

<table>
    <tbody>
        <tr>
            <td><b>rule</b></td>
            <td>(<i>object|function</i>) the filtering criteria. It can be:<ul><li>a filtering function. It takes as a parameter a data item (e.g. a row) and returns <i>true/false</i></li>or:<li>an object with the following attributes:<br/>- <b>by</b> - (<i>string | number</i>) mandatory, the id of a column<br/>- <b>match</b> - (<i>string</i>) mandatory, a pattern to match <br/>- <b>compare</b> - (<i>function</i>) a function for extended filtering that takes three parameters:<ol>- <b>value</b> - the value to compare (e.g. a column in a row) </ol><ol>- <b>match</b> - a pattern to match </ol><ol>- <b>item</b> - a data item the values of which should be compared (e.g. a row) </ol></li></ul></td>
        </tr>
        <tr>
            <td><b>config</b></td>
            <td>(<i>object</i>) optional, an object with the following properties:<ul><li><b>id</b> (<i>string</i>) - optional, the id of the filter</li><li><b>add</b> (<i>boolean</i>) defines whether each next filtering will be applied to the already filtered data (<i>true</i>), or to the initial data (<i>false</i>, default)</li><li><b>permanent</b> (<i>boolean</i>) - optional, <i>true</i> to make the current filter permanent. It will be applied even if the next filtering doesn't have the <b>add:true</b> property in its configuration object. Such a filter can be removed just with the resetFilter() method</li></ul></td>
        </tr>
    </tbody>
</table>
<br/>

~~~js
grid.data.filter(function (item) {
  return item.a > 0 && item.b !== "Apple";
});

grid.data.filter(function (item) {
  return item.a > 0 && item.b !== "Apple";
}, {
  add: true
});

grid.data.filter({
  by: "a",
  match: "Orange",
  compare: function (value, match, item) {
    if (item.a !== "Some") {
      return val === "New";
    }
    return false;
  }
}, {
  add: true,
});
~~~

**Related sample**: [Grid. Basic filter](https://snippet.dhtmlx.com/g0zpjqi1)

### Sorting data

It is possible to sort data in the grid via the `sort()` method of [DataCollection](data_collection.md). The method takes two parameters:

<table>
    <tbody>
        <tr>
            <td><b>rule</b></td>
            <td>(<i>object</i>) an object with parameters for sorting. It can take the following attributes:<ul><li><b>by</b> (<i>string | number</i>) the id of a column</li><li><b>dir</b> (<i>string</i>) the direction of sorting "asc" or "desc"</li><li><b>as</b> (<i>function</i>) a function that specifies the type to sort data as</li><li><b>rule</b> (<i>function</i>) optional, a sorting rule; the function must have two parameters and return a number (-1,0,1)</li></ul></td>
        </tr>
        <tr>
            <td><b>config</b></td>
            <td>(<i>object</i>) defines the parameter of sorting. It takes one attribute:<ul><li><b>smartSorting</b> (<i>boolean</i>) specifies whether a sorting rule should be applied each time after changing the data set</li></ul></td>
        </tr>
    </tbody>
</table>
<br/>

~~~js
grid.data.sort({
    by:"a",
    dir:"desc",
    as: function(item){
        return item.toUpperCase(); 
    },
    {
        smartSorting: true
    }
});
~~~

**Related sample**: [Grid. Sorting](https://snippet.dhtmlx.com/81dmbdfd)

#### Custom sorting

You can also specify the **rule** attribute in a passed object instead of the default ones and set a custom function for sorting. For example:

~~~js
grid.data.sort({
    rule: (a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0) 
});
~~~

#### Getting the sorting state

To get the current state of sorting data in Grid, use the [](grid/api/grid_getsortingstate_method.md) method. The method returns an object with two attributes:

<table>
    <tbody>
        <tr>
            <td><b>dir</b></td>
            <td>(<i>string</i>) the sorting direction (desc, asc)</td>
        </tr>
        <tr>
            <td><b>by</b></td>
            <td>(<i>string | number</i>) the id of a column that the grid is sorted by</td>
        </tr>
    </tbody>
</table>
<br/>

~~~js
const state = grid.getSortingState(); 
// -> { dir: "desc", by: "country" }
~~~

**Related sample**: [Grid. Get sorting state](https://snippet.dhtmlx.com/u2vk3ri3)

### Editing data

You can easily edit the desired cell of a grid with the help of the [](grid/api/grid_editcell_method.md) method. It takes two parameters:

<table>
    <tbody>
        <tr>
            <td><b>rowId</b></td>
            <td>(<i>string, number</i>) the id of a row</td>
        </tr>
        <tr>
            <td><b>colId</b></td>
            <td>(<i>string, number</i>) the id of a column</td>
        </tr>
    </tbody>
</table>

For example, you can edit the first cell of the "project" column like this:

~~~js
grid.editCell(grid.data.getId(0), "project");
~~~

**Related sample**: [Grid. Edit the first cell](https://snippet.dhtmlx.com/pqbax5vs)

To finish editing of a cell, use the [](grid/api/grid_editend_method.md) method. The method takes a *boolean* value as a parameter to define whether the edited data will be saved after the editing of a cell is complete (if *true*, the made changes won't be saved).

~~~js
grid.editEnd(); // the edited data will be saved

grid.editEnd(true); // the edited data won't be saved
~~~

:::note
The [](grid/api/grid_editend_method.md) method does not work if [the type of the column editor](grid/configuration.md#types-of-column-editor) is defined as **checkbox**.
:::

### Exporting data

You can easily export data of Grid into the Excel, CSV, PDF, or PNG format.

#### Exporting data to Excel

DHTMLX Grid provides the possibility to export data from Grid into an Excel file by calling the [`xlsx()`](grid/api/export/grid_xlsx_method.md) method of the Export module. The method takes an object with export settings as a parameter.

~~~js
grid.export.xlsx({
    name:"grid_data",
    url: "//export.dhtmlx.com/excel"
});
~~~

**Related sample**: [Grid. Export to xlsx and csv](https://snippet.dhtmlx.com/58oqij47)

#### Exporting data to CSV

You can export data from Grid to the CSV format with the [`csv()`](grid/api/export/grid_csv_method.md) method of the Export module. 

~~~js
grid.export.csv({
    name:"grid_data", // grid data will be exported to a CSV file named "grid_data"
    rowDelimiter: "\t", // the tab delimiter will be used to separate rows
    columnDelimiter: ";" // the semicolon delimiter will be used to separate columns
});
~~~

**Related sample**: [Grid. Export to xlsx and csv](https://snippet.dhtmlx.com/58oqij47)

The `csv()` method returns a CSV string with Grid data.

#### Exporting data to PDF

The [`pdf()`](grid/api/export/grid_pdf_method.md) method of the Export module allows you to export data from Grid into a PDF file. The method takes an object with export settings as a parameter.

~~~js
grid.export.pdf({
    format: "A4",
    scale: 0.75,
    displayHeaderFooter: true,
    theme: "dark",
});
~~~

**Related sample**: [Grid. Export to PDF/PNG](https://snippet.dhtmlx.com/ti9l91mn)

#### Exporting data to PNG

The [`png()`](grid/api/export/grid_png_method.md) method of the Export module allows you to export data from Grid into a PNG file. The method takes an object with export settings as a parameter.

~~~js
grid.export.png({
    theme: "dark",
});
~~~

**Related sample**: [Grid. Export to PDF/PNG](https://snippet.dhtmlx.com/ti9l91mn)

## Grouping data

:::tip pro version only
The described functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

You can group row data by column values to make them more suitable for analysis. The Grid row data grouping functionality allows aggregating data in a group, adjusting the appearance, order and configuration of data grouping and rendering statistics in the summary rows.

It is possible to [set a predefined Grid configuration](#configuring-data-grouping) to initialize Grid with grouped data or to use the [DataCollection API](#using-datacollection-api-for-data-grouping) for grouping Grid data. 

**Related sample:** [Grid. Grouping (PRO)](https://snippet.dhtmlx.com/dvqy4ewe)

:::info important
- Data grouping isn't intended for working with [`lazyDataProxy`](grid/data_loading.md#dynamic-loading)
- Modifying the values of grouped elements won't modify the aggregated values
- You mustn't change the order of elements grouping by drag-n-drop 
:::

### Enabling data grouping

To use the row data grouping functionality in Grid, you need to apply the [`group`](grid/api/grid_group_config.md) configuration property of Grid. You can set the `group` property to *true* to enable grouping, or to specify it as a configuration object to [configure data grouping ](#configuring-data-grouping).

~~~jsx {5}
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    group: true, // enabling grouping in a grid
    groupable: true 
    data: dataset
});
~~~

:::info note
Note that when you initialize Grid with the `group` configuration property, the tree-like mode is enabled for Grid and it will have the `type: tree` property in its configuration.
:::

You can also specify what Grid data will be used for grouping using the `groupable` properties of Grid and of a column.

The [`groupable`](grid/api/grid_groupable_config.md) **property of Grid** enables grouping data by the values in all columns:

~~~jsx {6}
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    group: true, 
    groupable: true // allowing grouping row data by the values of all columns
    data: dataset
});
~~~

:::note
The `groupable` property works only with the [`group`](grid/api/grid_group_config.md) panel.
:::

With the Grid `groupable` property enabled you can:

- drag column headers to the special grouping area - *group panel*. Grid will automatically create groups based on the values from these columns
- group data by several fields by moving a column header to the group panel
- sort the grouped data in two ways: 
    - either by sorting the grouped field beforehand
    - or by clicking a group element on the group panel
- edit the nesting level of grouping by modifying the grouping order by either moving elements to the group panel or removing elements from the group panel

**Related sample:** [Grid. Grouping](https://snippet.dhtmlx.com/dvqy4ewe)

The [`groupable`](grid/api/api_gridcolumn_properties.md) **property of a column** allows grouping data by the values of a certain column:

~~~jsx {3}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "country", header: [{ text: "Country" }], groupable: true },
        { id: "population", header: [{ text: "Population" }] },
        { id: "area", header: [{ text: "Land Area (Km²)" }] }
    ],
    group: true,
    data: dataset
});
~~~

In the above snippet rows will be grouped by the "country" column values, as the `groupable: true` property is specified in its configuration. 

### Configuring data grouping 

With the `group` configuration option set as an *object* you can display and manage the *group panel*, adjust rendering of columns, the order of grouping and specify the data aggregation settings. The `group` configuration object has the properties enumerated below:

- `panel` - (optional) enables the group panel, *true* by default. When the `panel` config is set to *true*, a user can drag columns' headers to the panel of creating and modifying groups

~~~jsx {7-9}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "country", header: [{ text: "Country" }], groupable: true },
        { id: "population", header: [{ text: "Population" }] },
        { id: "area", header: [{ text: "Land Area (Km²)" }] }
    ],
    group: {
        panel: true // enabling the group panel
    },
    data: dataset
});
~~~

- `panelHeight` - (optional) defines the height of the group panel in pixels, which allows adjusting the space for rendering a group of columns, *40* by default

~~~jsx {7-10}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "country", header: [{ text: "Country" }], groupable: true },
        { id: "city", header: [{ text: "City" }] },
        { id: "population", header: [{ text: "Population" }] }
    ],
    group: {
        panel: true,
        panelHeight: 60
    },
    data: dataset
});
~~~

**Related sample:** [Grid. Grouping customization](https://snippet.dhtmlx.com/z3iw2p3k)

- `hideableColumns` - (optional) specifies whether columns will be hidden on a group creation, *true* by default. If set to *false*, columns used for grouping will remain visible

~~~jsx {7-10}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "country", header: [{ text: "Country" }], groupable: true },
        { id: "city", header: [{ text: "City" }] },
        { id: "population", header: [{ text: "Population" }] },
    ],
    group: {
        panel: true,
        hideableColumns: false // columns remain visible after grouping
    },
    data: dataset
});
~~~

**Related sample:** [Grid. Grouping customization](https://snippet.dhtmlx.com/z3iw2p3k)

- `showMissed` - (optional) controls visibility of the elements that don't suit the grouping criteria (e.g. data without values), *true* by default. The following settings are available:
    - if set to *true*, the rows that don't have values for grouping are rendered row by row after all the data
    - if a *string* value is set, e.g. "Missed", the rows that don't have values for grouping are rendered as a separate group the name of which will have the specified string value. This group will be rendered as the last one
    - if set to *false*, the rows that don't suit the grouping criteria won't be rendered

~~~jsx {7-12}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "country", header: [{ text: "Country" }], groupable: true },
        { id: "city", header: [{ text: "City" }], groupable: true },
        { id: "population", header: [{ text: "Population" }] }
    ],
    group: {
        panel: true,
        // elements without values will be rendered as the "Missed" group 
        // at the end of the grid data
        showMissed: "Missed" 
    },
    data: dataset
});
~~~

**Related sample:** [Grid. Grouping missing data](https://snippet.dhtmlx.com/0geopa0v)

- `fields` - (optional) predefines an extended configuration for data grouping by certain columns, by setting the rules of aggregation and rendering of the results. The attributes of the `fields` object correspond to the ids of columns for which the aggregation rules and the order of results are being configured. The configuration of a column is defined by the `IGroupOrder` object that has the following properties:
    - `map` - (optional) an object for data aggregation in a group, where the keys are field names, and the values can be:
        - a tuple `[string, TAggregate]` that specifies the field and the aggregation type ("sum", "count", "min", "max", "avg") from the [`dhx.methods`](helpers/data_calculation_functions.md) helper
        - a user-defined aggregation function `((row: IRow[]) => string | number)`
    - `summary` - (optional) specifies where the total row is rendered - at the `top` or at the `bottom` of the group

A predefined configuration is needed in cases when the group panel is supposed to be used and the rendered group should have the total row.

~~~jsx {7-21}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "country", header: [{ text: "Country" }] },
        { id: "population", header: [{ text: "Population" }] },
        { id: "density", header: [{ text: "Density (P/Km²)" }] }
    ],
    group: {
        panel: true,
        fields: {
            population: {
                summary: "bottom",
                map: {
                    population: ["population", "sum"],
                    customSummary: function(rows) {
                        return rows.length;
                    }
                }
            }
        },
        order: ["population"]
    },
    groupable: true,
    data: dataset
});
~~~

In the above snippet row data is grouped by the values of the "population" column. The "group" column contains:

a) the grouped values of the "population" column and the number of elements that suit the grouping criteria

b) the total rows under the grouped values set by the `summary` property

**Related sample:** [Grid. Grouping and totals in the summary row (PRO)](https://snippet.dhtmlx.com/zhc67itn)

- `order` - (optional) defines the order of grouping by setting the sequence of columns for grouping. The elements of the `order` array can be: 
    - a string that represents a grouping field
    - a function `((row: IRow) => string)` for dynamic defining of a group
    - an `IGroupOrder` object that has the following properties:
        - `map` - (optional) an object for data aggregation in a group, where the keys are field names, and the values can be:
            - a tuple `[string, TAggregate]` that specifies the field and the aggregation type ("sum", "count", "min", "max", "avg") from the `dhx.methods` helper
            - a user-defined aggregation function `((row: IRow[]) => string | number)`
        - `summary` - (optional) specifies where the total row is rendered - at the `top` or at the `bottom` of the group 

**Related sample:** [Grid. Grouping customization](https://snippet.dhtmlx.com/z3iw2p3k)

Below you'll find the examples of configuring Grid via the `order` property:

1. You can specify the *columns' ids* to group data by in the order of their succession. Grouping starts from the first specified column and will continue for each following one:

~~~jsx {7-9}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "country", header: [{ text: "Country" }], groupable: true },
        { id: "city", header: [{ text: "City" }], groupable: true },
        { id: "population", header: [{ text: "Population" }] }
    ],
    group: {
        order: ["country", "city"]
    },
    data: dataset
});
~~~

2. You can also use *callback functions* in an array. A callback function takes the current data row and returns the value for grouping:

~~~jsx {7-13}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "country", header: [{ text: "Country" }] },
        { id: "city", header: [{ text: "City" }]},
        { id: "population", header: [{ text: "Population" }] }
    ],
    group: {
        order: [
            (row) => row.population > 1000000
                ? "Large Population"
                : "Small Population"
        ]
    },
    groupable: true,
    data: dataset
});
~~~

3. You can use a *configuration object* as an element that defines the grouping order:

~~~jsx {25-46}
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            id: "country",
            header: [{ text: "Country" }],
            template: (value, row) => {
                // the $groupSummary service property helps defining the resulting row
                if (row.$groupSummary) { 
                    return `count: ${row.count}`;
                }
                return value;
            }
        },
        {
            id: "population",
            header: [{ text: "Population" }],
            template: (value, { $groupSummary, ageAvg, populationAvg }) => {
                if (!$groupSummary) return value;
                return `Age avg: ${ageAvg}; Population avg: ${populationAvg}`;
            },
        },
        { id: "city", header: [{ text: "City" }],  },
        { id: "age", header: [{ text: "Age" }] },       
    ],
    group: {
        fields: {
            population: {
                summary: "top",
                map: {
                    ageAvg: ["age", "avg"],
                    populationAvg: ["population", "avg"],
                }
            },
        },
        order: [
            {
                by: "country",
                summary: "top",
                map: {
                    count: ["country", "count"]
                }
            },
            "population",
        ],
        hideableColumns: false,
    },
    groupable: true,
    data: dataset
});
~~~

4. You can also *combine columns' ids, functions and configuration objects*. Such an approach provides a flexible control over the grouping order by applying static values for some columns and dynamic values calculated by a function for other columns:

~~~jsx {7-12}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "country", header: [{ text: "Country" }] },
        { id: "city", header: [{ text: "City" }],  },
        { id: "population", header: [{ text: "Population" }] },
    ],
    group: {
        order: [
            "country", // grouping by a country
            (row) => row.city[0].toUpperCase() // grouping by the first letter of the city name
        ]
    },
    groupable: true,
    data: dataset
});
~~~

- `column` - (optional) defines the configuration of a column that renders values by the grouped data. This column will be used as a main one for structuring and rendering data grouped by value

**Related sample:** [Grid. Grouping customization](https://snippet.dhtmlx.com/z3iw2p3k)

You can specify the id of a column in two ways:

1. as a string value of the `column` property of the `group` object: 

~~~jsx {7-9}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "country", header: [{ text: "Country" }], groupable: true },
        { id: "city", header: [{ text: "City" }], groupable: true },
        { id: "population", header: [{ text: "Population" }] }
    ],
    group: {
        column: "group" // defines the id of a column with grouped data
    },
    data: dataset
});
~~~

2. as a string value of the `id` property of the `column` object inside the `group` object

~~~jsx {7-13}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "country", header: [{ text: "Country" }], groupable: true },
        { id: "city", header: [{ text: "City" }], groupable: true },
        { id: "population", header: [{ text: "Population" }] }
    ],
    group: {
        column: {
            id: "group", // defines the id of a column with grouped data
            sortable: false,
            tooltip: false,
        }
    },
    data: dataset
});
~~~

A column with grouped data may contain the following properties in its configuration:

~~~jsx
column: {
    id: string | number,
    header: [
        {
            text?: string | ((content: ISummaryList) => string),
            tooltip?: boolean | object, // true by default
            tooltipTemplate?: (
                content: { value: string } & ISummaryList,
                header: IHeader,
                column: ICol
            ) => string | boolean,
            align?: "left" | "center" | "right", // "left" by default
            css?: string,
            content?: "inputFilter" | "selectFilter" | "comboFilter",
            filterConfig?: {
                filter?: (item: any, input: string) => boolean,
                multiselection?: boolean,
                readonly?: boolean,
                placeholder?: string,
                virtual?: boolean,
                template?: function
            },
            customFilter?: (item: any, input: string) => boolean,
            headerSort?: boolean, // true by default
            sortAs?: (cellValue: any) => string | number,
            htmlEnable?: boolean, // false by default
        }
    ],
    footer?: [
        {
            text?: string | ((content: ISummaryList) => string),
            tooltip?: boolean | object, // true by default
            tooltipTemplate?: (
                content: { value: string } & ISummaryList,
                header: IHeader,
                column: ICol
            ) => string | boolean,
            align?: "left" | "center" | "right", // "left" by default
            css?: string,
            htmlEnable?: boolean, // false by default
        },
    ],
    align?: "left" | "center" | "right", // "left" by default
    resizable?: boolean, // false by default
    sortable?: boolean, // true by default
    mark?: { min?: string, max?: string } |
           (cell: any, columnCells: any[], row?: object, column?: object) => string,
    template?: (cellValue: any, row: object, column: object) => string,
    tooltip?: boolean | object, // true by default
    tooltipTemplate?: (cellValue: any, row: object, column: object) => string,
}
~~~

Note that the `column` object of the `group` configuration option has some properties of a Grid column. You can check the descriptions of the group column object properties enumerated above in the [Grid column properties](grid/api/api_gridcolumn_properties.md#description) guide.

### Making group panel elements closable

You can enable closing of all the elements of the group panel using the [`closable`](grid/api/grid_closable_config.md) configuration option of Grid.

~~~jsx {10}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 150, id: "country", header: [{ text: "Country" }] },
        { width: 150, id: "population", header: [{ text: "Population" }] },
        { width: 150, id: "density", header: [{ text: "Density (P/Km²)" }] },
        { width: 150, id: "area", header: [{ text: "Land Area (Km²)" }] },
    ],
    group: true,
    groupable: true,
    closable: true,
    data: dataset
});
~~~

**Related sample:** [Grid. Grouping customization](https://snippet.dhtmlx.com/z3iw2p3k)

You can also use the [`closable`](grid/api/api_gridcolumn_properties.md) configuration property of a column. It allows making a particular group panel element closable or permanently enabled:

~~~jsx {7-9}
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            width: 150,
            id: "country",
            header: [{ text: "Country" }],
            // grouping of the "country" column is permanently enabled
            // and can't be switched off via the group panel
            closable: false, 
        },
        {
            width: 150,
            id: "population",
            header: [{ text: "Population" }],
            groupable: true,
        },
        { width: 150, id: "density", header: [{ text: "Density (P/Km²)" }] },
        { width: 150, id: "area", header: [{ text: "Land Area (Km²)" }] },
    ],
    group: {
        order: ["country", "population"]
    },
    groupable: true,
    data: dataset
});
~~~

### Using DataCollection API for data grouping

After you've [enabled grouping in Grid](#enabling-data-grouping), you can use the [DataCollection API](../../data_collection) to work with data grouping.

#### Grouping Grid data

To group Grid data, use the [](../data_collection/api/datacollection_group_method.md) method of DataCollection.
The method takes the following parameters:

- `order` - an array that defines the order and configuration for data grouping. Each element in the array can be:
    - a string that represents a grouping field
    - a function `(i: IDataItem) => string` for dynamic defining of a group
    - an `IGroupOrder` object that has the following properties:
        - `by` - the field name or a function for user-defined grouping
        - `map` - (optional) an object for data aggregation in a group, where the keys are field names, and the values can be:
            - a tuple `[string, TAggregate]` that specifies the field and the aggregation type ("sum", "count", "min", "max", "avg") from the `dhx.methods` helper
            - a user-defined aggregation function `(i: IDataItem[]) => string | number`
        - `summary` - (optional) specifies where the total row is rendered - at the `top` or at the `bottom` of the group 
- `config` - (optional) the configuration of data grouping
    - `showMissed` - (optional) specifies whether the elements that don't have the field for grouping should be displayed, *true* by default
        - if set to *true*, the rows that don't have values for grouping are rendered row by row after all the data
        - if a *string* value is set, e.g. "Missed", the rows that don't have values for grouping are rendered as a separate group the name of which will have the specified string value. This group will be rendered as the last one
        - if set to *false*, the rows that don't suit the grouping criteria won't be rendered
    - `field` - (optional) the group field name, *"group"* by default

There are several examples of grouping Grid data via the `group()` method of DataCollection:

- simple grouping with the use of a callback function and a string field value

~~~jsx {12-19}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "salary", header: [{ text: "Salary" }] },
        { id: "experience", header: [{ text: "Experience (years)" }] },
        { id: "city", header: [{ text: "City" }] }
    ],
    group: true,
    groupable: true,
    data: dataset
});

grid.data.group([
    function(row) {
        if (row.salary < 30000) return "Low income";
        if (row.salary >= 30000 && row.salary < 70000) return "Medium income";
        return "High income";
    },
    "city"
]);
~~~

- grouping with the use of a configuration object and aggregation settings

~~~jsx {12-23}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "department", header: [{ text: "Department" }] },
        { id: "employees", header: [{ text: "Number of Employees" }] },
        { id: "location", header: [{ text: "Location" }] }
    ],
    group: true,
    groupable: true,
    data: dataset
});

grid.data.group([{
    by: "department", // grouping by the `department` field
    map: {
        employees: ["employees", "sum"], // aggregation: sums up the number of employees
        location: (rows) => {
            // a custom function for calculating unique locations
            const uniqueLocations = [...new Set(rows.map(r => r.location))];
            return uniqueLocations.join(", ");
        }
    },
    summary: "top" // the total row is rendered at the top of the group
}]);
~~~

**Related sample:** [Grouping and totals in the summary row via data collection](https://snippet.dhtmlx.com/ihd6gtpj)

- grouping with the use of the `showMissed` property

~~~jsx {12-16}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "name", header: [{ text: "Name" }] },
        { id: "age", header: [{ text: "Age" }] },
        { id: "city", header: [{ text: "City" }] }
    ],
    group: true,
    groupable: true,
    data: dataset
});

grid.data.group(["city"], {
    // the group elements that don't have the "city" value
    // will be rendered in the "Unknown City" group
    showMissed: "Unknown City" 
});
~~~

**Related sample:** [Grid. Grouping missing data](https://snippet.dhtmlx.com/0geopa0v)

#### Ungrouping Grid data

To ungroup Grid data, use the [](../data_collection/api/datacollection_ungroup_method.md) method of DataCollection.

~~~jsx
grid.data.ungroup();
~~~

#### Checking whether Grid data is grouped

To check whether Grid data is grouped at the moment, use the [](../data_collection/api/datacollection_isgrouped_method.md) method of DataCollection. The method returns *true* if Grid data is grouped at the moment and *false* if it isn't grouped.

~~~jsx
if (grid.data.isGrouped()) {
    console.log("The data is currently grouped");
}
~~~

### Localizing data grouping labels

You can render Grid data grouping labels in the necessary language by translating the related strings and applying a ready locale for the component. The default Grid locale looks like this:

~~~jsx
const en = {
    total: "Total", // the name of the total row 
    groupText: "Group", // the name of the column with grouped data
    dropAreaTitle: "Group by:", // the name of the area to drop column headers at
    dropAreaPlaceholder: "Drag the column header here", // the placeholder of the dropping area
}
~~~

Check the details at the [Localization guide](grid/localization.md).


## Controlling scroll behavior

The API of DHTMLX Grid provides the possibility to set scrolls to the necessary position and to get the current state of scrolls.

### Scrolling to specific coordinates

You can scroll grid content to exact position defined by x and y coordinates via the [](grid/api/grid_scroll_method.md) method. Pass the coordinates as parameters of the method.

~~~js
grid.scroll(75, 230);
~~~

### Scrolling to specific grid cell

It is also possible to scroll grid content to a particular cell. Pass the ids of the row and the column as parameters:

~~~js
grid.scrollTo("15", "c");
~~~

**Related sample**: [Grid. Controlling scroll behavior](https://snippet.dhtmlx.com/usu1rnpu)

### Getting the state of scroll

To return the current state of scroll, use the [](grid/api/grid_getscrollstate_method.md) method. 

~~~js
const state = grid.getScrollState(); // -> {x:0, y:0}
~~~

It returns an object with x,y coordinates of a position the grid has been scrolled to.

## Repainting Grid

In case you've changed some configuration settings of a grid, you can repaint it on a page via the [](grid/api/grid_paint_method.md) method:

~~~js
grid.paint();
~~~

## Destructing Grid

When it's necessary to release resources occupied by Grid during its activity, you can make use of the [](grid/api/grid_destructor_method.md) method:

~~~js
grid.destructor();
~~~

## Using Selection API

For information on using Selection API, read [Work with Selection Object](grid/usage_selection.md).

## Working with Grid in the TreeGrid mode

For information on working with with Grid in the TreeGrid mode, read the [TreeGrid mode](grid/treegrid_mode.md#work-with-grid-in-the-treegrid-mode) guide.
