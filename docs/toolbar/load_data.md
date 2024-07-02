---
sidebar_label: Data loading
title: JavaScript Toolbar - Data Loading 
description: You can explore the data loading of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Data loading

There are several simple ways of loading data into DHTMLX Toolbar:

- on initialization of Toolbar
- after initialization of Toolbar

First, you need to prepare a data set that will be loaded into Toolbar.

## Preparing data set

DHTMLX Toolbar expects loaded data in the JSON format. 

:::info
Please note that if you specify the `id` fields in the tree collection, their values should be **unique**. You can also omit the `id` fields in the tree collection. In this case they will be generated automatically.
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

A data set consists of objects with configurations of toolbar controls. Templates for Toolbar controls in JSON format are given [below](#json-format-templates).

## Loading data on initialization

You can load a [predefined data set](#preparing-data-set) into Toolbar on the initialization stage. Use the [data](toolbar/api/toolbar_data_config.md) configuration property, as in:

~~~jsx
const toolbar = new dhx.Toolbar("toolbar_container", {
    css: "dhx_widget--bordered",
    data: dataset
});
~~~

**Related sample**: [Toolbar. Initialization with config.data ](https://snippet.dhtmlx.com/nie9tuks)

## Loading data after initialization

There are two ways to load data into Sidebar after its initialization:

- [from a local data source](#loading-from-a-local-source)
- [from an external file](#loading-from-an-external-file)

### Loading from a local source

You can load data to a toolbar from an array with the **parse()** method of TreeCollection. Pass [a predefined data set](#preparing-data-set) as a parameter of this method:

~~~jsx
toolbar.data.parse(dataset);
~~~

**Related sample**: [Toolbar. Initialization with data.parse()](https://snippet.dhtmlx.com/wzb2yn3d)

### Loading from an external file

The **load** method loads the toolbar data from an external JSON file. All the data are loaded at once. The parameter of the method is the path to the JSON file.

~~~jsx
toolbar.data.load("[path to this file]/file.json");
~~~    

**Related sample**: [Toolbar. Initialization with data.load()](https://snippet.dhtmlx.com/i5a9mx2i)

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~jsx
toolbar.data.load("/some/data").then(function(){
   // some logic here
});
~~~

## Saving and restoring state

To save the current state of a toolbar, use the **serialize()** method of Tree Collection. It converts the data of a toolbar into an array of JSON objects. 
Each JSON object contains the configuration of a separate Toolbar control.

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

This section will give you the idea of JSON format templates for separate Toolbar controls.

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

{{note View the full list of properties of the **button** object in the [related article](toolbar/api/api_button_properties.md). }}

### Custom HTML template

~~~jsx
// custom HTML button
{
    type: "customHTML",
    html: "<img src='../logo.svg' alt=''/>",
    css: "logo-container"
}
~~~

{{note Check the full list of properties of the **customHTML** object in the [related article](toolbar/api/api_customhtmlbutton_properties.md). }}

### ImageButton template

~~~jsx
// imageButton
{
    id: "user",                
    type: "imageButton",        
    src: "../img/avatar.png"                
}
~~~

{{note You can view the full list of properties of the **imageButton** object in the [related article](toolbar/api/api_imagebutton_properties.md). }}

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

{{note You can check the full list of properties of the **input** object in the [related article](toolbar/api/api_input_properties.md). }}
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

{{note You can find the full list of properties of the **menuItem** object in the [related article](toolbar/api/api_menuitem_properties.md). }}

### NavItem template

~~~jsx
// navItem
{
    type: "navItem", 
    value: "Some",
    icon: "dxi dxi-check"
}
~~~

{{note You can take a look at the full list of properties of the **navItem** object in the [related article](toolbar/api/api_navitem_properties.md). }}

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

{{note View the full list of properties of the **selectButton** object in the [related article](toolbar/api/api_selectbutton_properties.md). }}

### Separator template

~~~jsx
// separator
{
    id: "sepId",        
    type: "separator"         
}
~~~

{{note Check the full list of properties of the **separator** object in the [related article](toolbar/api/api_separator_properties.md). }}

### Spacer template

~~~jsx
// spacer
{
    id: "spacerId",          
    type: "spacer"        
}
~~~

{{note You can find the full list of properties of the **spacer** object in the [related article](toolbar/api/api_spacer_properties.md). }}

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

{{note Take a look at the full list of properties of the **title** object in the [related article](toolbar/api/api_title_properties.md). }}
