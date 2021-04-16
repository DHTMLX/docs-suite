---
sidebar_label: getValue
title: getValue
---          

@short: gets id(s) of items from data collection selected in ComboBox

@signature: getValue(asArray?: boolean): string[] | string;

@params:
- asArray 	boolean 	true, to return ids as an array of strings

@returns:
- values 	string,array 	id(s) of options selected in ComboBox

@example:
var id = combo.getValue();
// -> "u1556098582074"
 
// returns ids of selected options as strings
var ids = combo.getValue();
// -> "u1556097609214,u1556097609228,u1556097609244"
 
// returns ids of selected options as an array of strings
var array_ids = combo.getValue(true);
// -> ["u1556097609214", "u1556097609228", "u1556097609244"]


@template: api_method
@descr:

@related: combo/work_with_combo.md#settinggettingvalues

@relatedapi:
combo/api/combobox_setvalue_method.md

@relatedsample:
https://snippet.dhtmlx.com/ppvjknid	Combobox. Get Value

@changelog:


