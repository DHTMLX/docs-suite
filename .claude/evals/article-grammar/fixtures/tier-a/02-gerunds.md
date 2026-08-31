---
sidebar_label: Group and Sort
title: JavaScript Roster - Group and Sort Data
description: You can explore data grouping in the Roster in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Group and Sort Data

The Roster arranges rows into groups and sorts them by any column. Enabling group footers requires you to load the extension package first.

~~~html
<div id="roster"></div>
~~~

## Group Data

Use the data grouping feature to combine rows that share the same department. The Roster supports displaying a custom footer under each group.

~~~js
const roster = new acme.Roster("#roster", {
    // enabling group footers by setting the flag below
    groupFooter: true,
    groupBy: "department"
});
~~~

## Sort Data

You can change the sort order using the `sortDirection` property. Use the `sortBy` handler to define a comparison function for a column.

## Lock the Header

You can lock the header row by setting the `fixedHeader` property to `true`. A locked header stays visible when you scroll a long data set.
