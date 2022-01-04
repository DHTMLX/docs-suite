---
sidebar_label: Range mode
title: JavaScript Slider - Range Mode 
description: You can explore the range mode of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Range mode

The range mode of slider presupposes the usage of two thumbs for selecting the starting and ending values of a range. 

![](../assets/slider/range_mode.png)

To enable the range mode, you need to set the [](slider/api/slider_range_config.md) property to *true* and specify an array of two values - min and max values of the range:

~~~js
var slider = new dhx.Slider("slider", {
	min: 0,
	max: 100,
	step: 1,
	range: true,     /*!*/
	value: [25, 75]  /*!*/
});
~~~

**Related sample**: [Slider. Range Mode Of The Slider](https://snippet.dhtmlx.com/nfdr84oy)

The same as the default slider, a slider in the range mode works smoothly both in the horizontal and vertical modes, as well as in the inverse mode.
You can manipulate the scale settings by adjusting the ticks-related options and use labels for its thumbs. 

In short, the full set of [Slider configuration properties](slider/configuring_slider.md) can be applied to the range slider. All the standard [Slider API](slider/api/api_overview.md) is supported.

## API specificity

### Configuration

Note that the **value** option should have the *array* type and contain a pair of values for both thumbs.

### Get/set value

- The **getValue()** method returns an array with a pair of values for a slider in the range mode. 
- The **setValue()** method takes as a first parameter an array, respectively.
