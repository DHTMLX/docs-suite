---
sidebar_label: Work with ColorPicker
title: JavaScript Colorpicker - Work with Colorpicker 
description: You can explore how to work with Colorpicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with ColorPicker

The API of Colorpicker helps you control the functionality of the component through a set of handy methods.

## Setting/getting selected color

You can select a certain color in the Colorpicker via the [setValue()](colorpicker/api/colorpicker_setvalue_method.md) method. It takes as a parameter the code of a color from the palette in the Hex format.

~~~js
colorpicker.setValue("#F9E6AD");
~~~

**Related sample**: [Colorpicker. Set value](https://snippet.dhtmlx.com/h6oc5qsq)

It is also possible to get the code of a color selected in the color picker using the [getValue()](colorpicker/api/colorpicker_getvalue_method.md) method.

~~~js
colorpicker.getValue(); // -> "#F9E6AD"
~~~

## Setting/getting custom colors

To set custom colors that will be displayed at the bottom of the palette, make use of the [setCustomColors()](colorpicker/api/colorpicker_setcustomcolors_method.md) method. It takes an array with custom colors as a parameter.

~~~js
colorpicker.setCustomColors(["#f2f2f2","#8ac5d9","#ec9875","#7a8523"]);
~~~

**Related sample**: [Colorpicker. Set custom colors](https://snippet.dhtmlx.com/z9jfv3fg)

To get a collection of selected custom colors, use the [getCustomColors()](colorpicker/api/colorpicker_getcustomcolors_method.md) method. It returns selected colors as an array of strings in the Hex format.

~~~js
colorpicker.setCustomColors(["#f2f2f2","#8ac5d9","#ec9875","#7a8523"]);

colorpicker.getCustomColors();
// -> ["#f2f2f2","#8ac5d9","#ec9875","#7a8523"]
~~~

## Setting/getting current mode

By default, Colorpicker is rendered in the "palette" mode. There is also the "picker" view in the component which is shown when a user selects a custom color. 
You can choose what view should be shown with the help of the [setCurrentMode()](colorpicker/api/colorpicker_setcurrentmode_method.md) method. It takes the name of the mode to show as a parameter.

~~~js
colorpicker.setCurrentMode("picker");
~~~

**Related sample**: [Colorpicker. Set current mode](https://snippet.dhtmlx.com/0mhp5cp6)

To get the current view of ColorPicker, make use of the [getCurrentMode()](colorpicker/api/colorpicker_getcurrentmode_method.md) method. It returns a string with the name of the view: "palette" or "picker".

~~~js
colorpicker.setCurrentMode(mode);

colorpicker.getCurrentMode();
// -> "palette"
~~~

## Setting focus on a color

To set focus on a certain color in the palette, make use of the [setFocus()](colorpicker/api/colorpicker_setfocus_method.md) method. As a parameter it takes a string with the code of a color (in the Hex format) to set focus on.

~~~js
colorpicker.setFocus("#BDF0E9");
~~~

**Related sample**: [Colorpicker. Set focus](https://snippet.dhtmlx.com/fg13r3uh)
