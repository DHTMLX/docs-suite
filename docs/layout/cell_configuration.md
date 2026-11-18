---
sidebar_label: Configuration of a Cell
title: JavaScript Layout - Configuration of a Cell 
description: You can explore the configuration of a Cell of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration of a Cell

Each cell of a layout takes a configuration object that defines what the cell shows and how it behaves. The properties of this object set the content and the header of a cell, its size and borders, and whether the cell is collapsible, resizable, or hidden. The sections below describe these settings. For the full list of properties, see the [Cell API](layout/api/api_overview.md#cell-api) overview.

## HTML content

Use the [`html`](layout/api/cell/layout_cell_html_config.md) property to set HTML content for a cell:

~~~jsx
const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: "Cell header", html: "Hello world"}
    ]
});
~~~

**Related sample**: [Layout. HTML content](https://snippet.dhtmlx.com/6x76kgyq)

## Cell header

Each layout cell can have a header with text that describes the cell content. Set the text in the [`header`](layout/api/cell/layout_cell_header_config.md) property:

~~~jsx
const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: "Perfect cell header"}
    ]
});
~~~

To add an icon or an image to the header, use the [`headerIcon`](layout/api/cell/layout_cell_headericon_config.md) or [`headerImage`](layout/api/cell/layout_cell_headerimage_config.md) property:

~~~jsx
const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: "Cell header", headerIcon: "dxi dxi-check" }
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

### Height of a cell header {#height-of-a-header-cell}

Use the [`headerHeight`](layout/api/cell/layout_cell_headerheight_config.md) property to set the height of a cell header:

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

If you don't set the [`header`](layout/api/cell/layout_cell_header_config.md) property of a cell, the [`headerHeight`](layout/api/cell/layout_cell_headerheight_config.md) property adds a header without text to the cell.

## Custom content in a cell header

![Layout cell with a search toolbar in its header above a grid of names and addresses in DHTMLX Suite](/img/layout/widget_in_cell_header.png)

Besides text, the header of a cell can contain HTML markup or a DHTMLX widget. To add custom content, set the [`header`](layout/api/cell/layout_cell_header_config.md) property to a callback function. While rendering the cell, Layout calls the function with the configuration object of the cell and places the returned content into the header.

The type of the value that you set for the `header` property defines the expected behavior:

- *A string*: the header shows the string as plain text. Layout doesn't interpret HTML tags and displays them as part of the text
- *A callback function*: tells Layout that the header supports HTML content

A cell with a custom header collapses and expands like any other cell. See the [Collapsibility](layout/cell_configuration.md#collapsibility) section.

### HTML markup in a header

The callback can return a string with HTML tags. The header renders this string as HTML markup:

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

**Related sample**: [Layout. Cell header with HTML template](https://snippet.dhtmlx.com/6xy6mrpq)

### A DHTMLX widget in a header

The callback can also return an initialized widget, the same object that you pass to the [`attach()`](layout/api/cell/layout_cell_attach_method.md) method of a cell. A component name doesn't work here because the header treats any returned string as HTML:

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
- [Layout. Cell header with widget](https://snippet.dhtmlx.com/j4ihnbch)
- [Layout. Cell headers with widget and HTML template](https://snippet.dhtmlx.com/n0vvj5o3)

### Icon, image and height of a custom header

The [`headerIcon`](layout/api/cell/layout_cell_headericon_config.md) and [`headerImage`](layout/api/cell/layout_cell_headerimage_config.md) options work with a custom header as well. The cell renders the icon and the image before the content that the callback returns.

The height of a header adjusts to the size of the custom content. To use a fixed height, set the [`headerHeight`](layout/api/cell/layout_cell_headerheight_config.md) option.

### Events of the header content

Use the [`on`](layout/api/cell/layout_cell_on_config.md) property of the cell to handle clicks and other DOM events in the markup that the callback returns. In the property, specify the selector of the target element.

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

The [`attachHTML()`](layout/api/cell/layout_cell_attachhtml_method.md) call repaints the cell, so Layout calls the `header` callback again and renders the header with the current data as well.

**Related sample**: [Layout. Cell header with HTML template](https://snippet.dhtmlx.com/6xy6mrpq)

## Cell size

Use the [`width`](layout/api/cell/layout_cell_width_config.md) and [`height`](layout/api/cell/layout_cell_height_config.md) properties to set the size of a cell:

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

From v7.0, you can set the minimum and maximum sizes of a cell with the [`maxHeight`](layout/api/cell/layout_cell_maxheight_config.md), [`maxWidth`](layout/api/cell/layout_cell_maxwidth_config.md), [`minHeight`](layout/api/cell/layout_cell_minheight_config.md), and [`minWidth`](layout/api/cell/layout_cell_minwidth_config.md) properties:

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

:::note
The [`minWidth`](layout/api/cell/layout_cell_minwidth_config.md) and [`maxWidth`](layout/api/cell/layout_cell_maxwidth_config.md) properties limit [the width of a cell](layout/api/cell/layout_cell_width_config.md): the width can't be less than `minWidth` or greater than `maxWidth`. The [`minHeight`](layout/api/cell/layout_cell_minheight_config.md) and [`maxHeight`](layout/api/cell/layout_cell_maxheight_config.md) properties limit the height in the same way.
:::

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

In this example, the cell takes 50% of the parent container width but is never wider than 200px.

### Autosize for cells

From v7.0, a cell can adjust its width or height to the size of its content. Set the [`width`](layout/api/cell/layout_cell_width_config.md) or [`height`](layout/api/cell/layout_cell_height_config.md) property to `"content"`:

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

Set the [`resizable`](layout/api/cell/layout_cell_resizable_config.md) property to `true` to let users resize a cell:

~~~jsx
const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: "Cell header", resizable:true}
    ]
});
~~~

**Related sample**: [Layout. Collapsable and resizable](https://snippet.dhtmlx.com/f1f49n35)

:::note
From v7.0, you can limit resizing with the [`minWidth`](layout/api/cell/layout_cell_minwidth_config.md), [`maxWidth`](layout/api/cell/layout_cell_maxwidth_config.md), [`minHeight`](layout/api/cell/layout_cell_minheight_config.md), and [`maxHeight`](layout/api/cell/layout_cell_maxheight_config.md) properties of a cell.
:::

## Hidden cell

Set the [`hidden`](layout/api/cell/layout_cell_hidden_config.md) property to `true` to render a layout with hidden cells:

~~~jsx
const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: "Cell header", hidden:true}
    ]
});
~~~

## Collapsibility

Two properties of a cell control collapsing:

- [`collapsable`](layout/api/cell/layout_cell_collapsable_config.md) — defines whether users can collapse and expand the cell
- [`collapsed`](layout/api/cell/layout_cell_collapsed_config.md) — defines whether the cell is collapsed when the layout initializes

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
- [Layout. Cell header with widget](https://snippet.dhtmlx.com/j4ihnbch)

## Progress bar

A Layout cell can show a progress bar (a loading spinner) while the cell has no attached component or HTML content. To enable the progress bar, set the [`progressDefault`](layout/api/cell/layout_cell_progressdefault_config.md) property of the cell to `true`:

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

As soon as you attach a component or HTML content to the cell, the cell hides the progress bar.

The default value of the [`progressDefault`](layout/api/cell/layout_cell_progressdefault_config.md) property is `false`.

## Borders between cells {#setting-borders-for-cells}

The default layout has no borders or space between cells, so the cells look merged. From v7.0, you can add borders or space between cells with the [`type`](layout/api/cell/layout_cell_type_config.md) configuration property:

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

The option takes the following values: `"line"`, `"wide"`, `"space"`, and `"none"`.

| type:"line"                         | type:"wide"                         | type:"space"                         | type:"none"                               |
| ----------------------------------- | ----------------------------------- | ------------------------------------ | ----------------------------------------- |
| ![Layout cells with thin line borders between three stacked rows in DHTMLX Suite](/img/layout/line_type.png) | ![Layout cells separated by wide gray borders between three stacked rows in DHTMLX Suite](/img/layout/wide_type.png) | ![Layout cells separated by blank space between three stacked rows in DHTMLX Suite](/img/layout/space_type.png) | ![Layout cells merged without borders or space between three stacked rows in DHTMLX Suite](/img/layout/without_borders.png) |
