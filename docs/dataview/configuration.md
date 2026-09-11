---
sidebar_label: Configuration
title: JavaScript DataView - Configuration 
description: You can explore the configuration of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration

## Arrow keys navigation

![DHTMLX DataView with animal cards arranged in two rows for arrow key navigation in DHTMLX Suite](/img/dataview/arrow_navigation.png)

**Related sample**: [Dataview. Arrow navigation](https://snippet.dhtmlx.com/u7mgoly9)

The DataView component lets you navigate its items with arrow keys. Enable this behavior with the [](dataview/api/dataview_keynavigation_config.md) property:

~~~js
const dataview = new dhx.DataView("dataview_container", {
    itemsInRow: 4, keyNavigation: true
});
~~~

The option takes either `true` or `false` to turn navigation on and off, or a `function` that defines custom navigation logic.

### Default shortcut keys

<table>
    <tbody>
        <tr>
            <td><b>ArrowUp</b></td>
            <td>moves focus to the item above</td>
        </tr>
        <tr>
            <td><b>ArrowDown</b></td>
            <td>moves focus to the item below</td>
        </tr>
        <tr>
            <td><b>ArrowLeft</b></td>
            <td>moves focus to the item on the left</td>
        </tr>
        <tr>
            <td><b>ArrowRight</b></td>
            <td>moves focus to the item on the right</td>
        </tr>
        <tr>
            <td><b>Enter/Shift+Enter/Ctrl+Enter</b></td>
            <td>selects the focused item</td>
        </tr>
        <tr>
            <td><b>Enter</b></td>
            <td>selects the focused item and opens the editor for it (when the "editable" property is enabled)</td>
        </tr>
        <tr>
            <td><b>Ctrl+A</b></td>
            <td>selects all items at once (when the "multiselection" property is enabled)</td>
        </tr>
    </tbody>
</table>

## Drag-n-drop of items

DHTMLX DataView supports drag-n-drop of items between dataviews in three modes. Specify the [](dataview/api/dataview_dragmode_config.md) property in the DataView configuration object and choose the mode you need:

- `target` — a dataview takes items from other dataviews, but its items cannot be dragged out
- `source` — a dataview lets you drag its items out, but cannot take items from other dataviews
- `both` — a dataview takes items from other dataviews and lets you drag its items out

~~~js
const dataview = new dhx.DataView("dataview_container", { 
    dragMode:"source"
});
~~~

To drag several items between dataviews, enable the [](dataview/api/dataview_multiselection_config.md) property in addition to `dragMode`:

~~~js
const dataview = new dhx.DataView("dataview_container", { 
    dragMode:"source",
    multiselection:true
});
~~~

For details, see [Multiple selection of items](#multiple-selection-of-items).

**Related sample**: [Dataview. Drag'n'drop](https://snippet.dhtmlx.com/nia2e5a9)

### Copying dragged item

Instead of moving a dragged item to a new position in the same or a different dataview, you can copy it.
Use the [](dataview/api/dataview_dragcopy_config.md) option in the dataview configuration object.

~~~js
const source = new dhx.DataView("dataview-source", {dragMode: "source", dragCopy: true});
const target = new dhx.DataView("dataview-target", {dragMode: "target", dragCopy: true});
~~~

**Related sample**: [Dataview. Drag-n-drop copy](https://snippet.dhtmlx.com/h89c3gl3)

## Editing items

![DHTMLX DataView item card with editable text in an inline edit field in DHTMLX Suite](/img/dataview/editable.png)

**Related sample**: [Dataview. Inline editing](https://snippet.dhtmlx.com/m8fbqcza)

You can make DataView items editable with the [](dataview/api/dataview_editable_config.md) configuration option:

~~~js
const dataview = new dhx.DataView("dataview_container", {editable:true});
~~~

## Height of an item

![DHTMLX DataView with short name-only item cards in two columns set by item height in DHTMLX Suite](/img/dataview/item_height.png)

**Related sample**: [Dataview. Setup Dataview item height](https://snippet.dhtmlx.com/cth9mwrf)

Set the height of a DataView item before initialization with the [itemHeight](dataview/api/dataview_itemheight_config.md) property, either as a number:

~~~js {3}
// sets the height of an item as a number
const dataview = new dhx.DataView("dataview_container", { 
    itemHeight:34
});
~~~

You can also set it as a string value:

~~~js {3}
// sets the height of an item as a string value
const dataview = new dhx.DataView("dataview_container", { 
    itemHeight:"34px"
});
~~~

:::note
You cannot use the CSS `calc()` function in the [](dataview/api/dataview_itemheight_config.md) property.
:::

## Height of the DataView

![DHTMLX DataView with a single row of animal cards limited by a fixed widget height in DHTMLX Suite](/img/dataview/dataview_height.png)

**Related sample**: [Dataview. Setup Dataview height](https://snippet.dhtmlx.com/g1k2l4q0)

You can set the height of a DataView with the [height](dataview/api/dataview_height_config.md) configuration option:

~~~js
const dataview = new dhx.DataView("dataview_container", {height: 150});
~~~

You can also use a string value to set the DataView height:

~~~js
const dataview = new dhx.DataView("dataview_container", {height: "400px"});
~~~

:::note
You cannot use the CSS `calc()` function in the [](dataview/api/dataview_height_config.md) property.
:::

## Margins around DataView items

![DHTMLX DataView animal cards spaced apart by margins between items in DHTMLX Suite](/img/dataview/gap.png)

**Related sample**: [Dataview. Configure gap size](https://snippet.dhtmlx.com/ozsuww1q)

You can add margins around DataView items to increase the distance between two items and between an item and the DataView borders. Use the [](dataview/api/dataview_gap_config.md) configuration property to set the margin:

~~~js
const dataview = new dhx.DataView("dataview_container", {itemsInRow: 4, gap: 20});
~~~

## Multiple selection of items

![DHTMLX DataView with several item cards highlighted by multiple selection in DHTMLX Suite](/img/dataview/multiselection.png)

The default DataView configuration allows only one selected item: selecting another item resets the previous selection. To select several DataView items, use the [](dataview/api/dataview_multiselection_config.md) configuration option:

~~~js
const dataview = new dhx.DataView("dataview_container", {multiselection:true});
~~~

Set the `multiselection` property to `true` to select multiple items with the Ctrl key.
To select several items with Ctrl+click, set the [](dataview/api/dataview_multiselection_config.md) configuration option to `"ctrlClick"`:

~~~js
const dataview = new dhx.DataView("dataview_container", {
    multiselection:"ctrlClick"
});
~~~

**Related sample**: [Dataview. Multiselection](https://snippet.dhtmlx.com/g0xwdx10)

## Number of items in a row

![DHTMLX DataView showing five animal cards per row in a grid in DHTMLX Suite](/img/dataview/items_in_row.png)

**Related sample**: [Dataview. Amount items in a row](https://snippet.dhtmlx.com/de4r8km3)

You can define the number of items in a DataView row with the [](dataview/api/dataview_itemsinrow_config.md) configuration property:

~~~js
const dataview = new dhx.DataView("dataview_container", {itemsInRow: 5});
~~~

## Selection of items

![DHTMLX DataView grid of animal cards with no item selected in DHTMLX Suite](/img/dataview/disable_selection.png)

The default DataView configuration highlights a selected item. To disable selection, set the [](dataview/api/dataview_selection_config.md) configuration property to `false`:

~~~js
const dataview = new dhx.DataView("dataview_container", {
    selection: false
});
~~~

## Template for DataView items

![DHTMLX DataView item cards rendered with a custom template showing photo title and description in DHTMLX Suite](/img/dataview/template.png)

**Related sample**: [Dataview. With template](https://snippet.dhtmlx.com/d6l6grr7)

You can define a template for items in a dataview with the [](dataview/api/dataview_template_config.md) configuration property. Set a function as its value; the function takes one parameter:

- `item` — (`object`) a data item

~~~js
const dataview = new dhx.DataView("dataview_container", {
    itemsInRow: 4, 
    template: function(item) {
        let template = "<div class='item_wrap'>";
        template += "<img class='image' src=" + "../images/" + item.thumbnailName + " />";
        template += "<h2 class='title'>" + item.value + "</h2>";
        template += "<p class='description'>" + item.shortDescription + "</p>";
        template += "</div>";
        return template;
    }
});
~~~

## Event handlers for the template

From v7.0, you can assign event handlers to the HTML elements in a custom template for DataView items. Use the [](dataview/api/dataview_eventhandlers_config.md) configuration option:

~~~js {12-23}
function template(item) {
    let template = "<div class='item_wrap'>";
    template += "<img class='image' src=" + "../images/" + item.thumbnailName + " />";
    template += "<h2 class='title'>" + item.value + "</h2>";
    template += "<p class='description'>" + item.shortDescription + "</p>";
    template += "</div>";
    return template;
}

const dataview = new dhx.DataView("dataview_container", {
    template: template,
    eventHandlers: {
        onclick: {
            item_wrap: function(event, id) {
                console.log("You clicked on " + event.target.tagName);
            },
        },
        onmouseover: {
            item_wrap: function(event, id) {
                console.log(dataview.data.getItem(id).short);
            },
        }
    }
});
~~~

**Related sample**: [Dataview. Handling events in template](https://snippet.dhtmlx.com/26873eql)
