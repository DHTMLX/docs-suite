---
sidebar_label: Work with Layout
title: Work with Layout
description: description
---          


Removing cells
-----------------

To remove a certain cell from a layout, apply the [](layout/api/layout_removecell_method.md) method. As a parameter it takes the id of a cell to be removed:

~~~js
layout.removeCell(id);
~~~

**Related sample**: [Layout. Remove Cell](https://snippet.dhtmlx.com/tnujp7jk)

Getting the object of a cell
--------------------

You can get the object of a cell by its id. Use the [](layout/api/layout_getcell_method.md) method for this purpose:

~~~js
layout.getCell("header");
~~~


Attaching a component to a cell
---------------------------------

You can easily attach any DHTMLX component to a cell of Layout using the [](layout/api/cell/layout_cell_attach_method.md) method of a cell:

~~~js
var layout = new dhx.Layout({width:"400px", height:"600px"});

var list = new dhx.List(null, {
	template: listTemplate,
	itemHeight: 52,
	height: "100%",
	dragMode: "both"
});
        
list.data.load('../common/library.json');

layout.getCell("list").attach(list);
~~~

**Related sample**: [Layout. Attach](https://snippet.dhtmlx.com/6wuxj6sh)

Attaching an HTML content to a cell
------------------------------

You can easily attach some HTML content to a cell of Layout via the [](layout/api/cell/layout_cell_attachhtml_method.md) method of a cell. It takes as a parameter a string with HTML.

~~~js
var layout = new dhx.Layout({width:"400px", height:"600px"});
var html = "<p>Hello world</p>";
layout.getCell("content").attachHTML(html);
~~~

Hiding/showing a cell
----------------------

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


Checking visibility of a cell
-------------------

Since the object of a cell has the [hidden](layout/api/cell/layout_cell_hidden_config.md) attribute, a cell can be hidden in a layout. You can check the visibilty of cell via the [](layout/api/cell/layout_cell_isvisible_method.md) method. It returns *true* if a cell is visible and *false* if it is hidden.

~~~js
layout.getCell("sidebar").isVisible(); // -> true|false
~~~

Collapsing/expanding a cell
------------------------------

You can collapse/expand a specified cell using two corresponding methods of a Layout cell - [](layout/api/cell/layout_cell_collapse_method.md) and [](layout/api/cell/layout_cell_expand_method.md):

~~~js
// collapsing a cell by its id
layout.getCell("sidebar").collapse();

// expanding a cell by its id
layout.getCell("sidebar").expand();
~~~

**Related sample**: [Layout. Expand/Collapse](https://snippet.dhtmlx.com/h0wtlpyk)

Toggling a cell
--------------------

It is also possible to collapse and expand a specified cell of Layout using the [](layout/api/cell/layout_cell_toggle_method.md) method of a cell:

~~~js
layout.getCell("toolbar").toggle();
~~~

**Related sample**: [Layout. Toggle](https://snippet.dhtmlx.com/t38tqk0k)
