---
sidebar_label: announce()
title: JavaScript Grid - announce Method
description: The announce method of DHTMLX Grid sends a message to the grid's live region, so a screen reader reports a status change without moving focus. Read the API reference of DHTMLX Suite with code examples and live demos.
---

# announce()

@short: sends a message to the grid's live region so a screen reader announces a status change that happened without moving focus

#### Usage

~~~ts
announce(message: string): void;
~~~

@params:
- `message: string` - the message to announce. Pass an empty string to clear the region without announcing anything

#### Example

~~~jsx
const grid = new dhx.Grid("grid_container", { columns, data });

// announce the result of a filter applied outside the grid
grid.data.filter(item => item.country === "Italy");
grid.announce(`${grid.data.getLength()} rows match the filter`);
~~~

@descr:
The Grid announces its own sorting, filtering, data loading and editor validation. Use `announce()` for status changes that your code makes, such as a filter applied from an external control.

**Related articles**:
- [Announcements](grid/localization.md#announcements)
- [Accessibility in DHTMLX Grid](grid/accessibility.md)

@changelog: added in v9.4
