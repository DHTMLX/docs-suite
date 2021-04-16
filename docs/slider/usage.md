---
sidebar_label: Work with Slider
title: Work with Slider
---          

The Slider API helps you control the functionality of the component through a set of handy methods.

Disabling/enabling Slider
--------------

You can control the activity of the slider via the [disable()](slider/api/slider_disable_method.md)/[enable()](slider/api/slider_enable_method.md) methods:

~~~js
// disable a slider on a page
slider.disable();

// make the slider active again
slider.enable();
~~~

{{editor	https://snippet.dhtmlx.com/po9hsc2l	Slider. Disable/Enable Slider}}

Checking if a slider is disabled
-----------------------------------

To check if a slider is disabled, call the [isDisabled()](slider/api/slider_isdisabled_method.md) method:

~~~js
slider.isDisabled(); // -> true/false
~~~

{{editor	https://snippet.dhtmlx.com/fbo18fue	Slider. Is Disabled Slider}}

Setting value
-----------------

While a user sets the value of a slider by dragging the thumb to the desired position, you can set the value from the code via the [setValue()](slider/api/slider_setvalue_method.md) method:

~~~js
slider.setValue(20);
~~~

{{editor	https://snippet.dhtmlx.com/shw55sub	Slider. Set Slider Value}}

Getting value
-------------------

You can get the current value of Slider with the help of the [getValue()](slider/api/slider_getvalue_method.md) method.


~~~
var value = slider.getValue(); // -> [20]
 
// for a range slider as an array
var value = slider.getValue(); // -> [20,50]
~~~

{{editor	https://snippet.dhtmlx.com/xlb8nbdx	Slider. Get Slider Value}}

In case you've set the value of Slider as an array where the first number is greater than the second one, e.g. [50,20], **getValue()** will return the value as an array with numbers in the ascending order, that is [20,50].

~~~js
// sets value as an array (the first number is greater than the second one)
slider.setValue([50,20]);

// returns an array of numbers (the numbers are ascending)
var value = slider.getValue(); // -> [20,50]
~~~

