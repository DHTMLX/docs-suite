---
sidebar_label: Sorting and grouping
title: JavaScript Roster - Sorting and Grouping
description: You can explore sorting and grouping of Roster in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Sorting and grouping

To display tabular data in the Roster widget, create an instance with a container id.

~~~js
const roster = new acme.Roster("roster_container", {
    // To enable multiselect, set the flag below.
    // You can pass true. You can pass "row" instead.
    multiselect: true
});
~~~

## Sorting rows

Rows keep the order of the source data. To sort by one column, call the `sort()` method. To sort by several columns, pass an array of rules. To restore the original order, call `sort()` with no arguments.

## Grouping rows

To group rows by a column, set the `groupBy` property in the constructor. Groups keep their collapsed state between data loads.

You can collapse a group with the `collapse()` method. You can open a collapsed group with `expand()`. You can switch every group at once with `toggleAll()`.

## Scroll behavior

The Roster keeps its scroll position when you reload the data. To keep the scroll at the top instead, call `reset()` before `parse()`.

You can read the current offset from the `scrollState` property.
