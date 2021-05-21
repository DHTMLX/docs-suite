---
sidebar_label: getValue()
title: getValue()
---          

@short: gets id(s) of items from data collection selected in ComboBox

@signature: {'getValue(asArray?: boolean): string | string[];'}

@params:
`asArray: boolean` - true, to return ids as an array of strings

@returns:
A string, or array that contains id(s) of options selected in ComboBox.

@example:
var id = combo.getValue();
// -> "u1556098582074"
 
// returns ids of selected options as strings
var ids = combo.getValue();
// -> "u1556097609214,u1556097609228,u1556097609244"
 
// returns ids of selected options as an array of strings
var array_ids = combo.getValue(true);
// -> ["u1556097609214", "u1556097609228", "u1556097609244"]

@descr:

**Related sample**: [Combobox. Get Value](https://snippet.dhtmlx.com/ppvjknid)

[comment]: # (@related: combobox/work_with_combo.md#settinggetting-values)

[comment]: # (@relatedapi: combobox/api/combobox_setvalue_method.md)
