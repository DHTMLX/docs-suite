---
sidebar_label: Form ToggleGroup properties
title: JavaScript Form - Toggle Group Properties 
description: You can explore the Properties of the Toggle Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# ToggleGroup properties

## Usage

~~~js
{
    type: "toggleGroup",
    name?: string,
    id?: string,

    hidden?: boolean,
    disabled?: boolean,

    full?: boolean,
    gap?: number,
    multiselect?: boolean,

    options: [
        {
             id?: string,
             hidden?: boolean,
             disabled?: boolean,
             selected?: boolean,
             full?: boolean,
             text?: string,
             icon?: string,
             offText?: string,
             offIcon?: string,
             value?: string | number
        },
    ],
    value?: {
        [id: string]: boolean
    };

    css?: string,
    width?: string | number | "content",
    height?: string | number | "content",
    padding?: string | number
}
~~~

## Description

### ToggleGroup properties

- `type` - (required) the type of a control, set it to "toggleGroup"
- `name` - (optional) the name of a control
- `id` - (optional) the id of a control, auto-generated if not set
- `hidden`- (optional) defines whether a ToggleGroup is hidden, *false* by default
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*), *false* by default
- `full` - (optional) defines whether the ToggleGroup will be extended to the width specified by the **width** property, *false* by default
- `gap` - (optional) sets an offset between the elements (buttons) of an option
- `multiselection` - (optional) defines the behavior that allows a multiple choice, *false* by default
- `options` - (required) an array of ToggleGroup elements. An object of an element can contain the following attributes:
	- `id` - (optional) the id of a control, auto-generated if not set
	- `hidden`- (optional) defines whether a toggle button is hidden, *false* by default
	- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*), *false* by default
	- `selected` - (optional) defines the initial state of the toggle as selected (pressed), *false* by default
	- `full` - (optional) defines whether the toggle will be extended to the width specified by the **width** property, *false* by default
	- `text` - (optional) sets a text inside the toggle. When initialized together with the **offText** property, the specified text will be rendered in the selected (pressed) state, "" (empty string) by default
	- `offText` - (optional) sets the text that will be rendered in the unselected (unpressed) state of the toggle, "" (empty string) by default
	- `icon` - (optional) sets the class of an icon displayed inside the toggle. When initialized together with the **offIcon** property, the specified classes of icons will be rendered in the selected (pressed) state of the toggle,"" (empty string) by default
	- `offIcon` - (optional) sets the class of an icon that will be rendered in the unselected (unpressed) state of the toggle, "" (empty string) by default
	- `value` - (optional) specifies the value in the selected (pressed) state. If not defined, the **selected** property with the boolean value is used instead, *undefined* by default
- `value` - (optional) defines the state of elements on initialization. As a value it takes an object presented as a *key:value* pair, where the key is the id of an element and the value is the initial state of the element. It takes priority over the state of an element set in its configuration object
	- `[id: string]: boolean` - sets the state of an element
- `css` - (optional) adds style classes to a control
- `height` - (optional) the height of a control
- `width` - (optional) the width of a control
- `padding` - (optional) sets padding between a cell and a border of a ToggleGroup control

### Properties of a Toggle of ToggleGroup

- `id` - (optional) the id of a control, auto-generated if not set
- `hidden`- (optional) defines whether a toggle button is hidden, *false* by default
- `disabled` - (optional) defines whether a control is enabled (*false*) or disabled (*true*), *false* by default
- `selected` - (optional) defines the initial state of the toggle as selected (pressed), *false* by default
- `full` - (optional) defines whether the toggle will be extended to the width specified by the **width** property, *false* by default
- `text` - (optional) sets a text inside the toggle. When initialized together with the **offText** property, the specified text will be rendered in the selected (pressed) state, "" (empty string) by default
- `offText` - (optional) sets the text that will be rendered in the unselected (unpressed) state of the toggle, "" (empty string) by default
- `icon` - (optional) sets the class of an icon displayed inside the toggle. When initialized together with the **offIcon** property, the specified classes of icons will be rendered in the selected (pressed) state of the toggle,"" (empty string) by default
- `offIcon` - (optional) sets the class of an icon that will be rendered in the unselected (unpressed) state of the toggle, "" (empty string) by default
- `value` - (optional) specifies the value in the selected (pressed) state. If not defined, the **selected** property with the boolean value is used instead, *undefined* by default

### Example

<iframe src="https://snippet.dhtmlx.com/yqi21ykr?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

**Related article:** [ToggleGroup](form/togglegroup.md)

