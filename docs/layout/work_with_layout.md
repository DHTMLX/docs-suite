---
sidebar_label: Work with Layout
title: Work with Layout
description: description
---          


Removing cells
-----------------

To remove a certain cell from a layout, apply the [removeCell](layout/api/layout_removecell_method.md) method. As a parameter it takes the id of a cell to be removed:

~~~js
layout.removeCell(id);
~~~

{{editor	https://snippet.dhtmlx.com/tnujp7jk	Layout. Remove Cell}}

Getting the object of a cell
--------------------

You can get the object of a cell by its id. Use the [](layout/api/layout_getcell_method.md) method for this purpose:

~~~js
layout.getCell("header");
~~~


Attaching a component to a cell
---------------------------------

You can easily attach any DHTMLX component to a cell of Layout using the [attach](layout/api/layout_attach_method.md) method of a cell:

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

{{editor	https://snippet.dhtmlx.com/6wuxj6sh	Layout. Attach}}

Attaching an HTML content to a cell
------------------------------

You can easily attach some HTML content to a cell of Layout via the [attachHTML()](layout/api/layout_attachhtml_method.md) method of a cell. It takes as a parameter a string with HTML.

~~~js
var layout = new dhx.Layout({width:"400px", height:"600px"});
var html = "<p>Hello world</p>";
layout.getCell("content").attachHTML(html);
~~~

Hiding/showing a cell
----------------------

It is possible to hide/show a cell with the help of its API. Both the [hide](layout/api/layout_hide_method.md) and [show](layout/api/layout_show_method.md) methods take the id of a cell as a parameter.

~~~js
// hiding a cell
layout.getCell("toolbar").hide();
~~~

{{editor	https://snippet.dhtmlx.com/u0jd8ah3	Layout. Hide}}

~~~js
// showing a cell
layout.getCell("toolbar").show();
~~~

{{editor	https://snippet.dhtmlx.com/v0q7gq26	Layout. Show}}


Checking visibility of a cell
-------------------

Since the object of a cell has the [hidden](layout/api/layout_hidden_config.md) attribute, a cell can be hidden in a layout. You can check the visibilty of cell via the [isVisible](layout/api/layout_isvisible_method.md) method. It returns *true* if a cell is visible and *false* if it is hidden.

~~~js
layout.getCell("sidebar").isVisible(); // -> true|false
~~~

Collapsing/expanding a cell
------------------------------

You can collapse/expand a specified cell using two corresponding methods of a Layout cell - [collapse()](layout/api/layout_collapse_method.md) and [expand()](layout/api/layout_expand_method.md):

~~~js
// collapsing a cell by its id
layout.getCell("sidebar").collapse();

// expanding a cell by its id
layout.getCell("sidebar").expand();
~~~

{{editor	https://snippet.dhtmlx.com/h0wtlpyk	Layout. Expand/Collapse}}

Toggling a cell
--------------------

It is also possible to collapse and expand a specified cell of Layout using the [toggle()](layout/api/layout_toggle_method.md) method of a cell:

~~~js
layout.getCell("toolbar").toggle();
~~~

{{editor	https://snippet.dhtmlx.com/t38tqk0k	Layout. Toggle}}

@todo:
complete<br/>
attach()? getParent()? 
