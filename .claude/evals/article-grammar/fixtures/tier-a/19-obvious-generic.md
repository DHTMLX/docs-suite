---
sidebar_label: Sorting
title: JavaScript Matrix - Sorting Columns
description: You can explore how to sort Matrix columns in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Sorting columns

Matrix reorders rows by any column that carries the `sortable` flag. Ascending order means that the smallest value comes first and the largest value comes last.

## Enabling sorting

Add the flag to a column config:

~~~js
const matrix = new acme.Matrix("matrix_container", {
    columns: [
        { id: "name", header: "Name" },
        // a header is the cell at the top of a column, and a user can click it
        { id: "status", header: "Status", sortable: true }
    ]
});
~~~

The snippet above enables sorting for the **Status** column.

## Custom comparator

The `sortBy()` method takes a comparator function. A function is a named block of code that you call with arguments and that returns a value.

~~~js
matrix.sortBy("status", (a, b) => a.length - b.length);
~~~

This pattern fits any project, from a small internal admin page to a large enterprise reporting portal, and it adapts to whatever data your team stores.

## Sorting spans

In Matrix, a span is a rectangle of merged cells that takes the id of its top-left cell. The comparator receives the span value.

Sorting works for every use case, so adapt it to your own workflow.
