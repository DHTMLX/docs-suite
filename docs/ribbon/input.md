---
sidebar_label: Input
title: JavaScript Ribbon - Input 
description: You can explore the Input of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Input

The Input control displays a text input field with an icon.

![Ribbon search input field with a magnifier icon and placeholder text in DHTMLX Suite](/img/ribbon/input.png)

## Add Input {#adding-input}

The following code adds an Input control to a ribbon:

~~~js
ribbon.data.add({
    type:"input",
    value:"",
    placeholder:"Type to search"
});
~~~

**Related sample**: [Ribbon. Input](https://snippet.dhtmlx.com/jjnzc3ng)

### Properties

Check the [list of properties](ribbon/api/api_input_properties.md) that you can set in the configuration object of an Input control.

## Show and hide Input {#showinghiding-input}

The `show()` and `hide()` methods of Ribbon show and hide an Input control by its ID:

~~~js
ribbon.show(id);
ribbon.hide(id);
~~~

## Enable and disable Input {#enablingdisabling-input}

The `enable()` and `disable()` methods enable and disable an Input control by its ID:

~~~js
ribbon.enable(id);
ribbon.disable(id);
~~~

## Set and get the Input value {#settinggetting-input-value}

Use the `setState()` and `getState()` methods of Ribbon to set and get the value of an Input control.

To fill an Input control with text, pass a key-value pair to the `setState()` method. The key is the ID of the input, and the value is the text:

~~~js
{
    type: "input",
    id:"search",
    value: ""
}
...
ribbon.setState({search:"Summer"});
~~~

To get the current text of an Input control, call the `getState()` method:

~~~js
ribbon.getState();
// {search:"Summer"}
~~~
