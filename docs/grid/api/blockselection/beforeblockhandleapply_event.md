---
sidebar_label: beforeBlockHandleApply
title: JavaScript Grid - beforeBlockHandleApply Event 
description: You can explore the beforeBlockHandleApply event of Grid block selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeBlockHandleApply

@short: triggered before applying the handle action

### Usage

~~~jsx
beforeBlockHandleApply: (
    startCell: { row: object; column: object },
    endCell: { row: object; column: object },
    dragDirection: "up" | "down" | "left" | "right" | null,
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
- `dragDirection` - determines the direction of movement of the focused cell
- `event` - the browser event: `MouseEvent` or `TouchEvent`

@returns:
Return `false` to cancel the action; otherwise, `true`.

@example:
grid.block.events.on("beforeBlockHandleApply", (startCell, endCell, dir) => {
    if (dir === "right" | dir === "left") {
        console.log("Horizontal change canceled");
        return false;
    }
});

@descr:

**Related API**: [`afterBlockHandleApply`](grid/api/blockselection/afterblockhandleapply_event.md)

@changelog:
added in v9.2