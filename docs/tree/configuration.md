---
sidebar_label: Configuration
title: JavaScript Tree - Configuration 
description: You can explore the configuration of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration

## Checkboxes for items

![](../assets/tree/checkbox.png)

DHTMLX Tree provides enhanced system of checkbox manipulations. In addition to standard two-state checkboxes that allow check/uncheck tree items, it also uses three-state checkboxes that include an intermediate state, 
when just some children of a parent item are checked.

In order to enable checkboxes for items, make use of the [`checkbox`](tree/api/tree_checkbox_config.md) configuration option:

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

![](../assets/tree/editable.png)

It is possible to enable editing of the text of Tree items before initialization of the component using the [`editable`](tree/api/tree_editable_config.md) configuration property:

~~~jsx
const tree = new dhx.Tree("tree_container", { editable: true });
~~~

**Related sample**: [Tree. Inline editing, drag-and-drop and checkboxes](https://snippet.dhtmlx.com/hyfz6ai7)

## Key navigation

You can switch on key navigation in a tree with the [`keyNavigation`](tree/api/tree_keynavigation_config.md) property before initialization of the component: 

~~~jsx
const tree = new dhx.Tree("tree_container", { keyNavigation: true });
~~~

After that you need to select any item and then apply the Arrow keys:

<table>
    <tbody>
        <tr>
            <td><b>Up arrow key</b></td>
            <td>to move selection to the item above the currently selected one</td>
        </tr>
        <tr>
            <td><b>Down arrow key</b></td>
            <td>to move selection to the item below the currently selected one</td>
        </tr>
        <tr>
            <td><b>Right arrow key</b></td>
            <td>to open a selected folder</td>
        </tr>
        <tr>
            <td><b>Left arrow key</b></td>
            <td>to close a selected opened folder</td>
        </tr>
    </tbody>
</table>

**Related sample**: [Tree. Key navigation](https://snippet.dhtmlx.com/icql8fwq)

## Selection of items

![](../assets/tree/disable_selection.png)

**Related sample**: [Tree. Disable selection](https://snippet.dhtmlx.com/2x9htpke)

The default configuration of Tree provides you with the selection feature that allows highlighting a Tree item. To disable selection in a Tree you need to set the [`selection`](tree/api/tree_selection_config.md) configuration property to `false`:

~~~jsx
const tree = new dhx.Tree("tree_container", {
    selection: false,
});
~~~

## Tooltips for items

You can add tooltips for Tree items via the [`tooltip`](/tree/api/tree_tooltip_config/) configuration option. It is possible to use the default tooltips, provide a template function to render a custom content in the tooltips, or apply extended options to get the desired tooltip configuration. Check the following examples:

- using the tooltip configuration with a custom template and a display delay:

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

- defining the content of tooltip via a function:

~~~jsx
const tree = new dhx.Tree("tree_container", {
    tooltip: (item) =>
        (item.value + (item.items ? ` (${item.items?.length})` : "") + "")
});
~~~

**Related sample**: [Tree. Adding tooltips for the items](https://snippet.dhtmlx.com/7j097ht4)

The [`tooltip`](/tree/api/tree_tooltip_config/) property can take the following types of values:

- `boolean` — if `true`, enables the standard tooltip (the value is taken from the [`value`](/tree/api/tree_data_config/) property of the item)
- `function` — a template function that returns the string content of the tooltip
- `object` — a configuration object for detailed customization of the tooltip's behavior and appearance. The available properties are given below:
    - `template` - (optional) a function that determines the content of the tooltip. It takes two arguments:
        - `item` - (*object*) the data object of a tree item.
        - `event` - (*object*) the native mouse event (MouseEvent). 
        The template function must return a string.
    - `force` - (optional) if `true`, forces the tooltip to appear without delays. In this case, the `showDelay` and `hideDelay` settings are ignored. The default value is `false`.
    - `showDelay` - (optional) the delay before the tooltip appears (in milliseconds).
    - `hideDelay` - (optional) the delay before the tooltip hides (in milliseconds).
    - `htmlEnable` - (optional) specifies whether the use of HTML markup inside the tooltip is allowed.
    - `margin` - (optional) the margin between the tree item and the tooltip (in pixels). The default value is `8`.
    - `position` - (optional) the position of the tooltip relative to the item. The possible values are: `"right"`, `"bottom"`, `"center"`, `"left"`, `"top"`. The default value is `"bottom"`.
    - `css` - (optional) the name of the CSS class for customizing the style of the tooltip container.

