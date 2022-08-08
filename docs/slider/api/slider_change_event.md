---
sidebar_label: change
title: JavaScript Slider - change Event 
description: You can explore the change event of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# change

@short: fires on change of the slider value

@signature: {'change: (value: number, oldValue: number, isRange: boolean) => void;'}

@params:
- `value: number` - the new value set for the slider
- `oldValue: number` - the previous value of the slider
- `isRange: boolean` - defines, whether the range mode is activated for the slider

@example:
slider.events.on("change", function(value, oldValue, isRange){
    console.log("The value of a slider has changed to "+slider.getValue());
});

@descr:

**Related sample**: [Slider. Events](https://snippet.dhtmlx.com/sc7ov54z)
