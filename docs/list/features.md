---
sidebar_label: Features
title: JavaScript List - Features 
description: You can explore the features of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Features

This page contains structured information that will help you to start working with DHTMLX List and go into deep dive on its functionality.

## How to start with DHTMLX List

In this section you can find out how to initialize List, how to load data into the component and how to integrate List into your applications.

### Initialization

| Topic                                                       | Description                                                |
| ----------------------------------------------------------- | ---------------------------------------------------------- |
| [Basic initialization](../initialization/)                  | Learn how to initialize List                               |
| [Pagination with List](https://snippet.dhtmlx.com/6sju9jl5) | The example shows how to initialize List inside Pagination |

### Loading data into List

| Topic                                                                              | Description                                                                                                        |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [Loading data into List](../load_data/)                                            | Read how to load the initial data into List                                                                        |
| [Initialization with config.data](https://snippet.dhtmlx.com/kzg2fza0)             | The example shows how to load data into List on the initialization stage                                           |
| [Initialization with data.load()](https://snippet.dhtmlx.com/1it5kfhq)             | The example shows how to load data from external file                                                              |
| [Initialization with data.parse()](https://snippet.dhtmlx.com/anj2keoc)            | The example shows how to load data from a local data source                                                        |
| [Initialization with external DataCollection](https://snippet.dhtmlx.com/20i6vbtj) | The example shows how to load data from external DataCollection                                                    |
| [Rendering a large data set](../configuration/#dynamic-rendering-of-items)         | Learn how to enable dynamic loading of data on scrolling the list ([Example](https://snippet.dhtmlx.com/x4gxy38e)) |
| [Lazy loading](https://snippet.dhtmlx.com/list_lazy_loading)                       | The example shows how to render data dynamically                                                                   |

### Integration

| Topic                                                   | Description                                                                                                                                  |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [Backend integration](integration/suite_and_backend.md) | Learn how to connect DHTMLX Suite to a backend  ([Demo](https://github.com/DHTMLX/nodejs-suite-demo))                                        |
| [Optimus](optimus_guides.md)                            | Learn how to use DHTMLX Optimus framework for creating  DHTMLX-based app <br>(recommended framework for creating apps with Suite components) |
| [React integration](integration/suite_and_react.md)     | Learn how to use DHTMLX List with React ([Demo](https://github.com/DHTMLX/react-widgets))                                                    |
| [Angular integration](integration/suite_and_angular.md) | Learn how to use DHTMLX List with Angular ([Demo](https://github.com/DHTMLX/angular-suite-demo))                                             |
| [Vue integration](integration/suite_and_vue.md)         | Learn how to use DHTMLX List with Vue.js ([Demo](https://github.com/DHTMLX/vue-suite-demo))                                                  |

## How to configure List

In this section you will know how to configure the drag-n-drop functionality, how to activate inline editing and key navigation.

| Topic                                                             | Description                                                                                                |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [Configuring drag-n-drop](../configuration/#drag-n-drop-of-items) | Learn how to configure drag-n-drop of items between lists ([Example](https://snippet.dhtmlx.com/yfz6ai7j)) |
| [Copying items during drag-n-drop](../api/list_dragcopy_config/)  | Learn how to copy an item to a target during drag-n-drop ([Example](https://snippet.dhtmlx.com/b0dikxzp))  |
| [Inline editing](../configuration/#editing-items)                 | Learn how to enable inline editing in List ([Example](https://snippet.dhtmlx.com/f26lfcai))                |
| [Keyboard navigation](../configuration/#arrow-keys-navigation)    | Learn how to enable key navigation in List                                                                 |

## How to customize List and change its size

In this section you can learn how to configure the height and style of List and its items.

| Topic                                                                             | Description                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Height of List](../configuration/#height-of-the-list)                    | Learn how to set the height for List ([Example](https://snippet.dhtmlx.com/k2mj2sz7))                                                                                                                                                                                                                                  |
| [Height of a List item](../configuration/#height-of-an-item)              | Learn how to set the height for List items ([Example](https://snippet.dhtmlx.com/89buovn2))                                                                                                                                                                                                                            |
| [Setting template for rendering items](../configuration/#template-for-list-items) | Learn how [to define a template](../configuration/#template-for-list-items) for rendering items in List ([Example](https://snippet.dhtmlx.com/gtzdwpj4)) and add [event handlers](../configuration/#event-handlers-for-the-template) to HTML elements of the template ([Example](https://snippet.dhtmlx.com/7fyilbb7)) |
| [Rendering HTML content](../configuration/#html-content-of-list-options)          | Learn how to display HTML content as plain text to prevent XSS attacks ([Example](https://snippet.dhtmlx.com/tj0tn7fl))                                                                                                                                                                                                |
| [Styling List](../customization/#styling)                                         | Learn how to customize List  ([Example](https://snippet.dhtmlx.com/s461f09w))                                                                                                                                                                                                                                          |
| [Styling selected List items](../customization/#adding-custom-selection)          | Learn how to add custom style to the selected items ([Example](https://snippet.dhtmlx.com/6hss19d3))                                                                                                                                                                                                                   |
| [Styling List items](../customization/#styling-items)                             | Learn how to customize List items ([Example](https://snippet.dhtmlx.com/ipu9yshl))                                                                                                                                                                                                                                     |
| [CSS template A](https://snippet.dhtmlx.com/list_template_a)                      | The example of a CSS template for DHTMLX List                                                                                                                                                                                                                                                                          |
| [CSS template B](https://snippet.dhtmlx.com/list_template_b)                      | The example of a CSS template for DHTMLX List                                                                                                                                                                                                                                                                          |
| [List of CSS classes](../../helpers/base_elements/)                  | A set of CSS classes provided by the DHTMLX library                                                                   |

## How to work with data in List

This section will tell you how to use [DataCollection API](guides/datacollection_guide.md) for working with data of List, i.e. edit, add, remove, sort data, etc.

### How to edit, add, remove data

In this section you may study how to add new data items into List, how to edit, update, or remove the items.

| Topic                                                          | Description                                                                                      |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [Editing items](../work_with_list/#updating-list-items)         | Learn how to update List items using Form  ([Example](https://snippet.dhtmlx.com/6jpn7a6h))      |
| [Adding new items](../work_with_list/#adding-items-into-list) | Learn how to add new items into List using Form ([Example](https://snippet.dhtmlx.com/f7cbdiqg)) |
| [Updating an item](../work_with_list/#updating-list-items)      | Learn how to update data of an item ([Example](https://snippet.dhtmlx.com/6jpn7a6h))          |
| [Removing items](../work_with_list/#removing-items-from-list)  | Learn how to remove items from List  ([Example](https://snippet.dhtmlx.com/wmozu18g))            |
| [DataCollection API](../../data_collection/)                                       | Check the list of all available DataCollection API|

### How to sort and filter data

In this section you may study how to sort and filter data in List.

| Topic                                                     | Description                                                                       |
| --------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [Filtering items](../work_with_list/#filtering-list-data) | Learn how to filter data in List ([Example](https://snippet.dhtmlx.com/k8kvmy8v)) |
| [Sorting items](../work_with_list/#sorting-list-data)     | Learn how to sort data in List ([Example](https://snippet.dhtmlx.com/876meu9a))   |


## How to work with selection

In this section you may study how to work with selection functionality.

| Topic                                                                                  | Description                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Enabling/disabling selection](../configuration/#selection-of-items)                   | Learn how to enable/disable selection on List initialization ([Example](https://snippet.dhtmlx.com/dk4czs1z))                                                                                                          |
| [Enabling/disabling multiselection](../configuration/#multiple-selection-of-items)     | Learn how to enable/disable selection of multiple items  ([Example](https://snippet.dhtmlx.com/0sorkczm))                                                                                                              |
| [Enabling/disabling selection](../usage_selection/#enablingdisabling-selection-object) | Learn how to enable/disable the ability to select items via the selection object                                                                                                                                       |
| [Setting selection](../usage_selection/#selecting-an-item)                             | Learn how to select a particular item or all items ([Example](https://snippet.dhtmlx.com/io8oxxg2))                                                                                                                    |
| Getting selection                                                                      | Learn how to get the [id](../usage_selection/#getting-id-of-a-selected-item) or [an object](../usage_selection/#getting-object-of-a-selected-item) of a selected item ([Example](https://snippet.dhtmlx.com/elonnovx)) |
| [Removing selection](../usage_selection/#unselecting-an-item)                          | Learn how to remove selection from a selected item(s)                                                                                                                                                                  |


## How to work with item in focus

In this section you will learn how to set focus on an item and get the id/object of an item in focus.

| Topic                                                 | Description                                                                                                                  |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [Setting focus on item](../api/list_setfocus_method/) | Learn how to set focus on an item ([Example](https://snippet.dhtmlx.com/ermcjx3d))                                           |
| Getting an item in focus                              | Learn how to get the [id](../api/list_getfocus_method/) or an [object](../api/list_getfocusitem_method/) of an item in focus |

## How to work with List events

This section explains how to work with List events.

| Topic                                       | Description                                                                                               |
| :------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| [Event basic rules](guides/events_guide.md) | Learn basic rules on how to work with events                                                              |
| [Event handling](../events/)       | Learn how to attach, detach, or call the List events ([Example](https://snippet.dhtmlx.com/iwt1yd61)) |

## API reference

In this section you can find out corresponding references of List API.

| Topic                                              | Description                                            |
| -------------------------------------------------- | ------------------------------------------------------ |
| [List methods](../../category/list-methods/)       | Check the list of List methods                         |
| [List events](../../category/list-events/)         | Check the list of List events                          |
| [List properties](../../category/list-properties/) | Check the list of List properties                      |
| [DataCollection API](../../data_collection/)       | Check the API of DataCollection to work with List data |


## Common functionality

In this section you will learn about common functionality of the library which can be useful while working with List.

| Topic                                                         | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- |
| [Touch support](../../common_features/touch_support/)         | Learn how to work with touch support                          |
| [TypeScript support](../../common_features/using_typescript/) | Learn how to work with TypeScript                             |
| [Custom scroll](../../common_features/custom_scroll/)         | Learn how to use custom scroll in List                        |
| [AwaitRedraw](../../helpers/await_redraw/)                    | Learn how to perform the code after the component’s rendering |

## Any questions left?

<button class="support_btn"><a href="https://snippet.dhtmlx.com/all?tag=list">Check more samples >>></a> </button>
<br>
<button class="support_btn"><a href="https://forum.dhtmlx.com/c/suite/suite7/">Ask the community >>></a> </button>

:::info
Do you need more functionality? Feel free to share your suggestions in the comments below!
:::
