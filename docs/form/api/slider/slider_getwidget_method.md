---
sidebar_label: getWidget()
title: JavaScript Form - getWidget Slider Method 
description: You can explore the getWidget method of the Slider control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getWidget()

@short: returns the DHTMLX Slider widget attached to a Slider control

@signature: {'getWidget(): Slider;'}

@returns:
An object of the DHTMLX Slider widget.

@example:
const slider = form.getItem("slider").getWidget();  
// -> DHTMLX Slider

@descr:

It is possible to use methods of DHTMLX Slider via the **getWidget()** method of a Slider control.

For example, you can disable a Slider control. To do this, you need to get the widget attached to the Slider control and then use the [disable()](slider/api/slider_disable_method.md) method of this widget.

~~~js
const slider = form.getItem("slider").getWidget();  // -> DHTMLX Slider
slider.disable(); // disables slider
~~~
