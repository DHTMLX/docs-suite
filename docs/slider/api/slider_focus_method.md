---
sidebar_label: focus()
title: JavaScript Slider - focus Method 
description: You can explore the focus method of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# focus()

@short: sets focus to a thumb of Slider

@signature: focus(extra?: boolean): void;

@params:
`extra: boolean` - optional, *true* to select the second thumb; *false* for the first one; *false* by default

@example:

slider.focus(); //sets focus to the first thumb

slider.focus(true); //sets focus to the second thumb
@examplestop:

You can specify the thumb for focusing when a range mode of Slider is activated.

@changelog: added in v7.2