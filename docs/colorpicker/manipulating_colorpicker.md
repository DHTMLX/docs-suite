---
sidebar_label: Work with ColorPicker
title: JavaScript Colorpicker - Work with Colorpicker 
description: You can explore how to work with Colorpicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with ColorPicker

The Colorpicker API helps you control the component through a set of methods.

## Setting/getting selected color

You can select a color in Colorpicker with the [setValue()](colorpicker/api/colorpicker_setvalue_method.md) method. It takes the code of a color from the palette in the Hex format as a parameter.

~~~js
colorpicker.setValue("#F9E6AD");
~~~

**Related sample**: [Colorpicker. Set value](https://snippet.dhtmlx.com/h6oc5qsq)

You can also get the code of the color selected in Colorpicker with the [getValue()](colorpicker/api/colorpicker_getvalue_method.md) method.

~~~js
colorpicker.getValue(); // -> "#F9E6AD"
~~~

## Setting/getting custom colors

Use the [setCustomColors()](colorpicker/api/colorpicker_setcustomcolors_method.md) method to set custom colors that appear at the bottom of the palette. It takes an array of custom colors as a parameter.

~~~js
colorpicker.setCustomColors(["#f2f2f2","#8ac5d9","#ec9875","#7a8523"]);
~~~

**Related sample**: [Colorpicker. Set custom colors](https://snippet.dhtmlx.com/z9jfv3fg)

Use the [getCustomColors()](colorpicker/api/colorpicker_getcustomcolors_method.md) method to get the selected custom colors. It returns the colors as an array of strings in the Hex format.

~~~js
colorpicker.setCustomColors(["#f2f2f2","#8ac5d9","#ec9875","#7a8523"]);

colorpicker.getCustomColors();
// -> ["#f2f2f2","#8ac5d9","#ec9875","#7a8523"]
~~~

## Setting/getting current mode

The default Colorpicker mode is "palette". The component also has the "picker" mode that appears when a user selects a custom color.
Use the [setCurrentMode()](colorpicker/api/colorpicker_setcurrentmode_method.md) method to choose the mode to show. It takes the mode name as a parameter.

~~~js
colorpicker.setCurrentMode("picker");
~~~

**Related sample**: [Colorpicker. Set current mode](https://snippet.dhtmlx.com/0mhp5cp6)

Use the [getCurrentMode()](colorpicker/api/colorpicker_getcurrentmode_method.md) method to get the current Colorpicker mode. It returns a string with the mode name: "palette" or "picker".

~~~js
colorpicker.setCurrentMode(mode);

colorpicker.getCurrentMode();
// -> "palette"
~~~

## Setting focus on a color

Use the [setFocus()](colorpicker/api/colorpicker_setfocus_method.md) method to set focus on a color in the palette. It takes a string with the color code in the Hex format as a parameter.

~~~js
colorpicker.setFocus("#BDF0E9");
~~~

**Related sample**: [Colorpicker. Set focus](https://snippet.dhtmlx.com/fg13r3uh)
