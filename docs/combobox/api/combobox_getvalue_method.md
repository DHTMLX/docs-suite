---
sidebar_label: getValue()
title: JavaScript Combo Box - getValue Method 
description: You can explore the getValue method of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getValue()

@short: gets id(s) of items from data collection selected in ComboBox

@signature: {'getValue(asArray?: boolean): Id | Id[];'}

@params:
- `asArray: boolean` - *true*, to return ids as an array of strings

@returns:
A string, number, or array that contains id(s) of options selected in ComboBox.

@example:
const id = combo.getValue();
// -> "u1556098582074"
 
// returns ids of selected options as strings
const ids = combo.getValue();
// -> "u1556097609214,u1556097609228,u1556097609244"
 
// returns ids of selected options as an array of strings
const array_ids = combo.getValue(true);
// -> ["u1556097609214", "u1556097609228", "u1556097609244"]

@descr:

**Related sample**: [Combobox. Get value](https://snippet.dhtmlx.com/ppvjknid)

[comment]: # (@related: combobox/work_with_combo.md#settinggetting-values)

[comment]: # (@relatedapi: combobox/api/combobox_setvalue_method.md)
