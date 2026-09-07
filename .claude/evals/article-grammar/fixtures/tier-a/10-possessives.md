---
sidebar_label: Column configuration
title: JavaScript Roster - Column Configuration
description: You can explore the column configuration of Roster in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Column configuration

Roster reads the panel's layout from a configuration object that you pass to the constructor. Every entry in the fields collection describes one column and sets the width, the header text, and the cell alignment.

~~~js
const roster = new acme.Roster("#root", {
    // apply the roster's saved filters before the first render
    restore: true,
    fields: [
        { id: "name", header: "Name", width: 200 },
        { id: "role", header: "Role", width: 140 }
    ]
});
~~~

## Header cells

Header cells accept matrix region header cell options that override the defaults for one column. The same config also accepts appearance options for a matrix region, and Roster applies them after the template runs.

Call `refresh()` after you change the widget's appearance at run time, otherwise the panel keeps the previous markup.

## Export

The export module writes the saved rosters' column settings into a single JSON file. Older builds keep XML definitions for saved layouts in a separate folder, so check the folder name before you upgrade.
