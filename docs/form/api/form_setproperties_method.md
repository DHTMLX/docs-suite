---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Method 
description: You can explore the setProperties method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short: allows changing available configuration attributes of Form controls dynamically

@signature: {'setProperties(arg: string | { [name: string]: object }, properties?: object): void;'}

@params:

- `arg: string | object` - either the name of the control or its id (if the name attribute is not defined in the config of the control), or an object with a set of <i>key:value</i> pairs where <i>key</i> is the name of the control (or its id) and <i>value</i> is an object with the available attributes of the control and their new values
- `properties: object` - optional, an object with the available attributes of the control and their new values

@example:
form.setProperties("input_name", {
	label: "new label",
	css: "new-css",
	padding: "20px",
	height: 100,
	maxlength: 15,
	readOnly: true
});

@descr:

The method invokes the [](form/api/form_afterchangeproperties_event.md) and [](form/api/form_beforechangeproperties_event.md) events.

{{note Note, that the method allows changing values only for the properties that are listed below for each control.}}

Here are two ways of using the **setProperties** method:

1\. To change values for the available attributes of a separate control you need to pass two parameters to the method:

- **arg** - (*string*) the name of the control (or its id)
- **properties** - (*object*) an object with available attributes of the control and their new values

For instance:

```js
form.setProperties("input_name", {
  label: "new label",
  css: "new-css",
  padding: "20px",
  height: 100,
  maxlength: 15,
  readOnly: true,
});
```

2\. You can also change values for the available properties of several controls at once. For that, you need to pass one parameter to the method:

- **arg** - (*object*) an object with a set of <i>key:value</i> pairs where <i>key</i> is the name of the control (or its id) and <i>value</i> is an object with the available attributes of the control and their new values

For example:

```js
form.setProperties({
    "simplevault_name": {
        label: "new label",
        css: "new-css",
        padding: 20,
        required: true
    },
    "input_name": {
        label: "new label",
        css: "new-css",
        padding: "20px",
        height: 100,
        maxlength: 15,
        readOnly: true
    }
});
```

## Button

It is possible to change the following configuration attributes of the **Button** control:

~~~js
{
	circle: boolean,
	color: string,
	css: string,
	full: boolean,
	height: string|number|"content",
	icon: string,
	loading: boolean,
	padding: string|number,
	size: string,
	submit: boolean,
	text: string,
	url: string,
	view: string,
	width: string|number|"content",
}
~~~

You will find the description of these properties [here](form/api/button/api_button_properties.md).

## DatePicker

It is possible to change the following configuration attributes of the **DatePicker** control:

~~~js
{
	css: string,
	dateFormat: string,
	disabledDates: function,
	editable: boolean,
	errorMessage: string,
	height: string|number|"content",
	helpMessage: string,
	hiddenLabel: boolean, 
	icon: string,
	label: string,
	labelPosition: string,
	labelWidth: string|number,
	mark: function,
	mode: string,
	padding: string|number,
	placeholder: string,
	preMessage: string,
	required: boolean,
	successMessage: string,
	thisMonthOnly: boolean,
	timeFormat: number,
	timePicker: boolean,
	validation: function,
	valueFormat: string,
	weekNumbers: boolean,
	weekStart: string,
	width: string|number|"content",
}
~~~

You will find the description of these properties [here](form/api/calendar/api_calendar_properties.md).

## Checkbox

It is possible to change the following configuration attributes of the **Checkbox** control:

~~~js
{
	css: string,
	errorMessage: string,
	height: string|number|"content",
	helpMessage: string,
	hiddenLabel: boolean,
	label: string,
	labelPosition: string,
	labelWidth: string|number,
	padding: string|number,
	preMessage: string,
	required: boolean,
	successMessage: string,
	text: string,
	width: string|number|"content",
}
~~~

You will find the description of these properties [here](form/api/checkbox/api_checkbox_properties.md).

## CheckboxGroup

It is possible to change the following configuration attributes of the **CheckboxGroup** control:

~~~js
{
	css: string,
	errorMessage: string,
	height: string | number|"content",
	helpMessage: string,
	hiddenLabel: boolean,
	label: string,
	labelPosition: string,
	labelWidth: string | number,
	options: object,
	padding: string | number,
	preMessage: string,
	required: boolean,
	successMessage: string,
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/checkbox_group/api_checkboxgroup_properties.md).

### Checkbox properties

It is possible to change the following configuration attributes of a **checkbox** of the **CheckboxGroup** control:

~~~js
{
	css: string,
	height: string | number | "content",
	padding: string | number,
	text: string,
	width: string | number | "content"
}
~~~

You will find the description of these properties [here](form/api/checkbox_group/api_checkboxgroup_properties.md).

## ColorPicker

It is possible to change the following configuration attributes of the **ColorPicker** control:

~~~js
{
	css: string,
	customColors: array,
	editable: boolean,
	errorMessage: string,
	grayShades: boolean,
	height: string|number|"content",
	helpMessage: string,
	hiddenLabel: boolean,
	icon: string,
	label: string,
	labelPosition: string,
	labelWidth: string|number,
	mode: string,
	padding: string|number,
	palette: array,
	placeholder: string,
	preMessage: string,
	required: boolean,
	successMessage: string,
	validation: function,
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/colorpicker/api_colorpicker_properties.md).

## Combo

It is possible to change the following configuration attributes of the **Combo** control:

~~~js
{
	css: string,
	errorMessage: string,
	filter: function, 
	height: string|number|"content",
	helpMessage: string,
	hiddenLabel: boolean,
	itemHeight: number,
	itemsCount: boolean | function,
	label: string,
	labelPosition: string,
	labelWidth: string|number,
	listHeight: number,
	multiselection: boolean,
	padding: string|number,
	placeholder: string,
	preMessage: string,
	readOnly: boolean,
	required: boolean,
	selectAllButton: boolean,
	successMessage: string,
	template: function,
	validation: function,
	virtual: boolean,
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/combo/api_combo_properties.md).

## Container

It is possible to change the following configuration attributes of the **Container** control:

~~~js
{
	height: string | number | "content", 
	padding: string | number,
	width: string, number, "content"
}
~~~

You will find the description of these properties [here](form/api/container/api_container_properties.md).

## Input

It is possible to change the following configuration attributes of the **Input** control:

~~~js
{
	autocomplete: boolean,
	css: string,
	errorMessage: string,
	height: string|number|"content",
	helpMessage: string,
	hiddenLabel: boolean,
	icon: string,
	inputType: string,
	label: string,
	labelPosition: string,
	labelWidth: string|number,
	max: string|number,
	maxlength: string|number,
	min: string|number,
	minlength: string|number,
	padding: string|number,
	placeholder: string,
	preMessage: string,
	readOnly: boolean,
	required: boolean,
	successMessage: string,
	validation: object|function,
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/input/api_input_properties.md).

## RadioGroup

It is possible to change the following configuration attributes of the **RadioGroup** control:

~~~js
{
	css: string,
	errorMessage: string,
	height: string|number|"content",
	helpMessage: string,
	hiddenLabel: boolean,
	label: string,
	labelPosition: string,
	labelWidth: string|number,
	options: object,
	padding: string|number,
	preMessage: string,
	required: boolean,
	successMessage: string,
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/radiogroup/api_radiogroup_properties.md).

### RadioButton properties

It is possible to change the following configuration attributes of a **radio button** of the **RadioGroup** control:

~~~js
{
	css: string,
	height: string|number|"content",
	padding: string|number,
	text: string,
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/radiogroup/api_radiogroup_properties.md).

## Select

It is possible to change the following configuration attributes of the **Select** control:

~~~js
{
	css: string,
	errorMessage: string,
	height: string|number|"content",
	helpMessage: string,
	hiddenLabel: boolean,
	icon: string,
	label: string,
	labelPosition: string,
	labelWidth: string|number,
	padding: string|number,
	preMessage: string,
	successMessage: string,
	validation: function,
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/select/api_select_properties.md).

## SimpleVault

It is possible to change the following configuration attributes of the **SimpleVault** control:

~~~js
{
	css: string,
	errorMessage: string,
	fieldName: string,
	height: string|number|"content",
	helpMessage: string,
	hiddenLabel: boolean,
	label: string,
	labelPosition: string,
	labelWidth: string|number,
	padding: string|number,
	params: object,
	preMessage: string,
	required: boolean,
	singleRequest: boolean,
	successMessage: string,
	target: string,
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/simplevault/api_simplevault_properties.md).

## Slider

It is possible to change the following configuration attributes of the **Slider** control:

~~~js
{
	css: string,
	height: string|number|"content",
	helpMessage: string,
	hiddenLabel: boolean,
	inverse: boolean,
	label: string,
	labelPosition: string,
	labelWidth: string|number,
	majorTick: number,
	max: number,
	min: number,
	mode: string,
	padding: string|number,
	range: boolean,
	step: number,
	tick: number,
	tickTemplate: function,
	tooltip: boolean, 
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/slider/api_slider_properties.md).

## Spacer

It is possible to change the following configuration attributes of the **Spacer** control:

~~~js
{
	css: string,
	height: string|number|"content"
	padding: string|number
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/spacer/api_spacer_properties.md).

## Text

It is possible to change the following configuration attributes of the **Text** control:

~~~js
{
	css: string,
	errorMessage: string,
	height: string|number|"content",
	helpMessage: string,
	hiddenLabel: boolean,
	inputType: string,
	label: string,
	labelPosition: string,
	labelWidth: string|number,
	padding: string|number,
	preMessage: string,
	successMessage: string,
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/text/api_text_properties.md).

## Textarea

It is possible to change the following configuration attributes of the **Textarea** control:

~~~js
{
	css: string,
	errorMessage: string,
	height: string|number|"content",
	helpMessage: string,
	hiddenLabel: boolean,
	label: string,
	labelPosition: string,
	labelWidth: string|number,
	maxlength: string|number,
	minlength: string|number,
	padding: string|number,
	placeholder: string,
	preMessage: string,
	readOnly: boolean,
	required: boolean,
	successMessage: string,
	validation: object|function,
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/textarea/api_textarea_properties.md).

## TimePicker

It is possible to change the following configuration attributes of the **TimePicker** control:

~~~js
{
	controls: boolean,
	css: string,
	editable: boolean,
	errorMessage: string,
	height: string|number|"content",
	helpMessage: string,
	hiddenLabel: boolean,
	icon: string,
	label: string,
	labelPosition: string,
	labelWidth: string|number,
	padding: string|number,
	placeholder: string,
	preMessage: string,
	required: boolean,
	successMessage: string,
	timeFormat: number,
	validation: function,
	valueFormat: string,
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/timepicker/api_timepicker_properties.md).

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/form_getproperties_method.md)
