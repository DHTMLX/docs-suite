---
sidebar_label: Toolbar Button properties
title: JavaScript Toolbar - Button Properties 
description: You can explore the Button properties of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Toolbar Button properties

### Usage

~~~js
const data = [
    {
        type: "button",
        id?: string | number,
        parent?: string,
        value?: string,
        items?: IMenuElement[], // ISpacer | ISeparator | INavItem | IMenuItem | ICustomHTML

        circle?: boolean,
        color?: "danger" | "secondary" | "primary" | "success",
        count?: number,
        countColor?: "danger" | "secondary" | "primary" | "success",
        full?: boolean,
        group?: string,
        hotkey?: string,
        html?: string,
        icon?: string,
        loading?: boolean,
        multiClick?: boolean,
        size?: "small" | "medium",
        tooltip?: string,
        view?: "flat" | "link",

        css?: string | string[],
        disabled?: boolean,
        hidden?: boolean,
    },
    // more Toolbar controls
]
~~~

### Description

<table>
    <tbody>
        <tr>
            <td><b>type</b></td>
            <td>(required) the type of a control, set it to "button". If not specified - the <a href="../../navitem">"navItem"</a> type is applied by default.</td>
        </tr>
        <tr>
            <td><b>id</b></td>
            <td>(optional) the id of a control, auto-generated if not set</td>
        </tr>
        <tr>
            <td><b>parent</b></td>
            <td>(optional) the parent of the block</td>
        </tr>
        <tr>
            <td><b>value</b></td>
            <td>(optional) a value of the button. You need to set either the <b>value</b> or <b>html</b> property to the button</td>
        </tr>
        <tr>
            <td><b>items</b></td>
            <td>(optional) an array of nested controls.You can find the full list of all available controls <a href="../../../menu/configuring_menu_items">here</a>. If the type of a nested control is not specified, the <i>menuItem</i> type will be applied by default.</td>
        </tr>
        <tr>
            <td><b>circle</b></td>
            <td>(optional) makes the corners of a button round</td>
        </tr>
        <tr>
            <td><b>color</b></td>
            <td>(optional) defines the color scheme of a button: "danger"|"secondary"|"primary"|"success"</td>
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
            <td><b>full</b></td>
            <td>(optional) extends a button to the full width of a form</td>
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
            <td><b>html</b></td>
            <td>(optional) a string with HTML that should be inserted into the button</td>
        </tr>
        <tr>
            <td><b>icon</b></td>
            <td>(optional) an <a href="../../button#adding-an-icon">icon</a> of the button</td>
        </tr>
        <tr>
            <td><b>loading</b></td>
            <td>(optional) adds a spinner into a button</td>
        </tr>
        <tr>
            <td><b>multiClick</b></td>
            <td>(optional) if <i>true</i> - the "click" event will fire multiple times when the button is clicked and held; if <i>false</i> - the "click" event will fire on each click of the button</td>
        </tr>
        <tr>
            <td><b>size</b></td>
            <td>(optional) defines the size of a button: "small"|"medium"</td>
        </tr>
        <tr>
            <td><b>tooltip</b></td>
            <td>(optional) a tooltip for the button</td>
        </tr>
        <tr>
            <td><b>view</b></td>
            <td>(optional) defines the look of a button: "flat"|"link"</td>
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

<iframe src="https://snippet.dhtmlx.com/7aysw3gb?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="750"></iframe>

**Related article:** [Button](toolbar/button.md)
