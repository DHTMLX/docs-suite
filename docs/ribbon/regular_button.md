---
sidebar_label: regularButton Control
title: regularButton Control
---  

```tododelete не используется?``` 

``` 

This is a material design button that has two varieties: default and 'flat'.

![DHX Ribbon regularButton](../assets/ribbon/regular_button.png)

## Adding regularButton

You can add regularButton with the [add()]() method of TreeCollection:

~~~js
ribbon.data.add({
    type: "regularButton",
    value: "Add",
    icon: "dxi-plus"
});
~~~



## Attributes

You can provide the following attributes in the configuration object of a button:

- **id** (string|number) - optional, the ID of the button;
- **type** (string) - always "regularButton";
- **icon** (string) - optional, the icon;
- **value** (string) - optional, the label;
- **size** (string) - optional, "flat" - blue on transparent, default - transparent on blue;
- **$hidden** (boolean) - optional, hides the control;
- **twoState** (boolean) - optional, defines whether the button has two states (active/inactive);
- **active** (boolean) - optional, for two-state buttons, if true, the button is in the active state;
- **css** (string) - optional, adds a custom CSS class.

## Choosing the Style

By default, regularButton is blue with the light-colored text and icon. You can choose the other style and invert the colors by setting the **size** property to "flat":

~~~js
{
    type: "regularButton",
    value: "Add",
    size: "flat",
    icon: "dxi-plus"
}
~~~

## Working with RegularButton

Just like ribbon/button.md, iconButton can be hidden, disabled and can have a tooltip. You can also manipulate the states of a twoState iconButton.

@todo:
shall I repeat the text from Button about hide, disable, tooltip and twoState, or a simple link (as it is now) will do?


```