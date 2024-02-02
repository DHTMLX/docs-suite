---
sidebar_label: Ribbon SelectButton properties
title: JavaScript Ribbon - Select Button Properties 
description: You can explore the Select Button properties of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Ribbon SelectButton properties

### Usage

~~~js
const data = [
    {
        type: "selectButton",
        id?: string | number,
        parent?: string,
        value?: string,
        items?: IMenuElement[], // ISpacer | ISeparator | INavItem | IMenuItem | ICustomHTML
    
        count?: number,
        countColor?: "danger" | "secondary" | "primary" | "success",
        icon?: string,
        size?: "small" | "medium" | "auto",
        tooltip?: string,

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
            <td>(required) the type of a control, set it to "selectButton". If not specified - the <a href="../../navitem">"navItem"</a> type is applied by default.</td>
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
            <td>(optional) the value of the button</td>
        </tr>
        <tr>
            <td><b>items</b></td>
            <td>(optional) an array of nested controls. You can find the full list of all available controls <a href="../../../menu/configuring_menu_items">here</a>. If the type of a nested control is not specified, the <i>menuItem</i> type will be applied by default.</td>
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
            <td><b>icon</b></td>
            <td>(optional) the name of an <a href="../../customization">icon</a> from the used icon font</td>
        </tr>
        <tr>
            <td><b>size</b></td>
            <td>(optional) defines the size of a button: "small"|"medium"|"auto"</td>
        </tr>
        <tr>
            <td><b>tooltip</b></td>
            <td>(optional) a tooltip for the control</td>
        </tr>
        <tr>
            <td><b>css</b></td>
            <td>(optional) adds style classes to a button</td>
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

### Example

<iframe src="https://snippet.dhtmlx.com/5acqc24m?mode=html" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Related article:** [SelectButton](ribbon/selectbutton.md)