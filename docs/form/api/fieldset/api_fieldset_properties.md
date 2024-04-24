---
sidebar_label: Form Fieldset properties
title: JavaScript Form - Fieldset Properties 
description: You can explore the Properties of the Fieldset control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Fieldset properties

### Usage

~~~js
{
    type: "fieldset",
    name?: string,
    id?: string,

    hidden?: boolean, // false by default
    disabled?: boolean, // false by default

    css?: string,
    width?: string | number | "content", // "content" by default
    height?: string | number | "content", // "content" by default
    padding?: string | number, 

    label?: string,
    labelAlignment?: "left" | "right" | "center", // "left" by default
    rows?: IBlock,
    cols?: IBlock,
    align?: "start" | "center" | "end" | "between" | "around" | "evenly" // "start" by default
}
~~~

### Description

- `type` - (required) the type of a control, set it to "fieldset"
- `name` - (optional) the name of a control
- `id` - (optional) the id of a control, auto-generated if not set
- `hidden` - (optional) defines whether a control is hidden, *false* by default
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*), *false* by default
- `css` - (optional) the name of a CSS class(es) applied to the control group
- `width` - (optional) sets the width of the control group, *"content"* by default
- `height` - (optional) sets the height of the control group, *"content"* by default  
- `padding` - (optional) sets the padding for the content inside the control group
- `label` - (optional) specifies a label for a control
- `labelAlignment` - (optional) defines the position of the label: "left" | "right" | "center", *"left"* by default
- `rows` - (optional) arranges controls inside the control group vertically
- `cols` - (optional) arranges controls inside the control group horizontally
- `align` - (optional) sets the alignment of controls inside the control group, *"start"* by default

### Example

<iframe src="https://snippet.dhtmlx.com/lo6g167p?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

**Related article:** [Fieldset](form/fieldset.md)