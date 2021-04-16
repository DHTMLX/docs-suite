---
sidebar_label: imageButton
title: imageButton
---          

This is a button with an image. Unlike ribbon/button.md, it does not have a text label, but can also have a badge with a number and can be _twoState_.

![DHX Ribbon imageButton](../assets/ribbon/image_button.png)

## Adding ImageButton

ImageButton can be easily added to a ribbon with the help of the **add()** method of the **data** module:

~~~js
ribbon.data.add({
    type: "imageButton",
    count: 10,
    src: "../img/avatar.png"
});
~~~


### Properties

You can provide the [following properties](ribbon/api/api_imagebutton_properties.md) in the configuration object of an ImageButton control.


## Working with ImageButton

You can perform operations over the **imageButton** control with the help of the available [Ribbon API](ribbon/api/refs/ribbon.md) and [Tree Collection API](tree_collection/api/refs/treecollection.md).


