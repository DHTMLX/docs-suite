---
sidebar_label: Features
title: JavaScript Grid - Features 
description: You can explore the features of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Features

This page contains structured information that will help you to start working with DHTMLX Grid and go into deep dive on its functionality.

## How to start with DHTMLX Grid

In this section you can find out how to initialize Grid, how to load data into the component and how to integrate Grid into your applications.

### Initialization

| Topic                                                                   | Description                                                            |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [Basic initialization](../initialization/)                              | Learn how to initialize Grid                                           |
| [Pagination with Grid](https://snippet.dhtmlx.com/0sku3cfa)             | The example shows how to initialize Grid inside Pagination             |
| [Large dataset](https://snippet.dhtmlx.com/w3p07d6s)                    | The example shows how Grid works with over 11000 rows loaded           |
| [Several grids with large dataset](https://snippet.dhtmlx.com/l9tm2kmp) | The example shows how to initialize several grids inside one container |

### Loading data into Grid

| Topic                                                                              | Description                                                              |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [Loading data into Grid](../data_loading/)                                         | Read how to load the initial data into Grid                              |
| [Initialization with config.data](https://snippet.dhtmlx.com/luh8d0vv)             | The example shows how to load data into Grid on the initialization stage |
| [Initialization with data.load()](https://snippet.dhtmlx.com/svkb27d5)             | The example shows how to load data from external file                    |
| [Initialization with data.parse()](https://snippet.dhtmlx.com/pwzie5wz)            | The example shows how to load data from a local data source              |
| [Initialization with external DataCollection](https://snippet.dhtmlx.com/qrw1x949) | The example shows how to load data from external DataCollection          |
| [Lazy loading](https://snippet.dhtmlx.com/grid_lazy_loading)                       | The example shows how to render data dynamically                         |

### Integration

| Topic                                                   | Description                                                                                                                                  |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [Backend integration](integration/suite_and_backend.md) | Learn how to connect DHTMLX Suite to a backend  ([Demo](https://github.com/DHTMLX/nodejs-suite-demo))                                        |
| [Optimus](optimus_guides.md)                            | Learn how to use DHTMLX Optimus framework for creating  DHTMLX-based app <br>(recommended framework for creating apps with Suite components) |
| [React integration](integration/suite_and_react.md)     | Learn how to use DHTMLX Grid with React ([Demo](https://github.com/DHTMLX/react-widgets))                                                    |
| [Angular integration](integration/suite_and_angular.md) | Learn how to use DHTMLX Grid with Angular ([Demo](https://github.com/DHTMLX/angular-suite-demo))                                             |
| [Vue integration](integration/suite_and_vue.md)         | Learn how to use DHTMLX Grid with Vue.js ([Demo](https://github.com/DHTMLX/vue-suite-demo))                                                  |


## How to configure Grid

### How to configure columns

In this section you will know how to configure Grid columns on Grid initialization.

| Topic                                            | Description                                   |
| ------------------------------------------------ | --------------------------------------------- |
| [Configuring columns](../configuration/#columns) | Learn how to define initial structure of Grid |
| [Configuring content alignment](../configuration/#alignment) | Learn how to align data in a column ([Example](https://snippet.dhtmlx.com/eyreddku)) |
| [Frozen columns](../configuration/#frozen-columns)                                          | Learn how to split grid columns into the frozen and movable parts ([Example](https://snippet.dhtmlx.com/hcgl9nth))              |
| [Hidden columns](../configuration/#hidden-columns)                                          | Learn how to initialize Grid with hidden columns ([Example](https://snippet.dhtmlx.com/lh7ma639))              |
| [Sortable columns](../configuration/#sortable-columns)                                          | Learn how to make columns sortable ([Example](https://snippet.dhtmlx.com/r3prvlmo))              |
| [Resizable columns](../configuration/#resizable-columns)                                             | Learn how to make columns resizable ([Example](https://snippet.dhtmlx.com/aeqzuks0))                                            |

### How to configure rows

In this section you will know how to configure Grid rows on Grid initialization.

| Topic                                            | Description                                   |
| ------------------------------------------------ | --------------------------------------------- |
| [Automatic adding of empty row into Grid](../configuration/#automatic-adding-of-empty-row-into-grid) | Learn how to to automatically add an empty row after the last filled row in the grid ([Example](https://snippet.dhtmlx.com/rkytig73))|
| [Frozen rows](../configuration/#frozen-rows)                                          | Learn how to split grid rows into the frozen and movable parts ([Example](https://snippet.dhtmlx.com/hcgl9nth))              |


### How to specify formats for Grid data

In this section you will learn how to specify the necessary data formats for a separate column.

| Topic                                                                               | Description                                                                                                                                                         |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Configuring data formats](../configuration/#formatting-columns)                    | Learn how to display values of cells in different formats (percent, currency, date and combination with templates) ([Example](https://snippet.dhtmlx.com/ox37nvdm)) |
| [Date column and support of the Date() object](https://snippet.dhtmlx.com/ylbu791i) | The example shows how [to use the Date() object for specifying dates](../api/grid_data_config/)                                                                     |



### How to configure Grid header and footer 

In this section you can learn how to configure the header and footer of Grid, how to configure their heights and styles.

| Topic                                                                             | Description                                                                                                             |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [Configuring header/footer](../api/api_gridcolumn_properties/)                    | Learn how to configure a Grid header/footer  ([Example](https://snippet.dhtmlx.com/9jl55ep7))                           |
| [Setting the height for header and footer](../configuration/#headerfooter-height) | Learn how to set the height for rows in the header and footer of Grid  ([Example](https://snippet.dhtmlx.com/wjcjl80i)) |
| [Styling header cells](../customization/#styling-header-cells)                    | Learn how to set styling to the text of header cells ([Example](https://snippet.dhtmlx.com/7o4elf48))                   |
| [Styling footer cells](../customization/#styling-footer-cells)                    | Learn how to set styling to the text of footer cells ([Example](https://snippet.dhtmlx.com/d254hcvp))                   |


### How to configure tooltips

In this section you will know how to add tooltips of the desired appearance with the necessary information, or hide them if needed.

| Topic                                                                         | Description                                                                                                                                                        |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Hiding tooltips](../configuration/#tooltip)                                  | Learn how to hide/show a tooltip on hovering over the content of a column ([Example](https://snippet.dhtmlx.com/mq4t3t3w))                                         |
| [Adding templates for tooltips](../customization/#adding-template-to-tooltip) | Learn how to customize the content of the tooltip of a column ([Example 1](https://snippet.dhtmlx.com/md8tr3pr), [Example 2](https://snippet.dhtmlx.com/954f7h9m)) |


### How to group cells in Grid

In this section you will find out how to group cells in Grid and its header.

| Topic                                                                        | Description                                                                                                         |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [Grouping cells](../configuration/#spans)                                    | Learn how to specify columns and rows spans in Grid ([Example](https://snippet.dhtmlx.com/1775dwbl))                |
| [Adding/removing spans](../usage/#addingremoving-spans)                      | Learn how to add, remove and get spans of rows and columns via API methods                                          |
| [Grouping rows and columns in the header](../api/api_gridcolumn_properties/) | Learn how to specify spans for columns and rows in the Grid header ([Example](https://snippet.dhtmlx.com/eol76o68)) |

### How to configure drag-n-drop

In this section you will know how to configure the drag-n-drop functionality for Grid.

| Topic                                                                               | Description                                                                                                                                                         |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|[Drag-n-drop inside a grid](../configuration/#drag-n-drop-inside-the-grid)|  Learn how to configure drag-n-drop of columns and (or) rows inside the grid|
|[Drag-n-drop between grids](../configuration/#drag-n-drop-between-grids)|  Learn how to configure drag-n-drop between grids ([Example](https://snippet.dhtmlx.com/qx9a86ax))|
|[Drag-n-drop of multiple rows](grid/configuration.md#drag-n-drop-of-multiple-rows)|  Learn how to allow end users to drag-n-drop several rows at once|
|[Copying of rows during drag-n-drop](../api/grid_dragcopy_config/)|	Learn how to copy a row to a target during drag-n-drop ([Example](https://snippet.dhtmlx.com/23slivyz))|

## How to configure sizes of Grid and its cells

In this section you can learn how to configure the size of Grid and its cells.

| Topic                                                                                       | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| [Width and height of Grid](../configuration/#widthheight)                       | Learn how to specify the necessary size of Grid ([Example](https://snippet.dhtmlx.com/ffxj6se0))                                    |
| [Adjusting columns by header, footer, data content](../configuration/#autosize-for-columns) | Learn how to make the size of columns to automatically adjust to their content ([Example](https://snippet.dhtmlx.com/zfrpe22d)) |
| [Max width of a column](../api/api_gridcolumn_properties/)                          | Learn how to define the maximal width which can be set for a column ([Example](https://snippet.dhtmlx.com/ku3cfaux))            |
| [Min width of a column](../api/api_gridcolumn_properties/)                          | Learn how to define the minimum width which can be set for a column  ([Example](https://snippet.dhtmlx.com/x5hmpi9d))          |
| [Auto-width for columns](../configuration/#autowidth-for-columns)                   | Learn how to configure auto-width for columns ([Example](https://snippet.dhtmlx.com/4as4y3l4))                                   |
| [Auto-height for rows](../configuration/#autoheight-for-rows)                    | Learn how to configure auto-height for rows ([Example](https://snippet.dhtmlx.com/zkcsyazg))                                   |
| [Row height](../configuration/#row-height)                                          | Learn how to configure the height of rows ([Example](https://snippet.dhtmlx.com/2jo5lcuj))                                      |

## How to customize Grid and its cells

In this section you can learn how to configure the style of Grid and its cells.

| Topic                                                                            | Description                                                                                                                                                              |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Adding HTML content into cells](../configuration/#html-content-of-grid-columns) | Learn how to add HTML content (for example, an image, an icon) into data of Grid cells ([Example](https://snippet.dhtmlx.com/chitkvkc))                                  |
| [Adding a template to cells](../customization/#adding-template-to-cells)         | Learn how to customize the content of cells ([Example](https://snippet.dhtmlx.com/9txizaow))                                                                             |
| [Handling events in template](../configuration/#event-handlers-for-html-content) | Learn how to assign event handlers to HTML elements of a custom template of Grid cells ([Example](https://snippet.dhtmlx.com/zcv5drxc))                                  |
| [Styling Grid](../customization/#styling-grid)                                   | Learn how to customize a grid ([Example](https://snippet.dhtmlx.com/c5tr3s5r))                                                                                           |
| [Styling cells](../customization/#styling-cells)                                 | Learn how to style the necessary cells ([Example](https://snippet.dhtmlx.com/hskmp8rh))                                                                                  |
| [Marking cells with colors](../customization/#adding-custom-marks-to-cells)      | Learn how to apply conditional formatting and mark cells in the grid ([Example 1](https://snippet.dhtmlx.com/9whjve0v), [Example 2](https://snippet.dhtmlx.com/buirf16n)) |
| [Styling rows](../customization/#styling-rows)                                   | Learn how to style the necessary rows ([Example 1](https://snippet.dhtmlx.com/idvmge2d), [Example 2](https://snippet.dhtmlx.com/2dxtwf9n))                               |
| [Styling selection](https://snippet.dhtmlx.com/xs7bixmg)                         | The example shows how to style the selection in the grid                                                                                                                 |
| [List of CSS classes](../../helpers/base_elements/)                              | A set of CSS classes provided by the DHTMLX library                                                                                                                      |

## How to work with columns and rows

In this section you will know how to add and remove columns and rows, how to hide and show them, how to configure their sizes and align content inside the columns.

### Adding/removing columns and rows

| Topic                                                                    | Description                                                                    |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| [Adding / removing columns](../usage/#setting-columns-configuration) | Learn how to add/remove columns                                               |
| [Adding / removing rows](../usage/#addingremoving-a-row)                | Learn how to add/remove rows ([Example](https://snippet.dhtmlx.com/8ezuj7io)) |


### Getting configuration of a cell/column

| Topic                                                                            | Description                                                           |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [Getting configuration of a column](../usage/#getting-configuration-of-a-column) | Learn how to get an object with configuration of the specified column |
| [Getting configuration of a cell](../usage/#getting-configuration-of-a-cell)     | Learn how to get the current coordinates and size of a cell           |

### Showing/hiding columns and rows

| Topic                                                         | Description                                                                                               |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [Showing / hiding a row](../usage/#hidingshowing-a-row)       | Learn how to show and hide a row in Grid ([Example](https://snippet.dhtmlx.com/8y83d6jv))                 |
| [Checking visibility of a row](../usage/#checking-visibility-of-a-row)       | Learn how to check whether a row is hidden                                                                |
| [Hiding columns](../configuration/#hidden-columns)            | Learn how to make a column hidden on Grid initialization ([Example](https://snippet.dhtmlx.com/lh7ma639)) |
| [Showing / hiding a column](../usage/#hidingshowing-a-column) | Learn how to show and hide a column in Grid ([Example](https://snippet.dhtmlx.com/n4zjwsqj))              |
| [Checking visibility of a column](../usage/#checking-visibility-of-a-column)       | Learn how to check whether a column is hidden   ([Example](https://snippet.dhtmlx.com/rdqhwnjv))                                                          |

## How to work with data in Grid

This section will tell you how to use **Grid API** and **DataCollection API** for working with data of Grid, i.e. edit, add, remove, sort data, etc.

### How to edit data

In this section you will find the ways of editing data in Grid.

| Topic                                                                                        | Description                                                                                                        |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [Enabling/disabling editing](../configuration/#editing-grid-and-separate-columns)            | Read how to enable/disable editing of the whole Grid or its separate columns                                       |
| [Editing with different editors](../configuration/#types-of-column-editor)            | Learn how to specify the type of the editor for editing the cells ([Example](https://snippet.dhtmlx.com/w2cdossn)) |
| [Inline editing](https://snippet.dhtmlx.com/7mbs47en)                                        | The example allows you to try out inline editing in Grid                                                           |
| [Editing data using the right panel](https://snippet.dhtmlx.com/1z3jqrlj)                    | The example shows how to implement editing in Grid via the right panel                                             |
| [Editing data using a modal window](https://snippet.dhtmlx.com/5tbcflek)                     | The example shows how to implement editing in Grid via the modal window                                            |
| [Editing of a specific cell](../usage/#editing-data)                                   | Learn how to enable editing of a cell ([Example](https://snippet.dhtmlx.com/pqbax5vs))                             |
| [Grid and Chart. Edit Grid to see the changes in Chart](https://snippet.dhtmlx.com/gdeqtev4) | Check the example to see how the chart changes after you edit data in the grid                                     |
| [Keyboard navigation](../configuration/#shortcut-keys-for-editing)                           | Learn how to enable key navigation for editing the cells ([Example](https://snippet.dhtmlx.com/y9kdk0md))          |

### How to sort data

In this section you will find the ways of sorting data in Grid.

| Topic                                                        | Description                                                                                                 |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| [Sorting data](../usage/#sorting-data)                       | Learn how to sort data in the grid ([Example](https://snippet.dhtmlx.com/81dmbdfd))                         |
| [Sortable columns](../configuration/#sortable-columns)        | Learn how to define whether a column should be sortable ([Example](https://snippet.dhtmlx.com/r3prvlmo))    |
| [Getting sorting state](../usage/#getting-the-sorting-state) | Learn how to get the current state of sorting data in Grid ([Example](https://snippet.dhtmlx.com/u2vk3ri3)) |

### How to filter data

In this section you will find the ways of filtering data in Grid.

| Topic                                                                                          | Description                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Setting the type of a filter in the header/footer](../configuration/#headerfooter-filters)    | Learn how to specify the type of the filter in the header/footer of a Grid column ([Example](https://snippet.dhtmlx.com/4qz8ng3c))                           |
| [Filtering data](../usage/#filtering-data)                                                     | Learn how to filter grid data by the specified criteria ([Example 1](https://snippet.dhtmlx.com/g0zpjqi1), [Example 2](https://snippet.dhtmlx.com/12suognm)) |
| [Customizing filters in the header/footer](../configuration/#customizing-headerfooter-filters) | Learn how to add a custom function with your own logic for filtering data in a Grid column ([Example](https://snippet.dhtmlx.com/gcidkxjg))              |
| [Getting the header filter](../api/grid_getheaderfilter_method/)                                       | Learn how to get and use an object of the header filter ([Example](https://snippet.dhtmlx.com/n8srjle3))                                                     |

## How to work with selection

In this section you will find the ways of work with selection functionality.

| Topic                                                                            | Description                                                                                                                                                             |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Configuring selection](../configuration/#selection)                             | Learn how to configure the mode of selection of Grid elements ([Example](https://snippet.dhtmlx.com/ad6roqsx))                                                          |
| [Enabling multiselection](../configuration/#multiple-selection-of-grid-cells)    | Learn how to enable multi-row/multi-cell selection in Grid ([Example](https://snippet.dhtmlx.com/4nj0e9ye))                                                             |
| [Working with selection](../usage_selection/) | Learn how to enable/disable selection, set selection to cells, remove selection, and get the object of a selected cell ([Example](https://snippet.dhtmlx.com/4nj0e9ye)) |
| [Selection API](../../category/selection-api/)                                   | Learn how to use the API of Selection to manage the selection of Grid cells                                                                                             |
| [Keyboard navigation](../configuration/#arrow-shortcut-keys)                     | Learn how to enable key navigation that allows moving the selection between cells ([Example](https://snippet.dhtmlx.com/y9kdk0md))                                      |

## How to scroll Grid

In this section you will learn how to scroll Grid to the necessary position.

| Topic                                                                | Description                                                                                             |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [Controlling scroll behavior](../usage/#controlling-scroll-behavior) | Learn how to scroll the grid content to exact position ([Example](https://snippet.dhtmlx.com/usu1rnpu)) |
| [Keyboard navigation](../configuration/#default-shortcut-keys)       | Learn how to enable key navigation in Grid ([Example](https://snippet.dhtmlx.com/y9kdk0md))             |


## How to export Grid

In this section you will know how to export Grid to different formats.

| Topic                                                      | Description                                                                                        |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [Exporting Grid to XLSX and CSV](../usage/#exporting-grid) | Learn how to export Grid to Excel or CSV formats  ([Example](https://snippet.dhtmlx.com/58oqij47)) |

## How to work with Grid events

This section explains how to work with Grid events.

| Topic                                       | Description                                                                                               |
| :------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| [Event basic rules](guides/events_guide.md) | Learn basic rules on how to work with events                                                              |
| [Event handling](../events/)       | Learn how to attach, detach, or call the Grid events ([Example](https://snippet.dhtmlx.com/9zeyp4ds)) |

## API reference

In this section you can find out corresponding references of Grid API.

| Topic                                                       | Description                                                      |
| ----------------------------------------------------------- | ---------------------------------------------------------------- |
| [Grid methods](../api/api_overview/#grid-methods)           | Check the list of Grid methods                                   |
| [Grid events](../api/api_overview/#grid-events)             | Check the list of Grid events                                    |
| [Grid properties](../api/api_overview/#grid-properties)     | Check the list of Grid properties                                |
| [Grid column properties](../api/api_gridcolumn_properties/) | Check the list of properties of a Grid column                    |
| [DataCollection API](../../data_collection/)                   | Check the API of DataCollection to work with Grid data           |
| [Selection API](../../category/selection-api/)              | Check the API of Selection to manage the selection of Grid cells |


## Common functionality

In this section you will learn about common functionality of the library which can be useful while working with Grid.

| Topic                                                         | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- |
| [Touch support](../../common_features/touch_support/)         | Learn how to work with touch support                          |
| [TypeScript support](../../common_features/using_typescript/) | Learn how to work with TypeScript                             |
| [Custom scroll](../../common_features/custom_scroll/)         | Learn how to enable custom scroll in Grid                        |
| [AwaitRedraw](../../helpers/await_redraw/)                    | Learn how to perform the code after the component’s rendering |

## Any questions left?

<button class="support_btn"><a href="https://snippet.dhtmlx.com/all?tag=grid">Check more samples >>></a> </button>
<br>
<button class="support_btn"><a href="https://forum.dhtmlx.com/c/suite/suite7/">Ask the community >>></a> </button>

- [**Check a TreeGrid  widget >>>**](treegrid.md) - it allows showing the nested tabular data
- [**Check SpreadSheet >>>**](https://docs.dhtmlx.com/spreadsheet/index.html) - if you need functionality like Google Spreadsheets or Excel
- [**Check Pivot >>>**](https://docs.dhtmlx.com/pivot/index.html) - if you are interested in analyzing data from large datasets

:::info
Do you need more functionality? Feel free to share your suggestions in the comments below!
:::





