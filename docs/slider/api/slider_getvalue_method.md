---
sidebar_label: getValue()
title: JavaScript Slider - getValue Method 
description: You can explore the getValue method of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getValue()

@short: returns the current value of Slider

@signature: {'getValue(): number[];'}

@returns:
An array with the current value of the slider.

@example:
var value = slider.getValue(); // -> [20]

// for a range slider as an array
var value = slider.getValue(); // -> [20,50]

@descr:

**Related sample**: [Slider. Get value](https://snippet.dhtmlx.com/xlb8nbdx)

{{note In case you've set the value of Slider (via [](slider/api/slider_setvalue_method.md)) as an array where the first number is greater than the second one, e.g. [50,20], **getValue()** will return the value as an array with numbers in the ascending order, that is [20,50].}}

[comment]: # (@relatedapi: slider/api/slider_setvalue_method.md)

[comment]: # (@related: slider/usage.md#getting-value)
