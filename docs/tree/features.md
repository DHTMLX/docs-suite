---
sidebar_label: Features
title: JavaScript Tree - Features 
description: You can explore the features of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Features

This page helps you start working with DHTMLX Tree and explore its functionality in depth.

## How to start with DHTMLX Tree

In this section you will learn how to initialize Tree, load data into it, and integrate it into your applications.

### Initialization

| Topic                                                                  | Description                                           |
| ---------------------------------------------------------------------- | ----------------------------------------------------- |
| [Basic initialization](tree/initialization_of_dhtmlxtree.md)               | Learn how to initialize a Tree                        |
| [Initialization of a collapsed Tree](tree/configuration.md#collapsed-mode) | Learn how to initialize a Tree in the collapsed state ([Example](https://snippet.dhtmlx.com/cqbg0wsf))|


### Loading data into Tree

| Topic                                                                              | Description                                                                                              |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [Loading data into Tree](tree/loading_data.md)                                         | Read how to load the initial data into Tree                                                              |
| [Initialization with config.data](https://snippet.dhtmlx.com/r49y51k3)             | The example shows how to load data into Tree during initialization                                 |
| [Initialization with data.load()](https://snippet.dhtmlx.com/oz4jd5hc)             | The example shows how to load data from an external file                                                 |
| [Initialization with data.parse()](https://snippet.dhtmlx.com/orm283hq)            | The example shows how to load data from a local data source                                              |
| [Initialization with external TreeCollection](https://snippet.dhtmlx.com/osjo7t0h) | The example shows how to load data from an external TreeCollection                                          |
| [Auto-loading Tree items](tree/api/tree_autoload_config.md)                            | Learn how to build a Tree structure as users open items ([Example](https://snippet.dhtmlx.com/ahrblf1m)) |

### Integration

| Topic                                                   | Description                                                                                                                                  |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [Backend integration](integration/suite_and_backend.md) | Learn how to connect DHTMLX Suite to a backend  ([Demo](https://github.com/DHTMLX/nodejs-suite-demo))                                        |
| [Optimus](/optimus_guides/)                            | Learn how to use the DHTMLX Optimus framework to build DHTMLX-based apps <br>(the recommended framework for apps with Suite components) |
| [React integration](integration/suite_and_react.md)     | Learn how to use DHTMLX Tree with React ([Demo](https://github.com/DHTMLX/react-suite-demo))                                                    |
| [Angular integration](integration/suite_and_angular.md) | Learn how to use DHTMLX Tree with Angular ([Demo](https://github.com/DHTMLX/angular-suite-demo))                                             |
| [Vue integration](integration/suite_and_vue.md)         | Learn how to use DHTMLX Tree with Vue.js ([Demo](https://github.com/DHTMLX/vue-suite-demo))                                                  |

## How to configure Tree

In this section you will learn how to configure drag-n-drop in Tree, enable or disable key navigation, let users edit items with a double-click, and more.


| Topic                                            				| Description                                                                |
| ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [Configuring drag-n-drop](tree/drag_and_drop_handling.md)         | Learn how to choose a drag-n-drop mode for items between trees ([Example 1](https://snippet.dhtmlx.com/7idtw7i4), [Example 2](https://snippet.dhtmlx.com/hyfz6ai7)) |
| [Configuring drop behavior](tree/drag_and_drop_handling.md)       | Learn how to define the behavior of a dragged item ([Example](https://snippet.dhtmlx.com/80mh3hly))             |
| [Copying items during drag-n-drop](tree/drag_and_drop_handling.md) | Learn how to copy an item to a target during drag-n-drop ([Example](https://snippet.dhtmlx.com/xm0lxbpj))              |
| [Enabling/disabling key navigation](tree/configuration.md#key-navigation)  | Learn how to enable and disable key navigation ([Example](https://snippet.dhtmlx.com/icql8fwq))           |
| [Activating inline editing](tree/configuration.md#editing-of-items) | Learn how to activate inline editing on Tree initialization ([Example](https://snippet.dhtmlx.com/hyfz6ai7))          |
| [Enabling and configuring tooltips](tree/configuration.md#tooltips-for-items) | Learn how to enable and configure tooltips for Tree items ([Example](https://snippet.dhtmlx.com/kswil8cl))          |

## How to customize Tree and change its size

In this section you will learn how to customize Tree and its icons, and how to set the height of Tree items.

| Topic                                                                                        | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Height of Tree items](tree/api/tree_itemheight_config.md)                                   | Learn how to set the height for Tree items ([Example](https://snippet.dhtmlx.com/w1qk9u7m))                                                                          |
| [Setting template for rendering items](tree/setting_tree_appearance.md#adding-template-to-items) | Learn how to define a template for rendering items in Tree and add event handlers to HTML elements of the template ([Example]( https://snippet.dhtmlx.com/hg3f50td)) |
| [Applying custom icons](tree/setting_tree_appearance.md#changing-icons)                          | Learn how to add custom icons to Tree items ([Example](https://snippet.dhtmlx.com/lpsgn3j7))                                                                         |
| [Applying custom icons in a data set](https://snippet.dhtmlx.com/h7mlx21q)                    | The example shows how to add custom icons when you prepare a data set                                                                                                |
| [Custom toggle icon](https://snippet.dhtmlx.com/zapehxd3)                                    | The example shows how to customize the toggle icon                                                                                                                   |
| [Styling (custom CSS)](tree/setting_tree_appearance.md#styling)                                  | Learn how to customize the appearance of Tree ([Example](https://snippet.dhtmlx.com/ocv4p7zg))                                                                       |
| [List of CSS classes](helpers/base_elements.md)                                          | The CSS classes included in the DHTMLX library                                                                                                                  |


## How to work with Tree

In this section you will learn how to expand or collapse Tree items, work with their state, and more.

### How to work with Tree items

| Topic                                                                             | Description                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Setting / getting Tree state](tree/work_with_tree.md#settinggetting-tree-state)      | Learn how to set and get the state of Tree items<br> ([Example 1](https://snippet.dhtmlx.com/xo6y6xi6), [Example 2](https://snippet.dhtmlx.com/g0539az1))                                                                 |
| [Collapsing / expanding Tree items](tree/work_with_tree.md#expandingcollapsing-items) | Learn how to collapse or expand one item or all items in Tree<br> ([Example 1](https://snippet.dhtmlx.com/esxb15hm), [Example 2](https://snippet.dhtmlx.com/qjk56co2), [Example 3](https://snippet.dhtmlx.com/c0nqyz60)) |
| [Setting focus on an item](tree/api/tree_focusitem_method.md)                         | Learn how to set focus on an item                                                                                                                                                                                  |
| [Editing items](tree/work_with_tree.md#editing-an-item)                               | Learn how to enable editing of a Tree item dynamically                                                                                                                                                   |

### How to use checkboxes of Tree items 

| Topic                                                                        | Description                                                                                                          |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [Adding checkboxes to Tree items](tree/configuration.md#checkboxes-for-items)    | Learn how to add checkboxes for Tree items ([Example](https://snippet.dhtmlx.com/hyfz6ai7))                          |
| [Checking/unchecking checkboxes](tree/work_with_tree.md#checkuncheck-checkboxes) | Learn how to check or uncheck the checkbox of a Tree item ([Example](https://snippet.dhtmlx.com/uzz6uknx)) |
| [Getting checked items](tree/work_with_tree.md#get-checked-checkboxes)           | Learn how to get the list of all checked items in a tree ([Example](https://snippet.dhtmlx.com/cz7xypgz))            |

## How to work with data in Tree

In this section you will learn how to use the [TreeCollection API](guides/datacollection_guide.md) to work with Tree data — add, update, remove, filter, and sort items.

| Topic                                                              | Description                                                                                                                                      |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Adding items](tree/work_with_tree.md#adding-items-into-tree)          | Learn how to add new items into Tree ([Example](https://snippet.dhtmlx.com/k0os4lk2))                                                            |
| [Updating items](tree/work_with_tree.md#updating-tree-items)           | Learn how to update config options of a Tree item (for example, to change the value of an item) ([Example](https://snippet.dhtmlx.com/e0vgry6n)) |
| [Getting a parent item](tree/work_with_tree.md#getting-parent-of-item) | Learn how to get the parent of an item                                                                                                           |
| [Removing items](tree/work_with_tree.md#removing-items-from-tree)      | Learn how to remove items from Tree ([Example](https://snippet.dhtmlx.com/k0os4lk2))                                                             |
| [Filtering data](https://snippet.dhtmlx.com/a2jkwdrt)              | The example shows how to filter data in Tree                                                                                                     |
| [Sorting data](https://snippet.dhtmlx.com/3vttyh9o)                | The example shows how to sort data in Tree                                                                                                       |
| [TreeCollection API](/tree_collection/)                       | Check the full TreeCollection API reference                                                                                               |


## How to work with selection 

In this section you will learn how to work with selection.

| Topic                                                       | Description                                                                                                                                                                      |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Using selection functionality](tree/usage_selection.md)        | Learn how to enable or disable selection, select and unselect items, and get the object of a selected item ([Example](https://snippet.dhtmlx.com/g6cmggqt?tag=tree)) |
| [Disabling selection](tree/configuration.md#selection-of-items) | Learn how to disable item selection on Tree initialization ([Example](https://snippet.dhtmlx.com/2x9htpke))                                                  |

## How to work with Tree events

This section explains how to work with Tree events.

| Topic                                       | Description                                                                                           |
| :------------------------------------------ | :---------------------------------------------------------------------------------------------------- |
| [Event basic rules](guides/events_guide.md) | Learn the basic rules of event handling                                                          |
| [Event handling](tree/events_handling.md)       | Learn how to attach, detach, or call Tree events ([Example](https://snippet.dhtmlx.com/vux1ye9g)) |

## API reference

In this section you will find the Tree API reference.

| Topic                                              | Description                                            |
| -------------------------------------------------- | ------------------------------------------------------ |
| [Tree methods](/category/tree-methods/)       | Check the list of Tree methods                         |
| [Tree events](/category/tree-events/)         | Check the list of Tree events                          |
| [Tree properties](/category/tree-properties/) | Check the list of Tree properties                      |
| [TreeCollection API](/tree_collection/)       | Check the TreeCollection API for working with Tree data |

## Common functionality

In this section you will learn about common library functionality that is useful when you work with Tree.

| Topic                                                         | Description                                                                           |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [Touch support](common_features/touch_support.md)         | Learn how to work with touch support ([Example](https://snippet.dhtmlx.com/q3cu6x1a)) |
| [TypeScript support](common_features/using_typescript.md) | Learn how to work with TypeScript                                                     |
| [Accessibility support](common_features/accessibility_support.md) | Learn about accessibility support in Tree                                             |
| [AwaitRedraw](helpers/await_redraw.md)                    | Learn how to run code after the component renders                         |

## Any questions left?

<button class="support_btn"><a href="https://snippet.dhtmlx.com/hg3f50td?tag=tree">Check more samples >>></a> </button>
<br>
<button class="support_btn"><a href="https://forum.dhtmlx.com/c/suite/suite7/">Ask the community >>></a> </button>

:::info
Do you need more functionality? Feel free to share your suggestions in the comments below!
:::
