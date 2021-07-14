---
sidebar_label: focus()
title: JavaScript Slider - focus Method 
description: You can explore the focus method of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# focus()

@short: sets focus to a thumb of Slider

@signature: focus(extra?: boolean): void;

@params:
`extra: boolean` - optional, specifies a thumb to focus (works when a range mode is activated)

@example:

slider.focus();

slider.focus(true);
@examplestop:

You can specify a thumb to focus in a range mode of Slider.  Use `true` to specify the second thumb and `false` for the first one.

@changelog: added in v7.2