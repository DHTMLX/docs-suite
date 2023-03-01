---
sidebar_label: Work with Layout
title: JavaScript Layout - Work with Layout 
description: You can explore how to work with Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Layout

## Removing cells

To remove a certain cell from a layout, apply the [](layout/api/layout_removecell_method.md) method. As a parameter it takes the id of a cell to be removed:

~~~js
layout.removeCell(id);
~~~

**Related sample**: [Layout. Remove cell](https://snippet.dhtmlx.com/tnujp7jk)

## Getting the object of a cell

You can get the object of a cell by its id. Use the [](layout/api/layout_getcell_method.md) method for this purpose:

~~~js
layout.getCell("header");
~~~

## Attaching a component to a cell

### Attach a component

You can easily attach any DHTMLX component (except for Message, Popup, Window) to a cell of Layout using the [](layout/api/cell/layout_cell_attach_method.md) method of a cell:

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

{{note The Message, Popup, Window components can't be attached to the Layout cell because these components can't have the parent container due to their architecture principles.}}

### Detach a component

To detach a component from a Layout cell, use the [detach()](layout/api/cell/layout_cell_detach_method.md) method of a cell:

~~~js
layout.getCell("list").detach();
~~~

## Attaching an HTML content to a cell

### Attach HTML content

You can easily attach some HTML content to a cell of Layout via the [](layout/api/cell/layout_cell_attachhtml_method.md) method of a cell. It takes as a parameter a string with HTML.

~~~js
const layout = new dhx.Layout("layout_container", {
	width:"400px", height:"600px"
});
const html = "<p>Hello world</p>";
layout.getCell("content").attachHTML(html);
~~~

### Detach HTML content

To detach any HTML content from a Layout cell, use the [detach()](layout/api/cell/layout_cell_detach_method.md) method of a cell:

~~~js
layout.getCell("content").detach();
~~~

## Hiding/showing a cell

It is possible to hide/show a cell with the help of its API. Both the [](layout/api/cell/layout_cell_hide_method.md) and [](layout/api/cell/layout_cell_show_method.md) methods take the id of a cell as a parameter.

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

## Checking visibility of a cell

Since the object of a cell has the [hidden](layout/api/cell/layout_cell_hidden_config.md) attribute, a cell can be hidden in a layout. You can check the visibility of a cell via the [](layout/api/cell/layout_cell_isvisible_method.md) method. It returns *true* if the cell is visible and *false* if it is hidden.

~~~js
layout.getCell("sidebar").isVisible(); // -> true|false
~~~

## Collapsing/expanding a cell

You can collapse/expand a specified cell using two corresponding methods of a Layout cell - [](layout/api/cell/layout_cell_collapse_method.md) and [](layout/api/cell/layout_cell_expand_method.md):

~~~js
// collapsing a cell by its id
layout.getCell("sidebar").collapse();

// expanding a cell by its id
layout.getCell("sidebar").expand();
~~~

**Related sample**: [Layout. Expand / collapse](https://snippet.dhtmlx.com/h0wtlpyk)

## Toggling a cell

It is also possible to collapse and expand a specified cell of Layout using the [](layout/api/cell/layout_cell_toggle_method.md) method of a cell:

~~~js
layout.getCell("toolbar").toggle();
~~~

**Related sample**: [Layout. Toggle](https://snippet.dhtmlx.com/t38tqk0k)

## Showing/hiding a progress bar

A progress bar is a visual component which informs users that the content is loading or updating. 
You may show or hide the component via API calls either in the [Layout container](#progress-bar-in-the-layout-container) or in a [separate cell](#progress-bar-in-a-layout-cell).

The progress bar can be also shown by default for cells without any attached component or HTML content. [Check the details](layout/cell_configuration.md#progress-bar).  

### Progress bar in the Layout container

To show the progress bar in the container of a Layout, use the [progressShow()](layout/api/layout_progressshow_method.md) method of Layout:

~~~js
layout.progressShow();
~~~

To hide it, use the [progressHide()](layout/api/layout_progresshide_method.md) method:

~~~js
layout.progressHide();
~~~

### Progress bar in a Layout cell

To show the progress bar in a separate Layout cell, apply the [progressShow()](layout/api/cell/layout_cell_progressshow_method.md) method of a Layout cell:

~~~js
layout.getCell("two").progressShow();
~~~

To hide the component, apply the [progressHide()](layout/api/cell/layout_cell_progresshide_method.md) method of the cell:

~~~js
layout.getCell("two").progressHide();
~~~

**Related sample:** [Layout. Spinner (busy indicator/ progress bar) for Layout and its cells](https://snippet.dhtmlx.com/vzrvf4rm)