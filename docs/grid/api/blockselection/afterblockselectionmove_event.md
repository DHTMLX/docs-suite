---
sidebar_label: afterBlockSelectionMove
title: JavaScript Grid - afterBlockSelectionMove Event 
description: You can explore the afterBlockSelectionMove event of Grid block selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterBlockSelectionMove

@short: triggered after moving the selection boundary

### Usage

~~~jsx
afterBlockSelectionMove: (
    startCell: { row: object; column: object },
    endCell: { row: object; column: object },
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
- `endCell` - an object that contains the current end cell of the selection, includes the following properties: 
    - `row` - the row configuration object 
    - `column`- the column configuration object 
- `focusCell` - an object that contains the focus cell (if the handle is used) or `null`, includes the following properties: 
    - `row` - the row configuration object 
    - `column`- the column configuration object 
- `dragDirection` - determines the direction of movement of the focused cell
- `event` - the browser event: `MouseEvent` or `TouchEvent`

@example:
grid.block.events.on("afterBlockSelectionMove", (startCell, endCell) => {
    console.log("Selection updated to:", endCell.column.id, endCell.row.id);
});

@descr:

**Related API**: [`beforeBlockSelectionMove`](grid/api/blockselection/beforeblockselectionmove_event.md)

@changelog:
added in v9.2