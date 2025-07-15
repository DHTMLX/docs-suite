---
sidebar_label: afterAdd
title: JavaScript Grid - afterAdd Event 
description: You can explore the afterAdd event of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterAdd

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: triggered after successfully adding an action to the history

### Usage

~~~jsx
type ActionType = "add" | "remove" | "removeAll" | "change";

interface IAction {
    type: ActionType; 
    batch: IRow[];
    inverse?: IAction; 
}

afterAdd: (action: IAction) => void;
~~~

@params:
The callback of the event is called with the following parameters:

<table>
    <tbody>
        <tr>
            <td><b>action</b></td>
            <td>(<i>object</i>) the object of the added action that contains the following properties:<ul><li><b>`type`</b> - (<i>string</i>) the type of action: "add", "remove", "removeAll", or "change"</li><li><b>`batch`</b> - (<i>array</i>) an array of rows representing the data affected by the action (e.g., added, removed, or modified rows)</li><li><b>`inverse`</b> - (<i>object</i>) optional, the inverse action required for undoing (mandatory for the "change" and "removeAll" types, not required for other types)</li></ul></td>
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

grid.history.events.on("afterAdd", (action) => {
    console.log("Action added to history:", action.type);
});

@descr:

**Related sample:** [Grid. History. Configuration](https://snippet.dhtmlx.com/vznpyeit)

**Related article**: [Adding/removing Grid history actions](grid/usage_history.md/#addingremoving-grid-history-actions)

**Related API**: [`add()`](grid/api/history/add_method.md), [`beforeAdd()`](grid/api/history/beforeadd_event.md)

@changelog:
added in v9.2