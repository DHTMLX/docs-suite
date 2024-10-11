---
sidebar_label: getText()
title: JavaScript Form - getText Input Method 
description: You can explore the getText method of the Input control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getText()

@short: returns the text value of an Input control

@signature: {'getText(): string;'}

@returns:
A string with the current text of the control.

@example:
const value = form.getItem("input").getText();
// -> "100000.01"

@descr:
The method is used with the `numberMask` and `patternMask` properties of the Input control. It allows getting the value a mask has been applied to. 

For example, the input value is `100000.01`, the value displayed in the input is `$ 100,000.01` and the resulting value will be:

- `100000.01` for the "number" input type
- `"100000.01"` for the "text" input type

@changelog:
Added in v9.0