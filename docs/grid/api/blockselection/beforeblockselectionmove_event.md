---
sidebar_label: beforeBlockSelectionMove
title: JavaScript Grid - beforeBlockSelectionMove Event 
description: You can explore the beforeBlockSelectionMove event of Grid block selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeBlockSelectionMove

@short: triggered before moving the selection boundary

### Usage

~~~jsx
beforeBlockSelectionMove: (
    startCell: { row: object; column: object },
    nextCell: { row: object; column: object },
    focusCell: { row: object; column: object } | null,
    dragDirection: "up" | "down" | "left" | "right" | null,
    event: MouseEvent | TouchEvent
) => void;
~~~

@params:
The callback of the event is called with the following parameters:

- `startCell` - an object that contains the initial cell of the selection, includes the following properties: 
    - `row` - the row configuration object 
    - `column`- the column configuration object 
- `nextCell` - an object that contains the next cell to which the boundary is moving or the end cell of the previously selected boundary during the handle movement, includes the following properties: 
    - `row` - the row configuration object 
    - `column`- the column configuration object 
- `focusCell` - an object that contains the last focus cell (if the handle is used) or `null`. The cell object includes the following properties: 
    - `row` - the row configuration object 
    - `column`- the column configuration object 
- `dragDirection` - determines the direction of movement of the focused cell
- `event` - the browser event: `MouseEvent` or `TouchEvent`

@returns:
Return `false` to cancel the action; otherwise, `true`.

@example:
grid.block.events.on("beforeBlockSelectionMove", (startCell, nextCell) => {
    console.log("Moving to:", nextCell.column.id, nextCell.row.id);
});

@descr:

**Related API**: [`afterBlockSelectionMove`](grid/api/blockselection/afterblockselectionmove_event.md)

@changelog:
added in v9.2