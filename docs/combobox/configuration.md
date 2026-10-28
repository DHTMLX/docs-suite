---
sidebar_label: Configuration
title: JavaScript Combo Box - Configuration 
description: You can explore the configuration of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration

## Disabled mode

You can disable Combobox and block all operations with it. Use the [](combobox/api/combobox_disabled_config.md) configuration property:

~~~js
const combo = new dhx.Combobox("combo_container", {
    disabled: true
});
~~~

![DHTMLX ComboBox in disabled state shown as a greyed-out empty input in DHTMLX Suite](/img/combo/disabled.png)

**Related sample**: [Combobox. Disabled](https://snippet.dhtmlx.com/ductsm0f)

## Dynamic rendering of options

Combobox loads all options at once. If you have a large data collection, render the data in portions instead. Use the [](combobox/api/combobox_virtual_config.md) property to render options in the Combobox list dynamically as the user scrolls it:

~~~js
const combo = new dhx.Combobox("combo_container", {
    virtual:true
});
~~~

**Related sample**: [Combobox. Virtual list](https://snippet.dhtmlx.com/5srwualw)

## Height of list of options and its items

![DHTMLX ComboBox open dropdown with tall list items showing custom list and item height in DHTMLX Suite](/img/combo/height.png)

**Related sample**: [Combobox. List height](https://snippet.dhtmlx.com/vilg4l7w)

Use [](combobox/api/combobox_listheight_config.md) and [](combobox/api/combobox_itemheight_config.md) properties to adjust the height of the option list and the height of a single item in it:

~~~js
const combo = new dhx.Combobox("combo_container", {
    listHeight:300,
    itemHeight:50
});
~~~

## Help icon

A Combobox in a form often needs a hint about the options a user can select. Use the [](combobox/api/combobox_helpmessage_config.md) configuration option and set the hint text as its value:

~~~js
const combobox = new dhx.Combobox("combo_container", {
    helpMessage:"Some text"
});
~~~

## Hidden label

When you send a form to the server, you can add a label that stays invisible but identifies the Combobox input on the server side. Use the [](combobox/api/combobox_hiddenlabel_config.md) configuration property:

~~~js
const combo = new dhx.Combobox("combo_container",{
    label:"My Combo",
    hiddenLabel:true
});
~~~

## Initial value

Starting from v7.0, you can define the values that appear in the input during component initialization. Set them with the [](combobox/api/combobox_value_config.md) property:

~~~js {3,8}
const combobox = new dhx.Combobox("combo_container", {
    multiselection: true,
    value: ["austria", "estonia"]
});

// or
const combobox = new dhx.Combobox("combo_container", {
    value: "austria"
});
~~~

**Related sample**: [Combobox. Initial value](https://snippet.dhtmlx.com/spnausim)

The value that the property accepts depends on the `multiselection` configuration:

- If you set `multiselection:true`, the property takes an array of option ids: for example, `value: ["id_1","id_2","id_3"]` or `value: [1, 2, 3]`.
- If you set `multiselection:false` or omit the `multiselection` config, the property takes a single id or an array with one id: `value:"id_1"`, `value: 1`, or `value: ["id_1"]`.

## Label

Use [](combobox/api/combobox_label_config.md), [](combobox/api/combobox_labelwidth_config.md), and [](combobox/api/combobox_labelposition_config.md) properties to set a label for Combobox and adjust the label width and position:

~~~js
const combo = new dhx.Combobox("combo_container",{
    label:"Label",
    labelPosition: "left",
    labelWidth: 100
});
~~~

![DHTMLX ComboBox with a label positioned to the left of the input in DHTMLX Suite](/img/combo/label_left.png)

To place the label above the input:

~~~js
const combo = new dhx.Combobox("combo_container",{
    label:"Label",
    labelPosition: "top",
    labelWidth: 100
});
~~~

![DHTMLX ComboBox with a label positioned above the input in DHTMLX Suite](/img/combo/label_top.png)

**Related sample**: [Combobox. Label position](https://snippet.dhtmlx.com/2936fray)

## Number of selected options

![DHTMLX ComboBox input showing the count of selected options as one item selected in DHTMLX Suite](/img/combo/selected_item.png)

**Related sample**: [Combobox. Items count](https://snippet.dhtmlx.com/fw2u2bww)

Instead of showing all selected options separately in the Combobox input, you can group them and display only the number of selected options. Use the [](combobox/api/combobox_itemscount_config.md) property.

The property accepts two types of values. You can enable the default behavior of the option, or specify a custom template function that displays the grouped options in a custom way. The function takes one parameter:

- `count` — (`number`) the number of selected options

The function must return the template that displays the result:

~~~js
const combo = new dhx.Combobox("combo_container", {
    multiselection: true,
    // simply enables the option
    itemsCount: true
});

// or

const combo = new dhx.Combobox("combo_container", {
    multiselection: true,
    // set a custom template function for showing total number of selected options
    itemsCount: function (num) {
        return num + (num === 1 ? " item" : " items") + " selected";
    }
});
~~~

:::note
Enable the `multiselection` option to select several options at once.
:::

## Placeholder

![DHTMLX ComboBox input displaying placeholder text above an open options dropdown in DHTMLX Suite](/img/combo/placeholder.png)

**Related sample**: [Combobox. Placeholder](https://snippet.dhtmlx.com/759z23gh)

To add a placeholder to the Combobox input, apply the [](combobox/api/combobox_placeholder_config.md) property:

~~~js
const combobox = new dhx.Combobox("combo_container",{
    placeholder: "Some placeholder"
});
~~~

## Editable combobox

You can allow users to add new items to the data collection from the UI. Set the [newOptions](combobox/api/combobox_newoptions_config.md) property to `true`:

~~~jsx
const combobox = new dhx.Combobox("combo_container", {
    multiselection: true,
      newOptions: true  
});
~~~

To add a new item to the list of options, the user types a new value in the input field and then either presses **Enter** or clicks the **Create "newValue"** option that appears in the drop-down list.

![DHTMLX ComboBox dropdown offering a Create option to add a new typed value in DHTMLX Suite](/img/combo/new_value.png)

**Related sample**: [Combobox. Multiselection, add new options (free text), select all button](https://snippet.dhtmlx.com/ui7pi7ty)

Combobox invokes [beforeAdd](data_collection/api/datacollection_beforeadd_event.md) and [afterAdd](data_collection/api/datacollection_afteradd_event.md) events of DataCollection each time the user enters a new value in the input field. Use the [beforeAdd](data_collection/api/datacollection_beforeadd_event.md) event to reject incorrect values:

~~~jsx
// blocks the ability to add an item with value: "new" into the collection of combobox items
combobox.data.events.on("beforeAdd", item => item.value !== "new");
~~~

You can also let users edit and delete items from the user interface. Use [event handlers](#event-handlers-for-the-template) for the HTML elements in a custom template for Combobox items.

**Related sample**: [Combobox. Editing/deleting options](https://snippet.dhtmlx.com/xd511ci5)

## Readonly mode

![DHTMLX ComboBox in readonly mode with an open dropdown for selecting options only in DHTMLX Suite](/img/combo/readonly.png)

**Related sample**: [Combobox. Readonly](https://snippet.dhtmlx.com/igjsuf7y)

You can make Combobox readonly with the [](combobox/api/combobox_readonly_config.md) property. Users then cannot type in the input and can only select options from the popup list:

~~~js
const combo = new dhx.Combobox("combo_container",{
    readOnly:true
});
~~~

## Selection of multiple options

To select several options in Combobox at once, use the [](combobox/api/combobox_multiselection_config.md) configuration option:

~~~js
const combo = new dhx.Combobox("combo_container", {
    multiselection:true
});
~~~

## Selection of all options in the list

The Select All button selects all options in the Combobox list. To add this button to the component, use the [](combobox/api/combobox_selectallbutton_config.md) property. The button also requires multiple selection, so set the [](combobox/api/combobox_multiselection_config.md) configuration option to `true`:

~~~js
const combo = new dhx.Combobox("combo_container", {
    // enables multiple selection of options
    multiselection:true,
    // shows the Select All button
    selectAllButton: true
});
~~~

**Related sample**: [Combobox. Multiselection, add new options (free text), select all button](https://snippet.dhtmlx.com/ui7pi7ty)

## Template for Combobox options

![DHTMLX ComboBox dropdown with custom template options showing country names and flag icons in DHTMLX Suite](/img/combo/combo_template.png)

**Related sample**: [Combobox. HTML template](https://snippet.dhtmlx.com/z7cpj76i)

Use the [](combobox/api/combobox_template_config.md) property to specify the appearance of Combobox options in the list. The property is a function that takes a data collection item as a parameter and returns a string with the template for rendering options:

~~~js
const combo = new dhx.Combobox("combo_container", {
    template: function (item) {
      return "<div style='display:inline-block'>"
      +"<img style='width:20px;height:20px;margin-right:10px;' src="+item.src+"></div>" 
      + item.value + "</div>";
    }
});            
~~~

## Event handlers for the template

Starting from v8.4, you can assign event handlers to the HTML elements in a custom template for Combobox items. Use the [eventHandlers](combobox/api/combobox_eventhandlers_config.md) configuration option:

~~~js {11-13,17-24}
const combobox = new dhx.Combobox("combobox", {
    newOptions: true, // enables the ability to add and save new values from UI
    itemHeight: 40,
    template: ({ value, src }) => {
        return `
            <div class="list-item">
                <div class="list-item__content">
                    <img class="list-item__image" src="${src}" alt="${value}">
                    <span class="list-item__value">${value}</span>
                </div>
                <button class="list-item__button list-item__button--delete">
                    <i class="dxi dxi-delete-forever"></i>
                </button>
            </div>
        `;
    },
    eventHandlers: {
        onclick: { 
            "list-item__button--delete": (event, id) => {
                combobox.data.remove(id);
                combobox.clear();    
            } 
        } 
    }
});
~~~

**Related sample**: [Combobox. HTML template and handling events](https://snippet.dhtmlx.com/00955xwq)

## HTML content of Combobox options

The default Combobox behavior is to display the HTML content specified for its options.

To disable HTML rendering and show the content as plain text to keep your application safe, set the [htmlEnable](combobox/api/combobox_htmlenable_config.md) property to `false`:

~~~js
const combo = new dhx.Combobox("combo_container", { 
    htmlEnable: false, // disables rendering of HTML content
    template: function (item) {
        return "<div style='user-select:none; display: flex; justify-content: space-between;'>" +
            "<span>" + item.value + "</span>" +
            "<img style='height: 20px; width: 30px; border: 1px solid gray' src=" + item.src + "></img>" +
            "</div>";
    }
});
~~~

**Related sample**: [Combobox. Disable HTML rendering](https://snippet.dhtmlx.com/e4dolhfs)

