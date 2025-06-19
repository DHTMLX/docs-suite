---
sidebar_label: add()
title: JavaScript Grid - add Method 
description: You can explore the add method of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# add()

@short: adds a new action into the history of actions within the Grid

### Usage

~~~jsx
type ActionType = "add" | "remove" | "removeAll" | "change";

interface IAction {
    type: ActionType; 
    batch: IRow[];
    inverse?: IAction; 
}

add(action: IAction): void;
~~~

@params:

- `action: IAction` - the action object containing:
    - `type: ActionType` - the type of action: "add", "remove", "removeAll", or "change"
    - `batch: IRow[]` - an array of rows representing the data affected by the action (e.g., added, removed, or modified rows)
    - `inverse?: IAction` - the inverse action required for undoing (mandatory for the "change" and "removeAll" types, not required for other types)

:::note
The `action` argument must conform to the `IAction` interface. If the module is disabled, the action type is invalid, or the `inverse` property is missing (for actions with the "change" and "removeAll" types), the [`error`](grid/api/history/error_event.md) event is triggered. 
:::

@example:
// The example shows adding a new row via `DataCollection` 
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

// adding a new row via DataCollection
const newItem = { id: "2", name: "New Item", value: 20 };
grid.data.add(newItem);

// recording the action in the history 
grid.history.add({
    type: "add",
    batch: [{ ...newItem }],
});

// checking the history
const history = grid.history.getHistory();
console.log(history.length); // ->1

@descr:

**Related article**: [Adding/removing Grid history actions](grid/usage_history.md/#addingremoving-grid-history-actions)

**Related API**: [`remove()`](grid/api/history/remove_method.md), [`removeAll()`](grid/api/history/removeall_method.md), [`getHistory()`](grid/api/history/gethistory_method.md)

@changelog:
added in v9.2