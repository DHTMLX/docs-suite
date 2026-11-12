---
sidebar_label: Configuration
title: JavaScript Slider - Configuration 
description: You can explore the configuration of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration

## Initial value

Use the `value` property to set the position of the slider thumb on initialization:

~~~js
const slider = new dhx.Slider("slider_container", { 
    value:20
});
~~~

## Inverse mode

In the inverse mode, the slider scale displays values in the reverse order, that is, from the maximal value to the minimal one.

![Inverse mode slider with the thumb near the right end showing tooltip value 86 in DHTMLX Suite](/img/slider/inverse_mode.png)

To enable this mode, set the [](slider/api/slider_inverse_config.md) property to `true`:

~~~js
const slider = new dhx.Slider("slider_container", { 
   inverse:true,
   min: 100,
   max: 0,
   step:1
});
~~~

**Related sample**: [Slider. Inverse mode of the Slider](https://snippet.dhtmlx.com/xm8e84s2)

## Minimal and maximal values

The minimal and maximal values define the start and end points of the slider. The default values are 0 and 100, respectively. Use the [](slider/api/slider_min_config.md) and [](slider/api/slider_max_config.md) properties to change them:

~~~js
const slider = new dhx.Slider("slider_container", { 
    min:1,
    max:150
});
~~~

## Range mode

Besides the standard slider with one thumb, you can create a range slider with two thumbs. Set the [](slider/api/slider_range_config.md) property to `true` and pass an array with the start and end values of the range to the `value` property:

~~~js {6,7}
const slider = new dhx.Slider("slider_container", {
    min: 0,
    max: 100,
    value: 0,
    step: 1,
    range: true,
    value: [25, 75]
});
~~~

**Related sample**: [Slider. Range mode of the Slider](https://snippet.dhtmlx.com/nfdr84oy)

For more details, see the [](slider/range_slider.md) article.

## Scale settings

Use the following properties of the Slider configuration object to configure the look and feel of the scale:

- [](slider/api/slider_tick_config.md) — (`number`) sets the interval of steps for rendering the slider scale
- [](slider/api/slider_majortick_config.md) — (`number`) sets the interval for rendering numeric values on the slider scale
- [](slider/api/slider_ticktemplate_config.md) — (`function`) sets a template for rendering values on the slider scale

![Slider with a scale of ticks and degree labels at 0, 50 and 100 in DHTMLX Suite](/img/slider/scale.png)

~~~js
const slider = new dhx.Slider("slider_container", { 
   tick: 5,
   majorTick:10,
   tickTemplate: function(major_tick){
        return major_tick + "°";
   } 
});
~~~

**Related sample**: [Slider. Custom scale](https://snippet.dhtmlx.com/jsfxnplp)

**Related sample**: [Slider. Slider with a scale](https://snippet.dhtmlx.com/4a6l7cyy)

### Show only the first and last ticks {#showing-only-the-first-and-the-last-ticks}

Use the following settings to mark only the minimal and maximal values with ticks:

- Set the [](slider/api/slider_tick_config.md) property to the value of the [](slider/api/slider_max_config.md) property
- Set the [](slider/api/slider_majortick_config.md) property to `1`

![Slider showing only the first and last ticks labeled 0 and 100 in DHTMLX Suite](/img/slider/min_max_ticks_only.png)

~~~js
const slider = new dhx.Slider("slider_container", { 
    max:100, min:0, tick:100, majorTick:1
});
~~~

## Slider label

You can show a label next to the slider.

![Slider with a Volume label placed to the left of the trackbar in DHTMLX Suite](/img/slider/slider_label.png)

Use the following properties to set the label and its position:

- [](slider/api/slider_label_config.md) — specifies the label of a slider
- [](slider/api/slider_labelposition_config.md) — defines the position of the label: `"left"` or `"top"`

~~~js
const slider = new dhx.Slider("slider_container", { 
   label:"Volume",
   // label is rendered on the same level with the trackbar
   labelPosition:"left"
});
~~~

**Related sample**: [Slider. Label](https://snippet.dhtmlx.com/4o7yttam)

## Step

The [](slider/api/slider_step_config.md) option defines the size of each jump between values of the slider. The default step is 1. Set a different value in the Slider configuration object:

~~~js
const slider = new dhx.Slider("slider_container", { 
    step:2
});
~~~

## Tooltip

A tooltip displays the current value of the slider when the user moves the slider thumb.

![Slider showing a tooltip with the value 0 above the dragged thumb in DHTMLX Suite](/img/slider/tooltip.png)

Use the [](slider/api/slider_tooltip_config.md) property to render the slider value over the thumb:

~~~js
const slider = new dhx.Slider("slider_container", { 
    tooltip:true
});
~~~

**Related sample**: [Slider. Tooltip for the Slider](https://snippet.dhtmlx.com/sxh66mnu)

## Vertical mode

The default orientation of the slider scale is horizontal. Set the [](slider/api/slider_mode_config.md) property to `"vertical"` to arrange the scale vertically:

~~~js
const slider = new dhx.Slider("slider_container", { 
   mode:"vertical"
});
~~~

**Related sample**: [Slider. Vertical mode](https://snippet.dhtmlx.com/rjborkca)
