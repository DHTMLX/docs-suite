---
sidebar_label: Column width
title: JavaScript Matrix - Column Width
description: You can explore the column width of Matrix in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Column width

The Acme Matrix data library sets every column to 100 pixels by default. Use the Width and Height properties to define the initial size of a column.

~~~js
const matrix = new acme.Matrix("#root", {
    columns: [
        // the Width and Height values are applied to every cell
        { id: "name", width: 160 }
    ]
});
~~~

## Track size changes

Handle the onColumnResize and onColumnDrag events to send fresh sizes to your server. Both handlers receive a column id and a pixel value.

Apply the following properties to lock a column in place: `resizable`, `minWidth`, and `maxWidth`. The `Matrix` component obtains column settings from a data source, so a locked column keeps its width after a reload.

## Adjust the layout at runtime

Set the rowHeight property to 40 pixels when labels wrap onto a second line. Call the setColumnWidth and resetColumns methods after the container changes its size.

The size editor validates the user input and rejects a value below the minimum.
