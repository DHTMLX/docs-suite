---
sidebar_label: getValue()
title: JavaScript Form - getValue Combo Box Method 
hide_title: true
description: You can explore the getValue Combo Box method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# getValue()

@short: returns the current value of a Combo control

@signature: {'getValue(): string | string[];'}

@returns:
A string, or array with the current value of the control.

@example:
var value = form.getItem("combo").getValue();
// -> "2"

@descr:

The method returns the current string value, if *multiselection:false* is set or the multiselection config is not defined, otherwise - returns an array of string value of a Combo control.
