---
sidebar_label: Toolbar Separator properties
title: JavaScript Toolbar - Separator Properties 
description: You can explore the Separator properties of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Toolbar Separator properties

### Usage

~~~js
const data = [
    {
        type: "separator",
        id?: string | number,
    },
    // more Toolbar controls
]
~~~

### Description

<table>
    <tbody>
        <tr>
            <td><b>type</b></td>
            <td>(required) the item type, set it to "separator". If not specified - the <a href="../../navitem/">"navItem"</a> type is applied by default.</td>
        </tr>
        <tr>
            <td><b>id</b></td>
            <td>(optional) the id of a control, auto-generated if not set</td>
        </tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/sguwr3m9?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Related article:** [Separator](toolbar/separator.md)