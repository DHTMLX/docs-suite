---
sidebar_label: getWidget
title: getWidget
---          

@short: returns the dhtmlxSlider widget attached to a Slider control



@returns:
param   object    the dhtmlxSlider widget

@example:
var slider = form.getItem("slider").getWidget();  
// -> dhtmlxSlider


@template: api_method
@descr:
It is possible to use methods of dhtmlxSlider via the **getWidget()** method of a Slider control.

For example, you can disable a Slider control. To do this, you need to get the widget attached to the Slider control and then use the [disable()](slider/api/slider_disable_method.md) method of this widget.

~~~js
var slider = form.getItem("slider").getWidget();  // -> dhtmlxSlider
slider.disable(); // disables slider
~~~

