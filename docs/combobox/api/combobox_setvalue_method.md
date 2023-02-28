---
sidebar_label: setValue()
title: JavaScript Combo Box - setValue Method 
description: You can explore the setValue method of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setValue()

@short: selects option(s) in ComboBox

@signature: {'setValue(value: Id | Id[]): void;'}

@params:
- `value: (string | number) | (string | number)[]` - the ID(s) of items from data collection that should be selected in Combo Box

@descr:

:::info
Note, that you need to pass the **ID(s)** of Combo options as a value of the **value** parameter.
:::

@example:
// selects one option
combo.setValue(combo.data.getId(1));
 
// selects several options at once
combo.setValue([combo.data.getId(1), combo.data.getId(3)]);

@descr:

**Related sample**: [Combobox. Set value](https://snippet.dhtmlx.com/xl1p7zcx)

[comment]: # (@relatedapi: combobox/api/combobox_getvalue_method.md)

[comment]: # (@related: combobox/work_with_combo.md#settinggetting-values)
