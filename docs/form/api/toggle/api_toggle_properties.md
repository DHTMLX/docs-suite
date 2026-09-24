---
sidebar_label: Form Toggle properties
title: JavaScript Form - Toggle Properties 
description: You can explore the Properties of the Toggle control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Toggle properties

### Usage

~~~js
{
    type: "toggle",
    name?: string,
    id?: string, // must be unique if set, auto-generated if not set

    hidden?: boolean, // false by default
    disabled?: boolean, // false by default
    selected?: boolean, // false by default

    full?: boolean, // false by default
    text?: string,
    icon?: string,
    offText?: string,
    offIcon?: string,
    value?: string | number,

    css?: string,
    width?: string | number | "content", // "content" by default
    height?: string | number | "content", // "content" by default
    padding?: string | number 
}
~~~

### Description

- `type` - (required) the type of a control, set it to "toggle"
- `name` - (optional) the name of a control
- `id` - (optional) the id of a control, must be **unique** if set, auto-generated if not set
- `hidden`- (optional) defines whether a toggle is hidden, *false* by default
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*), *false* by default
- `selected` - (optional) defines the initial state of the toggle as selected (pressed), *false* by default
- `full` - (optional) defines whether the toggle will be extended to the width specified by the **width** property, *false* by default
- `text` - (optional) sets a text inside the toggle. When initialized together with the **offText** property, the specified text will be rendered in the selected (pressed) state
- `offText` - (optional) sets the text that will be rendered in the unselected (unpressed) state of the toggle
- `icon` - (optional) sets the CSS class of an icon displayed inside the toggle. When initialized together with the **offIcon** property, the specified classes of icons will be rendered in the selected (pressed) state of the toggle
- `offIcon` - (optional) sets the CSS class of an icon that will be rendered in the unselected (unpressed) state of the toggle
- `value` - (optional) specifies the value in the selected (pressed) state. If not defined, the **selected** property with the boolean value is used instead
- `css` - (optional) adds style classes to a control
- `height` - (optional) the height of a control, *"content"* by default
- `width` - (optional) the width of a control, *"content"* by default
- `padding` - (optional) sets padding between a cell and a border of a Toggle control

### Example

<iframe src="https://snippet.dhtmlx.com/yqi21ykr?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

**Related article:** [Toggle](form/toggle.md)