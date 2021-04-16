---
sidebar_label: imageButtonText Control
title: imageButtonText Control
---  

```tododelete не используется?``` 

```

A button with an image and a text label. Like ribbon/button.md, it can be TwoState and have a badge with a number.

![DHX ImageButtontext](./../assets/ribbon/image_button_text.png)

## Adding imageButtonText Controls

You can add the imageButtonText control with the [add()]() method of TreeCollection:

~~~js
myRibbon.data.add({
    type: "imageButtonText",
    value: "User",
    count: 10,
    src: "../img/avatar.png"
})
~~~



## Attributes

You can provide the following attributes in the configuration object of imageButtonText:

- **id** (string|number) - optional, the ID of the button;
- **type** (string) - always "imageButton";
- **value** (string) - optional, the label;
- **src** (string) - the relative path to the image;
- **count** (number|string) - optional, adds a badge with a number or any symbol (badge is round and doesn't expand);
- **size** (string) - optional, if set to "big", the button stretches vertically, not set by default;
- **$hidden** (boolean) - optional, hides the control;
- **twoState** (boolean) - optional, defines whether the button has two states (active/inactive);
- **active** (boolean) - optional, for two-state buttons, if true, the button is in the active state;
- **css** (string) - optional, adds a custom CSS class.

## Working with ImageButtonText

Just like ribbon/button.md, iconButton can be hidden or disabled. You can also manipulate the states of a twoState imageButtonText.

@todo:
shall I repeat the text from Button about hide, disable, tooltip and twoState, or a simple link (as it is now) will do?

```