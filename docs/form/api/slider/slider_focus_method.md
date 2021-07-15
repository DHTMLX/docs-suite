---
sidebar_label: focus()
title: JavaScript Form - focus Slider Method 
description: You can explore the focus Slider method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# focus()

@short: sets focus to a thumb of a Slider control

@signature: focus(extra?: boolean): void;

@params:
`extra: boolean` - optional, *true* to select the second thumb; *false* for the first one; *false* by default

@example:
form.getItem("slider").focus(); //sets focus to the first thumb

form.getItem("slider").focus(true); //sets focus to the second thumb
@examplestop:

You can specify the thumb for focusing when a range mode of the Slider control is activated.

@changelog: added in v7.2