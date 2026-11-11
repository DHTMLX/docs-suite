---
sidebar_label: Work with Slider
title: JavaScript Slider - Work with Slider 
description: You can explore how to work with Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Slider

The Slider API helps you control the component through a set of methods.

## Disable and enable Slider {#disablingenabling-slider}

The [`disable()`](slider/api/slider_disable_method.md) and [`enable()`](slider/api/slider_enable_method.md) methods disable and enable a slider:

~~~js
// disable a slider on a page
slider.disable();

// make the slider active again
slider.enable();
~~~

**Related sample**: [Slider. Disable/enable slider](https://snippet.dhtmlx.com/po9hsc2l)

## Check if Slider is disabled {#checking-if-a-slider-is-disabled}

The [`isDisabled()`](slider/api/slider_isdisabled_method.md) method checks whether a slider is disabled:

~~~js
slider.isDisabled(); // -> true/false
~~~

**Related sample**: [Slider. Is disabled](https://snippet.dhtmlx.com/fbo18fue)

## Set the value {#setting-value}

A user drags the thumb to set the slider value. The [`setValue()`](slider/api/slider_setvalue_method.md) method sets the value from code:

~~~js
slider.setValue(20);
~~~

**Related sample**: [Slider. Set value](https://snippet.dhtmlx.com/shw55sub)

## Get the value {#getting-value}

The [`getValue()`](slider/api/slider_getvalue_method.md) method returns the current value of a slider:

~~~js
const value = slider.getValue(); // -> [20]
 
// for a range slider as an array
const value = slider.getValue(); // -> [20,50]
~~~

**Related sample**: [Slider. Get value](https://snippet.dhtmlx.com/xlb8nbdx)

You can pass an array whose first number is greater than the second one to the `setValue()` method, for example, `[50,20]`. In this case, the `getValue()` method returns the numbers in ascending order, `[20,50]`:

~~~js
// sets value as an array (the first number is greater than the second one)
slider.setValue([50,20]);

// returns an array of numbers (the numbers are ascending)
const value = slider.getValue(); // -> [20,50]
~~~
