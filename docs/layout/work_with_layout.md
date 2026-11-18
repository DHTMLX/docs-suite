---
sidebar_label: Work with Layout
title: JavaScript Layout - Work with Layout 
description: You can explore how to work with Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Layout

## Remove cells {#removing-cells}

The [](layout/api/layout_removecell_method.md) method removes a cell from a layout. The method takes the id of the cell as a parameter:

~~~js
layout.removeCell(id);
~~~

**Related sample**: [Layout. Remove cell](https://snippet.dhtmlx.com/tnujp7jk)

## Iterate over cells {#iterating-over-cells}

The [`forEach()`](layout/api/layout_foreach_method.md) method iterates over the cells of Layout. Layout calls the passed callback function for each cell with the following parameters:

- `cell` — the object of a cell
- `index` — the index of a cell
- `array` — an array with the cells

~~~jsx
layout.forEach((cell, index, array) => {
    console.log(index, cell.id);
});
~~~

If you pass only the callback, the method starts from the root cell and visits each nested level. To limit the iteration, pass the id of the parent cell as the second parameter and the number of levels as the third parameter:

~~~jsx
layout.forEach((cell, index, array) => {
    console.log(index, cell.id);
}, parentID, level);
~~~

**Related sample**: [Layout. ForEach](https://snippet.dhtmlx.com/9hfntqpy)

## Get the object of a cell {#getting-the-object-of-a-cell}

The [](layout/api/layout_getcell_method.md) method returns the object of a cell by its id:

~~~js
layout.getCell("header");
~~~

## Attach and detach a component {#attaching-a-component-to-a-cell}

### Attach a component

Call the [](layout/api/cell/layout_cell_attach_method.md) method of a Layout cell to attach a DHTMLX component to the cell:

~~~js
const layout = new dhx.Layout("layout_container", {
    width:"400px", height:"600px"
});

const list = new dhx.List(null, {
    template: listTemplate,
    itemHeight: 52,
    height: "100%",
    dragMode: "both"
});
        
list.data.load('../common/library.json');

layout.getCell("list").attach(list);
~~~

**Related sample**: [Layout. Attach widget](https://snippet.dhtmlx.com/6wuxj6sh)

:::note
You can't attach Message, Popup, or Window to a Layout cell: these components can't have a parent container.
:::

### Detach a component

The [`detach()`](layout/api/cell/layout_cell_detach_method.md) method of a cell detaches a component from the cell:

~~~js
layout.getCell("list").detach();
~~~

## Attach and detach HTML content {#attaching-an-html-content-to-a-cell}

### Attach HTML content

Call the [](layout/api/cell/layout_cell_attachhtml_method.md) method of a Layout cell to attach HTML content to the cell. The method takes a string with HTML as a parameter:

~~~js
const layout = new dhx.Layout("layout_container", {
    width:"400px", height:"600px"
});
const html = "<p>Hello world</p>";
layout.getCell("content").attachHTML(html);
~~~

### Detach HTML content

The [`detach()`](layout/api/cell/layout_cell_detach_method.md) method of a cell detaches HTML content from the cell:

~~~js
layout.getCell("content").detach();
~~~

## Hide and show a cell {#hidingshowing-a-cell}

Use the [](layout/api/cell/layout_cell_hide_method.md) and [](layout/api/cell/layout_cell_show_method.md) methods of a cell to hide and show the cell:

~~~js
// hiding a cell
layout.getCell("toolbar").hide();
~~~

**Related sample**: [Layout. Hide](https://snippet.dhtmlx.com/u0jd8ah3)

~~~js
// showing a cell
layout.getCell("toolbar").show();
~~~

**Related sample**: [Layout. Show](https://snippet.dhtmlx.com/v0q7gq26)

## Check if a cell is visible {#checking-visibility-of-a-cell}

You can hide a cell, for example, with the [`hidden`](layout/api/cell/layout_cell_hidden_config.md) property. The [](layout/api/cell/layout_cell_isvisible_method.md) method checks whether a cell is visible. It returns `true` if the cell is visible and `false` if it is hidden:

~~~js
layout.getCell("sidebar").isVisible(); // -> true|false
~~~

## Collapse and expand a cell {#collapsingexpanding-a-cell}

Use the [](layout/api/cell/layout_cell_collapse_method.md) and [](layout/api/cell/layout_cell_expand_method.md) methods of a cell to collapse and expand the cell:

~~~js
// collapsing a cell by its id
layout.getCell("sidebar").collapse();

// expanding a cell by its id
layout.getCell("sidebar").expand();
~~~

**Related sample**: [Layout. Expand / collapse](https://snippet.dhtmlx.com/h0wtlpyk)

## Toggle a cell {#toggling-a-cell}

The [](layout/api/cell/layout_cell_toggle_method.md) method of a cell collapses an expanded cell and expands a collapsed one:

~~~js
layout.getCell("toolbar").toggle();
~~~

**Related sample**: [Layout. Toggle](https://snippet.dhtmlx.com/t38tqk0k)

## Show and hide a progress bar {#showinghiding-a-progress-bar}

A progress bar shows users that the content is loading or updating.
You can show and hide the progress bar in the [Layout container](#progress-bar-in-the-layout-container) or in a [separate cell](#progress-bar-in-a-layout-cell).

A cell can also show the progress bar automatically while it has no attached component or HTML content. See [Progress bar](layout/cell_configuration.md#progress-bar) in the cell configuration guide.

### Progress bar in the Layout container

The [`progressShow()`](layout/api/layout_progressshow_method.md) method of Layout shows the progress bar in the Layout container:

~~~js
layout.progressShow();
~~~

To hide the progress bar, call the [`progressHide()`](layout/api/layout_progresshide_method.md) method:

~~~js
layout.progressHide();
~~~

### Progress bar in a Layout cell

The [`progressShow()`](layout/api/cell/layout_cell_progressshow_method.md) method of a cell shows the progress bar in this cell:

~~~js
layout.getCell("two").progressShow();
~~~

To hide the progress bar, call the [`progressHide()`](layout/api/cell/layout_cell_progresshide_method.md) method of the cell:

~~~js
layout.getCell("two").progressHide();
~~~

**Related sample:** [Layout. Spinner (busy indicator/ progress bar) for Layout and its cells](https://snippet.dhtmlx.com/vzrvf4rm)
