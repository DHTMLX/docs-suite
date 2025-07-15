---
sidebar_label: getHistory()
title: JavaScript Grid - getHistory Method 
description: You can explore the getHistory method of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getHistory()

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: returns a copy of the array of all actions in the Grid history to prevent accidental modification of the internal structure

### Usage

~~~jsx
type ActionType = "add" | "remove" | "removeAll" | "change";

interface IAction {
    type: ActionType; 
    batch: IRow[];
    inverse?: IAction; 
}

getHistory(): IAction[];
~~~

@returns:
Returns a copy of the array of all actions in the Grid history, where each action presents an object described below:

<table>
    <tbody>
        <tr>
            <td><b>action</b></td>
            <td>(<i>object</i>) the action object that contains the following properties:<ul><li><b>`type`</b> - (<i>string</i>) the type of action: "add", "remove", "removeAll", or "change"</li><li><b>`batch`</b> - (<i>array</i>) an array of rows representing the data affected by the action (e.g., added, removed, or modified rows)</li><li><b>`inverse`</b> - (<i>object</i>) optional, the inverse action required for undoing (for the "change" and "removeAll" types)</li></ul></td>
        </tr>
    </tbody>
</table>

@example:
// The example shows retrieving the history
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

// adding actions
grid.history.add({
    type: "change",
    batch: [{ id: "1", name: "Updated Item", value: 15 }],
    inverse: { type: "change", batch: [{ id: "1", name: "Item 1", value: 10 }] },
});
grid.history.add({
    type: "add",
    batch: [{ id: "2", name: "New Item", value: 20 }],
});

// retrieving the history
const history = grid.history.getHistory();
console.log(history.length); // -> 2

@descr:

**Related article**: [Getting the history of Grid actions](grid/usage_history.md/#getting-the-history-of-grid-actions)

**Related API**: [`add()`](grid/api/history/add_method.md), [`remove()`](grid/api/history/remove_method.md), [`removeAll()`](grid/api/history/removeall_method.md)

@changelog:
added in v9.2