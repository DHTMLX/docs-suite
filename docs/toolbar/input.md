---
sidebar_label: Input
title: JavaScript Toolbar - Input 
description: You can explore the Input of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Input

This is an input field for entering some text.

![](../assets/toolbar/input.png)

**Related sample**: [Toolbar. Input](https://snippet.dhtmlx.com/ykd0uii1)

## Adding Input

The following example shows how an Input control can be easily added to a toolbar with the help of the **add()** method of [Tree Collection](tree_collection.md):

~~~js
toolbar.data.add({
	type:"input",
	value:"",
	placeholder:"Type to search"
});
~~~

### Properties

You can provide [the following properties](toolbar/api/api_input_properties.md) in the configuration object of an Input control.

## Showing/hiding Input

You can show or hide Input with the [show()](toolbar/api/toolbar_show_method.md)/[hide()](toolbar/api/toolbar_hide_method.md) methods of Toolbar:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

**Related sample**: [Toolbar. Hide / show items](https://snippet.dhtmlx.com/cldp89u4)

## Enabling/disabling Input

You can also enable and disable inputs with the [enable()](toolbar/api/toolbar_enable_method.md)/[disable()](toolbar/api/toolbar_disable_method.md) methods of Toolbar:

~~~js
toolbar.enable(id);
toolbar.disable(id);
~~~

**Related sample**: [Toolbar. Enable / disable items](https://snippet.dhtmlx.com/ovblenaf)

## Setting tooltip

You can create a tooltip for an input:

~~~js
{
	type: "input",
	value: "",
	tooltip:"Type to search"
}
~~~

**Related sample**: [Toolbar. Tooltips](https://snippet.dhtmlx.com/105levtd)

## Setting/getting value

You can use the [setState()](toolbar/api/toolbar_setstate_method.md) and [getState()](toolbar/api/toolbar_getstate_method.md) methods of Toolbar to change and access the value of Input.

To fill in Input with some text, call **setState()** with a key-value pair as a parameter, where the key is the ID of the input and the value is the text:

~~~js
{
	type: "input",
	id:"search",
	value: ""
}
...
toolbar.setState({search:"Summer"});
~~~

To get the text that is currently inside the Input control, call **getState()**:

~~~js
toolbar.getState(); //-> {search:"Summer"}
~~~

## Setting focus on a control

To set focus on an Input control, use the [setFocus()](toolbar/api/toolbar_setfocus_method.md) method. It takes the ID of a control as a parameter:

~~~js
toolbar.setFocus("search");
~~~

:::info
Check the full list of available operations in the [Toolbar API](toolbar/api/api_overview.md) and [Tree Collection API](tree_collection.md).
:::
