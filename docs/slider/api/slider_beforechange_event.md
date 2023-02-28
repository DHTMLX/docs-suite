---
sidebar_label: beforeChange
title: JavaScript Slider - beforeChange Event 
description: You can explore the beforeChange event of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeChange

@short: fires before changing of the slider value

@signature: {'beforeChange: (value: number, oldValue: number, isRange: boolean) => boolean | void;'}

@params:
- `value: number` - the new value set for the slider
- `oldValue: number` - the previous value of the slider
- `isRange: boolean` - defines, whether the range mode is activated for the slider

@returns:
Return `false` to prevent changing the slider value; otherwise, `true`.

@example:
slider.events.on("beforeChange", function(value, oldValue, isRange){
    console.log("The value of a slider will be changed to "+slider.getValue());
    return true;
});

@descr:

**Related sample**: [Slider. Events](https://snippet.dhtmlx.com/sc7ov54z)

@changelog: added in v8.0
