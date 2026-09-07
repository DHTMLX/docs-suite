---
sidebar_label: Selection
title: JavaScript Roster - Selection
description: You can explore the selection modes that are supported by Roster in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Selection

The `selection` property is responsible for the state of the marked cells in Roster. Roster has support for two selection modes: single cells and whole rows.

## Selection modes

Set the mode in the `selection` configuration property:

~~~js
const roster = new acme.Roster("roster_container", {
    selection: "row",
    data: dataset
});
// the active row is highlighted by the built-in CSS class
~~~

The `multiselect` property allows extended selection with the Ctrl and Shift keys.

**Related sample**: [Roster. Cell selection](https://snippet.acme.com/kd82hf10)

## Current selection

Use the `getSelection()` method to get the ids of the marked cells.

~~~js
const cells = roster.selection.getSelection();
console.log(cells.length);
~~~

Each entry of the array contains the row id, the column id, and the cell value. The `afterSelect` event is fired every time a user marks a cell.

Roster keeps the selection after a data reload. A click on an empty area of the widget clears the selection.

## Selection API

| Property      | Description                     |
| ------------- | ------------------------------- |
| `selection`   | Gets or sets the selection mode |
| `multiselect` | Enables extended selection      |
