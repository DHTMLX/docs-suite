---
sidebar_label: keydown 
title: keydown 
---     

`to do check`

@short: fires on keyboard event in a Slider
fires on a keyboard event when a focus is in a Slider `check`

@signature: 

@params: 
- event - keyboard event 
- `check` 

@example:
slider.events.on("keydown", function(event) {
    console.log("focus on element and keydown", event); 
});
// Сработает при нажатии любой из клавиш, при наличии фокуса на элементе
@examplestop:

**Related sample**: [Slider. Slider Events](https://snippet.dhtmlx.com/sc7ov54z) `to do - add keydown`

@changelog: added in v7.2
