---
sidebar_label: Work with History module
title: JavaScript Grid - Work with History module 
description: You can explore how to work with History module of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with History module

:::tip Pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

You can manage the history of actions in the Grid component via the API of the [`History`](grid/configuration.md/#history-of-grid-actions) module. It allows tracking changes made by the user through the user interface, such as editing cells using the editor, clearing cells, or applying modifications via the handle in the `BlockSelection` mode. The module supports the `undo` and `redo` operations, as well as allows managing the history stack with the ability to limit its size.

## Initializing the History module

To initialize the `History` module, use the [`history`](grid/api/grid_history_config.md) property in the configuration of the **dhx.Grid** component. When the Grid is created, the module is accessible through the `grid.history` property.

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
        { id: "2", a: "A2", b: "B2" },
    ],
    history: true // enables the History module
});
~~~

The `history` property can also be set as an *object* to enable the module and provide additional configuration options.
Learn about configuration possibilities of the `History` module in the [Configuration](grid/configuration.md/#history-of-grid-actions) guide.

## Enabling/disabling History module

You can activate the history module via the [`enable()`](grid/api/history/enable_method.md) method of the `history` object. The following example shows how the module is enabled after deactivation on initialization:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "name", header: [{ text: "Name" }] },
        { id: "value", header: [{ text: "Value" }] },
    ],
    data: [
        { id: "1", name: "Item 1", value: 10 },
    ],
    history: { disabled: true }
});

// checking the state
console.log(grid.history.isDisabled()); // -> true

// enabling the module
grid.history.enable();
console.log(grid.history.isDisabled()); // -> false

// adding an action
grid.history.add({
    type: "change",
    batch: [{ id: "1", name: "Updated Item", value: 15 }],
    inverse: { type: "change", batch: [{ id: "1", name: "Item 1", value: 10 }] },
});
console.log(grid.history.getHistory().length); // -> 1
~~~

To disable the management of the history of actions in Grid, use the [`disable()`](grid/api/rangeselection/disable_method.md) method of the `history` object. The following example shows disabling of the module after adding an action:

~~~jsx
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

// adding an action
grid.history.add({
    type: "change",
    batch: [{ id: "1", name: "Updated Item", value: 15 }],
    inverse: { type: "change", batch: [{ id: "1", name: "Item 1", value: 10 }] },
});

// disabling the module
grid.history.disable();
console.log(grid.history.isDisabled()); // -> true

// attempting to add a new action
grid.history.add({
    type: "add",
    batch: [{ id: "2", name: "New Item", value: 20 }],
});
console.log(grid.history.getHistory().length); // -> 1 (the new action hasn't been added)
~~~

### Checking History module state

You can check whether the `History` module is disabled, using the [`isDisabled()`](grid/api/history/isdisabled_method.md) method of the `history` object. It returns `true`, if the module is disabled and `false`, if it is enabled. The following example shows checking the module's state after disabling it:

~~~jsx
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

grid.history.disable();
console.log(grid.history.isDisabled()); // -> true

grid.history.enable();
console.log(grid.history.isDisabled()); // -> false
~~~

## Adding/removing Grid history actions

### Types of actions

The `History` module supports the following action types within the Grid component:

- **"add"** - adding rows to the table
- **"remove"** - removing rows from the table
- **"removeAll"** - clearing all the rows
- **"change"** - modifying cell values (requires specifying an inverse action)

For the "change" and "removeAll" actions, an `inverse` action is mandatory. Otherwise, [adding the action to the history](#adding-a-new-action) will trigger an error. 

### Adding a new action 

You can add a new action into the history of actions within the grid by using the [`add()`](grid/api/history/add_method.md) method of the `history` object. The method takes the following parameters: 

- `action: IAction` - the action object containing:
    - `type: ActionType` - the type of action: "add", "remove", "removeAll", or "change"
    - `batch: IRow[]` - an array of rows representing the data affected by the action (e.g., added, removed, or modified rows)
    - `inverse?: IAction` - the inverse action required for undoing (mandatory for the "change" and "removeAll" types, not required for other types)

:::note
The `action` argument must conform to the `IAction` interface. If the module is disabled, the action type is invalid, or the `inverse` property is missing (for actions with the "change" and "removeAll" types), the [`error`](grid/api/history/error_event.md) event is triggered. 
:::

All the actions performed through the API (e.g., using `grid.data`) can be added to the history using the `add()` method. The following example shows adding a new row via `DataCollection`:

~~~jsx
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
~~~

To make the process of adding new actions into the Grid history more flexible, you can apply the related events of the `history` object: 
- [`beforeAdd`](grid/api/history/beforeadd_event.md)
- [`afterAdd`](grid/api/history/afteradd_event.md)

### Removing the last action 

You can remove the last action from the Grid history using the [`remove()`](grid/api/history/remove_method.md) method of the `history` object. Note that if the history is empty or the module is disabled, the operation is ignored and the [`error`](grid/api/history/error_event.md) event is triggered (for a disabled module).

The following example shows removing the last action from the history after modifying a value:

~~~jsx
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

// modifying a value via DataCollection
const updatedItem = { id: "1", name: "Updated Item", value: 15 };
grid.data.update("1", updatedItem);

// adding the action to history
grid.history.add({
    type: "change",
    batch: [{ ...updatedItem }],
    inverse: { type: "change", batch: [{ id: "1", name: "Item 1", value: 10 }] },
});

// removing the last action
grid.history.remove();
console.log(grid.history.getHistory().length); // -> 0
~~~

### Removing all the actions 

You can remove all the actions from the Grid history using the [`removeAll()`](grid/api/history/removeall_method.md) method of the `history` object. The method clears the entire history and the redo stack. Note that if the module is disabled, the operation is ignored and the [`error`](grid/api/history/error_event.md) event is triggered.

The example below shows clearing the history after adding multiple rows:

~~~jsx
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

// adding two actions
grid.history.add({
    type: "add",
    batch: [{ id: "2", name: "New Item 1", value: 20 }],
});
grid.history.add({
    type: "add",
    batch: [{ id: "3", name: "New Item 2", value: 30 }],
});

// clearing the history
grid.history.removeAll();
console.log(grid.history.getHistory().length); // -> 0
console.log(grid.history.canRedo()); // -> false
~~~

## Applying undo/redo operations to Grid history actions

### Applying the `undo` operation

The Grid component allows applying the `undo` operation to the last action in the history via the [`undo()`](grid/api/history/undo_method.md) method of the `history` object. 

Depending on the [type of the action](#types-of-actions), the method either applies the inverse action (for the "change" and "removeAll" types) or restores data (for the "add" and "remove" types). Note that if the history is empty, the module is disabled, or no inverse action is available (for actions with the "change" and "removeAll" types), the [`error`](grid/api/history/error_event.md) event is triggered.

The following example shows undoing the removal of all rows:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "name", header: [{ text: "Name" }] },
        { id: "value", header: [{ text: "Value" }] },
    ],
    data: [
        { id: "1", name: "Item 1", value: 10 },
        { id: "2", name: "Item 2", value: 20 },
    ],
    history: true
});

// removing all rows
const removedData = grid.data.serialize();
grid.data.removeAll();
grid.history.add({
    type: "removeAll",
    batch: [],
    inverse: { type: "add", batch: removedData },
});

// undoing the action
grid.history.undo();
console.log(grid.history.getHistory().length); // -> 0
console.log(grid.history.canRedo()); // -> true
~~~

### Applying the `redo` operation

You can reapply the last undone action in the Grid history using the [`redo()`](grid/api/history/redo_method.md) method of the `history` object. Note that if the redo stack is empty or the module is disabled, the [`error`](grid/api/history/error_event.md) event is triggered.

The example below shows how the undone row addition can be re-applied:

~~~jsx
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

// adding a new row
const newItem = { id: "2", name: "New Item", value: 20 };
grid.data.add(newItem);
grid.history.add({
    type: "add",
    batch: [{ ...newItem }],
});

// undoing and redoing
grid.history.undo();
grid.history.redo();
console.log(grid.history.getHistory().length); // -> 1
console.log(grid.history.canUndo()); // -> true
~~~

### Checking whether an action can be undone

You can check whether an action in the Grid history can be undone using the [`canUndo()`](grid/api/history/canundo_method.md) method of the `history` object. The method returns `true` if the history contains actions and the module is not disabled.

The following example shows checking whether undo is possible after removing a row:

~~~jsx
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

// removing a row
const removedItem = { id: "1", name: "Item 1", value: 10 };
grid.data.remove("1");
grid.history.add({
    type: "remove",
    batch: [{ ...removedItem }],
});

// checking
if (grid.history.canUndo()) {
    console.log("Undo is possible");
    grid.history.undo();
}
~~~

### Checking whether an action can be reapplied

It is possible to check whether an action in the Grid history can be reapplied using the [`canRedo()`](grid/api/history/canredo_method.md) method of the `history` object. The method returns `true` if the redo stack contains actions and the module is not disabled.

The following example shows checking whether it is possible to redo an undone action:

~~~jsx
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

// modifying data
const updatedItem = { id: "1", name: "Updated Item", value: 15 };
grid.data.update("1", updatedItem);
grid.history.add({
    type: "change",
    batch: [{ ...updatedItem }],
    inverse: { type: "change", batch: [{ id: "1", name: "Item 1", value: 10 }] },
});

// undoing and checking
grid.history.undo();
if (grid.history.canRedo()) {
    console.log("Redo is possible");
    grid.history.redo();
}
~~~

To make the process of working with the undo/redo operations more flexible, you can apply the related events of the `history` object: [`beforeUndo`](grid/api/history/beforeundo_event.md), [`afterUndo`](grid/api/history/afterundo_event.md), [`beforeRedo`](grid/api/history/beforeredo_event.md), [`afterRedo`](grid/api/history/afterredo_event.md).

## Getting the history of Grid actions

You can get a copy of the array of all actions in the Grid history using the [`getHistory()`](grid/api/history/gethistory_method.md) method of the `history` object to prevent accidental modification of the internal structure.

Each `action` object in the returned array may contain the following properties:
    - `type: ActionType` - the type of action: "add", "remove", "removeAll", or "change"
    - `batch: IRow[]` - an array of rows representing the data affected by the action (e.g., added, removed, or modified rows)
    - `inverse?: IAction` - the inverse action required for undoing (for the "change" and "removeAll" types)

The example below shows retrieving the history:

~~~jsx
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
~~~

## User interface interaction

The `History` module records actions performed through the user interface, including:

- cells editing: changes made using the cell editor
- cells clearing: clearing the contents of cells using keyboard navigation
- handle modifications: if the handle is used in the [`BlockSelection` mode](grid/configuration.md/#managing-block-selection-in-grid) and the `handler` function returns an object with the `prev` (previous value) and `current` (current value) fields, these changes are added to the history:

~~~jsx
interface IHandleHistory {
    prev: any; // the previous value
    current: any; // the current value
}
~~~

The actions not related to the UI (e.g., programmatic changes via `grid.data`) are not automatically recorded, but can be manually added using the [`add()`](grid/api/history/add_method.md) method.

## History stack limitation

If the `limit` parameter is set in the [configuration of the `History` module](grid/api/grid_history_config.md), the history is limited to the specified number of actions. When the limit is exceeded, the oldest actions are automatically removed.

**Related sample:** [Grid. History. Configuration](https://snippet.dhtmlx.com/m88562wf)

## Module disabling

If the module is disabled (via [`disabled: true`](grid/api/grid_history_config.md) in the module configuration or the [`disable()`](grid/api/rangeselection/disable_method.md) method), all the operations ("add", "remove", "removeAll", "change", undo", "redo") are blocked, and the [`error`](grid/api/history/error_event.md) event is triggered.
