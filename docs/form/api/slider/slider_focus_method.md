---
sidebar_label: focus()
title: JavaScript Form - focus Slider Method 
description: You can explore the focus method of the Slider control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# focus()

@short: sets focus to a thumb of a Slider control

@signature: focus(extra?: boolean): void;

@params:
`extra: boolean` - optional, if a Slider control is in the range mode, *true* will set focus to the second thumb 

@example:
// sets focus to the thumb;  
// if the range mode is activated, sets focus to the first thumb
form.getItem("slider").focus(); 

// sets focus to the second thumb if the range mode is activated
form.getItem("slider").focus(true);
@examplestop:

@changelog: added in v7.2