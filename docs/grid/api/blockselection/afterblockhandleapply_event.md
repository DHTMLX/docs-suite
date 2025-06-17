---
sidebar_label: afterBlockHandleApply
title: JavaScript Grid - afterBlockHandleApply Event 
description: You can explore the afterBlockHandleApply event of Grid block selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterBlockHandleApply

@short: triggered after applying the handle action

### Usage

~~~jsx
afterBlockHandleApply: (
    startCell: { row: object; column: object },
    endCell: { row: object; column: object },
    dragDirection: "up" | "down" | "left" | "right" | null,
    event: MouseEvent | TouchEvent
) => void;
~~~

@params:
The callback of the event is called with the following parameters:

- `startCell` - an object that contains the initial cell of the selection, includes the following properties: 
    - `row` - the row configuration object 
    - `column`- the column configuration object 
- `endCell` - an object that contains the end cell of the selection, includes the following properties: 
    - `row` - the row configuration object 
    - `column`- the column configuration object 
- `dragDirection` - determines the direction of movement of the focused cell
- `event` - the browser event: `MouseEvent` or `TouchEvent`

@example:
grid.block.events.on("afterBlockHandleApply", (startCell, endCell, dragDirection) => {
    console.log("Handle applied:");
});

@descr:

**Related API**: [`beforeBlockHandleApply`](grid/api/blockselection/beforeblockhandleapply_event.md)

@changelog:
added in v9.2