---
sidebar_label: Data loading
title: JavaScript Ribbon - Data Loading 
description: You can explore the data loading of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Data loading

You can load data into DHTMLX Ribbon in two ways:

- During Ribbon initialization
- After Ribbon initialization

Both ways start from a prepared data set.

## Preparing data set

DHTMLX Ribbon expects data in JSON format.

:::info
If you specify `id` fields in the tree collection, their values must be **unique**. You can also omit these fields. In this case Ribbon generates the values automatically.
:::

The following data set is valid:

~~~js
const data = [
    {
        type: "block",
        items: [
            {
                value: "New",
                icon: "dxi dxi-file-outline",
                size: "small"               
            }
        ]
    },
    {
        type: "block",
        direction: "col",
        items: [
            {
                value: "Add",
                icon: "dxi dxi-plus",
                size: "small"
            },
            {
                value: "Remove",
                icon: "dxi dxi-delete",
                size: "small"
            }
        ]
    }
];
~~~

Each object in the data set configures a Ribbon control. The [JSON format templates](#json-format-templates) section lists templates for all Ribbon controls.

## Loading data on initialization

You can load a [predefined data set](#preparing-data-set) into Ribbon during initialization. Use the [`data`](ribbon/api/ribbon_data_config.md) configuration property:

~~~js
const ribbon = new dhx.Ribbon("ribbon_container", {
    css: "dhx_widget--bordered dhx_widget--bg_white", 
    data: data
});
~~~

**Related sample**: [Ribbon. Initialization with config.data](https://snippet.dhtmlx.com/lek4v9m7)

## Loading data after initialization

You can load data into Ribbon after initialization in two ways:

- [From a local data source](#loading-from-a-local-source)
- [From an external file](#loading-from-an-external-file)

### Loading from a local source

The `parse()` method of TreeCollection loads data into a ribbon from an array. Pass [a predefined data set](#preparing-data-set) to this method:

~~~js
ribbon.data.parse(data);
~~~

**Related sample**: [Ribbon. Initialization with data.parse()](https://snippet.dhtmlx.com/zz5ijqy9)

### Loading from an external file

The `load()` method of TreeCollection loads all ribbon data from an external JSON file at once. The method takes the path to the file as a parameter:

~~~js
ribbon.data.load("[path to this file]/file.json");
~~~    

**Related sample**: [Ribbon. Initialization with data.load()](https://snippet.dhtmlx.com/1gd5tbcf)

The component makes an AJAX call and expects the remote URL to return valid JSON data.

Ribbon loads data asynchronously, so place the code that depends on the loaded data into the `then()` callback:

~~~js
ribbon.data.load("/some/data").then(function(){
   // some logic here
});
~~~

## Saving and restoring state

The `serialize()` method of TreeCollection saves the current state of a ribbon. The method converts ribbon data into an array of JSON objects. Each JSON object contains the configuration of a separate Ribbon control.

~~~js
const state = ribbon1.data.serialize();
~~~

You can parse the saved state array into a different ribbon:

~~~js
// creating a new ribbon
const ribbon2 = new dhx.Ribbon("ribbon_container2");
// parsing the state of ribbon1 into ribbon2
ribbon2.data.parse(state);
~~~

## JSON format templates

This section shows JSON format templates for Ribbon controls.

### Common template

~~~jsx
// common
[
    {id: "item_a", type: "button", ...},
    {id: "item_b", type: "input", ...},
    {id: "item_c", type: "title", ...}
]
~~~

**Related sample**: [Ribbon. Initialization with config.data](https://snippet.dhtmlx.com/lek4v9m7)

### Block template

~~~jsx
// block
{
    type: "block",
    title: "Action",        
    items: [
        { id: "copy", icon: "mdi mdi-content-copy", value: "Copy" },
        { id: "cut", icon: "mdi mdi-content-cut", value: "Cut" }
    ]
}
~~~

:::note 
View the full list of properties of the `block` object in the [related article](ribbon/api/api_block_properties.md).
:::

### Button template

~~~jsx 
// button
{
    id: "add",                  
    type: "button",               
    icon: "dxi-plus",             
    value: "Add",                  
    count: 11,                                        
    tooltip: "Add a new user"    
}
~~~

:::note
View the full list of properties of the `button` object in the [related article](ribbon/api/api_button_properties.md).
:::

### Custom HTML template

~~~jsx
// custom HTML
{
    id: "custom_html",
    type: "customHTML",
    html: "<div style='height:30px; border: 2px solid'>My HTML button</div>"
}
~~~

:::note
View the full list of properties of the `customHTML` object in the [related article](ribbon/api/api_customhtml_properties.md).
:::

### ImageButton template

~~~jsx
// imageButton
{
    id: "user",                
    type: "imageButton",        
    src: "../img/avatar.png"                
}
~~~

:::note
View the full list of properties of the `imageButton` object in the [related article](ribbon/api/api_imagebutton_properties.md).
:::

### Input template

~~~jsx 
// input
{
    id:    "lookup",                      
    type: "input",                       
    value: "",                         
    placeholder: "Type in to search...",      
    width: 100,                          
    label: "Search"
}
~~~

:::note
View the full list of properties of the `input` object in the [related article](ribbon/api/api_input_properties.md).
:::

### NavItem template

~~~jsx
// navItem
{
    type: "navItem", 
    value: "Some",
    icon: "dxi-check"
}
~~~

:::note 
View the full list of properties of the `navItem` object in the [related article](ribbon/api/api_navitem_properties.md).
:::

### SelectButton template

~~~jsx
// selectButton
{
    id: "select",
    type: "selectButton",
    icon: "dxi-some",
    items: []
}
~~~

:::note
View the full list of properties of the `selectButton` object in the [related article](ribbon/api/api_selectbutton_properties.md).
:::

###  Separator template

~~~jsx
// separator
{
    id: "sepId",        
    type: "separator"         
}
~~~

:::note
View the full list of properties of the `separator` object in the [related article](ribbon/api/api_separator_properties.md).
:::

### Spacer template

~~~jsx
// spacer
{
    id: "spacerId",          
    type: "spacer"        
}
~~~

:::note
View the full list of properties of the `spacer` object in the [related article](ribbon/api/api_spacer_properties.md).
:::

### Title template

~~~jsx
// title
{
    id: "collection",        
    type: "title",                 
    value: "Music",                
    tooltip: "Current collection"    
}
~~~

:::note
View the full list of properties of the `title` object in the [related article](ribbon/api/api_title_properties.md).
:::
