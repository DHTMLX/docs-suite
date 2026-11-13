---
sidebar_label: Input
title: JavaScript Toolbar - Input 
description: You can explore the Input of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Input

The Input control displays a field where users can enter text.

![Toolbar input field with a type to search placeholder and a search icon in DHTMLX Suite](/img/toolbar/input.png)

**Related sample**: [Toolbar. Input](https://snippet.dhtmlx.com/ykd0uii1)

## Add Input {#adding-input}

The following example adds an Input control to a toolbar with the `add()` method of [TreeCollection](/tree_collection/):

~~~js
toolbar.data.add({
    type:"input",
    value:"",
    placeholder:"Type to search"
});
~~~

### Properties

Check the [list of properties](toolbar/api/api_input_properties.md) that you can set in the configuration object of an Input control.

## Show and hide Input {#showinghiding-input}

The [`show()`](toolbar/api/toolbar_show_method.md) and [`hide()`](toolbar/api/toolbar_hide_method.md) methods of Toolbar show and hide an Input control by its ID:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

**Related sample**: [Toolbar. Hide / show items](https://snippet.dhtmlx.com/cldp89u4)

## Enable and disable Input {#enablingdisabling-input}

The [`enable()`](toolbar/api/toolbar_enable_method.md) and [`disable()`](toolbar/api/toolbar_disable_method.md) methods of Toolbar enable and disable an Input control by its ID:

~~~js
toolbar.enable(id);
toolbar.disable(id);
~~~

**Related sample**: [Toolbar. Enable / disable items](https://snippet.dhtmlx.com/ovblenaf)

## Add a tooltip {#setting-tooltip}

Use the `tooltip` property to add a tooltip to an Input control:

~~~js
{
    type: "input",
    value: "",
    tooltip:"Type to search"
}
~~~

**Related sample**: [Toolbar. Tooltips](https://snippet.dhtmlx.com/105levtd)

## Set and get the Input value {#settinggetting-value}

Use the [`setState()`](toolbar/api/toolbar_setstate_method.md) and [`getState()`](toolbar/api/toolbar_getstate_method.md) methods of Toolbar to set and get the value of an Input control.

To fill an Input control with text, pass a key-value pair to the `setState()` method. The key is the ID of the input, and the value is the text:

~~~js
{
    type: "input",
    id:"search",
    value: ""
}
...
toolbar.setState({search:"Summer"});
~~~

To get the current text of an Input control, call the `getState()` method:

~~~js
toolbar.getState(); //-> {search:"Summer"}
~~~

## Set focus on a control {#setting-focus-on-a-control}

The [`setFocus()`](toolbar/api/toolbar_setfocus_method.md) method sets focus on an Input control. The method takes the ID of the control as a parameter:

~~~js
toolbar.setFocus("search");
~~~

:::info
Check the full list of available operations in the [Toolbar API](toolbar/api/api_overview.md) and the [TreeCollection API](/tree_collection/).
:::
