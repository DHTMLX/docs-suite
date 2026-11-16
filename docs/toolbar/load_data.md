---
sidebar_label: Data loading
title: JavaScript Toolbar - Data Loading 
description: You can explore the data loading of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Data loading

You can load data into DHTMLX Toolbar in two ways:

- During Toolbar initialization
- After Toolbar initialization

Both ways start from a prepared data set.

## Preparing data set

DHTMLX Toolbar expects loaded data in the JSON format. 

:::info
If you specify `id` fields in the tree collection, their values must be **unique**. You can also omit these fields. In this case Toolbar generates the values automatically.
:::

Here is an example of an appropriate data set:

~~~jsx
const dataset = [
     {
        "id": "other",
        "type": "button",
        "view": "link",
        "circle": true,
        "color": "secondary",
        "icon": "mdi mdi-menu"
    },
    {
        "id": "add",
        "icon": "mdi mdi-plus",
        "value": "Add"
    },
    {
        "type": "separator"
    },
    {
        "id": "edit",
        "value": "Edit"
    },
    {
        "id": "search",
        "type": "input",
        "placeholder": "Search",
        "icon": "mdi mdi-magnify"
    }
];
~~~

Each object in the data set configures a Toolbar control. The [JSON format templates](#json-format-templates) section lists templates for all Toolbar controls.

## Loading data on initialization

You can load a [predefined data set](#preparing-data-set) into Toolbar during initialization. Use the [`data`](toolbar/api/toolbar_data_config.md) configuration property:

~~~jsx
const toolbar = new dhx.Toolbar("toolbar_container", {
    css: "dhx_widget--bordered",
    data: dataset
});
~~~

**Related sample**: [Toolbar. Initialization with config.data ](https://snippet.dhtmlx.com/nie9tuks)

## Loading data after initialization

You can load data into Toolbar after initialization in two ways:

- [From a local data source](#loading-from-a-local-source)
- [From an external file](#loading-from-an-external-file)

### Loading from a local source

The `parse()` method of TreeCollection loads data into a toolbar from an array. Pass [a predefined data set](#preparing-data-set) to this method:

~~~jsx
toolbar.data.parse(dataset);
~~~

**Related sample**: [Toolbar. Initialization with data.parse()](https://snippet.dhtmlx.com/wzb2yn3d)

### Loading from an external file

The `load()` method of TreeCollection loads all toolbar data from an external JSON file at once. The method takes the path to the file as a parameter:

~~~jsx
toolbar.data.load("[path to this file]/file.json");
~~~    

**Related sample**: [Toolbar. Initialization with data.load()](https://snippet.dhtmlx.com/i5a9mx2i)

The component makes an AJAX call and expects the remote URL to return valid JSON data.

Toolbar loads data asynchronously, so place the code that depends on the loaded data into the `then()` callback:

~~~jsx
toolbar.data.load("/some/data").then(function(){
   // some logic here
});
~~~

## Saving and restoring state

The `serialize()` method of TreeCollection saves the current state of a toolbar. The method converts toolbar data into an array of JSON objects. Each JSON object contains the configuration of a separate Toolbar control.

~~~jsx
const state = toolbar1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different toolbar. For example:

~~~jsx
// creating a new toolbar
const toolbar2 = new dhx.Toolbar("toolbar_container2");
// parsing the state of toolbar1 into toolbar2
toolbar2.data.parse(state);
~~~

## JSON format templates

This section shows JSON format templates for Toolbar controls.

### Common template

~~~jsx
// common
[
    {id: "item_a", type: "button", ...},
    {id: "item_b", type: "input", ...},
    {id: "item_c", type: "text", ...}
]
~~~

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

{{note View the full list of properties of the `button` object in the [related article](toolbar/api/api_button_properties.md).}}

### Custom HTML template

~~~jsx
// custom HTML button
{
    type: "customHTML",
    html: "<img src='../logo.svg' alt=''/>",
    css: "logo-container"
}
~~~

{{note View the full list of properties of the `customHTML` object in the [related article](toolbar/api/api_customhtmlbutton_properties.md).}}

### ImageButton template

~~~jsx
// imageButton
{
    id: "user",                
    type: "imageButton",        
    src: "../img/avatar.png"                
}
~~~

{{note View the full list of properties of the `imageButton` object in the [related article](toolbar/api/api_imagebutton_properties.md).}}

### Input template

~~~jsx 
// input
{
    id: "lookup",                      
    type: "input",                       
    value: "",                         
    placeholder: "Type in to search...",      
    width: 100,                          
    label: "Search"
}
~~~

{{note View the full list of properties of the `input` object in the [related article](toolbar/api/api_input_properties.md).}}

### MenuItem template

~~~jsx
// menuItem
{
    type: "menuItem", 
    value: "Some",
    icon: "dxi dxi-check",
    count: 10
}
~~~

{{note View the full list of properties of the `menuItem` object in the [related article](toolbar/api/api_menuitem_properties.md).}}

### NavItem template

~~~jsx
// navItem
{
    type: "navItem", 
    value: "Some",
    icon: "dxi dxi-check"
}
~~~

{{note View the full list of properties of the `navItem` object in the [related article](toolbar/api/api_navitem_properties.md).}}

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

{{note View the full list of properties of the `selectButton` object in the [related article](toolbar/api/api_selectbutton_properties.md).}}

### Separator template

~~~jsx
// separator
{
    id: "sepId",        
    type: "separator"         
}
~~~

{{note View the full list of properties of the `separator` object in the [related article](toolbar/api/api_separator_properties.md).}}

### Spacer template

~~~jsx
// spacer
{
    id: "spacerId",          
    type: "spacer"        
}
~~~

{{note View the full list of properties of the `spacer` object in the [related article](toolbar/api/api_spacer_properties.md).}}

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

{{note View the full list of properties of the `title` object in the [related article](toolbar/api/api_title_properties.md).}}
