---
sidebar_label: Menu custom HTML properties
title: JavaScript Menu - Custom HTML Properties 
description: You can explore the custom HTML properties of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Menu Custom HTML properties

### Usage

~~~js
const data = [
    {
        type: "customHTML",
        id?: string | number,
        parent?: string,
        html?: string,
        css?: string | string[],
        hidden?: boolean, // false by default
    }
]
~~~

### Description

<table>
    <tbody>
        <tr>
            <td><b>type</b></td>
            <td>(required) the item type, set it to "customHTML". If not specified - the <a href="../../configuring_menu_items/#menuitem">"menuItem"</a> type is applied by default.</td>
        </tr>
        <tr>
            <td><b>id</b></td>
            <td>(optional) the id of an item, auto-generated if not set</td>
        </tr>
        <tr>
            <td><b>parent</b></td>
            <td>(optional) the parent of the item</td>
        </tr>
        <tr>
            <td><b>html</b></td>
            <td>(optional) a string with HTML that should be inserted into the item</td>
        </tr>
        <tr>
            <td><b>css</b></td>
            <td>(optional) adds style classes</td>
        </tr>
        <tr>
            <td><b>hidden</b></td>
            <td>(optional) defines whether a control is hidden, <i>false</i> by default</td>
        </tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/nk65jfmx?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="350"></iframe>

**Related article:** [Custom HTML](menu/configuring_menu_items.md#custom-html)