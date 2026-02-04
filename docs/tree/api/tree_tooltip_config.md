---
sidebar_label: tooltip
title: JavaScript Tree - tooltip Config 
description: You can explore the tooltip config of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# tooltip

@short: Optional. Enables and configures tooltips for Tree items

#### Usage

~~~jsx
tooltip?:
    | boolean
    | (item: ITreeItem, event: MouseEvent) => string
    | {
        template?: (item: ITreeItem, event: MouseEvent) => string;
        force?: boolean; // false by default
        showDelay?: number;
        hideDelay?: number;
        htmlEnable?: boolean;
        margin?: number; // 8 by default
        position?: "right" | "bottom" | "center" | "left" | "top"; // "bottom" by default
        css?: string;
    }
~~~

The property can have three types of values: 

- *boolean* — if `true`, enables the standard tooltip (the value is taken from the [`value`](/tree/api/tree_data_config/) property of the item)
- *function* — a template function that returns the string content of the tooltip
- *object* — a configuration object for detailed customization of the tooltip's behavior and appearance. Check the available properties below

@params:

The properties of the `tooltip` *configuration object* are described below:

- `template` - (optional) a function that determines the content of the tooltip. It takes two arguments:
	- `item` - (*object*) the data object of a tree item.
	- `event` - (*object*) the native mouse event (MouseEvent). 
	The template function must return a string.
- `force` - (optional) if `true`, forces the tooltip to appear without delays. In this case, the `showDelay` and `hideDelay` settings are ignored. The default value is `false`.
- `showDelay` - (optional) the delay before the tooltip appears (in milliseconds).
- `hideDelay` - (optional) the delay before the tooltip hides (in milliseconds).
- `htmlEnable` - (optional) specifies whether the use of the HTML markup inside the tooltip is allowed.
- `margin` - (optional) the margin between the tree item and the tooltip (in pixels). The default value is `8`.
- `position` - (optional) the position of the tooltip relative to the item. The possible values are: `"right"`, `"bottom"`, `"center"`, `"left"`, `"top"`. The default value is `"bottom"`.
- `css` - (optional) the name of the CSS class for customizing the style of the tooltip container.

@descr:
#### Examples

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

**Related sample**: [Tree. Tooltip template](https://snippet.dhtmlx.com/kswil8cl)

**Related article**: [Configuration](/tree/configuration/#tooltips-for-items)

@changelog: 
Added in v9.3