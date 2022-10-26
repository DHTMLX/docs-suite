---
sidebar_label: Features
title: JavaScript Layout - Features 
description: You can explore the features of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Features

This page contains structured information that will help you to start working with DHTMLX Layout and go into deep dive on its functionality.

## How to start with DHTMLX Layout

In this section you can find out how to initialize Layout, how to attach the necessary components to its cells, and how to integrate a Layout into your applications.

### Initialization

| Topic                                                       | Description                                                                                              |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [Basic initialization](../initialization/)                  | Learn how to initialize a Layout ([Example](https://snippet.dhtmlx.com/ls3cbcys))                        |
| [Attaching widgets](../api/cell/layout_cell_attach_method/) | Learn how to attach a DHTMLX component to a Layout cell ([Example](https://snippet.dhtmlx.com/6wuxj6sh)) |

### Integration

| Topic                                                   | Description                                                                                                                                  |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [Backend integration](integration/suite_and_backend.md) | Learn how to connect DHTMLX Suite to a backend  ([Demo](https://github.com/DHTMLX/nodejs-suite-demo))                                        |
| [Optimus](optimus_guides.md)                            | Learn how to use DHTMLX Optimus framework for creating  DHTMLX-based app <br>(recommended framework for creating apps with Suite components) |
| [React integration](integration/suite_and_react.md)     | Learn how to use DHTMLX Layout with React ([Demo](https://github.com/DHTMLX/react-widgets))                                                  |
| [Angular integration](integration/suite_and_angular.md) | Learn how to use DHTMLX Layout with Angular ([Demo](https://github.com/DHTMLX/angular-suite-demo))                                           |
| [Vue integration](integration/suite_and_vue.md)         | Learn how to use DHTMLX Layout with Vue.js ([Demo](https://github.com/DHTMLX/vue-suite-demo))                                                |

## How to configure Layout

In this section you will know how to build a horizontal, vertical, or mixed layout, and how to add borders or space between cells.

| Topic                                                                        | Description                                                                                                                                                     |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Defining Layout structure](../layout_structure/)                            | Learn how to create a Layout of the necessary structure                                                                                                         |
| [Adding borders to cells ](../cell_configuration/#setting-borders-for-cells) | Learn how to configure the borders or add space between cells in Layout ([Example 1](https://snippet.dhtmlx.com/9ge1a4zx), [Example 2](https://snippet.dhtmlx.com/w00fgl57)) |

## How to configure Layout cells

In this section you can find out how to configure the size and visibility of cells, how to add a cell header and configure its height, and more.

| Topic                                                                                  | Description                                                                                                                                                                         |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Making a cell resizable](../cell_configuration/#resizability)                         | Learn how to configure the ability to change the size of a cell by dragging its borders ([Example](https://snippet.dhtmlx.com/f1f49n35))                                            |
| [Making cells hidden](../cell_configuration/#hidden-cell)                                     | Learn how to render a layout with some hidden cells                                                                                                                                 |
| [Adding the header to a cell](../cell_configuration/#cell-header)                      | Learn how to add a header for a cell ([Example](https://snippet.dhtmlx.com/bxqnzesl))                                                                                               |
| [Configuring content alignment](../api/cell/layout_cell_align_config/)                 | Learn how to set the alignment of content inside a cell ([Example](https://snippet.dhtmlx.com/4w1033c9))                                                                            |
| [Configuring paddings](../api/cell/layout_cell_padding_config/)                        | Learn how to configure the distance between a cell and the Layout border ([Example](https://snippet.dhtmlx.com/tk6tpwwv))                                                           |
| [Initializing a collapsed cell](../cell_configuration/#collapsibility)                 | Learn how to initialize a collapsed cell and provide the ability to expand it ([Example 1](https://snippet.dhtmlx.com/f1f49n35), [Example 2](https://snippet.dhtmlx.com/r2e0y6n7)) |

## How to configure sizes of Layout cells

In this section you will learn how to configure sizes of Layout cells and their headers.

| Topic                                                                | Description                                                                                                           |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [Width and height of a cell](../cell_configuration/#cell-size)                        | Learn how to configure the width and height of a cell ([Example](https://snippet.dhtmlx.com/miej9gb9))                                                                              |
| [Size of a cell within a row](../api/cell/layout_cell_gravity_config/) | Learn how to define the "weight" of a cell in relation to other cells placed in the same row and within one parent ([Example](https://snippet.dhtmlx.com/1u521djj))                 |
| [Height of the cell's header](../cell_configuration/#height-of-a-header-cell)        | Learn how to configure the height of the header of a cell                                                                                                                           |

## How to customize Layout and its cells

In this section you can learn how to configure the style of Layout and its cells.

| Topic                                                                | Description                                                                                                           |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [Rendering HTML content](../api/cell/layout_cell_html_config/)       | Learn how to render HTML content in a cell on Layout initialization  ([Example](https://snippet.dhtmlx.com/6x76kgyq)) |
| [Attaching HTML content](../api/cell/layout_cell_attachhtml_method/) | Learn how to add HTML content into a cell dynamically                                                                 |
| [Styling (custom CSS)](../customization/)                            | Learn how to apply custom styles to a Layout cell ([Example](https://snippet.dhtmlx.com/pwxmf0lx))                    |
| [List of CSS classes](../../helpers/base_elements/)                  | A set of CSS classes provided by the DHTMLX library                                                                   |


## How to work with Layout cells

In this section you will learn how to get a cell object, how to add or remove, hide or show, expand or collapse a cell, etc. 

| Topic                                                                            | Description                                                                                                                             |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| [Removing a cell](../work_with_layout/#removing-cells)                           | Learn how to remove a cell from Layout ([Example](https://snippet.dhtmlx.com/tnujp7jk))                                                 |
| [Iterating over all cells](../api/layout_foreach_method/)                        | Learn how to iterate over Layout cells ([Example](https://snippet.dhtmlx.com/9hfntqpy))                                                 |
| [Getting a cell object](../api/layout_getcell_method/)                           | Learn how to get a configuration object of a particular cell                                                                            |
| [Showing/hiding a cell](../work_with_layout/#hidingshowing-a-cell)               | Learn how to hide/show a cell ([Example 1](https://snippet.dhtmlx.com/v0q7gq26), [Example](https://snippet.dhtmlx.com/u0jd8ah3))        |
| [Checking visibility of a cell](../work_with_layout/#checking-visibility-of-a-cell)                 | Learn how to check whether a Layout cell is visible                                                                                     |
| [Expanding/collapsing a cell](../work_with_layout/#collapsingexpanding-a-cell) | Learn how to collapse/expand a cell ([Example 1](https://snippet.dhtmlx.com/h0wtlpyk), [Example 2](https://snippet.dhtmlx.com/t38tqk0k)) |


## Layout patterns


<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/mzlodj28">1C</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/1oqx20ve">2E</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/yr9mapji">2U</a></button>
<br>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/v0w2p60c">3E</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/p0fllgaa">3J</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/bozlxz69">3L</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/jnq5cnc7">3T</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/678w7hgb">3U</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/ag01de2d">3W</a></button>
<br>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/gjr6j6ud">4A</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/ww1qk9u7">4C</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/m6nlb0bf">4E</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/l4q0cth9">4F</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/mwrfozsu">4G</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/5ekykk2n">4H</a></button>
<br>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/1c9yzjeu">4I</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/8km3g1k2">4J</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/1nqgjnqy">4L</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/4v52yj8w">4T</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/2s9pdfhv">4U</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/uwb6hql7">4W</a></button>
<br>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/rkpj3k4h">5C</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/wnn4xfu4">5E</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/v8zw7jzr">5G</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/xr6jv9kk">5H</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/873bxvak">5I</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/v81rvnep">5K</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/udo1jwmw">5S</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/khbg58k4">5U</a></button>
<button class="pattern_btn"><a href="https://snippet.dhtmlx.com/jo5z28kr">5W</a></button>
 

## How to work with Layout events

This section explains how to work with Layout events.

| Topic                                       | Description                                                                                               |
| :------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| [Event basic rules](guides/events_guide.md) | Learn basic rules on how to work with events                                                              |
| [Event handling](../events/)       | Learn how to attach, detach, or call the Layout events ([Example](https://snippet.dhtmlx.com/fyxw0map)) |

## API reference

In this section you can find out corresponding references of Layout and Layout cells API.

### Layout API

| Topic                                                  | Description                         |
| ------------------------------------------------------ | ----------------------------------- |
| [Layout methods](../../category/layout-methods/)       | Check the list of Layout methods    |
| [Layout events](../../category/layout-events/)         | Check the list of Layout events     |
| [Layout properties](../../category/layout-properties/) | Check the list of Layout properties |

### Layout cell API

| Topic                                                | Description                                   |
| ---------------------------------------------------- | --------------------------------------------- |
| [Layout cell methods](category/layout-cell-methods.md)       | Check the list of methods of a Layout cell    |
| [Layout cell properties](category/layout-cell-properties.md) | Check the list of properties of a Layout cell |

## Common functionality

In this section you will learn about common functionality of the library which can be useful while working with Layout.

| Topic                                                         | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- |
| [Touch support](../../common_features/touch_support/)         | Learn how to work with touch support                          |
| [TypeScript support](../../common_features/using_typescript/) | Learn how to work with TypeScript                             |
| [Custom scroll](../../common_features/custom_scroll/)         | Learn how to enable custom scroll in Layout cells                       |
| [AwaitRedraw](../../helpers/await_redraw/)                    | Learn how to perform the code after the component’s rendering |

## Any questions left?

<button class="support_btn"><a href="https://snippet.dhtmlx.com/all?tag=layout">Check more samples >>></a> </button>
<br>
<button class="support_btn"><a href="https://forum.dhtmlx.com/c/suite/suite7/">Ask the community >>></a> </button>

:::info
Do you need more functionality? Feel free to share your suggestions in the comments below!
:::