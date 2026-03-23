---
sidebar_label: blockSelectionStart
title: JavaScript Grid - blockSelectionStart Event 
description: You can explore the blockSelectionStart event of Grid block selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# blockSelectionStart

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

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

<table>
    <tbody>
        <tr>
            <td><b>startCell</b></td>
            <td>(<i>object</i>) an object that contains the initial cell of the selection, includes the following properties:<ul><li><b>`row`</b> - (<i>object</i>) the row configuration object </li><li><b>`column`</b> - (<i>object</i>) the column configuration object</li></ul></td>
        </tr>
        <tr>
            <td><b>endCell</b></td>
            <td>(<i>object</i>) an object that contains the end cell at the start of the selection, includes the following properties:<ul><li><b>`row`</b> - (<i>object</i>) the row configuration object </li><li><b>`column`</b> - (<i>object</i>) the column configuration object</li></ul></td>
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
grid.block.events.on("blockSelectionStart", (startCell, endCell, handle) => {
    console.log("Selection started:", startCell.column.id, startCell.row.id);
});

@descr:

**Related API**: [`blockSelectionEnd`](grid/api/blockselection/blockselectionend_event.md)

@changelog:
added in v9.2