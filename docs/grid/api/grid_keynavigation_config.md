---
sidebar_label: keyNavigation
title: JavaScript Grid - keyNavigation Config 
description: Enable or turn off keyboard navigation in DHTMLX Grid with the keyNavigation property. The navigation keys move the active cell with or without a selection module, and editing from the keyboard requires only the editable config.
---

# keyNavigation

@short: Optional. Enables keyboard navigation in Grid

#### Usage

~~~ts
keyNavigation?: boolean;
~~~

@default: true

#### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    data: dataset,
    selection: "complex", 
    editable: true, 
    keyNavigation: false
});
~~~

@descr:

**Related sample**: [Grid. Key navigation](https://snippet.dhtmlx.com/y9kdk0md)

Keyboard navigation works without any selection module: the navigation keys move the active cell, but do not select it. Set the [`selection`](grid/api/grid_selection_config.md) property to move the selection with the keyboard, and set the [`editable`](grid/api/grid_editable_config.md) property to edit cells from the keyboard.

**Related articles**:
- [Initialize Grid](grid/initialization.md#initialize-grid)
- [Keyboard navigation](grid/configuration.md#keyboard-navigation)
- [Grid accessibility](grid/accessibility.md)

@changelog:
- Navigation and editing without a selection module were added in v9.3.12
- The keyboard navigation model was extended in v9.3.5
- Added in v6.3
