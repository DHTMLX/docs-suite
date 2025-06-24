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

<table>
    <tbody>
        <tr>
            <td><b>startCell</b></td>
            <td>(<i>object</i>) an object that contains the initial cell of the selection, includes the following properties:<ul><li><b>`row`</b> - (<i>object</i>) the row configuration object </li><li><b>`column`</b> - (<i>object</i>) the column configuration object</li></ul></td>
        </tr>
        <tr>
            <td><b>endCell</b></td>
            <td>(<i>object</i>) an object that contains the current end cell of the selection, includes the following properties:<ul><li><b>`row`</b> - (<i>object</i>) the row configuration object </li><li><b>`column`</b> - (<i>object</i>) the column configuration object</li></ul></td>
        </tr>
        <tr>
            <td><b>focusCell</b></td>
            <td>(<i>object</i>) an object that contains the focus cell (if the handle is used) or `null`, includes the following properties: <ul><li><b>`row`</b> - (<i>object</i>) the row configuration object </li><li><b>`column`</b> - (<i>object</i>) the column configuration object</li></ul></td>
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

@example:
grid.block.events.on("afterBlockSelectionMove", (startCell, endCell) => {
    console.log("Selection updated to:", endCell.column.id, endCell.row.id);
});

@descr:

**Related API**: [`beforeBlockSelectionMove`](grid/api/blockselection/beforeblockselectionmove_event.md)

@changelog:
added in v9.2