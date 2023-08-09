---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Method 
description: You can explore the getProperties method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getProperties()

@short: returns objects with available configuration attributes of Form controls

@signature: {'getProperties(name?: string): object | { [name: string]: object };'}

@params:
- `name|id: string` -  optional, the name of the control or its id (if the name attribute is not defined in the config of the control)

@returns:
An object either with the available attributes of the control and their values or with a set of <i>key:value</i> pairs where <i>key</i> is the name of the control (or its id) and <i>value</i> is an object with the available attributes of the control and their values.

@example:
const form = new dhx.Form("form_container", {
    css: "dhx_widget--bordered",
    rows: [
        {
            type: "input",
            label: "Name",
            icon: "dxi dxi-magnify",
            placeholder: "John Doe",
            name: "name"
        },
        {
            type: "input",
            inputType: "password",
            label: "Password",
            placeholder: "********",
            name: "password"
        },
        {
            type: "button",
            text: "Send",
            size: "medium",
            view: "flat",
            submit: true
        }
    ]
});

form.getProperties();
// -> {name: {…}, password: {…}, u1604577858827: {…}}

// or
form.getProperties("password");
// -> {inputType: "password", label: "Password", placeholder: "********", …}

@descr:

{{note The returned object can contain only the properties that are listed below for each control.}}

Here are two ways of using the method:

- When using the method without the parameter, the method returns an object with a set of _key:value_ pairs where _key_ is the name of the control (or its id) and _value_ is an object with the available attributes of the control and their values:

```js
form.getProperties();
// -> the returned object:
{
    name: {
		autocomplete: false, errorMessage: "", height: "content", helpMessage: "",
		hiddenLabel: false, icon: "dxi dxi-magnify", inputType: "text", …
	},
	password: {
		autocomplete: false, errorMessage: "", height: "content",
		helpMessage: "", hiddenLabel: false, icon: "", inputType: "password", …
	},
    u1604577858827: {
		circle: false, color: "primary", full: false, height: "content",
		icon: "", loading: false, padding: 0, size: "medium", submit: true, …

	}
}
```

- When passing the name of the control (or its id) as a parameter to the method, the method will return an object with the available attributes of the control and their values:

```js
form.getProperties("name");

// -> the returned object:
{
	autocomplete: false,
	css: "",
	errorMessage: "",
	height: "content",
	helpMessage: "",
	hiddenLabel: false,
	icon: "dxi dxi-magnify",
	inputType: "text",
	label: "Name",
	labelPosition: "top",
	labelWidth: "",
	max: undefined,
	maxlength: undefined,
	min: undefined,
	minlength: undefined,
	padding: 0,
	placeholder: "John Doe",
	preMessage: "",
	readOnly: false,
	required: false,
	successMessage: "",
	validation: undefined,
	width: "content"
}
```

## Avatar

The returned object of the **Avatar** control can contain the following properties:

~~~js
{
	css: string,
    width: string | number | "content",
    height: string | number | "content",
    padding: string | number,
    label: string,
    labelWidth: string | number,
    labelPosition: "left" | "top",
    hiddenLabel: boolean,
    helpMessage: string
    required: boolean,
    preMessage: string,
    successMessage: string,
    errorMessage: string,
    validation: (value: object) => boolean,
    readOnly: boolean,
    removeIcon: boolean,
    size: "small" | "medium" | "large" | number,
    circle: boolean,
    alt: string,
    icon: string,
    placeholder: string,
    preview: string,
    accept: string,
    target: string
    fieldName: string,
    autosend: boolean,
    params: { [key: string]: any },
    headerParams: { [key: string]: any },
    updateFromResponse: boolean
}
~~~

You will find the description of these properties [here](form/api/avatar/api_avatar_properties.md).

## Button

The returned object of the **Button** control can contain the following properties:

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

The returned object of the **DatePicker** control can contain the following properties:

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

The returned object of the **Checkbox** control can contain the following properties:

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

The returned object of the **CheckboxGroup** control can contain the following properties:

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

The returned object of a **checkbox** of the **CheckboxGroup** control can contain the following properties:

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

The returned object of the **ColorPicker** control can contain the following properties:

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

The returned object of the **Combo** control can contain the following properties:

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

The returned object of the **Container** control can contain the following properties:

~~~js
{
	css: string,
	height: string | number | "content", 
	padding: string | number,
	width: string, number, "content"
}
~~~

You will find the description of these properties [here](form/api/container/api_container_properties.md).

## Fieldset

The returned object of the **Fieldset** control can contain the following properties:

~~~js
{
    css: string,
    width: string | number | "content",
    height: string | number | "content",
    padding: string | number,

    label: string,
    labelAlignment: "left" | "right" | "center",
    align: "start" | "center" | "end" | "between" | "around" | "evenly"
}
~~~

You will find the description of these properties [here](form/api/fieldset/api_fieldset_properties.md).

## Input

The returned object of the **Input** control can contain the following properties:

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

The returned object of the **RadioGroup** control can contain the following properties:

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

The returned object of a **radio button** of the **RadioGroup** control can contain the following properties:

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

The returned object of the **Select** control can contain the following properties:

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

The returned object of the **SimpleVault** control can contain the following properties:

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

The returned object of the **Slider** control can contain the following properties:

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

The returned object of the **Spacer** control can contain the following properties:

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

The returned object of the **Text** control can contain the following properties:

~~~js
{
	css: string,
	height: string|number|"content",
	helpMessage: string,
	hiddenLabel: boolean,
	inputType: string,
	label: string,
	labelPosition: string,
	labelWidth: string|number,
	padding: string|number,
	width: string|number|"content"
}
~~~

You will find the description of these properties [here](form/api/text/api_text_properties.md).

## Textarea

The returned object of the **Textarea** control can contain the following properties:

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

The returned object of the **TimePicker** control can contain the following properties:

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

**Related API**: [setProperties()](form/api/form_setproperties_method.md)

@changelog: added in v7.0

