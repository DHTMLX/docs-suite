---
sidebar_label: setValue
title: setValue
---          

@short: selects option(s) in ComboBox

@signature: {'setValue(ids: string[] | string): void;'}

@params:
- ids	 string,number,array	 the ids of items from data collection that should be selected in Combo Box

@example:
// selects one option
combo.setValue(combo.data.getId(1));
 
// selects several options at once
combo.setValue([combo.data.getId(1), combo.data.getId(3)]);



@descr:



@relatedapi:
combobox/api/combobox_getvalue_method.md

@related: combobox/work_with_combo.md#settinggettingvalues

**Related sample**:
- [Combobox. Set Value](https://snippet.dhtmlx.com/xl1p7zcx)




