---
sidebar_label: Form Container properties
title: JavaScript Form - Container Properties 
description: You can explore the Properties of the Container control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Container properties

### Usage

~~~js
{
	type: "container",
    name?: string,
    id?: string,
    html?: HTMLElement | string,
    
    css?: string,
    disabled?: boolean, // false by default
    height?: string | number | "content", // "content" by default
    hidden?: boolean, // false by default
    padding?: string | number, // "8px" by default
    width?: string | number | "content", // "content" by default

    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // "top" by default
    hiddenLabel?: boolean, // false by default
    helpMessage?: string
}
~~~

### Description

- `type` - (required) the type of a control, set it to "container"
- `name` - (optional) the name of a control
- `id` - (optional) the id of a control, auto-generated if not set
- `html` - (optional) the HTML content of a control
- `css` - (optional) adds style classes to a control string
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*), *false* by default
- `height` - (optional) the height of a control, *"content"* by default
- `hidden` - (optional) defines whether a control is hidden, *false* by default
- `padding` - (optional) sets padding between a cell and a border of a control, *"8px"* by default
- `width` - (optional) the width of a control, *"content"* by default
- `label` - (optional) specifies a label for a control
- `labelWidth` - (optional) sets the width of the label of a control
- `labelPosition`- (optional) defines the position of a label: "left" | "top", *"top"* by default
- `hiddenLabel` - (optional) makes the label invisible, <i>false</i> by default
- `helpMessage`- (optional) adds a help message to a control


### Example

<iframe src="https://snippet.dhtmlx.com/cnxi9eqq?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

**Related article:** [Container](form/container.md)
