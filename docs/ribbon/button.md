---
sidebar_label: Button
title: JavaScript Ribbon - Button 
description: You can explore the Button of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Button

The Button control displays a button with a text label and an optional icon. A button can switch between two states (`twoState`) and show a badge with a number, for example, to count new messages.

![Ribbon with File, folder, cloud and Save buttons with icons in DHTMLX Suite](/img/ribbon/ribbon_button.png)

**Related sample**: [Ribbon. Group buttons](https://snippet.dhtmlx.com/nlviu82g)

## Create a button {#creating-buttons}

The following example shows the basic configuration of a button:

~~~js
{
    type:"button", value:"Best button"
}
~~~

### Properties

Check the [list of properties](ribbon/api/api_button_properties.md) that you can set in the configuration object of a Button control.

## Add a button {#adding-buttons}

Use the `add()` method of TreeCollection to add a button to a ribbon block:

~~~js
ribbon.data.add({
    type:"button", value:"Best button"
},-1,"blockId");
~~~

## Add HTML content {#adding-html-content}

Use the `html` property to add a custom element to a button:

~~~js
{
    type: "button",
    html: "<div id='preloader'><div id='loader'></div></div >",
    size: "auto"
}
~~~

**Related sample**: [Ribbon. Item HTML content](https://snippet.dhtmlx.com/3djaib6o)

## Show and hide a button {#showinghiding-button}

The `show()` and `hide()` methods show and hide a button by its ID:

~~~js
ribbon.show(id);
ribbon.hide(id);
~~~

## Enable and disable a button {#enablingdisabling-button}

The `enable()` and `disable()` methods enable and disable a button by its ID:

~~~js
ribbon.enable(id);
ribbon.disable(id);
~~~

## Add an icon {#adding-an-icon}

Use the `icon` property to add an [icon](ribbon/customization.md#icons) to a button:

~~~js
{
    type:"button", value:"Done",
    icon:"dxi dxi-check"
}
~~~

## Add a badge with a number {#adding-a-badge-with-a-number}

Set the `count` property to add a badge with a number to a button:

~~~js
{
    type:"button", value:"Done",
    icon:"dxi dxi-check",
    count:10
}
~~~

**Related sample**: [Ribbon. Buttons configuration](https://snippet.dhtmlx.com/trli6sq7)

## Style buttons {#styling-buttons}

Specify custom CSS classes in the `css` property to style a button:

~~~js
{
    type:"button", value:"Best button", css:"best_button"
}
~~~

Define the `best_button` class in your CSS:

~~~html
.best_button{
    background-color:cornflowerblue;
}
.best_button:hover{
    background-color:rgb(183, 199, 228);
}
~~~

## TwoState Buttons

Set the `twoState` property to create a button with two states: active (pressed) and inactive (unpressed). The `active` property sets the initial state:

~~~js
{
    type:"button", value:"Select", twoState:true, active:true
}
~~~

### Change the button state {#changing-the-state-of-button}

Use the `setState()` method of Ribbon to change the state of a TwoState button or the values of other controls:

~~~js
{
    type:"button", twoState:true, value:"Check", id:"check"
}
...
ribbon.setState({check:true});  // active:true
// or
ribbon.setState({check:false});  // active:false
~~~

The `setState()` method takes one parameter: a key-value pair with the ID of the button and the new value.

### Get the button state {#accessing-the-state-of-button}

Use the `getValues()` method to get the current state of a TwoState button or the values of other controls:

~~~js
{
    type:"button", value:"Check", twoState:true, id:"check"
}
...
ribbon.getState();
// { check:true }
// or
// { check:false }
~~~
