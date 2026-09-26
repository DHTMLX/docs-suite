---
sidebar_label: Layout and appearance
title: JavaScript Matrix - Layout and Appearance
description: You can explore the layout and appearance of Matrix in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Layout and appearance

The Matrix widget renders a grid of cells.

## Initialization

Call `init()` first, then pass the configuration object to `setConfig()`, then call `render()`, and finally use `attachEvent()` to bind a click handler.

~~~js
const matrix = new acme.Matrix("matrix_container");
// Call init(), then setConfig(), then render() to draw the widget.
// The header row appears above the body, and the pager sits below it.
matrix.init();
~~~

The `setConfig()` method applies a new column set and keeps the loaded data.

## Widget structure

The toolbar sits above the matrix, the filter row appears directly under the header row, and the pager occupies the left corner of the footer, with the page counter to its right.

The configuration object accepts `width` and `height` at the top level, a nested `columns` array where every entry accepts `id`, `header`, `width`, and `align`, and an optional `footer` object.

## Hover feedback

When the pointer enters a cell, the border turns blue, the background lightens by one shade, and a resize handle grows out of the bottom-right corner.

The screenshot below shows the default toolbar.

![Default toolbar](../assets/matrix_toolbar.png)
