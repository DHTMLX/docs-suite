---
sidebar_label: getValue
title: getValue
---          

@short: returns the current value of Slider

@signature: getValue(): number[];

@returns:
- value 	array		the current value of the slider

@example:
var value = slider.getValue(); // -> [20]

// for a range slider as an array
var value = slider.getValue(); // -> [20,50]


@template: api_method
@descr:
{{note In case you've set the value of Slider (via slider/api/slider_setvalue_method.md) as an array where the first number is greater than the second one, e.g. [50,20], **getValue()** will return the value as an array
with numbers in the ascending order, that is [20,50].}}


@relatedapi:
slider/api/slider_setvalue_method.md


@changelog:

@relatedsample: https://snippet.dhtmlx.com/xlb8nbdx	Slider. Get Slider Value

@related: slider/usage.md#gettingvalue