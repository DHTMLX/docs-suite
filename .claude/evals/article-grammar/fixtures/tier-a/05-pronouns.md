---
sidebar_label: Configuration
title: JavaScript Roster - Configuration
description: You can explore the Roster panel and its configuration in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Configuration

The Roster panel can display the weekly schedule. It also allows you to filter records by team.

Add the Roster to the page, bind it to the dataset, and configure its columns:

~~~js title="index.js"
const roster = new acme.Roster("roster_container", {
    columns: [
        { id: "name", header: [{ text: "Name" }] },
        { id: "team", header: [{ text: "Team" }] }
    ],
    // the panel reads the dataset and renders it row by row
    data: dataset
});
~~~

## Column layout

If you set `startColumn`, this resets the `autoColumns` property. If you selected any team-specific columns, the panel keeps them collapsed until the user expands the group.

The Roster panel adds a context menu to every column header. This menu lets users hide columns, pin them to the left edge, and switch the grouping field.

## Grouping

This release of Acme Suite ships the `groupBy` property, which sorts rows before the panel paints them. The regrouping runs asynchronously, and you can cancel this operation with the `stopGrouping()` method.
