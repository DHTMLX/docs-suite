---
sidebar_label: Display modes
title: JavaScript Roster - Display Modes
description: You can explore the display modes of Roster in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Display modes

The Roster widget renders records inside a Panel container. A single record can hold text, numbers, dates and links. Right-click a record to open the context menu.

The widget supports the following display modes.

- Compact
- Detailed
- Grouped

To change the layout pass a mode name to the `mode` property:

~~~js
const roster = new acme.Roster("#root", {
    // the mode accepts "compact", "detailed" and "grouped"
    mode: "detailed"
});
~~~

## Group records

The `groupBy` property splits the records by one of the following criteria:

- department
- location
- hire date

The Panel header exposes three controls:

- Search box
- Mode switcher
- Export button

## Save a layout

Keep the following limits in mind:

- The Panel stores the active mode in local storage.
- A saved layout applies only to the current browser
- The `reset()` method clears the stored layout.
