---
sidebar_label: Ribbon Input properties
title: JavaScript Ribbon - Input Properties 
description: You can explore the Input properties of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Ribbon Input properties

### Usage

~~~js
const data = [
    {
        type: "input",
        id?: string | number,
        parent?: string,
        value?: string,

        icon?: string,
        label?: string,
        placeholder?: string,
        tooltip?: string,
        width?: string,

        css?: string | string[],
        disabled?: boolean,
        hidden?: boolean,
    }
]
~~~

### Description

<table>
    <tbody>
        <tr>
            <td><b>type</b></td>
            <td>(required) the type of a control, set it to "input". If not specified - the <a href="../../navitem/">"navItem"</a> type is applied by default.</td>
        </tr>
        <tr>
            <td><b>id</b></td>
            <td>(optional) the id of a control, auto-generated if not set</td>
        </tr>
        <tr>
            <td><b>parent</b></td>
            <td>(optional) the parent of the item</td>
        </tr>
        <tr>
            <td><b>value</b></td>
            <td>(optional) the initial value of the field</td>
        </tr>
        <tr>
            <td><b>icon</b></td>
            <td>(optional) the name of an <a href="../../customization/">icon</a> from the used icon font</td>
        </tr>
        <tr>
            <td><b>label</b></td>
            <td>(optional) a text label for the Input control</td>
        </tr>
        <tr>
            <td><b>placeholder</b></td>
            <td>(optional) a tip for the input</td>
        </tr>
        <tr>
            <td><b>tooltip</b></td>
            <td>(optional) a tooltip for an input</td>
        </tr>
        <tr>
            <td><b>width</b></td>
            <td>(optional) the width of the input field</td>
        </tr>
        <tr>
            <td><b>css</b></td>
            <td>(optional) adds style classes to an input</td>
        </tr>
        <tr>
            <td><b>disabled</b></td>
            <td>(optional) defines whether an input is disabled</td>
        </tr>
        <tr>
            <td><b>hidden</b></td>
            <td>(optional) defines whether an input is hidden</td>
        </tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/jjnzc3ng?mode=html" frameborder="0" class="snippet_iframe" width="100%" height="350"></iframe>

**Related article:** [Input](ribbon/input.md)