---
sidebar_label: Configuration of a Cell
title: JavaScript Layout - Configuration of a Cell 
description: You can explore the configuration of a Cell of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration of a Cell

Each cell of a layout takes a configuration object that defines what the cell shows and how it behaves. The properties of this object set the content and the header of a cell, its size and borders, and the ability of a user to collapse, hide or resize the cell. The sections below go through these settings one by one, while the full list of the available properties is in the [Cell API](layout/api/api_overview.md#cell-api) overview.

## HTML content

A layout cell can have any HTML content inside it. You can set it with the [`html`](layout/api/cell/layout_cell_html_config.md) attribute in the object of a cell.

~~~jsx
const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: "Cell header", html: "Hello world"}
    ]
});
~~~

**Related sample**: [Layout. HTML content](https://snippet.dhtmlx.com/6x76kgyq)

## Cell header

Each layout cell can have a header with some text that describes the content of this cell.

~~~jsx
const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: "Perfect cell header"}
    ]
});
~~~

You can also add an icon or an image into the header of a cell with the help of corresponding attributes - [`headerIcon`](layout/api/cell/layout_cell_headericon_config.md) and [`headerImage`](layout/api/cell/layout_cell_headerimage_config.md).

~~~jsx
const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: "Cell header", headerIcon:"/icon.png"}
    ]
});

// or
const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: "Cell header", headerImage:"/img.png"}
    ]
});
~~~

**Related sample**: [Layout. Header](https://snippet.dhtmlx.com/bxqnzesl)

### Height of a header cell

You can specify the necessary height of the header of a cell using the [`headerHeight`](layout/api/cell/layout_cell_headerheight_config.md) configuration option of the cell:

~~~jsx
const layout = new dhx.Layout("layout_container", {
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

**Related sample**: [Layout. Header](https://snippet.dhtmlx.com/bxqnzesl)

If the [`header`](layout/api/cell/layout_cell_header_config.md) property is not set in the config of a cell, the [`headerHeight`](layout/api/cell/layout_cell_headerheight_config.md) option will add a header without text for a cell.

## Custom content in a cell header

Besides a text, the header of a cell can contain HTML markup or a DHTMLX widget. For this purpose, set the [`header`](layout/api/cell/layout_cell_header_config.md) property to a callback function. The component calls the function while it renders the cell. The function takes the configuration object of the cell as a parameter and returns the content for the header.

The type of the value that you set for the `header` property defines the expected behavior:

- *a string*: the header shows it as plain text, and the component doesn't interpret HTML tags, it displays them as part of the text
- *a callback function*: tells the component that the header supports HTML content

A cell with a custom header collapses and expands as any other cell, see the [Collapsibility](layout/cell_configuration.md#collapsibility) section.

### HTML markup in a header

To render HTML markup in a header, return a string with the necessary tags from the callback:

~~~jsx
const layout = new dhx.Layout("layout_container", {
    cols: [
        {
            id: "orders",
            header: cell => `<b>Orders</b> <i>3 new</i>`
        }
    ]
});
~~~

**Related sample**: [Layout. HTML content in a cell header](https://snippet.dhtmlx.com/lromzzkx)

### A DHTMLX widget in a header

To render a DHTMLX component in a header, return an initialized widget, the same object that you pass to the [`attach()`](layout/api/cell/layout_cell_attach_method.md) method of a cell. The name of a component doesn't work here, as the header treats any returned string as HTML:

~~~jsx
const toolbar = new dhx.Toolbar(null, {
    data: [
        { id: "add", type: "button", value: "Add", icon: "dxi dxi-plus" },
        { id: "remove", type: "button", value: "Remove", icon: "dxi dxi-delete" }
    ]
});

const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: () => toolbar }
    ]
});
~~~

**Related samples**:
- [Layout. Toolbar in a cell header](https://snippet.dhtmlx.com/iyci7xt2?mode=wide)
- [Layout. Custom cell headers in a dashboard](https://snippet.dhtmlx.com/awwc1m4u?mode=wide)

### Icon, image and height of a custom header

The [`headerIcon`](layout/api/cell/layout_cell_headericon_config.md) and [`headerImage`](layout/api/cell/layout_cell_headerimage_config.md) options work with a custom header as well. The cell renders the icon and the image before the content that the callback returns.

The height of a header adjusts to the size of the custom content. To use a fixed height, set the [`headerHeight`](layout/api/cell/layout_cell_headerheight_config.md) option.

### Events of the header content

To handle clicks and other DOM events of the markup that the callback returns, use the [`on`](layout/api/cell/layout_cell_on_config.md) property of the cell with the selector of the necessary element.

The example below shows how to make a control inside a custom cell header interactive. The `header` callback returns markup with a "Check now" button, and a click on that button rebuilds the content of the cell:

~~~jsx
// builds the HTML content of the cell
function metrics() {
    return `<div>Checked at ${new Date().toLocaleTimeString()}</div>`;
}

const layout = new dhx.Layout("layout_container", {
    rows: [
        {
            id: "service",
            html: metrics(),
            header: () => `<span>API service</span>
                <button type="button">Check now</button>`,
            on: {
                click: {
                    "button": function() {
                        layout.getCell("service").attachHTML(metrics());
                    }
                }
            }
        }
    ]
});
~~~

The [`attachHTML()`](layout/api/cell/layout_cell_attachhtml_method.md) call repaints the cell, so the component calls the `header` callback again and renders the header with the current data as well.

**Related sample**: [Layout. HTML content in a cell header](https://snippet.dhtmlx.com/lromzzkx)

## Cell size

You can easily control and change the size of a cell via the [`width`](layout/api/cell/layout_cell_width_config.md) and [`height`](layout/api/cell/layout_cell_height_config.md) attributes of the object of a cell.

~~~jsx
const layout = new dhx.Layout("layout_container", {   
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

Starting from v7.0, you can define the maximal and minimal sizes for a cell by using its corresponding configuration properties: [`maxHeight`](layout/api/cell/layout_cell_maxheight_config.md), [`maxWidth`](layout/api/cell/layout_cell_maxwidth_config.md), [`minHeight`](layout/api/cell/layout_cell_minheight_config.md), [`minWidth`](layout/api/cell/layout_cell_minwidth_config.md).

~~~jsx
const layout = new dhx.Layout("layout_container", {
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

{{note Note, that [`minWidth`](layout/api/cell/layout_cell_minwidth_config.md)/[`maxWidth`](layout/api/cell/layout_cell_maxwidth_config.md) properties prevent [the width of a cell](layout/api/cell/layout_cell_width_config.md) from being less/greater than minWidth/maxWidth values accordingly. The [`minHeight`](layout/api/cell/layout_cell_minheight_config.md)/[`maxHeight`](layout/api/cell/layout_cell_maxheight_config.md) options work in the same way. }}

~~~jsx
const layout = new dhx.Layout("layout_container", {
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

### Autosize for cells

Starting with v7.0, you can configure a cell so that its width/ height would automatically adjust to the width/ height of the cell content. For this purpose, you need to set the [`width`](layout/api/cell/layout_cell_width_config.md)/ [`height`](layout/api/cell/layout_cell_height_config.md) options to *"content"*:

~~~js {5}
const layout = new dhx.Layout("layout_container", {
    cols: [
        { 
            header: "Cell header", 
            width: "content"
        },
        // more options
    ]
});
~~~

## Resizability

To allow resizing of a cell, make use of the [`resizable`](layout/api/cell/layout_cell_resizable_config.md) option in the object of a cell. 

~~~jsx
const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: "Cell header", resizable:true}
    ]
});
~~~

**Related sample**: [Layout. Collapsable and resizable](https://snippet.dhtmlx.com/f1f49n35)

{{note Starting from v7.0, you can define the resizing limits by setting necessary values to the [`minWidth`](layout/api/cell/layout_cell_minwidth_config.md)/[`maxWidth`](layout/api/cell/layout_cell_maxwidth_config.md), [`minHeight`](layout/api/cell/layout_cell_minheight_config.md)/[`maxHeight`](layout/api/cell/layout_cell_maxheight_config.md) properties in the config of a cell.}}

## Hidden cell

It is possible to add the [`hidden`](layout/api/cell/layout_cell_hidden_config.md) attribute into the the object of a cell(s) to render a layout with some cells hidden:

~~~jsx
const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: "Cell header", hidden:true}
    ]
});
~~~

## Collapsibility

There are two attributes of the object of a cell: [`collapsable`](layout/api/cell/layout_cell_collapsable_config.md) and [`collapsed`](layout/api/cell/layout_cell_collapsed_config.md). The first one defines whether a cell can be collapsed and expanded, and the second one checks whether a cell is collapsed during
the initialization of a layout.

~~~jsx
const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: "Cell header", collapsable:true, collapsed:false}
    ]
});
~~~

A [`collapsable`](layout/api/cell/layout_cell_collapsable_config.md) cell keeps its collapse/expand icon when the header contains custom content. A click on the custom content itself calls no API of the cell, so buttons and other controls inside the header remain operable. A user collapses and expands the cell by clicking the collapse icon or the free space of the header.

**Related samples**:
- [Layout. Collapsable and resizable](https://snippet.dhtmlx.com/f1f49n35)
- [Layout. Accordion](https://snippet.dhtmlx.com/r2e0y6n7)
- [Layout. Toolbar in a cell header](https://snippet.dhtmlx.com/iyci7xt2?mode=wide)

## Progress bar

You can configure a Layout cell so that it would render a progress bar (in other words, a loading spinner) if there is no any component or HTML content attached to the cell. To do that, enable the [`progressDefault`](layout/api/cell/layout_cell_progressdefault_config.md) attribute in the configuration object of the cell:

~~~js {9,14}
const layout = new dhx.Layout("layout_container", {
    type: "line",
    rows: [
        {
            id: "one",
            header: "Header",
            height: "250px",
            resizable: true,
            progressDefault: true
        },
        {
            id: "two",
            height: "250px",
            progressDefault: true,
        },
    ]
});
~~~

Note, as soon as you attach a component or HTML content to the cell, the progress bar will be hidden.

By default, the [`progressDefault`](layout/api/cell/layout_cell_progressdefault_config.md) attribute is disabled.

## Setting borders for cells

By default, there is no space and borders between cells inside a layout and the cells look like they are merged. Starting from v7.0, it is possible to split the cells by adding borders or space between them via the [`type`](layout/api/cell/layout_cell_type_config.md) configuration property of a Layout cell:

~~~js {2}
const layout = new dhx.Layout("layout_container", {
    type: "space",
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

**Related sample**: [Layout. Types: space, wide, line, none](https://snippet.dhtmlx.com/9ge1a4zx)

**Related sample**: [Layout. Types in a complex layout](https://snippet.dhtmlx.com/w00fgl57)

The available values of the option are "line", "wide", "space", "none".

| type:"line"                         | type:"wide"                         | type:"space"                         | type:"none"                               |
| ----------------------------------- | ----------------------------------- | ------------------------------------ | ----------------------------------------- |
| ![Layout cells with thin line borders between three stacked rows in DHTMLX Suite](/img/layout/line_type.png) | ![Layout cells separated by wide gray borders between three stacked rows in DHTMLX Suite](/img/layout/wide_type.png) | ![Layout cells separated by blank space between three stacked rows in DHTMLX Suite](/img/layout/space_type.png) | ![Layout cells merged without borders or space between three stacked rows in DHTMLX Suite](/img/layout/without_borders.png) |
