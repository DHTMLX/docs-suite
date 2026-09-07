---
sidebar_label: Row highlighting
title: JavaScript Roster - Row Highlighting
description: You can explore how rows are highlighted in Roster in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Row highlighting

A row is highlighted when a user clicks its handle in the left gutter of the Roster control. These settings are accessible on two levels: the `highlight` property of the whole control and the `selection` object of a single panel.

## Highlight modes

The highlight mode should be selected based on how your application handles keyboard navigation. If you set `focusRow`, the `autoScroll` property is ignored.

~~~js
const roster = new acme.Roster("roster_container", {
    highlight: "row",
    // the active row is repainted automatically after every update
    focusRow: 0
});
~~~

## Bulk data loads

Set `lockPaint` to true to prevent the panel from being repainted while a large data set arrives from the server. Call `getSelected()` to read the selected rows after the load completes.

~~~js
roster.lockPaint = true;
roster.data.load("/api/roster");
roster.lockPaint = false;
~~~

## Events

| Event | Description |
| ----- | ----------- |
| `afterHighlight` | fires after the focused row is changed |
| `beforeLoad` | fires before the control sends a data request |
