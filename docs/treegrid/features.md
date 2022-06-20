---
sidebar_label: Features
title: JavaScript TreeGrid - Features 
description: You can explore the features of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Features

This page contains structured information that will help you to start working with DHTMLX TreeGrid and go into deep dive on its functionality.

## How to start with DHTMLX TreeGrid

In this section you can find out how to initialize TreeGrid, how to load data into the component and how to integrate TreeGrid into your applications

### Initialization

| Topic                                                           | Description                                                    |
| --------------------------------------------------------------- | -------------------------------------------------------------- |
| [Basic initialization](../initialization/)                      | Learn how to initialize TreeGrid                               |
| [Pagination with TreeGrid](https://snippet.dhtmlx.com/uxz8lh7m) | The example shows how to initialize TreeGrid inside Pagination |


### Loading data into Grid

| Topic                                                                                  | Description                                                                  |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [Loading data into TreeGrid](../data_loading/)                                         | Read how to load the initial data into TreeGrid                              |
| [Initialization with config.data](https://snippet.dhtmlx.com/kob9385v)                 | The example shows how to load data into TreeGrid on the initialization stage |
| [Initialization with data.load()](https://snippet.dhtmlx.com/44rmxlmq)                 | The example shows how to load data from external file                        |
| [Initialization with data.parse()](https://snippet.dhtmlx.com/jc8gn40c)                | The example shows how to load data from a local data source                  |
| [Initialization with external TreeGridCollection](https://snippet.dhtmlx.com/eobdz66d) | The example shows how to load data from external TreeGridCollection          |

### Integration

| Topic                                                   | Description                                                                                                                                  |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [Backend integration](integration/suite_and_backend.md) | Learn how to connect DHTMLX Suite to a backend  ([Demo](https://github.com/DHTMLX/nodejs-suite-demo))                                        |
| [Optimus](optimus_guides.md)                            | Learn how to use DHTMLX Optimus framework for creating  DHTMLX-based app <br>(recommended framework for creating apps with Suite components) |
| [React integration](integration/suite_and_react.md)     | Learn how to use DHTMLX TreeGrid with React ([Demo](https://github.com/DHTMLX/react-widgets))                                                |
| [Angular integration](integration/suite_and_angular.md) | Learn how to use DHTMLX TreeGrid with Angular ([Demo](https://github.com/DHTMLX/angular-suite-demo))                                         |
| [Vue integration](integration/suite_and_vue.md)         | Learn how to use DHTMLX TreeGrid with Vue.js ([Demo](https://github.com/DHTMLX/vue-suite-demo))                                              |
  
## How to configure DHTMLX TreeGrid

### How to configure columns

In this section you will know how to configure TreeGrid columns on TreeGrid initialization

| Topic                                                        | Description                                                                                                            |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| [Configuring columns](../configuration/#columns)             | Learn how to define initial structure of TreeGrid                                                                      |
| [Configuring content alignment](../configuration/#alignment) | Learn how to align data in a column ([Example](https://snippet.dhtmlx.com/g38rr3so))                                   |
| [Frozen columns](../configuration/#frozen-columns)           | Learn how to split treegrid columns into the frozen and movable parts ([Example](https://snippet.dhtmlx.com/46me58ze)) |
| [Resizable columns](../configuration/#resizing)              | Learn how to make columns resizable ([Example](https://snippet.dhtmlx.com/vq3i9maq))                                   |

### How to specify formats for TreeGrid data

In this section you will learn how to specify the necessary data formats for a separate column.

| Topic                                                                               | Description                                                                                                                                                         |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Configuring data formats](../configuration/#formatting-columns)                    | Learn how to display values of cells in different formats (percent, currency, date and combination with templates) ([Example](https://snippet.dhtmlx.com/ampo9hsc)) |
| [Date column and support of the Date() object](https://snippet.dhtmlx.com/tb4o7ytt) | The example shows how [to use the Date() object for specifying dates](../api/treegrid_data_config/)                                                                 |


### How to configure TreeGrid header and footer 

In this section you can learn how to configure the header and footer of TreeGrid, how to configure their heights and styles

| Topic                                                                             | Description                                                                                                                 |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [Configuring header/footer](../api/api_treegridcolumn_properties/)                | Learn how to configure a TreeGrid header/footer  ([Example](https://snippet.dhtmlx.com/0c7qh0th))                           |
| [Setting the height for header and footer](../configuration/#headerfooter-height) | Learn how to set the height for rows in the header and footer of TreeGrid  ([Example](https://snippet.dhtmlx.com/xl0i3yof)) |
| [Styling header cells](../customization/#styling-header-cells)                    | Learn how to stylize the text of header cells ([Example](https://snippet.dhtmlx.com/vf0ws454))                              |
| [Styling footer cells](../customization/#styling-footer-cells)                    | Learn how to stylize the text of footer cells ([Example](https://snippet.dhtmlx.com/wi39d42e))                              |

### How to configure tooltips

In this section you will know how to add tooltips of the desired appearance with the necessary information, or hide them if needed.

| Topic                                                                         | Description                                                                                                                |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [Hiding tooltips](../configuration/#tooltip)                                  | Learn how to hide/show a tooltip on hovering over the content of a column ([Example](https://snippet.dhtmlx.com/jaib6ovf)) |
| [Adding templates for tooltips](../customization/#adding-template-to-tooltip) | Learn how to customize the content of the tooltip of a column ([Example](https://snippet.dhtmlx.com/520i6vbt))             |

### How to group cells in TreeGrid

In this section you will find out how to group cells in TreeGrid and its header

| Topic                                                                            | Description                                                                                                             |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [Grouping cells](../configuration/#spans)                                        | Learn how to specify columns and rows spans in TreeGrid ([Example](https://snippet.dhtmlx.com/o62liqew))                |
| [Adding/removing spans](../usage/#addingremoving-spans)                          | Learn how to add, remove, and get spans of rows and columns via API methods                                             |
| [Grouping rows and columns in the header](../api/api_treegridcolumn_properties/) | Learn how to specify spans for columns and rows in the TreeGrid header ([Example](https://snippet.dhtmlx.com/t8iust6j)) |


## How to work with columns and rows

In this section you will know how to add and remove columns and rows, how to hide and show them, how to configure their sizes and align content inside the columns.

### Adding/removing columns and rows

| Topic                                                                | Description                                                                   |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Adding / removing columns](../usage/#setting-columns-configuration) | Learn how to add/remove columns                                               |
| [Adding / removing rows](../usage/#addingremoving-a-row)             | Learn how to add/remove rows ([Example](https://snippet.dhtmlx.com/dymxt5pf)) |

### Getting configuration of a cell/column

| Topic                                                                            | Description                                                           |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [Getting configuration of a column](../usage/#getting-configuration-of-a-column) | Learn how to get an object with configuration of the specified column |
| [Getting configuration of a cell](../usage/#getting-configuration-of-a-cell)     | Learn how to get the current coordinates and size of a cell           |

### Showing/hiding columns and rows

| Topic                                                         | Description                                                                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [Showing / hiding a row](../usage/#hidingshowing-a-row)       | Learn how to show and hide a row in TreeGrid ([Example](https://snippet.dhtmlx.com/6geqbtvv))                 |
| [Is row hidden](../usage/#checking-visibility-of-a-row)       | Learn how to check whether a row is hidden ([Example](https://snippet.dhtmlx.com/6geqbtvv))                   |
| [Hiding columns](../configuration/#hidden-columns)            | Learn how to make a column hidden on TreeGrid initialization ([Example](https://snippet.dhtmlx.com/w3yg99la)) |
| [Showing / hiding a column](../usage/#hidingshowing-a-column) | Learn how to show and hide a column in TreeGrid ([Example](https://snippet.dhtmlx.com/1gekn97m))              |
| [Is column hidden](../usage/#checking-visibility-of-a-column) | Learn how to check whether a column is hidden  ([Example](https://snippet.dhtmlx.com/fcjfp19d)                |


### Expanding/collapsing rows


| Topic                                                         | Description                                                                        |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [Expand / collapse rows](../usage/#expandingcollapsing-nodes) | Learn how to collapse/expand rows ([Example](https://snippet.dhtmlx.com/1grpsaa2)) |

### Grouping data

| Topic                                    | Description                                                                                       |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [Grouping data](../usage/#grouping-data) | Learn how to divide data of TreeGrid into groups ([Example](https://snippet.dhtmlx.com/bue6zm6w)) |

## How to customize DHTMLX TreeGrid and its cells

In this section you can learn how to configure the style of Grid and its cells

| Topic                                                                                | Description                                                                                                                                                                   |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Styling Grid](../customization/#styling-treegrid)                                   | Learn how to stylize a treegrid ([Example](https://snippet.dhtmlx.com/cpvir0od))                                                                                              |
| [Styling cells](../customization/#styling-cells)                                     | Learn how to stylize the necessary cells ([Example](https://snippet.dhtmlx.com/smjecfzp))                                                                                     |
| [Styling rows](../customization/#styling-rows)                                       | Learn how to stylize the necessary rows ([Example 1](https://snippet.dhtmlx.com/3ojyoryn), [Example 2](https://snippet.dhtmlx.com/kort67nu))                                  |
| [Adding HTML content into cells](../configuration/#html-content-of-treegrid-columns) | Learn how to add HTML content (for example, an image, an icon) into data of TreeGrid cells ([Example](https://snippet.dhtmlx.com/iubccmoi))                                   |
| [Adding a template to cells](../customization/#adding-template-to-cells)             | Learn how to customize the content of cells ([Example](https://snippet.dhtmlx.com/q76qcgn3))                                                                                  |
| [Handling events in template](../configuration/#event-handlers-for-html-content)     | Learn how to assign event handlers to HTML elements of a custom template of TreeGrid cells ([Example](https://snippet.dhtmlx.com/la7u1xqy))                                   |
| [Styling selection](https://snippet.dhtmlx.com/tejgztxd)                             | The example shows how to stylize selection in the treegrid                                                                                                                    |
| [Marking cells with colors](../customization/#adding-custom-marks-to-cells)          | Learn how to apply conditional formatting and mark cells in the treegrid ([Example 1](https://snippet.dhtmlx.com/14jkc5s3), [Example 2](https://snippet.dhtmlx.com/um9mjrs5)) |
| [List of CSS classes](../../helpers/base_elements/)                                  | A set of CSS classes provided by the DHTMLX library                                                                                                                           |


## How to configure sizes of Grid and its cells

| Topic                                                                                       | Description                                                                                                                                    |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [Setting the width and height of TreeGrid](../configuration/#widthheight)                   | Learn how to specify the necessary size of TreeGrid ([Example](https://snippet.dhtmlx.com/7w8jxgft))                                           |
| [Adjusting columns by header, footer, data content](../configuration/#autosize-for-columns) | Learn how to make the size of columns to automatically adjust to their content ([Example](https://snippet.dhtmlx.com/lgvoz0ar))                |
| [Configuring auto-width for columns](../configuration/#autowidth-for-columns)               | Learn how to configure auto-width for columns ([Example](https://snippet.dhtmlx.com/irybslog))                                                 |
| [Configuring auto-height for rows](../configuration/#autoheight-for-rows)                   | Learn how to configure auto-height for columns([Example](https://snippet.dhtmlx.com/4158ftak))                                                 |
| [Setting row height](../configuration/#row-height)                                          | Learn how to configure the height of rows ([Example 1](https://snippet.dhtmlx.com/xl0i3yof), [Example 2](https://snippet.dhtmlx.com/kvl5y6nq)) |
| [Setting max width of a column](../api/api_treegridcolumn_properties/)                      | Learn how to define the maximal width which can be set for a column ([Example](https://snippet.dhtmlx.com/pyrloz7y))                           |
| [Setting min width of a column](../api/api_treegridcolumn_properties/)                      | Learn how to define the minimum width which can be set for a column   ([Example](https://snippet.dhtmlx.com/cpgjyoxn))                         |

## How to work with selection

In this section you will find the ways of work with selection functionality.

| Topic                                                | Description                                                                                                            |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [Configuring selection](../configuration/#selection) | Learn how to configure the mode of selection of TreeGrid elements ([Example](https://snippet.dhtmlx.com/v0dyh06q))     |
| [Working with selection](../usage_selection/)        | Learn how to enable/disable selection, set selection to cells, remove selection, and get the object of a selected cell |
| [Selection API](../../category/selection-api-1/)     | Learn how to use the API of Selection to manage the selection of TreeGrid cells                                        |

## How to edit data in TreeGrid

In this section you will find the ways of editing data in TreeGrid.

| Topic                                                                                 | Description                                                                                                                                                            |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Enabling/disabling editing](../configuration/#editing-treegrid-and-separate-columns) | Read how to enable/disable editing of the whole Grid or its separate columns                                                                                           |
| [Editing with different editors](../configuration/#setting-type-of-column-editor)     | Learn how to specify the type of the editor for editing the cells ([Example 1](https://snippet.dhtmlx.com/sdbfbv2n), [Example 2](https://snippet.dhtmlx.com/0gd4dn8p)) |
| [Editing of a specific cell](../usage/#editing-data)                                  | Learn how to enable editing of a cell ([Example](https://snippet.dhtmlx.com/zm6wh1ss))                                                                                 |


## How to sort data in TreeGrid

In this section you will find the ways of sorting data in TreeGrid.

| Topic                                                        | Description                                                                                                     |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| [Sorting data](../usage/#sorting-data)                       | Learn how to sort data in the treegrid ([Example](https://snippet.dhtmlx.com/bvfnpvwv))                         |
| [Sortable columns](../configuration/#sorting-columns)        | Learn how to define whether a column should be sortable ([Example](https://snippet.dhtmlx.com/r4xfph82))        |
| [Getting sorting state](../usage/#getting-the-sorting-state) | Learn how to get the current state of sorting data in TreeGrid ([Example](https://snippet.dhtmlx.com/bdwwhvls)) |


## How to filter data in TreeGrid

In this section you will find the ways of filtering data in TreeGrid.

| Topic                                                                                          | Description                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Setting the type of a filter in the header/footer](../configuration/#headerfooter-content)    | Learn how to specify the type of the filter in the header/footer of a TreeGrid column ([Example](https://snippet.dhtmlx.com/zm5pt3xk))                       |
| [Filtering data](../usage/#filtering-data)                                                     | Learn how to filter grid data by the specified criteria ([Example 1](https://snippet.dhtmlx.com/epsslwcd), [Example 2](https://snippet.dhtmlx.com/zdecovib)) |
| [Getting the header filter](../api/treegrid_getheaderfilter_method/)                           | Learn how to get and use an object of the header filter ([Example](https://snippet.dhtmlx.com/vg5o912t))                                                     |
| [Customizing filters in the header/footer](../configuration/#customizing-headerfooter-filters) | Learn how to add a custom function with your own logic for filtering data in a TreeGrid column ([Example](https://snippet.dhtmlx.com/jk64c5gr))              |


## How to scroll TreeGrid

In this section you will learn how to scroll TreeGrid to the necessary position.

| Topic                                                                | Description                                                                                                 |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [Controlling scroll behavior](../usage/#controlling-scroll-behavior) | Learn how to scroll the treegrid content to exact position ([Example](https://snippet.dhtmlx.com/kxytdnvi)) |


## How to export TreeGrid

In this section you will know how to export TreeGrid to different formats.

| Topic                                                              | Description                                                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| [Exporting TreeGrid to XLSX and CSV](../usage/#exporting-treegrid) | Learn how to export TreeGrid to Excel or CSV formats  ([Example](https://snippet.dhtmlx.com/zyfois4q)) |



- **Drag-n-drop**
- [Drag-n-drop](https://snippet.dhtmlx.com/43covmy2)
- [Drag-n-drop copy](https://snippet.dhtmlx.com/a7pg38rr)
- [Columns drag'n'drop](https://snippet.dhtmlx.com/ax5vs4a8)



## API reference

In this section you can find out corresponding references of TreeGrid API.

| Topic                                                               | Description                                                          |
| ------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [TreeGrid methods](../api/api_overview/#treegrid-methods)           | Check the list of TreeGrid methods                                   |
| [TreeGrid events](../api/api_overview/#treegrid-events)             | Check the list of TreeGrid events                                    |
| [TreeGrid properties](../api/api_overview/#treegrid-properties)     | Check the list of TreeGrid properties                                |
| [TreeGrid column properties](../api/api_treegridcolumn_properties/) | Check the list of properties of a TreeGrid column                    |
| [DataCollection API](../../tree_collection/)                        | Check the API of TreeCollection to work with TreeGrid data           |
| [Selection API](../../category/selection-api-1/)                    | Check the API of Selection to manage the selection of TreeGrid cells |


## Common functionality

In this section you will learn about common functionality of the library which can be useful while working with Grid.

| Topic                                                         | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- |
| [Touch support](../../common_features/touch_support/)         | Learn how to work with touch support                          |
| [TypeScript support](../../common_features/using_typescript/) | Learn how to work with TypeScript                             |
| [Custom scroll](../../common_features/custom_scroll/)         | Learn how to enable custom scroll in TreeGrid                 |
| [AwaitRedraw](../../helpers/await_redraw/)                    | Learn how to perform the code after the component’s rendering |

## Any questions left?

<button class="support_btn"><a href="https://snippet.dhtmlx.com/all?text=treegrid">Check more samples >>></a> </button>
<br>
<button class="support_btn"><a href="https://forum.dhtmlx.com/">Ask the community >>></a> </button>


:::info
Do you need more functionality? Feel free to share your suggestions in the comments below!
:::
