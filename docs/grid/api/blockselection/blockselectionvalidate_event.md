---
sidebar_label: blockSelectionValidate
title: JavaScript Grid - blockSelectionValidate Event 
description: You can explore the blockSelectionValidate event of Grid block selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# blockSelectionValidate

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

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

<table>
    <tbody>
        <tr>
            <td><b>validateCell</b></td>
            <td>(<i>object</i>) an object that contains the cell where the selection starts, includes the following properties:<ul><li><b>`row`</b> - (<i>object</i>) the row configuration object </li><li><b>`column`</b> - (<i>object</i>) the column configuration object</li></ul></td>
        </tr>
        <tr>
            <td><b>handle</b></td>
            <td>(<i>boolean</i>) indicates whether the handle is used (`true`) or a regular selection (`false`)</td>
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