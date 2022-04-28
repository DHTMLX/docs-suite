---
sidebar_label: Features
title: JavaScript Tree - Features 
description: You can explore the features of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Features

This page contains structured information that will help you to start working with DHTMLX Tree and go into deep dive on its functionality.

## How to start with DHTMLX Tree

In this section you can find out how to initialize Tree, how to load data into the component and how to integrate Tree into your applications.

### Initialization

| Topic                                                    | Description                    |
| -------------------------------------------------------- | ------------------------------ |
| [Basic initialization](../initialization_of_dhtmlxtree/) | Learn how to initialize a Tree |


### Loading data into Tree

| Topic                                                                              | Description                                                                                              |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [Loading data into Tree](../loading_data/)                                         | Read how to load the initial data into Tree                                                              |
| [Initialization with config.data](https://snippet.dhtmlx.com/r49y51k3)             | The example shows how to load data into Tree on the initialization stage                                 |
| [Initialization with data.load()](https://snippet.dhtmlx.com/oz4jd5hc)             | The example shows how to load data from an external file                                                 |
| [Initialization with data.parse()](https://snippet.dhtmlx.com/orm283hq)            | The example shows how to load data from a local data source                                              |
| [Initialization with external TreeCollection](https://snippet.dhtmlx.com/osjo7t0h) | The example shows how to load data from external TreeCollection                                          |
| [Auto-loading Tree items](../api/tree_autoload_config/)                            | Learn how to build a Tree structure while opening items ([Example](https://snippet.dhtmlx.com/ahrblf1m)) |

### Integration

| Topic                                                   | Description                                                                                                                                  |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [Backend integration](integration/suite_and_backend.md) | Learn how to connect DHTMLX Suite to a backend  ([Demo](https://github.com/DHTMLX/nodejs-suite-demo))                                        |
| [Optimus](optimus_guides.md)                            | Learn how to use DHTMLX Optimus framework for creating  DHTMLX-based app <br>(recommended framework for creating apps with Suite components) |
| [React integration](integration/suite_and_react.md)     | Learn how to use DHTMLX Tree with React ([Demo](https://github.com/DHTMLX/react-widgets))                                                    |
| [Angular integration](integration/suite_and_angular.md) | Learn how to use DHTMLX Tree with Angular ([Demo](https://github.com/DHTMLX/angular-suite-demo))                                             |
| [Vue integration](integration/suite_and_vue.md)         | Learn how to use DHTMLX Tree with Vue.js ([Demo](https://github.com/DHTMLX/vue-suite-demo))                                                  |

## How to configure DHTMLX Tree

In this section you can find out how to configure drag-n-drop in Tree, how to enable or disable key navigation, how to let users to edit items by double-click.


| Topic                                                                               | Description                                                                                                                                                                          |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Configuring drag-n-drop](../drag_and_drop_handling/#drag-mode)                     | Learn how to configure the necessary mode of drag-n-drop of items between trees ([Example 1](https://snippet.dhtmlx.com/7idtw7i4), [Example 2](https://snippet.dhtmlx.com/hyfz6ai7)) |
| [Configuring drop behavior](../drag_and_drop_handling/#drop-behavior)               | Learn how to define the behavior of a dragged item ([Example](https://snippet.dhtmlx.com/80mh3hly))                                                                                  |
| [Copying items during drag-n-drop](../drag_and_drop_handling/#copying-dragged-item) | Learn how to copy an item to a target during drag-n-drop ([Example](https://snippet.dhtmlx.com/xm0lxbpj))                                                                            |
| [Enabling/disabling key navigation](../configuration/#key-navigation)               | Learn how to enable and disable key navigation ([Example](https://snippet.dhtmlx.com/icql8fwq))                                                                                      |
| [Activating inline editing](../configuration/#editing-of-items)                     | Learn how to activate inline editing on Tree initialization ([Example](https://snippet.dhtmlx.com/hyfz6ai7))                                                                         |

## How to customize DHTMLX Tree

In this section you can learn how to customize a Tree, its icons, and configure the height of Tree items.

| Topic                                                                                        | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Setting the height of an item](../tree_itemheight_config/)                                  | Learn how to set the height for Tree items ([Example](https://snippet.dhtmlx.com/w1qk9u7m))                                                                          |
| [Setting template for rendering items](../setting_tree_appearance/#adding-template-to-items) | Learn how to define a template for rendering items in Tree and add event handlers to HTML elements of the template ([Example]( https://snippet.dhtmlx.com/hg3f50td)) |
| [Applying custom icons](../setting_tree_appearance/#changing-icons)                          | Learn how to add custom icons to Tree items ([Example](https://snippet.dhtmlx.com/lpsgn3j7))                                                                         |
| [Applying custom icons via data set](https://snippet.dhtmlx.com/h7mlx21q)                    | The example shows how to add custom icons when you prepare a data set                                                                                                |
| [Styling (custom CSS)](../setting_tree_appearance/#styling)                                  | Learn how to customize the appearance of Tree ([Example](https://snippet.dhtmlx.com/ocv4p7zg))                                                                       |
| [Custom toggle icon](https://snippet.dhtmlx.com/zapehxd3)                                    | The example shows how to customize the toggle icon                                                                                                                   |
| [List of CSS classes](../../helpers/base_elements/)                                          | A set of CSS classes provided by the DHTMLX library                                                                                                                  |


## How to work with DHTMLX Tree

In this section you may study how to expand or collapse Tree items, how to work with their state, how to add new items, update, or remove them, how to add and manipulate checkboxes, how to work with selection functionality, and more.

### How to work with Tree items

| Topic                                                                             | Description                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Setting / getting Tree state](../work_with_tree/#settinggetting-tree-state)      | Learn how to set and get the state of Tree items<br> ([Example 1](https://snippet.dhtmlx.com/xo6y6xi6), [Example 2](https://snippet.dhtmlx.com/g0539az1))                                                                 |
| [Collapsing / expanding Tree items](../work_with_tree/#expandingcollapsing-items) | Learn how to collapse or expand a certain or all items in Tree<br> ([Example 1](https://snippet.dhtmlx.com/esxb15hm), [Example 2](https://snippet.dhtmlx.com/qjk56co2), [Example 3](https://snippet.dhtmlx.com/c0nqyz60)) |
| [Setting focus on an item](../api/tree_focusitem_method/)                         | Learn how to set focus on a certain item                                                                                                                                                                                  |
| [Editing items](../work_with_tree/#editing-an-item)                               | Learn how to enable the editing functionality for Tree item dynamically                                                                                                                                                   |

### How to use checkboxes of Tree items 

| Topic                                                                        | Description                                                                                                          |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [Adding checkboxes to Tree items](../configuration/#checkboxes-for-items)    | Learn how to add checkboxes for Tree items ([Example](https://snippet.dhtmlx.com/hyfz6ai7))                          |
| [Checking/unchecking checkboxes](../work_with_tree/#checkuncheck-checkboxes) | Learn how to mark checkboxes of a Tree item as checked or unchecked ([Example](https://snippet.dhtmlx.com/uzz6uknx)) |
| [Getting checked items](../work_with_tree/#get-checked-checkboxes)           | Learn how to get the list of all checked items in a tree ([Example](https://snippet.dhtmlx.com/cz7xypgz))            |

### How to work with Tree data

| Topic                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Adding items](../work_with_tree/#adding-items-into-tree)     | Learn how to add new items into Tree ([Example](https://snippet.dhtmlx.com/k0os4lk2))                                                            |
| [Updating items](../work_with_tree/#updating-tree-items)      | Learn how to update config options of a Tree item (for example, to change the value of an item) ([Example](https://snippet.dhtmlx.com/e0vgry6n)) |
| [Removing items](../work_with_tree/#removing-items-from-tree) | Learn how to remove items from Tree ([Example](https://snippet.dhtmlx.com/k0os4lk2))                                                                |
| [Filtering data](https://snippet.dhtmlx.com/a2jkwdrt)         | The example shows how to filter data in Tree                                                                                                     |
| [Sorting data](https://snippet.dhtmlx.com/3vttyh9o)           | The example shows how to sort data in Tree                                                                                                       |


### How to work with selection 

| Topic                                                       | Description                                                                                                                                                                       |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Using selection functionality](../usage_selection/)        | Learn how to enable/disable selection, set selection to items, remove selection, and get the object of a selected item ([Example](https://snippet.dhtmlx.com/g6cmggqt?text=tree)) |
| [Disabling selection](../configuration/#selection-of-items) | Learn how to disable the ability to select items in Tree on its initialization ([Example](https://snippet.dhtmlx.com/2x9htpke))                                                   |

## API reference

In this section you can find out corresponding references of Tree API.

| Topic                                              | Description                                            |
| -------------------------------------------------- | ------------------------------------------------------ |
| [Tree methods](../../category/tree-methods/)       | Check the list of Tree methods                         |
| [Tree events](../../category/tree-events/)         | Check the list of Tree events                          |
| [Tree properties](../../category/tree-properties/) | Check the list of Tree properties                      |
| [TreeCollection API](../../tree_collection/)       | Check the API of TreeCollection to work with Tree data |

## Common functionality

In this section you will learn about common functionality of the library which can be useful while working with Tree.

| Topic                                                         | Description                                                                           |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [Touch support](../../common_features/touch_support/)         | Learn how to work with touch support ([Example](https://snippet.dhtmlx.com/q3cu6x1a)) |
| [TypeScript support](../../common_features/using_typescript/) | Learn how to work with TypeScript                                                     |
| [AwaitRedraw](../../helpers/await_redraw/)                    | Learn how to perform the code after the component’s rendering                         |

## Any questions left?

<button class="support_btn"><a href="https://snippet.dhtmlx.com/all?text=tree">Check more samples >>></a> </button>
<br>
<button class="support_btn"><a href="https://forum.dhtmlx.com/">Ask the community >>></a> </button>

:::info
Do you need more functionality? Feel free to share your suggestions in the comments below!
:::
