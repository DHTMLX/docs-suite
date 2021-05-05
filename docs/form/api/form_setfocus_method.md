---
sidebar_label: setFocus
title: setFocus
---          

@short: sets focus to a Form control by its id

@signature: {'setFocus(name: string): void;'}


@params:
- name|id	string  the name of the control or its id (if the name attribute is not defined in the config of the control)

@example:
form.setFocus("checkbox");



@descr:
{{note The method is applicable to Button, DatePicker, Checkbox, CheckboxGroup, ColorPicker, Combo, Input, RadioGroup, Select, Slider, Textarea, TimePicker controls of Form.}}

**Related sample**: [Form. Set Focus On Control](https://snippet.dhtmlx.com/tye82oqs)

@related: form/work_with_form.md#setting-focus-to-a-control

@changelog:added in v7.0
