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

<table>
    <tbody>
        <tr>
            <td><b>startCell</b></td>
            <td>(<i>object</i>) an object that contains the initial cell of the selection, includes the following properties:<ul><li><b>`row`</b> - (<i>object</i>) the row configuration object </li><li><b>`column`</b> - (<i>object</i>) the column configuration object</li></ul></td>
        </tr>
        <tr>
            <td><b>endCell</b></td>
            <td>(<i>object</i>) an object that contains the end cell of the selection, includes the following properties:<ul><li><b>`row`</b> - (<i>object</i>) the row configuration object </li><li><b>`column`</b> - (<i>object</i>) the column configuration object</li></ul></td>
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