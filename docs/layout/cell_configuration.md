---
sidebar_label: Configuration of a Cell
title: Configuration of a Cell
description: description
---          



HTML content
----------------

A layout cell can have any HTML content inside it. You can set it with the [](layout/api/layout_html_config.md) attribute in the object of a cell.

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
      { header: "Cell header", html: "Hello world"}
    ]
});
~~~

{{editor	https://snippet.dhtmlx.com/6x76kgyq	Layout. Html Content}}

Hidden cell
--------------

It is possible to add the [](layout/api/layout_hidden_config.md) attribute into the the object of a cell(s) to render a layout with some cells hidden:

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
	  { header: "Cell header", hidden:true}
    ]
});
~~~

Cell header
---------------

Each layout cell can have a header with some text that describes the content of this cell.

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
	  { header: "Perfect cell header"}
    ]
});
~~~

You can also add an icon or an image into the header of a cell with the help of corresponding attributes - [](layout/api/layout_headericon_config.md) and layout/api/layout_headerimage_config.md.

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
	  { header: "Cell header", headerIcon:"/icon.png"}
    ]
});

// or
var layout = new dhx.Layout("layout_container", {
    cols: [
	  { header: "Cell header", headerImage:"/img.png"}
    ]
});
~~~

{{editor	https://snippet.dhtmlx.com/bxqnzesl	Layout. Header}}

Height of a header cell
---------------------------

You can specify the necessary height of cell with a header using the [](layout/api/layout_headerheight_config.md) configuration option of a cell:

~~~js
var layout = new dhx.Layout("layout", {
    rows: [
        {
            id: "row1"
        },
        {
            id: "row2",
            header: "Row 2",
            headerHeight: 80
        }
    ]
});
~~~

{{editor	https://snippet.dhtmlx.com/bxqnzesl	Layout. Header}}

If the [](layout/api/layout_header_config.md) property is not set in the config of a cell, the [](layout/api/layout_headerheight_config.md) option will add a header without text for a cell.


Cell size
------------

You can easily control and change the size of a cell via the [](layout/api/layout_width_config.md) and [](layout/api/layout_height_config.md) attributes of the object of a cell.

~~~js
var layout = new dhx.Layout("layout_container", {   
	rows: [
        {
            cols: [
                {
                    header: "Block 1",
                    width: "40%"                                
                },
                {
                    header: "Block 2",                  
                    width: "60%"
                }
            ]
        },
        {
            rows: [
                {
                    header: "Block 3",
                    height: "200px"                             
                },
                {
                    header: "Block 4",                              
                    height: "300px"
                }
            ]
        }
    ]
});
~~~

Starting from v7.0, you can define the maximal and minimal sizes for a cell by using its corresponding configuration properties: layout/api/layout_maxheight_config.md, layout/api/layout_maxwidth_config.md, layout/api/layout_minheight_config.md, layout/api/layout_minwidth_config.md.

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
        { 
            header: "Cell header", 
            minWidth: "400px",
            maxWidth: "600px",
            minHeight: "40px",
            maxHeight: "100px"
        }
    ]
});
~~~

{{note Note, that [minWidth](layout/api/layout_minwidth_config.md)/[maxWidth](layout/api/layout_maxwidth_config.md) properties prevent [the width of a cell](layout/api/layout_width_config.md) from being less/greater than minWidth/maxWidth values accordingly. The [minHeight](layout/api/layout_minheight_config.md)/[maxHeight](layout/api/layout_maxheight_config.md) options work in the same way. }}

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
        { 
            header: "Cell header", 
            width: "50%", 
            maxWidth: "200px" 
        }
    ]
});
~~~

As you can see from the code example above, the width of the cell occupies 50% of the parent container width but is not larger than 200px.

Autosize for cells
---------

Starting with v7.0, you can configure a cell so that its width/ height would automatically adjust to the width/ height of the cell content. For this purpose, you need to set the [width](layout/api/layout_width_config.md)/ [height](layout/api/layout_height_config.md) options to *"content"*:

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
        { 
            header: "Cell header", 
            width: "content" /*!*/
        },
        // more options
    ]
});
~~~


Collapsibility
----------------

There are two attributes of the object of a cell: [](layout/api/layout_collapsable_config.md) and layout/api/layout_collapsed_config.md. The first one defines whether a cell can be collapsed and expanded, and the second one checks whether a cell is collapsed during
the initialization of a layout.

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
      { header: "Cell header", collapsable:true, collapsed:false}
    ]
});
~~~

{{editor	https://snippet.dhtmlx.com/8u4ok0os	Layout. Collapsable}}

{{editor	https://snippet.dhtmlx.com/r2e0y6n7	Layout. Accordion}}

Resizability
------------

To allow resizing of a cell, make use of the [](layout/api/layout_resizable_config.md) option in the object of a cell. 

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
      { header: "Cell header", resizable:true}
    ]
});
~~~

{{editor	https://snippet.dhtmlx.com/k2fj4nm0	Layout. Resizable}}

{{note Starting from v7.0, you can define the resizing limits by setting necessary values to the [minWidth](layout/api/layout_minwidth_config.md)/[maxWidth](layout/api/layout_maxwidth_config.md), [minHeight](layout/api/layout_minheight_config.md)/[maxHeight](layout/api/layout_maxheight_config.md) properties in the config of a cell.}}

Setting borders for cells
-----------------

By default, there is no space and borders between cells inside a layout and the cells look like they are merged. Starting from v7.0, it is possible to split the cells by adding borders or space between them via the [](layout/api/layout_type_config.md) configuration property of a Layout cell:

~~~js
const layout = new dhx.Layout("layout", {
    type: "space", /*!*/
    cols: [
        {
            html: "1"
        },
        {
            html: "2"
        },
        {
            html: "3"
        }
    ]
});
~~~

{{editor	https://snippet.dhtmlx.com/9ge1a4zx	Layout.Type}}

[Layout. Types in a complex layout](https://snippet.dhtmlx.com/w00fgl57)

The available values of the option are "line", "wide", "space", "none". 
``` todo таблица 
<style>

	table.my_table td {
		text-align: left;
		vertical-align: middle;
		width: 50%;
	}
	table.my_table td.version_info {
		text-align: left;
        background-color: white;
	}
</style>

<table class="my_table">
	<tbody>
        <tr>
			<td><b>type:"line"</b></td>
			<td><b>type:"wide"</b></td>
			<td><b>type:"space"</b></td>
			<td><b>without borders</b></td>
        </tr>
        <tr>
			<td class="version_info"><img src="layout/line_type.png"/></td>
			<td class="version_info"><img src="layout/wide_type.png"/></td>
			<td class="version_info"><img src="layout/space_type.png"/></td>
			<td class="version_info"><img src="layout/without_borders.png"/></td>
		</tr>  
    </tbody>
</table>
```

@todo:
check, improve and complete<br/>