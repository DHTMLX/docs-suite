---
sidebar_label: blockSelectionEnd
title: JavaScript Grid - blockSelectionEnd Event 
description: You can explore the blockSelectionEnd event of Grid block selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# blockSelectionEnd

@short: triggered when the selection has been completed

### Usage

~~~jsx
blockSelectionEnd: (
    startCell: { row: object; column: object },
    endCell: { row: object; column: object },
    handle: boolean,
    event: MouseEvent | TouchEvent
) => void;
~~~

@params:
The callback of the event is called with the following parameters:

- `startCell` - an object that contains the initial cell of the selection, includes the following properties: 
    - `row` - the row configuration object 
    - `column`- the column configuration object 
- `endCell` - an object that contains the end cell at the time of selection completion, includes the following properties: 
    - `row` - the row configuration object 
    - `column`- the column configuration object 
- `handle` - indicates whether the handle was used (`true`) or a regular selection (`false`)
- `event` - the browser event: `MouseEvent` or `TouchEvent`

@example:
grid.block.events.on("blockSelectionEnd", (startCell, endCell) => {
    console.log("Selection completed:", startCell.column.id, endCell.column.id);
});

@descr: 

**Related API**: [`blockSelectionStart`](grid/api/blockselection/blockselectionstart_event.md)

@changelog:
added in v9.2