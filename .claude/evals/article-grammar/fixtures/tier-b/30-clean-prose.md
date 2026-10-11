---
sidebar_label: Select rows
title: JavaScript Roster - Select Rows
description: You can explore how to select rows in Roster in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Select rows

The Acme Roster component highlights the row that a user clicks. The `selection` property stores row ids between data reloads.

## Choose a selection mode

The `mode` property accepts three values:

| Value | Behavior |
| --- | --- |
| `single` **(default)** | Roster highlights one row at a time. |
| `multiple` | A user adds rows to the selection with a modifier key. |
| `none` | A click on a row does not change the selection. |

The component applies the mode at startup. To switch the mode at runtime, call the `setMode()` method.

## Read the current selection

The `getSelected()` method returns row ids in click order:

~~~js
const roster = new acme.Roster("roster_container", {
    mode: "multiple"
});
roster.select("row_12");
const ids = roster.getSelected();
~~~

The `select()` method moves the highlight to the row with the given id. Roster expands a range using row indexes, not the visible order.

## Style the highlight

The `selectedCss` property changes the appearance of a selected row. A custom class overrides the default background and border:

~~~css
.roster-pick {
    background: #eef4ff;
    border-left: 3px solid #2f6fd0;
}
~~~

## Navigate with the keyboard

The `keyNavigation` property allows you to move the highlight with arrow keys. Roster scrolls the container when the focused row leaves the viewport.

## Handle selection events

The component fires two events during a selection change:

| Event | Description |
| --- | --- |
| `beforeSelect` | Fires before the highlight moves to another row. |
| `afterSelect` | Fires after the focused row is changed. |

A handler that returns `false` cancels the change. The previous highlight stays in place.

## Keep the selection after a reload

Roster compares stored ids with the new data set after every reload. Rows that survive the update keep the highlight. Missing rows disappear from the `selection` property.

The `unselect()` method clears the current selection. An optional row id limits the call to a single row.
