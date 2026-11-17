---
sidebar_label: Configuration
title: JavaScript Tree - Configuration 
description: You can explore the configuration of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration

## Checkboxes for items

![Tree with three-state checkboxes showing checked and intermediate states in DHTMLX Suite](/img/tree/checkbox.png)

DHTMLX Tree supports two-state and three-state checkboxes. A two-state checkbox lets users check and uncheck a tree item. A three-state checkbox also has an intermediate state that appears when only some children of a parent item are checked.

Set the [`checkbox`](tree/api/tree_checkbox_config.md) configuration option to `true` to enable checkboxes for items:

~~~jsx
const tree = new dhx.Tree("tree_container", { checkbox: true });
~~~

**Related sample**: [Tree. Inline editing, drag-and-drop and checkboxes](https://snippet.dhtmlx.com/hyfz6ai7)

## Collapsed mode

To initialize a tree in the collapsed state, use the [`collapsed`](tree/api/tree_collapsed_config.md) property:

~~~jsx
const tree = new dhx.Tree("tree_container", {
    collapsed: true,
});
~~~

**Related sample**: [Tree. Collapsed mode](https://snippet.dhtmlx.com/cqbg0wsf)

## Editing of items

![Tree item being edited inline with an active text editor in DHTMLX Suite](/img/tree/editable.png)

Set the [`editable`](tree/api/tree_editable_config.md) configuration property to `true` to let users edit the text of Tree items:

~~~jsx
const tree = new dhx.Tree("tree_container", { editable: true });
~~~

**Related sample**: [Tree. Inline editing, drag-and-drop and checkboxes](https://snippet.dhtmlx.com/hyfz6ai7)

## Key navigation

Set the [`keyNavigation`](tree/api/tree_keynavigation_config.md) property to `true` to enable key navigation in a tree:

~~~jsx
const tree = new dhx.Tree("tree_container", { keyNavigation: true });
~~~

After you select an item, use the arrow keys to navigate the tree:

<table>
    <tbody>
        <tr>
            <td><b>Up arrow key</b></td>
            <td>moves the selection to the item above</td>
        </tr>
        <tr>
            <td><b>Down arrow key</b></td>
            <td>moves the selection to the item below</td>
        </tr>
        <tr>
            <td><b>Right arrow key</b></td>
            <td>opens the selected folder</td>
        </tr>
        <tr>
            <td><b>Left arrow key</b></td>
            <td>closes the selected open folder</td>
        </tr>
    </tbody>
</table>

**Related sample**: [Tree. Key navigation](https://snippet.dhtmlx.com/icql8fwq)

## Selection of items

![Tree with a highlighted selected item among folders and files in DHTMLX Suite](/img/tree/disable_selection.png)

**Related sample**: [Tree. Disable selection](https://snippet.dhtmlx.com/2x9htpke)

The default Tree configuration lets users select and highlight an item. To disable selection, set the [`selection`](tree/api/tree_selection_config.md) configuration property to `false`:

~~~jsx
const tree = new dhx.Tree("tree_container", {
    selection: false,
});
~~~

## Tooltips for items

Use the [`tooltip`](tree/api/tree_tooltip_config.md) configuration option to add tooltips to Tree items. You can enable the default tooltips, pass a template function that renders custom content in the tooltips, or pass an object with extended tooltip options. Check the following examples:

- A configuration object with a custom template and a display delay:

~~~jsx
const tree = new dhx.Tree("tree_container", {
    tooltip: {
        htmlEnable: true,
        // the 500ms delay before showing
        showDelay: 500,
        // the tooltip will appear to the right of the item
        position: "right",
        // a CSS class for styling
        css: "custom-tooltip-style",
        // the template function
        template: (item, event) => {
            // display the item's name and the number of children (if any)
            const count = item.items ? ` (${item.items.length})` : "";
            return `<span class="tooltip-title">${item.value}</span><span class="tooltip-count">${count}</span>`;
        }
    }
});
~~~

- A function that defines the tooltip content:

~~~jsx
const tree = new dhx.Tree("tree_container", {
    tooltip: (item) =>
        (item.value + (item.items ? ` (${item.items?.length})` : "") + "")
});
~~~

**Related sample**: [Tree. Tooltip template](https://snippet.dhtmlx.com/kswil8cl)

The [`tooltip`](tree/api/tree_tooltip_config.md) property can have the following types of values:

- `boolean` — if `true`, enables the standard tooltip that shows the [`value`](tree/api/tree_data_config.md) property of the item
- `function` — a template function that returns the string content of the tooltip
- `object` — a configuration object for detailed customization of tooltip behavior and appearance. The object can contain the following properties:
    - `template` - (optional) a function that determines the content of the tooltip. It takes two arguments:
        - `item` - (`object`) the data object of a tree item.
        - `event` - (`object`) the native mouse event (`MouseEvent`). 
        The template function must return a string.
    - `force` - (optional) if `true`, forces the tooltip to appear without delays. In this case, the tooltip ignores the `showDelay` and `hideDelay` settings. The default value is `false`.
    - `showDelay` - (optional) the delay before the tooltip appears (in milliseconds).
    - `hideDelay` - (optional) the delay before the tooltip hides (in milliseconds).
    - `htmlEnable` - (optional) specifies whether the tooltip can contain HTML markup.
    - `margin` - (optional) the margin between the tree item and the tooltip (in pixels). The default value is `8`.
    - `position` - (optional) the position of the tooltip relative to the item. The possible values are: `"right"`, `"bottom"`, `"center"`, `"left"`, `"top"`. The default value is `"bottom"`.
    - `css` - (optional) the name of the CSS class for customizing the style of the tooltip container.

