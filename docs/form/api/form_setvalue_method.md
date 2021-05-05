---
sidebar_label: setValue
title: setValue
---          

@short: sets values/states for controls

@signature: {'setValue(obj: FormData | IAnyObj): void;'}


@params:
- values	object		an object with new values/states of controls



@example:
form.setValue({"input_name":"Jack London", "slider_id":10});


@descr:
The **values** object should contain a set of *key:value* pairs where *key* is either the name of the control or the control's id (if the name attribute is not defined in the config of the control)  and *value* is a new value/state of the control. 

{{note If both the name and id of the control are specified in the config of Control, then you need to set the name of the control as *key*.
}}

Depending on the type of a control, the method may take different types of parameters:

- Button, ColorPicker, DatePicker, Input, Select, Textarea, Text, TimePicker - setValue(value: string): void;
- Checkbox, RadioButton - setValue(value: boolean): void;
- Combo - setValue(value: string | string[]): void;
- Slider - setValue(value: string | number | number[]): void;

**Related sample**: [Form. Set Value](https://snippet.dhtmlx.com/7nxbtlzs)

@relatedapi:
form/api/form_getvalue_method.md

@related:form/work_with_form.md#setting-new-values-for-controls



@changelog:added in v6.1 

