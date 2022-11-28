---
sidebar_label: focus()
title: JavaScript Slider - focus Method 
description: You can explore the focus method of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# focus()

@short: sets focus to a thumb of Slider

@signature: focus(extra?: boolean): void;

@params:
- `extra: boolean` - optional, if the range mode is activated, *true* will set focus to the second thumb

@example:
// sets focus to the thumb;  
// if the range mode is activated, sets focus to the first thumb
slider.focus();

// sets focus to the second thumb if the range mode is activated
slider.focus(true);
@examplestop:

The **extra** parameter can be used when a range mode of Slider is activated.

@changelog: added in v7.2