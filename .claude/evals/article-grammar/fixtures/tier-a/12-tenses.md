---
sidebar_label: Group records
title: JavaScript Roster - Group Records
description: You can explore how the Roster panel will group and summarize records in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Group records

This topic will teach you how to group records in the Roster panel. In this tutorial, you will enable grouping, add a summary row, and store the resulting layout.

## Enable groups

Once the Roster has loaded all records, the panel builds the group tree. Set the `groupBy` property to the column whose values you would like to combine.

~~~js
const roster = new acme.Roster("roster_container", {
    groupBy: "team",
    // the summary row will be redrawn after the data has loaded
    summary: true
});
~~~

The panel applies this property during initialization. Each group header shows the team name and the number of rows in the group.

## Store the layout

When you save a layout, you will be able to choose the storage format. Pass the format name to the `saveLayout()` method, and the panel returns a serializable object.

~~~js
roster.saveLayout("json");
~~~

We have implemented incremental repaint for grouped data, so the panel redraws only the rows inside the affected group.
