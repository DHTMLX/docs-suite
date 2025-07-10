---
sidebar_label: Migration to newer versions
title: Migration to Newer Versions 
description: You can explore how to migrate to newer versions in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

#  Migration to newer versions

9.1 -> 9.2
-----------

### Grid

Since v9.2 the Grid component uses the WebAssembly-based library [Json2Excel](https://github.com/dhtmlx/json2excel) for [exporting Grid data to an Excel file](grid/usage.md/#exporting-data-to-excel). By default, you don't need to specify the link to the export module. 

However, if you use your own export server, you need to install the **Json2Excel** library and provide the local path to the export module on your computer by setting the path to the **worker.js** file as `"../libs/json2excel/1.3/worker.js?vx"`:

~~~jsx title="Before v9.2"
grid.export.xlsx({
    url: "https://export.dhtmlx.com/excel", // optional, the link to the export module
    // more export settings
});
~~~

~~~jsx title="From v9.2"
grid.export.xlsx({
    url: "../libs/json2excel/1.3/worker.js?vx", // optional, a local path to the export module
    // more export settings
});
~~~

:::info
The previously used export module server is still available for the Suite versions up to v9.1. 
:::

9.0 -> 9.1
-----------

### Grid

The `getSortingState()` method of Grid has been deprecated and replaced with the `getSortingStates()` method of [DataCollection](/data_collection/) and [TreeCollection](/tree_collection/), which allows getting the result of sorting data by multiple columns.

~~~jsx title="Before v9.1"
grid.getSortingState();
~~~

~~~jsx title="From v9.1"
grid.data.getSortingStates()[0]; // getting the first (main) sorting state
~~~

8.4 -> 9.0
-----------

### Grid/TreeGrid

#### TreeGrid as a Grid mode

Since v9.0 the TreeGrid component becomes a part of the Grid component. To enable the [TreeGrid mode](grid/treegrid_mode.md) you need just to use the `dhx.Grid` constructor and set the `type: "tree"` property in the Grid configuration. This functionality is available in the PRO version.

~~~jsx title="Before v9.0"
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    data: dataset
});
~~~

~~~jsx title="From v9.0"
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
        // columns config
    ],
    data: dataset
});
~~~

#### Data grouping

Since v9.0 the TreeGrid data grouping methods `groupBy()` and `ungroup()`, and the `groupTitleTemplate` property have been deprecated. The data grouping functionality is now available via the [`group`](grid/api/grid_group_config.md) configuration property of Grid.

~~~jsx {2}title="From v9.0"
const grid = new dhx.Grid("grid_container", {
    group: true,
    columns: [
        // columns config
    ],
    data: dataset
});
~~~

This config enables the TreeGrid mode (the `type:"tree"` configuration option is automatically set in the Grid configuration), allows [configuring the data grouping settings](grid/usage.md#grouping-data) and [using DataCollection API](grid/usage.md#using-datacollection-api-for-data-grouping) for grouping Grid data.

#### Using statistical functions in the column header/footer

Before v9.0 the `content` property of the column header/footer could have the default statistical functions "avg" | "sum" | "max" | "min" | "count" as arguments. 

~~~jsx {7}title="Before v9.0"
{
    width: 130,
    id: "balance",
    header: [{text: "Balance"}, {content: "inputFilter"}],
    footer: [
        {
            content: "sum",
            tooltipTemplate: balanceTemplate
        },
    ]
}
~~~

Since v9.0 it is possible both to define the default statistical functions and create custom functions for data calculation. The following new functionality has been added:

- the DHTMLX library provides a [helper method `dhx.methods`](helpers/data_calculation_functions.md) that allows:     

1. defining the default data calculation functions:

~~~jsx title="From v9.0"
const rows = [{ value: 10 }, { value: 20 }, { value: 30 }];
const sum = dhx.methods.sum(rows, "value"); // 60
~~~

2. redefining the default functions:

~~~jsx {1-3,10-11} title="From v9.0"
dhx.methods.doubleSum = (rows, field) => {
    return rows.reduce((sum, row) => sum + row[field] * 2, 0);
};

const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            id: "population",
            header: [{ text: "Population" }],
            footer: [{ text: (content) => content.doubleSum }],
            summary: "doubleSum"
        },
    ],
    data: dataset
});
~~~

- the `summary` config options are added into Grid and column configuration for calculating values based on columns data while [creating a summary list](grid/configuration.md#custom-statistics-in-the-column-headerfooter-and-spans) both at the Grid and column's levels

- the [`getSummary()`](grid/api/grid_getsummary_method.md) method is added for getting the summary data either of a column or of the Grid

- the `text` property of the Grid column [*header/footer*](grid/configuration.md#headerfooter-text) configuration object can be set as a *callback function* called with the following parameter:
    - `content` - an object with the content of the column header/footer that contains the calculated values from the `summary` property as *key:value* pairs, where:
        - the *key* is either the key defined in the list or the functor name
        - the *value* can be a *string*, *number* or *null*

- the `tooltipTemplate` property of the Grid column [*header/footer*](grid/configuration.md#column-headerfooter-tooltip) configuration object can be set as a *callback function* called with the following parameters:
    - `content` - an object with the content of the header/footer. Contains two properties which are available either from the component's or from the column's configuration:
        - `value` - (*string*) the value rendered in a cell, including the applied templates
        - an object with the calculated values of the `summary` property, set as *key:value* pairs where:
            - the *key* is either the key defined in the list or the functor name
            - the *value* can be a *string*, *number* or *null*
    - `header/footer` - (*object*) the object of the column header/footer 
    - `column` - (*object*) the object of a column 

- the `text` property of the Grid [*spans*](grid/configuration.md#spans) configuration object can be set as a *callback function* called with the following parameter:
    - `content` - an object with the content of the spans tooltip that contains the calculated values from the `summary` property as *key:value* pairs, where:
        - the *key* is either the key defined in the list or the functor name
        - the *value* can be a *string*, *number* or *null*

- the `tooltipTemplate` property of the Grid [*spans*](grid/configuration.md#adding-templates-for-column-and-spans-tooltip) configuration objects can be set as a *callback function* called with the following parameters:
    - `content` - an object with the content of the spans tooltip. Contains two properties which are available either from the component's or from the column's configuration:
        - `value` - (*string*) the value rendered in a cell, including the applied templates
        - an object with the calculated values of the `summary` property, set as *key:value* pairs where:
            - the *key* is either the key defined in the list or the functor name
            - the *value* can be a *string*, *number* or *null*
    - `span` - (*object*) the span object 

~~~jsx title="From v9.0"
const grid = new dhx.Grid("grid", {
    columns: [
        { width: 200, id: "country", header: [{ text: "Country" }] },
        { 
            width: 150, 
            id: "population", 
            header: [
                { 
                    text: "Population" , 
                    tooltipTemplate: ({ totalPopulation, count }) => `Total: ${totalPopulation}, Count: ${ count }`
                }
            ],
            summary: "count"
        },
        {
            width: 150,
            id: "age",
            header: [{ text: "Med. Age" }],
            summary: { avgAge: "avg" } 
        }
    ],
    summary: {
        totalPopulation: ["population", "sum"],
    },
    spans: [
        {
            row: "6",
            column: "population",
            rowspan: 9,
            text: ({ count }) => ("Count population:" + count),
            tooltipTemplate: ({ value, count }) => (`value: ${value}; count: ${count}`),
        },
    ],
    data: dataset
});

// getting summary data for the component
const totalSummary = grid.getSummary();
console.log(totalSummary); //{ totalPopulation: 1000000 } - sum of all the values in the "population" column

// getting summary data for the "age" column
const columnSummary = grid.getSummary("age");
console.log(columnSummary); //{ totalPopulation: 1000000, avgAge: 28 } - the value of the "age" column only
~~~

#### Date format in a column

Before v9.0, the format for dates in a column has been set by specifying the `type: "date"` property and the `format` option:

~~~jsx {3}title="Before v9.0"
{ 
    width: 150, id: "date", header: [{ text: "Date" }], 
    type: "date", format: "%M %d %Y"
}
~~~

Since v9.0, to set the format for dates, you need to use the combination of the `type: "date"` property and the [`dateFormat`](/grid/configuration#setting-the-format-for-dates) option:

~~~jsx {3}title="From v9.0"
{ 
    width: 150, id: "date", header: [{ text: "Date" }], 
    type: "date", dateFormat: "%M %d %Y"
}
~~~

#### Data format in a column

Before v9.0 the necessary format of data for a column has been specified via the `format` property:

~~~jsx {6}title="Before v9.0"
{
    width: 130,
    id: "cost",
    header: [{ text: "Cost" }, { content: "inputFilter" }],
    template: (value) => `$${value}`,
    format: "#.0",
}
~~~

Since v9.0, the data format is specified via the [`numberMask`](/grid/configuration#numbermask) configuration option of a column object:

~~~jsx {6-8}title="From v9.0"
{
    width: 130,
    id: "cost",
    header: [{ text: "Cost" }, { content: "inputFilter" }],
    footer: [{ content: "sum" }],
    numberMask: {
        prefix: "$", minDecLength: 0
    }
}
~~~

#### Displaying the percentage value in a column

Before v9.0, to display the percentage value in a column, the `type: "percent"` configuration option has been used:

~~~jsx {3}title="Before v9.0"
{ 
    width: 150, id: "yearlyChange", header: [{ text: "Yearly Change" }], 
    type: "percent"
}
~~~

Since v9.0, the percentage value is specified via the `suffix: "%"` attribute of the [`numberMask`](/grid/configuration#numbermask) configuration option of a column object:

~~~jsx {3}title="From v9.0"
{ 
    width: 120, id: "yearlyChange", header: [{ text: "Yearly Change" }], 
    numberMask: { suffix: "%" }    
}
~~~



8.1 -> 8.2
-----------

### DataCollection/TreeCollection

Before v8.2, the `smartFilter` property of the [`filter()`](data_collection/api/datacollection_filter_method.md) method defined whether a filtering rule will be applied after adding and editing items of the collection. 

Since v8.2 this property is **deprecated** and replaced with the [`permanent`](data_collection/api/datacollection_filter_method.md) one. All active filters are stored in DataCollection/TreeCollection and will be automatically applied once again after calling the `add/update/parse` methods.

Besides, the `id` property has been added into the configuration object of the [`filter()`](data_collection/api/datacollection_filter_method.md) method.

7.3 -> 8.0
------------

### Grid/TreeGrid

Before v8.0, the [`getHeaderFilter()`](grid/api/grid_getheaderfilter_method.md) method returned either an HTML element or an object with Combobox configuration. That allowed you to set focus on the filter or remove it:

~~~js
const countryFilter = grid.getHeaderFilter("country");
// -> HTMLElement
// <label className="dhx_grid-filter__label dxi dxi-menu-down">...</label>

countryFilter.focus();
countryFilter.blur();

// or

const countryFilter = grid.getHeaderFilter("density");
// -> object of Combobox
// Combobox {_uid: "u1597304021754", config: {…}, events: EventSystem, 
// data: DataCollection, popup: Popup, …}

countryFilter.focus();
~~~

In v8.0, we've improved the way of work with the filter. Now the [`getHeaderFilter()`](grid/api/grid_getheaderfilter_method.md) method returns an object with a set of methods which allow you to get an object of the filter, to set/remove focus from the filter, to set a value by which a column will be filtered or to clear this value.

If you need to get an HTML object or an object with configuration of Combobox, apply the [`getFilter()`](grid/api/headerfilter/getfilter_method.md) method of the [header filter](grid/api/grid_getheaderfilter_method.md) object:

~~~js
const filter1 = grid.getHeaderFilter("country").getFilter();
console.log(filter1);
// -> returns Combobox
//  {config: {…}, _uid: 'u1670500020936', events: o, data: d, popup: f, …}


const filter2 = grid.getHeaderFilter("netChange").getFilter();
console.log(filter2);
// -> returns HTML object
// {type: 1, attrs: {…}, tag: 'div', _class: 'dhx_grid-filter__label dxi dxi-magnify', 
// ref: 'netChange_filter', …}
~~~

### Message box

Before v8.0, the `dhx.message()` constructor just added a new element to DOM.

Starting from v8.0, the constructor looks like `dhx.message(): {close() => void};`. It will return an object with the method which allows calling a function to remove the element from DOM.  

~~~js {8} title="Before v8.0"
const message = dhx.message({
    text: "Message text", 
    icon: "dxi-clock", 
    css: "expire", 
    expire: 1000
});

console.log(message); // -> undefined
~~~

~~~js {8} title="From v8.0"
const message = dhx.message({
    text: "Message text", 
    icon: "dxi-clock", 
    css: "expire", 
    expire: 1000
});

console.log(message); // -> {close: function}
~~~

7.1 -> 7.2
----------------

### Combobox

The `open` event has been deprecated in v7.2. The new `beforeOpen` and `afterOpen` events have been added.

~~~js title="Before v7.2"
// the "open" event
combo.events.on("open", function(){
    // your logic here
});
~~~

~~~js title="From v7.2"
// the "beforeOpen" event
combo.events.on("beforeOpen", function() {
    // your logic here
    return false;
});

// the "afterOpen" event
combo.events.on("afterOpen", function() {
    // your logic here
});
~~~

Though the `open` event remains backward compatible with previous versions, you'd better use the `afterOpen` event instead.

7.0 -> 7.1
----------------

### Grid/TreeGrid

1) Since v7.1, the `dateFormat` configuration option of the column has been deprecated. Though the support of the option continues, we recommend that you use the **format** option together with `type: "date"` instead.

~~~js title="Before v7.1"
{ 
    width: 150, id: "start_date", 
    header: [{ text: "Calendar", colspan: 2 }, { text: "Start date" }], 
    type: "date", dateFormat: "%d/%m/%Y"
}
~~~

~~~js title="From v7.1"
{ 
    width: 150, id: "date", header: [{ text: "Date" }], 
    type: "date", format: "%M.%d.%Y" 
}
~~~

2) The `sort` event has been deprecated in v7.1. Instead of it, you should use the `afterSort` and `beforeSort` events.

~~~js title="Before v7.1"
// the "sort" event
grid.events.on("Sort", function(id){
    console.log("The grid is sorted by the "+id+" column");
});
~~~

~~~js title="From v7.1"
// the "afterSort" event
grid.events.on("afterSort", (col, dir) => {
    console.log(col, dir);
});

// the "beforeSort" event
grid.events.on("beforeSort", (col, dir) => {
    console.log("beforeSort", col, dir);
    // return false;
});
~~~

6.5 -> 7.0
----------------

### Grid/TreeGrid

1) The `splitAt` configuration property of Grid has been deprecated. The property is still available but not recommended for use.

Starting from v7.0, use **leftSplit** instead.

~~~js title="Before v7.0"
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    splitAt: 2,  
    data: dataset
});
~~~

~~~js title="From v7.0"
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    leftSplit: 2,  
    data: dataset
});
~~~

### Layout

2) Before v7.0, the [`gravity`](layout/api/cell/layout_cell_gravity_config.md) property of a Layout cell was intended to arrange content evenly throughout the cell.

Starting from v7.0, the property is used for setting the "weight" of a cell in relation to other cells placed in the same row, within one parent.

The type of the property has been changed from *boolean* to *number*, but *boolean* type is still available for backward compatibility purposes.

### DataView/List

3) The following API methods of **DataView/List** have been deprecated: `enableSelection()`, `disableSelection()`. These methods are still available but not recommended for use.

Instead of the methods, use new `enable()`, `disable()` methods of the selection object.

~~~js title="Before v7.0"
// DataView
dataview.enableSelection();
dataview.disableSelection();

// List
list.enableSelection();
list.disableSelection();
~~~

~~~js title="From v7.0"
// DataView
dataview.selection.enable();
dataview.selection.disable();

// List
list.selection.enable();
list.selection.disable();
~~~

### Form and Form controls

4) Starting with 7.0, to access the Form control you can use either the name of the control or its id (if the name attribute is not defined in the config of the control). In previous versions it was possible to access the control only by id.

5) The following events of Form have been deprecated: `buttonClick`, `validationFail`. These events are still available but not recommended for use.

Instead of the `buttonClick` event, use the new `click` event.

~~~js title="Before v7.0"
form.events.on("buttonClick", function(id, events) {
    console.log(id); 
});
~~~

~~~js title="From v7.0"
form.events.on("click", function(name, events) {
    console.log("Click", name, events); 
});
~~~

Instead of the `validationFail` event, use the new `afterValidate`, `beforeValidate` events:

~~~js title="Before v7.0"
form.events.on("validationFail", function(id,component){
    // your code here
});
~~~

~~~js title="From v7.0"
// AfterValidate event
form.events.on("afterValidate", function(name, value, isValid) {
    console.log("AfterValidate", name, value, isValid); 
});

// BeforeValidate event
form.events.on("beforeValidate", function(name, value) {
    console.log("BeforeValidate", name, value); 
    return true;
});
~~~

6) The `value` property of the Button control of Form has been replaced by the `text` one. 

The `setValue()` method of the Button control of Form has been deprecated.

~~~js 
form.getItem("button_id").setValue("button_value");
~~~

7) The following properties of the configuration object of a radio button of RadioGroup have been deprecated:

- label
- labelWidth
- hiddenLabel
- labelPosition
- helpMessage
- preMessage
- successMessage
- errorMessage

8) The `gravity` property have been deprecated for all Form controls.

9) The `readonly` attribute of the Combo control of Form have been deprecated. Starting from v7.0, use `readOnly` instead.

### Confirm message box

10) Before v7.0, the *Space* and *Enter* key were used to confirm the Reject button. Starting with v7.0, the keys confirm the Apply button. The *Esc* key confirms the Reject button.

Also note, that before v7.0, the confirm buttons were displayed in the following order: "Apply" and "Reject". In the version 7.0, the order has been changed to "Reject" and "Apply".

### TimePicker

11) The `apply` event of TimePicker has been deprecated. Instead of it, use the new `beforeApply` and `afterApply` events.

~~~js title="Before v7.1"
timepicker.events.on("apply", function(){
    console.log("The value of a timepicker "+ timepicker.getValue() + " has been saved");
});
~~~

~~~js title="After v7.1"
timepicker.events.on("beforeApply", function(value){
    console.log("The ", value, " of a timepicker will be saved");
    return false;
});
 
timepicker.events.on("afterApply", function(value){
    console.log("The ", value, " of a timepicker is saved");
});
~~~

### Combobox

12) The `readonly` configuration property have been deprecated. Starting from v7.0, use `readOnly` instead.

~~~js
const combo = new dhx.Combobox("combo_container", { 
    readOnly: true
});
~~~

6.3 -> 6.4
-----------------

1) Here is the list of methods, events and properties that were just renamed for clarity and consistency:

### Calendar

| Up to version 6.3                             | From version 6.4                                  |
| :-------------------------------------------- | :------------------------------------------------ |
| **Events**                                    |                                                   |
| `calendar.events.on("dateHover", function(){})` | `calendar.events.on("dateMouseOver", function(){})` |
| **Properties**                                |                                                   |
| `block`                                         | `disabledDates`                                     |
| `view`                                          | `mode`                                              |


### ColorPicker

| Up to version 6.3                                 | From version 6.4                                  |
| :------------------------------------------------ | :------------------------------------------------ |
| **Methods**                                       |                                                   |
| `colorpicker.focusValue()`                        | `colorpicker.setFocus()`                            |
| **Events**                                        |                                                   |
| `colorpicker.events.on("viewChange",function(){})`  | `colorpicker.events.on("modeChange", function(){})` |
| `colorpicker.events.on("selectClick",function(){})` | `colorpicker.events.on("apply", function(){})`      |

### Combobox

| Up to version 6.3                      | From version 6.4                            |
| :------------------------------------- | :------------------------------------------ |
| **Events**                             |                                             |
| `combo.events.on("close", function(){})` | `combo.events.on("afterClose", function(){})` |
| **Properties**                         |                                             |
| `cellHeight`                             | `itemHeight`                                 |
| `help`                                   | `helpMessage`                                 |
| `showItemsCount`                         | `itemsCount`                                  |

### DataView

| Up to version 6.3                               | From version 6.4                                   |
| :---------------------------------------------- | :------------------------------------------------- |
| **Methods**                                     |                                                    |
| `dataview.edit()`                                 | `dataview.editItem()`                                |
| **Events**                                      |                                                    |
| `dataview.events.on("contextMenu", function(){})` | `dataview.events.on("itemRightClick", function(){})` |
| **Properties**                                  |                                                    |
| `editing`                                         | `editable`                                           |

The `multiselectionMode` property is deprecated. Starting from the version 6.4 , it is possible to set the mode of selection of multiple items using the `multiselection` property of DataView. 

### Grid

| Up to version 6.3 | From version 6.4 |
| :---------------- | :--------------- |
| **Methods**       |                  |
| `grid.edit()`       | `grid.editCell()`  |
| **Properties**    |                  |
| `editing`           | `editable`         |
| `fitToContainer`    | `autoWidth`       |
| `headerSort`        | `sortable`         |

The `columnsAutoWidth` property is replaced with the `adjust` property. The property can take one of three values: "header", "data" or true.

Before 6.4 the `adjustColumnWidth()` method took only one parameter - the id of the column. Starting from v6.4, it is also possible to pass the mode of adjusting a column ("header", "data", true) as a second parameter.

### List

| Up to version 6.3                           | From version 6.4                               |
| :------------------------------------------ | :--------------------------------------------- |
| **Methods**                                 |                                                |
| `list.edit()`                                 | `list.editItem()`                                |
| **Events**                                  |                                                |
| `list.events.on("contextMenu", function(){})` | `list.events.on("itemRightClick", function(){})` |
| **Properties**                              |                                                |
| `editing`                                     | `editable`                                       |

The `multiselectionMode` property is deprecated. Starting from the version 6.4 , it is possible to set the mode of selection of multiple items using the `multiselection` property of List.

### Sidebar

The `toggle` event is deprecated. Use new `beforeCollapse`, `afterCollapse`, `beforeExpand`, `afterExpand` events instead.

### Slider

| Up to version 6.3 | From version 6.4 |
| :---------------- | :--------------- |
| **Properties**    |                  |
| `help`              | `helpMessage`      |
| `thumbLabel`        | `tooltip`          |

### Tabbar

| Up to version 6.3                       | From version 6.4                             |
| :-------------------------------------- | :------------------------------------------- |
| **Methods**                             |                                              |
| `tabbar.removeCell()`                     | `tabbar.removeTab()`                           |
| `tabbar.addCell()`                        | `tabbar.addTab()`                              |
| **Events**                              |                                              |
| `tabbar.events.on("close", function(){})` | `tabbar.events.on("afterClose", function(){})` |
| **Properties**                          |                                              |
| `closeButtons`                            | `closable`                                     |
| `activeView`                              | `activeTab`                                    |

### TimePicker

| Up to version 6.3                           | From version 6.4                                 |
| :------------------------------------------ | :----------------------------------------------- |
| **Events**                                  |                                                  |
| `timepicker.events.on("close", function(){})` | `timepicker.events.on("afterClose", function(){})` |
| `timepicker.events.on("save", function(){})`  | `timepicker.events.on("apply", function(){})`      |
| **Properties**                              |                                                  |
| `action`                                      | `controls`                                         |

### Tree

| Up to version 6.3 | From version 6.4 |
| :---------------- | :--------------- |
| **Properties**    |                  |
| `editing`           | `editable`         |

The `isFolder` property is deprecated. Instead of it, you can set the `icon` property in the configuration object of a tree item to add custom icons for tree items.

~~~js {11-15}
const tree = new dhx.Tree("tree_container", {
    data:[
        {
            "value": "Books",
            "id": "Books",
            "opened": true,
            "items": [
                {
                    "value": "Lawrence Block",
                    "id": "Lawrence Block",
                    "icon": {
                        "folder": "fas fa-book", 
                        "openFolder": "fas fa-book-open", 
                        "file": "fas fa-file" 
                    }
                }
            ]
        }
    ]
});
~~~

### TreeGrid

| Up to version 6.3 | From version 6.4    |
| :---------------- | :------------------ |
| **Methods**       |                     |
| `treegrid.edit()`   | `treegrid.editCell()` |
| **Properties**    |                     |
| `editing`           | `editable`            |
| `fitToContainer`    | `autoWidth`           |
| `headerSort`        | `sortable`            |

The `columnsAutoWidth` property is replaced with the `adjust` property. The property can take one of three values: "header", "data" or true.

Before 6.4 the `adjustColumnWidth()` method took only one parameter - the id of the column. Starting from v6.4, it is also possible to pass the mode of adjusting a column ("header", "data", true) as a second parameter.

### Combobox, Slider

The `labelInline` property is replaced with the `labelPosition` property. The `labelPosition` property defines the position of a label.

2) Since some properties of widgets of the Suite library have been renamed, the properties of Form controls, that are based on this widgets, have also been renamed:

### All Form controls

| Up to version 6.3 | From version 6.4 |
| :---------------- | :--------------- |
| `editing`           | `editable`         |
| `help`              | `helpMessage`      |
| `celCss`            | `css`              |

### Combo control

| Up to version 6.3 | From version 6.4 |
| :---------------- | :--------------- |
| `cellHeight`        | `itemHeight`       |

### DatePicker control

| Up to version 6.3 | From version 6.4 |
| :---------------- | :--------------- |
| `block`             | `disabledDates`    |
| `view`              | `mode`             |

### Slider control

| Up to version 6.3 | From version 6.4 |
| :---------------- | :--------------- |
| `thumbLabel`        | `tooltip`          |

### TimePicker control

| Up to version 6.3 | From version 6.4 |
| :---------------- | :--------------- |
| `action`            | `controls`         |

6.2 -> 6.3
-----------

1) In the version 6.3 names of some methods and events of DHTMLX library were changed. It was made in order to avoid confusion and misunderstanding due to inconsistency between the name and functionality.

### ColorPicker

| Up to version 6.2                                 | From version 6.3                              |
| :------------------------------------------------ | :-------------------------------------------- |
| `getView()`                                         | `getCurrentMode()`                              |
| `colorpicker.events.on("colorChange",function(){})` | `colorpicker.events.on("change", function(){})` |

### Grid

| Up to version 6.2                           | From version 6.3                             |
| :------------------------------------------ | :------------------------------------------- |
| `grid.events.on("headerInput", function(){})` | `grid.events.on("filterChange", function(){})` |

### Layout

| Up to version 6.2 | From version 6.3   |
| :---------------- | :----------------- |
| `layout.cell(id)`   | `layout.getCell(id)` |

### Tree

| Up to version 6.2                               | From version 6.3                               |
| :---------------------------------------------- | :--------------------------------------------- |
| `tree.close(id)`                                  | `tree.collapse(id)`                              |
| `tree.closeAll()`                                 | `tree.collapseAll()`                             |
| `tree.open(id)`                                   | `tree.expand(id)`                                |
| `tree.openAll()`                                  | `tree.expandAll()`                               |
| `tree.unCheckItem(id)`                            | `tree.uncheckItem(id)`                           |
| `tree.events.on("itemContextMenu", function(){})` | `tree.events.on("itemRightClick", function(){})` |

### TreeGrid

| Up to version 6.2                           | From version 6.3                             |
| :------------------------------------------ | :------------------------------------------- |
| `grid.events.on("headerInput", function(){})` | `grid.events.on("filterChange", function(){})` |

### Window

| Up to version 6.2   | From version 6.3       |
| :------------------ | :--------------------- |
| `window.fullScreen()` | `window.setFullScreen()` |

1) Until the version 6.3 List and DataView had the getFocusIndex() and setFocusIndex() methods. Starting from v6.3, these methods are no longer considered important. They are deprecated and not recommended for use.

Instead, use the corresponding `getFocus()` method for getting the id of an item in focus:

~~~js
list.getFocus(); // -> "item_id"
 
dataview.getFocus(); // -> "item_id"
~~~

and the setFocus() method for setting focus to an item by its id: 

~~~js
list.setFocus("item_id");

dataview.setFocus("item_id");
~~~

In case you still need to get the index of an item in focus, make use of the code, as in:

~~~js
// get the id of an item using the getFocus() method
const id = list.getFocus();
// and pass this id as a parameter of the getIndex method of Data Collection
const index = list.data.getIndex(id);
~~~
