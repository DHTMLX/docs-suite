---
sidebar_label: Block
title: JavaScript Ribbon - Block 
description: You can explore the Block of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Block

The Block control groups related controls.

![Ribbon with color-highlighted blocks grouping related buttons in DHTMLX Suite](/img/ribbon/ribbon_block.png)

## Create a block {#creating-a-block}

The following example configures a block with two buttons in a row:

~~~js
{
    type: "block",
    title: "Action",        
    items: [
        { id: "copy", icon: "mdi mdi-content-copy", value: "Copy" },
        { id: "cut", icon: "mdi mdi-content-cut", value: "Cut" }
    ]
}
~~~

### Properties

Check the [list of properties](ribbon/api/api_block_properties.md) that you can set in the configuration object of a Block control.

## Add a block {#adding-a-block}

Use the `add()` method of TreeCollection to add a block to a ribbon:

~~~js
ribbon.data.add({
    title:"File",
    type:"block",
    id:"files",
    direction:"row"
});
~~~

Use the same method to add controls to the block:

~~~js
ribbon.data.add({
    type:"button",
    icon:"dxi dxi-plus",
    value:"New"
},-1,"files");

ribbon.data.add({
    type:"iconButton",
    icon:"dxi dxi-file"
},-1,"files");
~~~

In these calls, the `add()` method takes three parameters:

<table>
    <tbody>
        <tr>
            <td><code>item</code></td>
            <td>the configuration of the added item</td>
        </tr>
        <tr>
            <td><code>index</code></td>
            <td>defines the position of the item in the block (<code>-1</code> places the item after the last control)</td>
        </tr>
        <tr>
            <td><code>blockId</code></td>
            <td>the ID of the block</td>
        </tr>
    </tbody>
</table>

## Add HTML content {#adding-html-content}

Use the `html` property to add custom HTML content to a block item:

~~~js
{
    type: "block",
    title: "Progress",
    items: [
        {
            html: "<div id='preloader'><div id='loader'></div></div >",
            size: "auto"
        }
    ]
};
~~~

**Related sample**: [Ribbon. Item HTML content](https://snippet.dhtmlx.com/3djaib6o)

## Nest blocks {#nesting-blocks}

You can put blocks inside other blocks to arrange controls in several rows and columns, for example:

~~~js
{
    title:"File",
    type:"block",
    direction:"col", 
    items:[
        {
            type:"block", direction:"row",
            items:[
                { type:"button", icon:"dxi dxi-plus", value:"New" },
                { type:"button", icon:"dxi dxi-file", value:"File" }
            ]
        },
        {
            type:"block", direction:"row",
            items:[
                {
                    type:"imageButton", count:10,
                    src:"../img/avatar4.png"
                },
                {
                    type:"imageButton", value:"Torch",
                    src:"../img/avatar3.png"
                }
            ]
        }
    ]
}
~~~

## Show and hide blocks {#hidingshowing-blocks}

The `show()` and `hide()` methods show and hide a block by its ID:

~~~js
ribbon.show(id);
ribbon.hide(id);
~~~

## Enable and disable blocks {#disablingenabling-blocks}

The `enable()` and `disable()` methods enable and disable a block by its ID:

~~~js
ribbon.enable(id);
ribbon.disable(id);
~~~
