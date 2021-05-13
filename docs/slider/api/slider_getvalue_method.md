---
sidebar_label: getValue
title: getValue
---          

@short: returns the current value of Slider

@signature: {'getValue(): number[];'}

@returns:
- value 	array		the current value of the slider

@example:
var value = slider.getValue(); // -> [20]

// for a range slider as an array
var value = slider.getValue(); // -> [20,50]



@descr:

**Related sample**: [Slider. Get Slider Value](https://snippet.dhtmlx.com/xlb8nbdx)

{{note In case you've set the value of Slider (via [](slider/api/slider_setvalue_method.md)) as an array where the first number is greater than the second one, e.g. [50,20], **getValue()** will return the value as an array with numbers in the ascending order, that is [20,50].}}


@relatedapi:
slider/api/slider_setvalue_method.md

@related: slider/usage.md#getting-value