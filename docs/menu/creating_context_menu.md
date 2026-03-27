---
sidebar_label: Context menu
title: JavaScript Menu - Context Menu 
description: You can explore the Context Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Context menu

dhtmlxContextMenu is a component that provides an easy way to add a contextual menu to projects. It will be of great help for frequently used actions in web sites, help systems, etc.

![DHX Context Menu](../assets/menu/context_menu.png)

**Related sample**: [Menu. Context menu initialization with config.data](https://snippet.dhtmlx.com/mgya9p1l)

## Initialization

You can initialize dhtmlxContextMenu with the constructor:

~~~jsx
const cmenu = new dhx.ContextMenu(null, {css: "dhx_widget--bg_gray"});
~~~

It takes two parameters:

- `container` - optional, set it to *null*, since ContextMenu is created inside a popup
- `config` - optional, a configuration object. It may contain the following properties:
    - `css` -  adds style classes to ContextMenu
    - `data` - specifies an array of data objects to set into ContextMenu
    - `navigationType` - defines the action that opens context menu options:
        - "click" - displays the context menu option when a user clicks on it
        - "pointer" - displays the context menu option when a user hovers the mouse pointer over it

## Loading menu options

dhtmlxContextMenu expects loaded data in the JSON format. Here is an example of an appropriate data set:

~~~jsx
const dataset = [
    { 
        value: "File", 
        items: [
            { value: "New File", icon: "dxi dxi-file-outline"},                      
            { value: "Remove File", icon: "dxi dxi-delete"}        
        ]
    },
    {
        type: "separator"
    },
    { 
        value: "Edit",
        items: [
            { value: "Undo", icon: "dxi dxi-undo"},
            { value: "Redo", icon: "dxi dxi-redo"}
         ]
    },
    {
        type: "spacer"
    }
];
~~~

A data set consists of objects with configurations of context menu controls.

Like with [DHTMLX Menu](menu/data_loading.md), options can be:

- either loaded into the ContextMenu on initialization via the `data` configuration property:

~~~jsx
const cmenu = new dhx.ContextMenu(null, {
    css: "dhx_widget--bg_gray"
    data: dataset
});
~~~

- or parsed from a JSON array:

~~~jsx
cmenu.data.parse(dataset);
~~~

- or loaded from a JSON file:

~~~jsx
cmenu.data.load("[path_to_file]/file.json");
~~~

## Showing dhtmlxContextMenu

dhtmlxContextMenu is attached to a context zone, and can be shown with the `showAt()` method. It takes two parameters:

<table>
    <tbody>
        <tr>
            <td><b>element</b></td>
            <td>(<i>HTMLElement|Event|string</i>) the element that will be a context zone: an HTML object/its id/a mouse event</td>
        </tr>
        <tr>
            <td><b>mode</b></td>
            <td>(<i>string</i>) optional, the position of showing a context menu relative to the context zone: "bottom"|"right". By default a context menu is shown at the point where the mouse pointer is.</td>
        </tr>
    </tbody>
</table>

### Attaching to HTML object

This is how you can attach dhtmlxContextMenu to an HTML element:

~~~html
<div id="menu"></div>
~~~

~~~jsx
const cmenu = new dhx.ContextMenu(null, {css: "dhx_widget--bg_gray"});

document.querySelector('#menu').oncontextmenu = function(e) {    
    e.preventDefault();
    cmenu.showAt('menu', 'right');
}
~~~

- **e** is the mouse event.

### Attaching to a mouse event

This is how you can attach dhtmlxContextMenu to a mouse event:

~~~jsx
const cmenu = new dhx.ContextMenu(null, {css: "dhx_widget--bg_gray"});

document.querySelector('#menu').oncontextmenu = function(e) {   
    e.preventDefault();
    cmenu.showAt(e);
}
~~~
