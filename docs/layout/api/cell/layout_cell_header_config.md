---
sidebar_label: header
title: JavaScript Layout - header Config 
description: You can explore the header config of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# header

@short: Optional. Adds a header with a text or with custom content for a cell

#### Usage

~~~ts
type TCellHeaderTemplate = (cell: ICellConfig) => string | IView;

header?: string | TCellHeaderTemplate;
~~~

The type of the value defines the way Layout renders the content of a header:

- **a string** - defines the text the header shows. Layout doesn't interpret HTML tags and displays them as a part of the text
- **a callback function** - defines the custom content the header shows. While rendering the cell, Layout calls the function with the following parameter:

    - `cell: ICellConfig` - the configuration object of the cell the header belongs to

    Layout places the value that the function returns into the DOM of the header:

    - *a string with HTML markup* - the header renders the tags as markup instead of showing them as text
    - *an object of a DHTMLX widget* - an initialized widget, the same object that you pass to the [`attach()`](layout/api/cell/layout_cell_attach_method.md) method of a cell

#### Example

- a header with a text

~~~jsx
const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: "Cell header" }
    ]
});
~~~

- a header with HTML content

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

- a header with a DHTMLX widget inside

~~~jsx
const toolbar = new dhx.Toolbar(null, {
    data: [
        { id: "add", type: "button", value: "Add", icon: "dxi dxi-plus" }
    ]
});

const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: () => toolbar }
    ]
});
~~~

@descr:


A *header with custom content* has the following specifics:

- **events**: to handle clicks and other DOM events of the markup returned by the callback, use the [`on`](layout/api/cell/layout_cell_on_config.md) property of the cell with the selector of the necessary element
- **icon and image**: the [`headerIcon`](layout/api/cell/layout_cell_headericon_config.md) and [`headerImage`](layout/api/cell/layout_cell_headerimage_config.md) options work as well. The cell renders the icon and the image before the content that the callback returns
- **height**: the height of a header adjusts to the size of the custom content. The [`headerHeight`](layout/api/cell/layout_cell_headerheight_config.md) option sets a fixed height for it
- **collapsing**: a [`collapsable`](layout/api/cell/layout_cell_collapsable_config.md) cell shows the collapse/expand icon in a header of any type. A click on the custom content of a header calls no API of the cell, so controls inside the header remain operable. A user collapses and expands the cell by clicking the collapse icon or the free space of the header

@changelog: the ability to set the property as a callback function was added in v9.4

**Related samples**:
- [Layout. Header](https://snippet.dhtmlx.com/bxqnzesl)
- [Layout. Cell header with HTML template](https://snippet.dhtmlx.com/6xy6mrpq)
- [Layout. Cell header with widget](https://snippet.dhtmlx.com/j4ihnbch)
- [Layout. Cell headers with widget and HTML template](https://snippet.dhtmlx.com/n0vvj5o3)

**Related API**:
- [`attach()`](layout/api/cell/layout_cell_attach_method.md)
- [`on`](layout/api/cell/layout_cell_on_config.md)
- [`headerHeight`](layout/api/cell/layout_cell_headerheight_config.md)
- [`headerIcon`](layout/api/cell/layout_cell_headericon_config.md)
- [`headerImage`](layout/api/cell/layout_cell_headerimage_config.md)

**Related articles**:
- [Layout initialization](layout/initialization.md#initialize-layout)
- [Custom content in a cell header](layout/cell_configuration.md#custom-content-in-a-cell-header)
- [Height of a header cell](layout/cell_configuration.md#height-of-a-header-cell)
