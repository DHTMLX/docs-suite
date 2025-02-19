---
sidebar_label: Features
title: JavaScript Ribbon - Features 
description: You can explore the features of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Features

This page contains structured information that will help you to start working with DHTMLX Ribbon and go into deep dive on its functionality.

## How to start with DHTMLX Ribbon

In this section you can find out how to initialize Ribbon, how to load data into the component and how to integrate Ribbon into your applications.

### Initialization

| Topic                                    | Description                    |
| ---------------------------------------- | ------------------------------ |
| [Basic initialization](../how_to_start/) | Learn how to initialize Ribbon |

### Loading data into Ribbon

| Topic                                                                              | Description                                                                |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [Loading data into Ribbon](../data_loading/)                                       | Read how to load the initial data into Ribbon                              |
| [Initialization with config.data](https://snippet.dhtmlx.com/lek4v9m7)             | The example shows how to load data into Ribbon on the initialization stage |
| [Initialization with data.load()](https://snippet.dhtmlx.com/1gd5tbcf)             | The example shows how to load data from an external file                   |
| [Initialization with data.parse()](https://snippet.dhtmlx.com/zz5ijqy9)            | The example shows how to load data from a local data source                |
| [Initialization with external TreeCollection](https://snippet.dhtmlx.com/aue48f5f) | The example shows how to load data from external TreeCollection            |


### Ribbon controls

| Topic                               | Description                                                                                                                                           |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Block](../block/)                  | Learn how to add a Block control into the ribbon ([Example 1](https://snippet.dhtmlx.com/nlviu82g), [Example 2](https://snippet.dhtmlx.com/1ayiafd1)) |
| [Button](../button/)                | Learn how to add a Button control into the ribbon ([Example](https://snippet.dhtmlx.com/trli6sq7))                                                    |
| [Custom HTML](../customhtmlbutton/) | Learn how to add an item with custom HTML content into the ribbon ([Example](https://snippet.dhtmlx.com/c0i0q3cu))                                    |
| [ImageButton](../image_button/)     | Learn how to add a button with an image into the ribbon                                                                                               |
| [Input](../input/)                  | Learn how to add an Input control into the ribbon ([Example](https://snippet.dhtmlx.com/jjnzc3ng))                                                    |
| [NavItem](../navitem/)              | Learn how to add a NavItem control into the ribbon ([Example](https://snippet.dhtmlx.com/zijc2nta))                                                   |
| [SelectButton](../selectbutton/)    | Learn how to add a SelectButton control into the ribbon ([Example](https://snippet.dhtmlx.com/5acqc24m))                                              |
| [Separator](../separator/)          | Learn how to add a Separator control into the ribbon ([Example](https://snippet.dhtmlx.com/wqhahyw8))                                                 |
| [Spacer](../spacer/)                | Learn how to add a Spacer control into the ribbon ([Example](https://snippet.dhtmlx.com/a8c6y3ob))                                                    |
| [Title](../title/)                  | Learn how to add a Title control into the ribbon                                                                                                      |

### Integration

| Topic                                                   | Description                                                                                                                                  |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [Backend integration](integration/suite_and_backend.md) | Learn how to connect DHTMLX Suite to a backend  ([Demo](https://github.com/DHTMLX/nodejs-suite-demo))                                        |
| [Optimus](optimus_guides.md)                            | Learn how to use DHTMLX Optimus framework for creating  DHTMLX-based app <br>(recommended framework for creating apps with Suite components) |
| [React integration](integration/suite_and_react.md)     | Learn how to use DHTMLX Ribbon with React ([Demo](https://github.com/DHTMLX/react-suite-demo))                                                  |
| [Angular integration](integration/suite_and_angular.md) | Learn how to use DHTMLX Ribbon with Angular ([Demo](https://github.com/DHTMLX/angular-suite-demo))                                           |
| [Vue integration](integration/suite_and_vue.md)         | Learn how to use DHTMLX Ribbon with Vue.js ([Demo](https://github.com/DHTMLX/vue-suite-demo))                                                |

## How to customize Ribbon

In this section you can learn how to customize a Ribbon.

| Topic                                                                 | Description                                                                                    |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [Adding HTML content into items](https://snippet.dhtmlx.com/3djaib6o) | The example shows how to add custom element into the Ribbon items                              |
| [Applying custom icons](../customization/#icons)                      | Learn how to add custom icons to Ribbon items ([Example](https://snippet.dhtmlx.com/sfkou9gp)) |
| [Styling Ribbon](../customization/#styling)                           | Learn how to customize a Ribbon ([Example](https://snippet.dhtmlx.com/9ckg47ro))               |
| [List of CSS classes](../../helpers/base_elements/)                   | A set of CSS classes provided by the DHTMLX library                                            |

## How to work with Ribbon controls

In this section you may study how to disable and enable, hide and show Ribbon controls, and more.

| Topic                                                                                      | Description                                                                                                    |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| [Disabling / enabling controls](../operating_ribbon/#disabling-and-enabling-controls)      | Learn how to disable or enable controls on a page dynamically ([Example](https://snippet.dhtmlx.com/l3f8pq2g)) |
| [Is disabled](../operating_ribbon/#checking-if-a-ribbon-item-is-disabled)                  | Learn how to check whether a control is disabled on the page                                                            |
| [Hiding / showing controls](../operating_ribbon/#hiding-and-showing-controls)              | Learn how to hide or show controls dynamically ([Example](https://snippet.dhtmlx.com/1jkf7954))                |
| [Setting values/states of controls](../operating_ribbon/#settinggetting-values-and-states) | Learn how to change the value or state of a control ([Example](https://snippet.dhtmlx.com/i7kabram))             |
| [Getting values/states of controls](../operating_ribbon/#settinggetting-values-and-states) | Learn how to get the current value or state of a control ([Example](https://snippet.dhtmlx.com/coei9fys))        |

## How to work with data in Ribbon

This section will tell you how to use [TreeCollection API](guides/datacollection_guide.md) for working with data of Ribbon, i.e. add, copy, remove, rearrange items, etc.

| Topic                                                                         | Description                                                                                                                |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [Adding controls](../operating_ribbon/#adding-controls)                       | Learn how to add new controls into Ribbon dynamically ([Example](https://snippet.dhtmlx.com/bphk7h9u))                     |
| [Copying controls](../operating_ribbon/#making-copies-of-controls)            | Learn how to copy a control                                                                                                |
| [Getting controls](../operating_ribbon/#getting-controls-by-ids)              | Learn how to get a particular control, the parent or children of a control                                                 |
| [Iterating through controls](../operating_ribbon/#iterating-through-controls) | Learn how to apply the necessary logic to all (or some) Ribbon controls, as well as to the parent or children of a control |
| [Rearranging controls](../operating_ribbon/#rearranging-ribbon-controls)      | Learn how to move Ribbon items to another position                                                                         |
| [Removing controls](../operating_ribbon/#clearing-ribbon)                     | Learn how to remove all controls from Ribbon at once                                                                       |
| [TreeCollection API](../../tree_collection/)                                       | Check the list of all available TreeCollection API|
  

## How to work with selection

In this section you will learn how to work with selection functionality.

| Topic                                                                     | Description                                                                                           |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [Setting selection](../operating_ribbon/#selectingunselecting-an-item)    | Learn how to select a particular item ([Example](https://snippet.dhtmlx.com/0vy8uk4s))                |
| [Is selected](../operating_ribbon/#checking-if-a-ribbon-item-is-selected) | Learn how to check whether a Ribbon item is selected ([Example](https://snippet.dhtmlx.com/0vy8uk4s)) |
| [Getting selected items](../operating_ribbon/#getting-selected-items)     | Learn how to get the selected items                                                                   |
| [Removing selection](../operating_ribbon/#selectingunselecting-an-item)   | Learn how to remove selection from a selected item  ([Example](https://snippet.dhtmlx.com/0vy8uk4s))  |

## How to work with Ribbon events

This section explains how to work with Ribbon events.

| Topic                                       | Description                                                                                            |
| :------------------------------------------ | :----------------------------------------------------------------------------------------------------- |
| [Event basic rules](guides/events_guide.md) | Learn basic rules on how to work with events                                                           |
| [Event handling](../handling_events/)        | Learn how to attach, detach, or call the Popup events ([Example](https://snippet.dhtmlx.com/i7cfddkl)) |


## API reference

In this section you can find out corresponding references of Ribbon and its controls API.

### Ribbon API

| Topic                                                          | Description                                              |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| [Ribbon methods](../../category/ribbon-methods/)               | Check the list of Ribbon methods                         |
| [Ribbon events](../../category/ribbon-events/)                 | Check the list of Ribbon events                          |
| [Ribbon properties](../../category/ribbon-properties/)         | Check the list of Ribbon properties                      |
| [TreeCollection API](../../tree_collection/)                   | Check the API of TreeCollection to work with Ribbon data |


### Ribbon controls API

| Topic                                                          | Description                                              |
| -------------------------------------------------------------- | -------------------------------------------------------- |
| [Block properties](../api/api_block_properties/)               | Check the list of properties of the Block control        |
| [Button properties](../api/api_button_properties/)             | Check the list of properties of the Button control       |
| [Custom HTML properties](../api/api_customhtml_properties/)    | Check the list of properties of the Custom HTML control  |
| [ImageButton properties](../api/api_imagebutton_properties/)   | Check the list of properties of the ImageButton control  |
| [Input properties](../api/api_input_properties/)               | Check the list of properties of the Input control        |
| [NavItem properties](../api/api_navitem_properties/)           | Check the list of properties of the NavItem control      |
| [SelectButton properties](../api/api_selectbutton_properties/) | Check the list of properties of the SelectButton control |
| [Separator properties](../api/api_separator_properties/)       | Check the list of properties of the Separator control    |
| [Spacer properties](../api/api_spacer_properties/)             | Check the list of properties of the Spacer control       |
| [Title properties](../api/api_title_properties/)               | Check the list of properties of the Title control        |


## Common functionality

In this section you will learn about common functionality of the library which can be useful while working with Ribbon.

| Topic                                                         | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- |
| [Touch support](../../common_features/touch_support/)         | Learn how to work with touch support                          |
| [TypeScript support](../../common_features/using_typescript/) | Learn how to work with TypeScript                             |
| [Custom scroll](../../common_features/custom_scroll/)         | Learn how to enable custom scroll in Ribbon                     |
| [AwaitRedraw](../../helpers/await_redraw/)                    | Learn how to perform the code after the component’s rendering |

## Any questions left?

<button class="support_btn"><a href="https://snippet.dhtmlx.com/3djaib6o?tag=ribbon">Check more samples >>></a> </button>
<br>
<button class="support_btn"><a href="https://forum.dhtmlx.com/c/suite/suite7/">Ask the community >>></a> </button>

:::info
Do you need more functionality? Feel free to share your suggestions in the comments below!
:::
