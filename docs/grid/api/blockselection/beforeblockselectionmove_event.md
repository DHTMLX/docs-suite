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


<table>
    <tbody>
        <tr>
            <td><b>startCell</b></td>
            <td>(<i>object</i>) an object that contains the initial cell of the selection, includes the following properties:<ul><li><b>`row`</b> - (<i>object</i>) the row configuration object </li><li><b>`column`</b> - (<i>object</i>) the column configuration object</li></ul></td>
        </tr>
        <tr>
            <td><b>nextCell</b></td>
            <td>(<i>object</i>) an object that contains the next cell to which the boundary is moving or the end cell of the previously selected boundary during the handle movement, includes the following properties: <ul><li><b>`row`</b> - (<i>object</i>) the row configuration object </li><li><b>`column`</b> - (<i>object</i>) the column configuration object</li></ul></td>
        </tr>
        <tr>
            <td><b>focusCell</b></td>
            <td>(<i>object</i>) an object that contains the last focus cell (if the handle is used) or `null`, includes the following properties: <ul><li><b>`row`</b> - (<i>object</i>) the row configuration object </li><li><b>`column`</b> - (<i>object</i>) the column configuration object</li></ul></td>
        </tr>
        <tr>
            <td><b>dragDirection</b></td>
            <td>(<i>string</i>) determines the direction of movement of the focused cell: `"up"` | `"down"` | `"left"` | `"right"` | `null`</td>
        </tr>
        <tr>
            <td><b>event</b></td>
            <td>(<i>Event</i>) the browser event: `MouseEvent` or `TouchEvent`</td>
        </tr>
    </tbody>
</table>

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