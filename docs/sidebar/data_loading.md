---
sidebar_label: Data loading
title: JavaScript Sidebar - Data Loading 
description: You can explore the data loading of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Data loading

You can load data into DHTMLX Sidebar in two ways:

- During Sidebar initialization
- After Sidebar initialization

Both ways start from a prepared data set.

## Preparing data set

DHTMLX Sidebar expects data in JSON format.

:::info
If you specify `id` fields in the tree collection, their values must be **unique**. You can also omit these fields. In this case Sidebar generates the values automatically.
:::

The following data set is valid:

~~~js
const data = [
    {
        "id": "dashboard",
        "value": "Dashboard",
        "icon": "mdi mdi-view-dashboard"
    },
    {
        "id": "statistics",
        "value": "Statistics",
        "icon": "mdi mdi-chart-line"
    },
    {
        "id": "reports",
        "value": "Reports",
        "icon": "mdi mdi-file-chart"
    }
];
~~~

Each object in the data set configures a Sidebar control. The [JSON format templates](#json-format-templates) section lists templates for all Sidebar controls.

## Loading data on initialization

You can load a [predefined data set](#preparing-data-set) into Sidebar during initialization. Use the [`data`](sidebar/api/sidebar_data_config.md) configuration property:

~~~js
const sidebar = new dhx.Sidebar("sidebar_container", {
    css: "dhx_widget--border_right",
    data: data
});
~~~

**Related sample**: [Sidebar. Initialization with config.data](https://snippet.dhtmlx.com/y8y7iw42)

## Loading data after initialization

You can load data into Sidebar after initialization in two ways:

- [From a local data source](#loading-from-a-local-source)
- [From an external file](#loading-from-an-external-file)

### Loading from a local source

The `parse()` method of TreeCollection loads data into a sidebar from an array. Pass [a predefined data set](#preparing-data-set) to this method:

~~~js
sidebar.data.parse(data);
~~~

**Related sample**: [Sidebar. Initialization with data.parse()](https://snippet.dhtmlx.com/x0qpt7pk)

### Loading from an external file

The `load()` method of TreeCollection loads all sidebar data from an external JSON file at once. The method takes the path to the file as a parameter:

~~~js
sidebar.data.load("[path to this file]/file.json");
~~~    

**Related sample**: [Sidebar. Initialization with data.load()](https://snippet.dhtmlx.com/mq4ggjmm)
    
The component makes an AJAX call and expects the remote URL to return valid JSON data.

Sidebar loads data asynchronously, so place the code that depends on the loaded data into the `then()` callback:

~~~js
sidebar.data.load("/some/data").then(function(){
   // some logic here
});
~~~

## Saving and restoring state

The `serialize()` method of TreeCollection saves the current state of a sidebar. The method converts sidebar data into an array of JSON objects. Each JSON object contains the configuration of a separate Sidebar control.

~~~js
const state = sidebar1.data.serialize();
~~~

You can parse the saved state array into a different sidebar:

~~~js
// creating a new sidebar
const sidebar2 = new dhx.Sidebar("sidebar_container2");
// parsing the state of sidebar1 into sidebar2
sidebar2.data.parse(state);
~~~

## JSON format templates

This section shows JSON format templates for Sidebar controls.

### Common template

~~~js
// common
[
    {id: "item_a", type: "menuItem", ...},
    {id: "item_b", type: "input", ...},
    {id: "item_c", type: "title", ...}
]
~~~

### Custom HTML template

~~~js
// custom HTML button
{
    id: "custom_html",
    type: "customHTML",
    html: "<div style='height:30px; border: 2px solid'>My HTML button</div>"
}
~~~

{{note View the full list of properties of the `customHTML` object in the [related article](sidebar/api/api_customhtml_properties.md).}}

### MenuItem template

~~~js
// menuItem
{
    type: "menuItem", 
    value: "Some",
    icon: "dxi dxi-menu-right"
}
~~~

{{note View the full list of properties of the `menuItem` object in the [related article](sidebar/api/api_menuitem_properties.md).}}

### NavItem template

~~~js
// navItem
{
    type: "navItem", 
    value: "Some",
    icon: "dxi-check",
    count: 10
}
~~~

{{note View the full list of properties of the `navItem` object in the [related article](sidebar/api/api_navitem_properties.md).}}

### Separator template

~~~js
// separator
{
    id: "sepId",        
    type: "separator"         
}
~~~

{{note View the full list of properties of the `separator` object in the [related article](sidebar/api/api_separator_properties.md).}}

### Spacer template

~~~js
// spacer
{
    id: "spacerId",          
    type: "spacer"        
}
~~~

{{note View the full list of properties of the `spacer` object in the [related article](sidebar/api/api_spacer_properties.md).}}

### Title template

~~~js
// title
{
    id: "collection",        
    type: "title",                 
    value: "Music",                
    tooltip: "Current collection"    
}
~~~

{{note View the full list of properties of the `title` object in the [related article](sidebar/api/api_title_properties.md).}}
