---
sidebar_label: Form Slider properties
title: JavaScript Form - Slider Properties 
description: You can explore the Properties of the Slider control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Slider properties

### Usage

~~~js
{
	type: "slider",
    name?: string,
    id?: string,
    value?: number | number[],
    
    css?: string,
    disabled?: boolean,
    height?: string | number | "content", // "content" by default
    hidden?: boolean,
    padding?: string | number,
    width?: string | number | "content", // "content" by default

    inverse?: boolean, // false by default
    majorTick?: number,
    max?: number, // 100 by default
    min?: number, // 0 by default
    mode?: "vertical" | "horizontal", // "horizontal" by default
    range?: boolean, // false by default
    step?: number, // 1 by default
    tick?: number,
    tickTemplate?: (position: number) => string,
    tooltip?: boolean, // true by default
    
    hiddenLabel?: boolean, // false by default
    label?: string,
    labelPosition?: "vertical" | "horizontal", // "top" by default
    labelWidth?: string | number,

    helpMessage?: string,
}
~~~

### Description

<table>
    <tbody>
        <tr>
            <td><b>type</b></td>
            <td>(required) the type of a control, set it to "slider"</td>
        </tr>
        <tr>
            <td><b>name</b></td>
            <td>(optional) the name of a control</td>
        </tr>
        <tr>
            <td><b>id</b></td>
            <td>(optional) the id of a control, auto-generated if not set</td>
        </tr>
        <tr>
            <td><b>value</b></td>
            <td>(optional) the value (or values, if the <b>range</b> option is set to <i>true</i>) the thumb will be set at on initialization of the slider</td>
        </tr>
        <tr>
            <td><b>css</b></td>
            <td>(optional) adds style classes to a control</td>
        </tr>
        <tr>
            <td><b>disabled</b></td>
            <td>(optional) defines whether a control is enabled (<i>false</i>) or disabled (<i>true</i>)</td>
        </tr>
        <tr>
            <td><b>height</b></td>
            <td>(optional) the height of a control</td>
        </tr>
        <tr>
            <td><b>hidden</b></td>
            <td>(optional) defines whether a control is hidden</td>
        </tr>
        <tr>
            <td><b>padding</b></td>
            <td>(optional) sets padding between a cell and a border of the Slider control</td>
        </tr>
        <tr>
            <td><b>width</b></td>
            <td>(optional) the width of a control</td>
        </tr>
        <tr>
            <td><b>inverse</b></td>
            <td>(optional) enables/disables the inverse slider mode</td>
        </tr>
        <tr>
            <td><b>majorTick</b></td>
            <td>(optional) sets interval of rendering numeric values on the slider scale</td>
        </tr>
        <tr>
            <td><b>max</b></td>
            <td>(optional) the maximal value of slider, 100 by default</td>
        </tr>
        <tr>
            <td><b>min</b></td>
            <td>(optional) the minimal value of slider, 0 by default</td>
        </tr>
        <tr>
            <td><b>mode</b></td>
            <td>(optional) the direction of the Slider scale, "horizontal" by default</td>
        </tr>
        <tr>
            <td><b>range</b></td>
            <td>(optional) enables/disables the possibility to select a range of values on the slider</td>
        </tr>
        <tr>
            <td><b>step</b></td>
            <td>(optional) the step the slider thumb will be moved with, 1 by default</td>
        </tr>
        <tr>
            <td><b>tick</b></td>
            <td>(optional) sets the interval of steps for rendering the slider scale</td>
        </tr>
        <tr>
            <td><b>tickTemplate</b></td>
            <td>(optional) sets a template for rendering values on the scale</td>
        </tr>
        <tr>
            <td><b>tooltip</b></td>
            <td>(optional) enables prompt messages with ticks values on hovering over the slider thumb, true by default</td>
        </tr>
        <tr>
            <td><b>hiddenLabel</b></td>
            <td>(optional) invisible label that will be used to identify the input on the server side</td>
        </tr>
        <tr>
            <td><b>label</b></td>
            <td>(optional) specifies a label for a control</td>
        </tr>
        <tr>
            <td><b>labelPosition</b></td>
            <td>(optional) defines the position of a label: "left"|"top"</td>
        </tr>
        <tr>
            <td><b>labelWidth</b></td>
            <td>(optional) sets the width of the label of a control</td>
        </tr>
        <tr>
            <td><b>helpMessage</b></td>
            <td>(optional) adds a help message to a control</td>
        </tr>
    </tbody>
</table>

### Example

<iframe src="https://snippet.dhtmlx.com/ikyyekxq?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

**Related article:** [Slider](form/slider.md)