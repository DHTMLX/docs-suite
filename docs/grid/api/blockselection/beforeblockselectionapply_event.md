---
sidebar_label: beforeBlockSelectionApply
title: JavaScript Grid - beforeBlockSelectionApply Event 
description: You can explore the beforeBlockSelectionApply event of Grid block selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeBlockSelectionApply

@short: triggered before applying the selection (e.g., to a range)

### Usage

~~~jsx
beforeBlockSelectionApply: (
    startCell: { row: object; column: object },
    endCell: { row: object; column: object },
    handle: boolean,
    event: MouseEvent | TouchEvent
) => boolean | void;
~~~

@params:
The callback of the event is called with the following parameters:

- `startCell` - an object that contains the initial cell of the selection, includes the following properties: 
    - `row` - the row configuration object 
    - `column`- the column configuration object 
- `endCell` - an object that contains the end cell of the selection, includes the following properties: 
    - `row` - the row configuration object 
    - `column`- the column configuration object 
- `handle` - indicates whether the handle was used (`true`) or a regular selection (`false`)
- `event` - the browser event: `MouseEvent` or `TouchEvent`

@returns:
Return `false` to cancel the action; otherwise, `true`.

@example:
grid.block.events.on("beforeBlockSelectionApply", (startCell, endCell) => {
    if (endCell.row.id === "2") {
        console.log("Application canceled if the range ends with row 2");
        return false;
    }
});

@descr:

**Related API**: [`afterBlockSelectionApply`](grid/api/blockselection/afterblockselectionapply_event.md)

@changelog:
added in v9.2