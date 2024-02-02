---
sidebar_label: Features
title: JavaScript Menu - Features 
description: You can explore the features of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Features

This page contains structured information that will help you to start working with DHTMLX Menu and go into deep dive on its functionality.

## How to start with DHTMLX Menu

In this section you can find out how to initialize Menu, how to add controls inside a Menu and how to integrate a Menu into your applications.

### Menu initialization

| Topic                                    | Description                                                                     |
| ---------------------------------------- | ------------------------------------------------------------------------------- |
| [Basic initialization](../how_to_start/) | Learn how to initialize a Menu |


### Loading data into Menu

| Topic                                                                              | Description                                                              |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [Loading data into Menu](../data_loading/)                                         | Read how to load the initial data into Menu                              |
| [Initialization with config.data](https://snippet.dhtmlx.com/cg62qa9v)             | The example shows how to load data into Menu on the initialization stage |
| [Initialization with data.load()](https://snippet.dhtmlx.com/wjqno7xq)             | The example shows how to load data from external file                    |
| [Initialization with data.parse()](https://snippet.dhtmlx.com/8y2b1zqm)            | The example shows how to load data from a local data source              |
| [Initialization with external TreeCollection](https://snippet.dhtmlx.com/1mkjgqo3) | The example shows how to load data from external TreeCollection          |


### Context Menu initialization

| Topic                                                       | Description                                                                                                                                                           |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Initialization of Context Menu](../creating_context_menu/) | Learn how to initialize and show DHTMLX Context Menu on the page ([Example 1](https://snippet.dhtmlx.com/mgya9p1l), [Example 2](https://snippet.dhtmlx.com/9xfpymlg)) |


### Menu controls

| Topic                                                 | Description                                                                                                      |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [MenuItem](../configuring_menu_items/)       | Learn how to add a MenuItem control into the menu ([Example](https://snippet.dhtmlx.com/qkxeer2h))               |
| [Custom HTML](../configuring_menu_items/#custom-html) | Learn how to add an item with custom HTML content into the menu ([Example](https://snippet.dhtmlx.com/nk65jfmx)) |
| [Spacer](../configuring_menu_items/#spacer)           | Learn how to add a Spacer control into the menu ([Example](https://snippet.dhtmlx.com/fjaolual))                 |
| [Separator](../configuring_menu_items/#separator)     | Learn how to add a Separator control into the menu ([Example](https://snippet.dhtmlx.com/71tybx5j))              |
  

### Integration

| Topic                                                   | Description                                                                                                                                  |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [Backend integration](integration/suite_and_backend.md) | Learn how to connect DHTMLX Suite to a backend  ([Demo](https://github.com/DHTMLX/nodejs-suite-demo))                                        |
| [Optimus](optimus_guides.md)                            | Learn how to use DHTMLX Optimus framework for creating  DHTMLX-based app <br>(recommended framework for creating apps with Suite components) |
| [React integration](integration/suite_and_react.md)     | Learn how to use DHTMLX Menu with React ([Demo](https://github.com/DHTMLX/react-widgets))                                                    |
| [Angular integration](integration/suite_and_angular.md) | Learn how to use DHTMLX Menu with Angular ([Demo](https://github.com/DHTMLX/angular-suite-demo))                                             |
| [Vue integration](integration/suite_and_vue.md)         | Learn how to use DHTMLX Menu with Vue.js ([Demo](https://github.com/DHTMLX/vue-suite-demo))                                                  |


## How to customize Menu

In this section you can learn how to configure the style of Menu and its controls.

| Topic                                                                            | Description                                                                                                                   |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [Configuring type of navigation](../api/menu_navigationtype_config/)             | Learn how to configure the action that opens menu options (click or pointer) ([Example](https://snippet.dhtmlx.com/uhv64cm7)) |
| [Adding HTML content into items](../configuring_menu_items/) | Learn how to add a custom image into the menu item ([Example](https://snippet.dhtmlx.com/2hr77egx))                           |
| [Applying custom icons](../customization/#icons)                                 | Learn how to add custom icons to Menu items ([Example](https://snippet.dhtmlx.com/nkmz6ilv))                                  |
| [Styling Menu](../customization/#styling)                                        | Learn how to customize Menu ([Example](https://snippet.dhtmlx.com/kfy2th5n))                                                  |
| [List of CSS classes](../../helpers/base_elements/)                              | A set of CSS classes provided by the DHTMLX library                                                                           |

## How to work with data in Menu

This section will tell you how to use [TreeCollection API](guides/datacollection_guide.md) for working with data of Menu, i.e. edit, add, remove, rearrange items, etc.

| Topic                                                                                                     | Description                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Adding](../work_with_menu/#adding-menu-items) / [removing items](../work_with_menu/#removing-menu-items) | Learn how to add and remove items in Menu ([Example](https://snippet.dhtmlx.com/nood4bfx))                                                                       |
| [Updating an item](../../tree_collection/api/treecollection_update_method/)                               | Learn how to update items in Menu ([Example](https://snippet.dhtmlx.com/321il6oc))                                                                               |
| Setting item's configuration                                                                              | Learn how to [set a text label for menu item](../work_with_menu/#setting-item-text) or [add a shortcut to a menu option](../work_with_menu/#setting-item-hotkey) |
| [Rearranging items](../work_with_menu/#rearranging-menu-items)                                            | Learn how to move menu items to another position                                                                                                                 |
| [Iterating items](../work_with_menu/#iterating-menu-items)                                                | Learn how to apply the necessary logic to all (or some) menu items                                                                                               |
| [TreeCollection API](../../tree_collection/)                                       | Check the list of all available TreeCollection API|

## How to work with Menu items

In this section you may study how to hide and show, enable and disable Menu items.

| Topic                                                                           | Description                                                                                 |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [Enabling / disabling items](../work_with_menu/#disablingenabling-menu-options) | Learn how to disable and enable menu items ([Example](https://snippet.dhtmlx.com/zuoam7r7)) |
| [Is disabled](../work_with_menu/#checking-if-a-menu-option-is-disabled)         | Learn how to check whether a menu item is disabled                                          |
| [Showing / hiding items](../work_with_menu/#hidingshowing-menu-options)         | Learn how to hide and show menu items ([Example](https://snippet.dhtmlx.com/a9vbhxgd))      |

## How to work with selection

In this section you will find the ways of work with selection functionality.

| Topic                                                                 | Description                                                                            |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [Setting selection](../work_with_menu/#selectingunselecting-an-item)  | Learn how to select a particular item ([Example](https://snippet.dhtmlx.com/9qqah8ex)) |
| [Is selected](../work_with_menu/#checking-if-a-menu-item-is-selected) | Learn how to check whether a menu item is selected                                     |
| [Getting selected items](../work_with_menu/#getting-selected-items)   | Learn how to get the selected items                                                    |
| [Removing selection](../work_with_menu/#selectingunselecting-an-item) | Learn how to remove selection from a selected item                                     |

## How to work with Menu events

This section explains how to work with Menu events.

| Topic                                       | Description                                                                                               |
| :------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| [Event basic rules](guides/events_guide.md) | Learn basic rules on how to work with events                                                              |
| [Event handling](../handling_events/)       | Learn how to attach, detach, or call the Menu events ([Example](https://snippet.dhtmlx.com/yjt39a4k)) |

## API reference

In this section you can find out corresponding references of Menu and Menu controls API.

| Topic                                                       | Description                                             |
| ----------------------------------------------------------- | ------------------------------------------------------- |
| [Menu methods](../../category/menu-methods/)                | Check the list of Menu methods                          |
| [Menu events](../../category/menu-events/)                  | Check the list of Menu events                           |
| [Menu properties](../../category/menu-properties/)          | Check the list of Menu properties                       |
| [MenuItem properties](../api/api_menuitem_properties/)      | Check the list of properties of the MenuItem control    |
| [Custom HTML properties](../api/api_customhtml_properties/) | Check the list of properties of the Custom HTML control |
| [Separator properties](../api/api_separator_properties/)    | Check the list of properties of the Separator control   |
| [Spacer properties](../api/api_spacer_properties/)          | Check the list of properties of the Spacer control      |
| [TreeCollection API](../../tree_collection/)                | Check the API of TreeCollection to work with Menu data  |


## Common functionality

In this section you will learn about common functionality of the library which can be useful while working with Menu.

| Topic                                                         | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- |
| [Touch support](../../common_features/touch_support/)         | Learn how to work with touch support                          |
| [TypeScript support](../../common_features/using_typescript/) | Learn how to work with TypeScript                             |
| [AwaitRedraw](../../helpers/await_redraw/)                    | Learn how to perform the code after the component’s rendering |

## Any questions left?

<button class="support_btn"><a href="https://snippet.dhtmlx.com/all?tag=menu">Check more samples >>></a> </button>
<br>
<button class="support_btn"><a href="https://forum.dhtmlx.com/c/suite/suite7/">Ask the community >>></a> </button>

:::info
Do you need more functionality? Feel free to share your suggestions in the comments below!
:::
