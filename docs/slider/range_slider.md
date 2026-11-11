---
sidebar_label: Range mode
title: JavaScript Slider - Range Mode 
description: You can explore the range mode of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Range mode

In the range mode, the slider displays two thumbs to select the start and end values of a range.

![Range slider with two thumbs labeled 25 and 75 selecting a value interval in DHTMLX Suite](/img/slider/range_mode.png)

To enable the range mode, set the [](slider/api/slider_range_config.md) property to `true` and pass an array with the start and end values of the range to the `value` property:

~~~js {5-6}
const slider = new dhx.Slider("slider_container", {
    min: 0,
    max: 100,
    step: 1,
    range: true,
    value: [25, 75]
});
~~~

**Related sample**: [Slider. Range mode of the Slider](https://snippet.dhtmlx.com/nfdr84oy)

Like the default slider, a range slider works in the horizontal, vertical, and inverse modes.
You can configure the scale with the tick options and add labels to the slider thumbs.

The range slider supports all [Slider configuration properties](slider/configuring_slider.md) and the standard [Slider API](slider/api/api_overview.md).

## API specificity

### Configuration

In the range mode, the `value` option must be an array with two values, one for each thumb.

### Get/set value

- The `getValue()` method returns an array with a pair of values for a slider in the range mode.
- The `setValue()` method takes an array as the first parameter.
