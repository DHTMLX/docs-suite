---
sidebar_label: blockSelectionStart
title: JavaScript Grid - blockSelectionStart Event 
description: You can explore the blockSelectionStart event of Grid block selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# blockSelectionStart

@short: triggered when selection has been started

### Usage

~~~jsx
blockSelectionStart: (
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
- `endCell` - an object that contains the end cell at the start of the selection, includes the following properties: 
    - `row` - the row configuration object 
    - `column`- the column configuration object 
- `handle` - indicates whether the handle is used (`true`) or a regular selection (`false`)
- `event` - a browser event: `MouseEvent` or `TouchEvent`

@returns:
Return `false` to cancel the action; otherwise, `true`.

@example:
grid.block.events.on("blockSelectionStart", (startCell, endCell, handle) => {
    console.log("Selection started:", startCell.column.id, startCell.row.id);
});

@descr:

**Related API**: [`blockSelectionEnd`](grid/api/blockselection/blockselectionend_event.md)

@changelog:
added in v9.2