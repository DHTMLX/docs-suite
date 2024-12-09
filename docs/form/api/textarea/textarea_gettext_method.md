---
sidebar_label: getText()
title: JavaScript Form - getText Textarea Method 
description: You can explore the getText method of the Textarea control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getText()

@short: returns the text value of the textarea with the applied mask

@signature: {'getText(): string;'}

@returns:
A string with the text with the applied mask

@example:
const value = form.getItem("textarea").getText();
// -> "100000.01"

@descr:
The method is used with the [`numberMask`](form/work_with_form.md#numbermask) and [`patternMask`](form/work_with_form.md#patternmask) properties of the Textarea control. It allows getting the value with the applied mask. 

@changelog:
Added in v9.0

**Related:** [Getting the text value of a textarea](form/work_with_form.md#getting-the-text-value-of-an-input-or-a-textarea)