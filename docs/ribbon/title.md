---
sidebar_label: Title
title: Title
---          

This is an item that contains some text.


## Adding Title control

A Title control can be added to a ribbon with the help of the **add()** method of TreeCollection:

~~~js
ribbon.data.add({
    type: "title",
	value: "APP NAME"
});
~~~

### Properties

You can provide the [following properties](ribbon/api/api_title_properties.md) in the configuration object of a Title control.


## Showing/hiding title

Title can be hidden and shown with the help of the related methods. Pass the id of a Title control as a parameter.

~~~js
ribbon.show(id);
ribbon.hide(id);
~~~



@todo:
add an image, when fixed 