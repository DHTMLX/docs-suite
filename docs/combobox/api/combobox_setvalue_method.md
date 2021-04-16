---
sidebar_label: setValue
title: setValue
---          

@short: selects option(s) in ComboBox

```todoapi
void setValue(string|number|array ids);
setValue(ids: string[] | string): void;
```

@params:
- ids	 string,number,array	 the ids of items from data collection that should be selected in Combo Box



@example:
// selects one option
combo.setValue(combo.data.getId(1));
 
// selects several options at once
combo.setValue([combo.data.getId(1), combo.data.getId(3)]);


@template: api_method
@descr:



@relatedapi:
combo/api/combobox_getvalue_method.md

@related: combo/work_with_combo.md#settinggettingvalues

@relatedsample:
https://snippet.dhtmlx.com/xl1p7zcx	Combobox. Set Value

@changelog:


