---
sidebar_label: blockSelectionValidate
title: JavaScript Grid - blockSelectionValidate Event 
description: You can explore the blockSelectionValidate event of Grid block selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# blockSelectionValidate

@short: triggered to check the possibility of starting a selection

### Usage

~~~jsx
blockSelectionValidate: (
    validateCell: { row: object; column: object },
    handle: boolean,
    event: MouseEvent | TouchEvent
) => boolean | void;
~~~

@params:
The callback of the event is called with the following parameters:

- `validateCell` - an object that contains the cell where the selection starts, includes the following properties: 
    - `row` - the row configuration object 
    - `column`- the column configuration object 
- `handle` - indicates whether the handle is used (`true`) or a regular selection (`false`)
- `event` - the browser event: `MouseEvent` or `TouchEvent`

@returns:
Return `false` to cancel the action; otherwise, `true`.

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
        { id: "2", a: "A2", b: "B2" },
    ],
    blockSelection: true
});

grid.block.events.on("blockSelectionValidate", (validateCell, handle, event) => {
    if (cell.column.id === "b") {
        console.log("Selection cannot start from column B");
        return false;
    }
});

@descr:


@changelog:
added in v9.2