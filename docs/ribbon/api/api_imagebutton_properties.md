---
sidebar_label: Ribbon ImageButton properties
title: JavaScript Ribbon - Image Button Properties 
description: You can explore the Image Button properties of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Ribbon ImageButton properties

### Usage

~~~js
const data = [
    {
        type: "imageButton",
        id?: string | number,
        parent?: string,
        src: string,

        active?: boolean,
        count?: number,
        countColor?: "danger" | "secondary" | "primary" | "success",
        group?: string,
        hotkey?: string,
        size?: "small" | "medium" | "auto",
        tooltip?: string,
        twoState?: boolean,
    
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
            <td>(required) the type of a control, set it to "imageButton". If not specified - the <a href="../../navitem/">"navItem"</a> type is applied by default.</td>
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
            <td><b>src</b></td>
            <td>(required) the path to the image</td>
        </tr>
        <tr>
            <td><b>active</b></td>
            <td>(optional) sets the state of a twoState button</td>
        </tr>
        <tr>
            <td><b>count</b></td>
            <td>(optional) a badge with a number</td>
        </tr>
        <tr>
            <td><b>countColor</b></td>
            <td>(optional) the color of a badge with number: "danger" | "secondary" | "primary" | "success"</td>
        </tr>
        <tr>
            <td><b>group</b></td>
            <td>(optional) defines the name of a group of controls a button belongs to. If one of the buttons in the group becomes active, all others automatically become inactive</td>
        </tr>
        <tr>
            <td><b>hotkey</b></td>
            <td>(optional) the name of the hot key for the button</td>
        </tr>
        <tr>
            <td><b>size</b></td>
            <td>(optional) defines the size of a button: "small"|"medium"|"auto"</td>
        </tr>
        <tr>
            <td><b>tooltip</b></td>
            <td>(optional) a tooltip for the button</td>
        </tr>
        <tr>
            <td><b>twoState</b></td>
            <td>(optional) adds two states to the button: active (pressed) and inactive  (unpressed)</td>
        </tr>
        <tr>
            <td><b>css</b></td>
            <td>(optional) adds style classes to a button </td>
        </tr>
        <tr>
            <td><b>disabled</b></td>
            <td>(optional) defines whether a button is disabled</td>
        </tr>
        <tr>
            <td><b>hidden</b></td>
            <td>(optional) defines whether a button is hidden</td>
        </tr>
    </tbody>
</table>

**Related article:** [ImageButton](ribbon/image_button.md)