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
    id?: string,

    hidden?: boolean,
    disabled?: boolean,
    selected?: boolean,

    full?: boolean,
    text?: string,
    icon?: string,
    offText?: string,
    offIcon?: string,
    value?: string | number,

    css?: string,
    width?: string | number | "content",
    height?: string | number | "content",
    padding?: string | number
}
~~~

### Description

- `type` - (required) the type of a control, set it to "toggle"
- `name` - (optional) the name of a control
- `id` - (optional) the id of a control, auto-generated if not set
- `hidden`- (optional) defines whether a toggle is hidden
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*)
- `selected` - (optional) defines the initial state of the toggle as selected (pressed), *false* by default
- `full` - (optional) defines whether the toggle will be extended to the width specified by the **width** property, *false* by default
- `text` - (optional) sets a text inside the toggle. When initialized together with the **offText** property, the specified text will be rendered in the selected (pressed) state, "" (empty string) by default
- `offText` - (optional) sets the text that will be rendered in the unselected (unpressed) state of the toggle, "" (empty string) by default
- `icon` - (optional) sets the class of an icon displayed inside the toggle. When initialized together with the **offIcon** property, the specified classes of icons will be rendered in the selected (pressed) state of the toggle,"" (empty string) by default
- `offIcon` - (optional) sets the class of an icon that will be rendered in the unselected (unpressed) state of the toggle, "" (empty string) by default
- `value` - (optional) specifies the value in the selected (pressed) state. If not defined, the **selected** property with the boolean value is used instead, *undefined* by default
- `css` - (optional) adds style classes to a control
- `height` - (optional) the height of a control
- `width` - (optional) the width of a control
- `padding` - (optional) sets padding between a cell and a border of a Toggle control

### Example

<iframe src="https://snippet.dhtmlx.com/yqi21ykr?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

**Related article:** [Toggle](form/toggle.md)