---
sidebar_label: history
title: JavaScript Grid - history Config 
description: You can explore the history config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# history

:::tip Pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: Optional. Enables/disables the History module during the Grid initialization

### Usage

~~~jsx
history?:
    | boolean
    | {
        limit?: number;
        disabled?: boolean;
    };
~~~

@default: false

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
    history: true // enables the History module
});

@descr:
The `history` property can be set in two ways:
- as a *boolean* value it enables or disables the `History` module upon the component initialization
- as an *object* it enables the module and allows setting additional parameters:
	- `limit` - (*number*) the maximum number of actions stored in the history. When the limit is exceeded, the oldest actions are removed
	- `disabled` - (*boolean*) if `true`, the module is disabled on initialization, and no actions are recorded in the history

The example below demonstrates configuring the module with a history limit of 10 actions. The module is disabled on initialization:

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
    history: {
        limit: 10, // limits history to 10 actions
        disabled: true // module is disabled on start
    }
});

grid.history.enable(); // enabling the module
~~~

**Related sample:** [Grid. History. Configuration](https://snippet.dhtmlx.com/vznpyeit)

**Related articles:** 
- [History of Grid actions](grid/configuration.md/#history-of-grid-actions)
- [Work with History module](grid/usage_history.md)

@changelog: added in v9.2