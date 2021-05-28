---
sidebar_label: Button
title: Button
---          

This is a simple button that can have an icon. Button can have two states and a badge with a number, which can be useful for displaying the number of new messages, etc.

![](../assets/toolbar/buttons.png)

**Related sample**: [Toolbar. Buttons](https://snippet.dhtmlx.com/7aysw3gb)

## Adding Button

A button can be easily added to a toolbar with the help of the **add()** method of [Tree Collection](tree_collection/index.md):

~~~js
toolbar.data.add({
    type:"button", value:"Best button"
});
~~~

### Properties

You can provide the [following properties](toolbar/api/api_button_properties.md) in the configuration object of a Button control.

## Adding an icon

A button can have an icon which is set through the corresponding option [icon](toolbar/customization.md#icons):

~~~js
{
    type:"button", value:"Done",
    icon:"dxi dxi-check"
}
~~~

## Adding a badge with a number

You can add a number badge to the button to display information like the number of new messages. The badge is set via the **count** property:

~~~js
{
    type:"button", value:"Done",
    icon:"dxi dxi-check",
    count:10
}
~~~

## Adding HTML content

You can add any custom HTML content to a button with the help of the **html** property:

~~~js
{
    type: "button",
    html: "<div class='user-button'><img src='../avatars/Avatar.jpg'/></div>",
}
~~~

**Related sample**: [Toolbar. Item HTML Content](https://snippet.dhtmlx.com/5n2b8x84)

## Showing/hiding a button 

To hide/show a button, you should pass the ID of the button to the [hide()](toolbar/api/toolbar_hide_method.md) / [show()](toolbar/api/toolbar_show_method.md) Toolbar methods:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

**Related sample**: [Toolbar. Hide/Show](https://snippet.dhtmlx.com/cldp89u4)

## Enabling/disabling a button 

Any button in the toolbar can be [enabled](toolbar/api/toolbar_enable_method.md)/[disabled](toolbar/api/toolbar_disable_method.md):

~~~js
toolbar.enable(id);
toolbar.disable(id);
~~~

**Related sample**: [Toolbar. Enable/Disable](https://snippet.dhtmlx.com/ovblenaf)

## Setting tooltip

You can add a tooltip to a button:

~~~js
{
    type:"button", 
    value:"Click", 
    tooltip:"Click me and find out why"  /*!*/
}
~~~

**Related sample**: [Toolbar. Tooltips](https://snippet.dhtmlx.com/105levtd)
