---
sidebar_label: change
title: change
---          

@short: fires on change of the slider value

```todoapi ```

@params:
- newValue		number		the new value set for the slider
- oldValue		number		the previous value of the slider
- isRange		boolean		defines, whether the range mode is activated for the slider


@example:
slider.events.on("Change", function(newValue, oldValue, isRange){
    console.log("The value of a slider has changed to "+slider.getValue());
});

@relatedsample:https://snippet.dhtmlx.com/sc7ov54z	Slider. Slider Events

@template: api_event
@descr:



