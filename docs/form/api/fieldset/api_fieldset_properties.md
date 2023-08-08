---
sidebar_label: Form Fieldset properties
title: JavaScript Form - Fieldset Properties 
description: You can explore the Properties of the Fieldset control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Fieldset properties

### Usage

~~~js
{
    type: "fieldset";
    name?: string;
    id?: string;

    hidden?: boolean;
    disabled?: boolean;

    css?: string;
    width?: string | number | "content";
    height?: string | number | "content";
    padding?: string | number;

    label?: string;
    labelAlignment?: "left" | "right" | "center";
    rows?: IBlock;
    cols?: IBlock;
    align?: "start" | "center" | "end" | "between" | "around" | "evenly";
}
~~~

### Description

- `type` - (required) the type of a control, set it to "fieldset"
- `name` - (optional) the name of a control
- `id` - (optional) the id of a control, auto-generated if not set
- `hidden` - (optional) defines whether a control is hidden
- `disabled` - (optional) defines whether a control is enabled (false) or disabled (true)
- `css` - (optional) the name of a CSS class(es) applied to the control group
- `width` - (optional) sets the width of the control group
- `height` - (optional) sets the height of the control group 
- `padding` - (optional) sets the padding for the content inside the control group
- `label` - (optional) specifies a label for a control
- `labelAlignment` - (optional) defines the position of the label: "left"|"right"|"center"
- `rows` - (optional) arranges controls inside the control group vertically
- `cols` - (optional) arranges controls inside the control group horizontally
- `align` - (optional) sets the alignment of controls inside the control group

### Example

<iframe src="https://snippet.dhtmlx.com/lo6g167p?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

**Related article:** [Fieldset](form/fieldset.md)