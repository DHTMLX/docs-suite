---
sidebar_label: error
title: JavaScript Grid - error Event 
description: You can explore the error event of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# error

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: triggered when an error occurs

:::note
The event is triggered when an error occurs, such as the module is disabled, the history is empty, the action type is invalid, or the inverse action is missing for the `undo` operation.
:::

### Usage

~~~jsx
type ActionType = "add" | "remove" | "removeAll" | "change";

interface IAction {
    type: ActionType; 
    batch: IRow[];
    inverse?: IAction; 
}

error: (error: string, action: IAction | null) => void;
~~~

@params:
The callback of the event is called with the following parameters:

<table>
    <tbody>
        <tr>
            <td><b>error</b></td>
            <td>(<i>string</i>) the error message</td>
        </tr>
        <tr>
            <td><b>action</b></td>
            <td>(<i>object</i>) the action object associated with the error, or `null`. It contains the following properties:<ul><li><b>`type`</b> - (<i>string</i>) the type of action: "add", "remove", "removeAll", or "change"</li><li><b>`batch`</b> - (<i>array</i>) an array of rows representing the data affected by the action (e.g., added, removed, or modified rows)</li><li><b>`inverse`</b> - (<i>object</i>) optional, the inverse action required for undoing (for the "change" and "removeAll" types)</li></ul></td>
        </tr>
    </tbody>
</table>
    
@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "name", header: [{ text: "Name" }] },
        { id: "value", header: [{ text: "Value" }] },
    ],
    data: [
        { id: "1", name: "Item 1", value: 10 },
    ],
    history: true
});

grid.history.events.on("error", (error, action) => {
    console.log("Error:", error, action);
});

@descr:

**Related article**: [Work with History module](grid/usage_history.md)


@changelog:
added in v9.2