---
sidebar_label: Configuration
title: JavaScript Slider - Configuration 
description: You can explore the configuration of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration

## Initial value

It is possible to define the value the thumb of the slider will be set at on the initialization of the component:

~~~js
const slider = new dhx.Slider("slider_container", { 
    value:20
});
~~~

## Inverse mode

You can adjust the configuration of Slider so that its scale would render values in the reverse order, i.e. from the maximal value to the minimal one.

![](../assets/slider/inverse_mode.png)

To launch this mode, make use of the [](slider/api/slider_inverse_config.md) property set to *true*:

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

The minimal and maximal values define the start and end points of the slider. You can specify them via the corresponding configuration properties - [](slider/api/slider_min_config.md) and [](slider/api/slider_max_config.md). The default values are 0 and 100, correspondingly.

~~~js
const slider = new dhx.Slider("slider_container", { 
    min:1,
    max:150
});
~~~

## Range mode

Besides the standard slider with one thumb, you can create a slider with two thumbs, that is a range slider. For this, you need to use the [range:true](slider/api/slider_range_config.md) option in the slider configuration object and
define an array with the min and max values for the range:

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

There are more details given in the [](slider/range_slider.md) article.

## Scale settings

You can configure the look and feel of the Slider scale via the corresponding properties of the Slider configuration object:

- [](slider/api/slider_tick_config.md) - (<i>number</i>) sets the interval of steps for rendering the slider scale
- [](slider/api/slider_majortick_config.md) - (<i>number</i>) sets interval of rendering numeric values on the slider scale
- [](slider/api/slider_ticktemplate_config.md) - (<i>function</i>) sets a template for rendering values on the slider scale

![](../assets/slider/scale.png)

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

### Showing only the first and the last ticks

In case you want to mark just the minimal and maximal values with ticks, you need to: 

- set the value of the [](slider/api/slider_tick_config.md) property equal to the value of the [](slider/api/slider_max_config.md) property
- set the [](slider/api/slider_majortick_config.md) property to 1

![](../assets/slider/min_max_ticks_only.png)

~~~js
const slider = new dhx.Slider("slider_container", { 
    max:100, min:0, tick:100, majorTick:1
});
~~~

## Slider label

There is a possibility to show a label next to the slider. 

![](../assets/slider/slider_label.png)

There are two properties that allow manipulating the label of the slider: 

- [](slider/api/slider_label_config.md) - specifies the label of a slider
- [](slider/api/slider_labelposition_config.md) - defines the position of a label of a slider: "left"|"top"

~~~js
const slider = new dhx.Slider("slider_container", { 
   label:"Volume",
   // label is rendered on the same level with the trackbar
   labelPosition:"left"
});
~~~

**Related sample**: [Slider. Label](https://snippet.dhtmlx.com/4o7yttam)

## Step

The [](slider/api/slider_step_config.md) option defines the size of each jump between values of the slider. By default, the value of the step is set to 1. You can change this property via the Slider configuration object:

~~~js
const slider = new dhx.Slider("slider_container", { 
    step:2
});
~~~

## Tooltip

You can specify a tooltip that will display changeable values of the slider when the user moves the slider's thumb. 

![](../assets/slider/tooltip.png)

There is the [](slider/api/slider_tooltip_config.md) property that enables rendering the slider value over the thumb:

~~~js
const slider = new dhx.Slider("slider_container", { 
    tooltip:true
});
~~~

**Related sample**: [Slider. Tooltip for the Slider](https://snippet.dhtmlx.com/sxh66mnu)

## Vertical mode

By default, a slider scale is placed horizontally, but you can arrange it vertically via the [](slider/api/slider_mode_config.md) property of the Slider configuration object:

~~~js
const slider = new dhx.Slider("slider_container", { 
   mode:"vertical"
});
~~~

**Related sample**: [Slider. Vertical mode](https://snippet.dhtmlx.com/rjborkca)
