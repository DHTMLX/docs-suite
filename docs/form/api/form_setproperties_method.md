---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Method 
description: You can explore the setProperties method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# setProperties()

@short: allows changing available configuration attributes of Form controls dynamically

@signature: {'setProperties(arg: string | { [name: string]: IFormProps }, props?: IFormProps): void;'}

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

<table>
	<tbody>
		<tr>
			<td><b>circle</b></td>
			<td>(<i>boolean</i>) makes the corners of a button round</td>
		</tr>
		<tr>
			<td><b>color</b></td>
			<td>(<i>string</i>) defines the color scheme of a button: "danger"|"secondary"|"primary"|"success"</td>
		</tr>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control </td>
		</tr>
		<tr>
			<td><b>full</b></td>
			<td>(<i>boolean</i>) extends a button to the full width of a form</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control </td>
		</tr>
		<tr>
			<td><b>icon</b></td>
			<td>(<i>string</i>) an <a href="../../../helpers/icon">icon</a> of the button</td>
		</tr>
		<tr>
			<td><b>loading</b></td>
			<td>(<i>boolean</i>) adds a spinner into a button</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of a button control</td>
		</tr>
		<tr>
			<td><b>size</b></td>
			<td>(<i>string</i>) defines the size of a button: "small"|"medium"</td>
		</tr>
		<tr>
			<td><b>submit</b></td>
			<td>(<i>boolean</i>) enables the button to send form data to a server </td>
		</tr>
		<tr>
			<td><b>text</b></td>
			<td>(<i>string</i>) the text label of a button </td>
		</tr>
		<tr>
			<td><b>url</b></td>
			<td>(<i>string</i>) the URL the post request with form data will be sent to (if the <b>submit</b> property is set to <i>true</i>)</td>
		</tr>
		<tr>
			<td><b>view</b></td>
			<td>(<i>string</i>) defines the look of a button: "flat"|"link"</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control </td>
		</tr>
    </tbody>
</table>

## DatePicker

It is possible to change the following configuration attributes of the **DatePicker** control:

<table>
	<tbody>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control </td>
		</tr>
		<tr>
			<td><b>dateFormat</b></td>
			<td>(<i>string</i>) defines the format of dates in the calendar, "%d/%m/%y" by default</td>
		</tr>
    	<tr>
			<td><b>disabledDates</b></td>
			<td>(<i>function</i>) allows disabling some date intervals, day labels are dimmed </td>
		</tr>
		<tr>
			<td><b>editable</b></td>
			<td>(<i>boolean</i>) allows a user to enter the value of the control manually, <i>false</i> by default </td>
		</tr>
		<tr>
			<td><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control </td>
		</tr>
    	<tr>
			<td><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
    	<tr>
			<td><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
		<tr>
			<td><b>icon</b></td>
			<td>(<i>string</i>) the name of an <a href="../../../helpers/icon">icon</a> from the used icon font</td>
		</tr>
		<tr>
			<td><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
		<tr>
			<td><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
    	<tr>
			<td><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
		<tr>
			<td><b>mark</b></td>
			<td>(<i>function</i>) adds a CSS class to specific days </td>
		</tr>
    	<tr>
			<td><b>mode</b></td>
			<td>(<i>string</i>) specifies the mode of displaying a calendar: "calendar" (default), "month", "year" </td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of a DatePicker control</td>
		</tr>	
		<tr>
			<td><b>placeholder</b></td>
			<td>(<i>string</i>) a tip for the input </td>
		</tr>
		<tr>
			<td><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control</td>
		</tr>
		<tr>
			<td><b>required</b></td>
			<td>(<i>boolean</i>) defines whether a control is required </td>
		</tr>
		<tr>
			<td><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value</td>
		</tr>
		<tr>
			<td><b>thisMonthOnly</b></td>
			<td>(<i>boolean</i>) hides dates of the previous/next months relative to the currently displayed one</td>
		</tr>
		<tr>
			<td><b>timeFormat</b></td>
			<td>(<i>number</i>) defines the time format of a timepicker: 12-hour or 24-hour (12 or 24 (default), correspondingly)</td>
		</tr>
    	<tr>
			<td><b>timePicker</b></td>
			<td>(<i>boolean</i>) adds a timepicker into a calendar, <i>false</i> by default</td>
		</tr>
		<tr>
			<td><b>validation</b></td>
			<td>(<i>function</i>) the validation function, takes as a parameter the value to validate and returns <i>true/false</i> to indicate the result of validation</td>
		</tr>
    	<tr>
			<td><b>valueFormat</b></td>
			<td>(<i>string</i>) defines the format of the value that will be returned while getting the current value of the control: "string" (default) or "Date"</td>
		</tr>
		<tr>
			<td><b>weekNumbers</b></td>
			<td>(<i>boolean</i>) defines whether to show the numbers of weeks, <i>false</i> by default</td>
		</tr>
    	<tr>
			<td><b>weekStart</b></td>
			<td>(<i>string</i>) sets the starting day of the week: "monday" or "sunday" (default) </td>
		</tr>
    	<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control </td>
		</tr>
    </tbody>
</table>

## Checkbox

It is possible to change the following configuration attributes of the **Checkbox** control:

<table>
	<tbody>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
    	<tr>
			<td><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
		<tr>
			<td><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
		<tr>
			<td><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
		<tr>
			<td><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
    	<tr>
			<td><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
    	<tr>
			<td><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of a Checkbox control</td>
		</tr>
    	<tr>
			<td><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control</td>
		</tr>
		<tr>
			<td><b>required</b></td>
			<td>(<i>boolean</i>) defines whether a control is required</td>
		</tr>
    	<tr>
			<td><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value</td>
		</tr>
		<tr>
			<td><b>text</b></td>
			<td>(<i>string</i>) optional, the text value of a control. It's placed to the right of the control.</td>
		</tr>
    	<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
    </tbody>
</table>

## CheckboxGroup

It is possible to change the following configuration attributes of the **CheckboxGroup** control:

<table>
	<tbody>
    	<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
    	<tr>
			<td><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
		<tr>
			<td><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
		<tr>
			<td><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
		<tr>
			<td><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
    	<tr>
			<td><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
    	<tr>
			<td><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
		<tr>
			<td><b>options</b></td>
			<td>(<i>object</i>) an object with options of a CheckboxGroup
			</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of a CheckboxGroup control</td>
		</tr>
   	 	<tr>
			<td><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control</td>
		</tr>
		<tr>
			<td><b>required</b></td>
			<td>(<i>boolean</i>) defines whether a control is required</td>
		</tr>
		<tr>
			<td><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value</td>
		</tr>
    	<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
    </tbody>
</table>

### Checkbox properties

<table>
	<tbody>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a a checkbox</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a checkbox</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of a checkbox</td>
		</tr>
		<tr>
			<td><b>text</b></td>
			<td>(<i>string</i>) the text label of a checkbox</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a checkbox</td>
		</tr>
	</tbody>
</table>

## ColorPicker

It is possible to change the following configuration attributes of the **ColorPicker** control:

<table>
	<tbody>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
		<tr>
			<td><b>customColors</b></td>
			<td>(<i>array</i>) shows a section with custom colors in the bottom part of the ColorPicker</td>
		</tr>
		<tr>
			<td><b>editable</b></td>
			<td>(<i>boolean</i>) allows a user to enter the value of the control manually</td>
		</tr>
		<tr>
			<td><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value</td>
		</tr>
		<tr>
			<td><b>grayShades</b></td>
			<td>(<i>boolean</i>) defines whether the section with gray shades is displayed in the palette</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
		<tr>
			<td><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
		<tr>
			<td><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
		<tr>
			<td><b>icon</b></td>
			<td>(<i>string</i>) the name of an <a href="../../../helpers/icon">icon</a> from the used icon font</td>
		</tr>
		<tr>
			<td><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
		<tr>
			<td><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
		<tr>
			<td><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
		<tr>
			<td><b>mode</b></td>
			<td>(<i>string</i>) the mode of a control: "palette" (default), "picker"</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the ColorPicker control</td>
		</tr>
		<tr>
			<td><b>palette</b></td>
			<td>(<i>array</i>) contains arrays of colors you want to be shown in a colorpicker</td>
		</tr>
		<tr>
			<td><b>placeholder</b></td>
			<td>(<i>string</i>) a tip for the input</td>
		</tr>
		<tr>
			<td><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control</td>
		</tr>
		<tr>
			<td><b>required</b></td>
			<td>(<i>boolean</i>) defines whether a control is required</td>
		</tr>
		<tr>
			<td><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value</td>
		</tr>
		<tr>
			<td><b>validation</b></td>
			<td>(<i>function</i>) the validation function, takes as a parameter the value to validate and returns <i>true/false</i> to indicate the result of validation</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
    </tbody>
</table>

## Combo

It is possible to change the following configuration attributes of the **Combo** control:

<table>
	<tbody>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
		<tr>
			<td><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value</td>
		</tr>
		<tr>
			<td><b>filter</b></td>
			<td>(<i>function</i>) sets a custom function for filtering Combo options. <a href="../../../combobox/customization#custom-filter-for-options">Check the details.</a></td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
		<tr>
			<td><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
		<tr>
			<td><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
		<tr>
			<td><b>itemHeight</b></td>
			<td>(<i>number</i>) sets the height of a cell in the list of options</td>
		</tr>
		<tr>
			<td><b>itemsCount</b></td>
			<td>(<i>boolean, function</i>) shows the total number of selected options</td>
		</tr>
		<tr>
			<td><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
		<tr>
			<td><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
		<tr>
			<td><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
		<tr>
			<td><b>listHeight</b></td>
			<td>(<i>number</i>) sets the height of the list of options</td>
		</tr>
		<tr>
			<td><b>multiselection</b></td>
			<td>(<i>boolean</i>) enables selection of multiple options in Combo</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Combo control</td>
		</tr>
		<tr>
			<td><b>placeholder</b></td>
			<td>(<i>string</i>) sets a placeholder in the input of Combo</td>
		</tr>
		<tr>
			<td><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control</td>
		</tr>
		<tr>
			<td><b>readOnly</b></td>
			<td>(<i>boolean</i>) makes Combo readonly (it is only possible to select options from the list, without entering words in the input)</td>
		</tr>
		<tr>
			<td><b>required</b></td>
			<td>(<i>boolean</i>) defines whether the field with Combo is required (for a form)</td>
		</tr>
		<tr>
			<td><b>selectAllButton</b></td>
			<td>(<i>boolean</i>) defines whether the Select All button should be shown</td>
		</tr>
		<tr>
			<td><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value</td>
		</tr>
		<tr>
			<td><b>template</b></td>
			<td>(<i>function</i>) sets a template of displaying options in the popup list</td>
		</tr>
		<tr>
			<td><b>validation</b></td>
			<td>(<i>function</i>) the validation function, takes as a parameter the value to validate and returns <i>true/false</i> to indicate the result of validation</td>
		</tr>
		<tr>
			<td><b>virtual</b></td>
			<td>(<i>boolean</i>) enables dynamic loading of data on scrolling the list of options</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
    </tbody>
</table>

## Container

It is possible to change the following configuration attributes of the **Container** control:

- `height` - *string, number, "content"* - the height of a control
- `padding` - *string, number* - sets padding between a cell and a border of a control
- `width` - *string, number, "content"* - the width of a control

## Input

It is possible to change the following configuration attributes of the **Input** control:

<table>
	<tbody>
		<tr>
			<td><b>autocomplete</b></td>
			<td>(<i>boolean</i>) enables/disables the autocomplete functionality of the input</td>
		</tr>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
		<tr>
			<td><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
		<tr>
			<td><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
		<tr>
			<td><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
		<tr>
			<td><b>icon</b></td>
			<td>(<i>string</i>) the name of an <a href="../../../helpers/icon">icon</a> from the used icon font</td>
		</tr>
        <tr>
			<td><b>inputType</b></td>
			<td>(<i>string</i>) the type of an input: "text", "password", "number"</td>
		</tr>
		<tr>
			<td><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
        <tr>
			<td><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
        <tr>
			<td><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
		<tr>
			<td><b>max</b></td>
			<td>(<i>string|number</i>) the maximal value allowed in the input. <br/>The attribute works only with the input type: "number". </td>
		</tr>
		<tr>
			<td><b>maxlength</b></td>
			<td>(<i>string|number</i>) the maximum number of characters allowed in the input. <br/>The attribute works with the following input types: "text", "password".</td>
		</tr>	
		<tr>
			<td><b>min</b></td>
			<td>(<i>string|number</i>) the minimal value allowed in the input. <br/>The attribute works only with the input type: "number". </td>
		</tr>
		<tr>
			<td><b>minlength</b></td>
			<td>(<i>string|number</i>) the minimum number of characters allowed in the input. <br/> The attribute works with the following input types: "text", "password".</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Input control</td>
		</tr>
		<tr>
			<td><b>placeholder</b></td>
			<td>(<i>string</i>) a tip for the input</td>
		</tr>
		<tr>
			<td><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control</td>
		</tr>
		<tr>
			<td><b>readOnly</b></td>
			<td>(<i>boolean</i>) defines whether an input is readonly</td>
		</tr>
        <tr>
			<td><b>required</b></td>
			<td>(<i>boolean</i>) defines whether a control is required</td>
		</tr>
		<tr>
			<td><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value</td>
		</tr>
        <tr>
			<td><b>validation</b></td>
			<td>(<i>object|function</i>) the rule of input validation
            </td>
		</tr>
        <tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
    </tbody>
</table>

## RadioGroup

It is possible to change the following configuration attributes of the **RadioGroup** control:

<table>
	<tbody>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
		<tr>
			<td><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value, applied for all radio buttons in a group</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
		<tr>
			<td><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
		<tr>
			<td><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
		<tr>
			<td><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
    	<tr>
			<td><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
    	<tr>
			<td><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
		<tr>
			<td><b>options</b></td>
			<td>(<i>object</i>) an object with options of a RadioGroup</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of a RadioGroup control</td>
		</tr>
		<tr>
			<td><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control, applied for all radio buttons in a group</td>
		</tr>
		<tr>
			<td><b>required</b></td>
			<td>(<i>boolean</i>) defines whether a control is required</td>
		</tr>
		<tr>
			<td><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value, applied for all radio buttons in a group</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
    </tbody>
</table>

### RadioButton properties

<table>
	<tbody>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of a radio button</td>
		</tr>
		<tr>
			<td><b>text</b></td>
			<td>(<i>string</i>) the text label of a radio button</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
    </tbody>
</table>

## Select

It is possible to change the following configuration attributes of the **Select** control:

<table>
	<tbody>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
		<tr>
			<td><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
		<tr>
			<td><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
		<tr>
			<td><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
		<tr>
			<td><b>icon</b></td>
			<td>(<i>string</i>) the name of an <a href="../../../helpers/icon">icon</a> from the used icon font</td>
		</tr>
		<tr>
			<td><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
		<tr>
			<td><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
		<tr>
			<td><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Select control</td>
		</tr>	
		<tr>
			<td><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control</td>
		</tr>
		<tr>
			<td><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value</td>
		</tr>
		<tr>
			<td><b>validation</b></td>
			<td>(<i>function</i>) the validation function</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
    </tbody>
</table>

## SimpleVault

It is possible to change the following configuration attributes of the **SimpleVault** control:

<table>
	<tbody>
    	<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
    	<tr>
			<td><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value</td>
		</tr>
    	<tr>
			<td><b>fieldName</b></td>
			<td>(<i>string</i>) the name of the file field in the form data that is sent to the server </td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
		<tr>
			<td><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
		<tr>
			<td><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
		<tr>
			<td><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
    	<tr>
			<td><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
    	<tr>
			<td><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the SimpleVault control</td>
		</tr>
    	<tr>
			<td><b>params</b></td>
			<td>(<i>object</i>) extra parameters for sending an XMLHttpRequest</td>
		</tr>
		<tr>
			<td><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control</td>
		</tr>
		<tr>
			<td><b>required</b></td>
			<td>(<i>boolean</i>) defines whether a control is required</td>
		</tr>
    	<tr>
			<td><b>singleRequest</b></td>
			<td>(<i>boolean</i>) defines whether files are sent in one request</td>
		</tr>
		<tr>
			<td><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value</td>
		</tr>
    	<tr>
			<td><b>target</b></td>
			<td>(<i>string</i>) mandatory, sets an URL to the server-side script that will process file upload</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
  	</tbody>
</table>

## Slider

It is possible to change the following configuration attributes of the **Slider** control:

<table>
	<tbody>
    	<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
    	<tr>
			<td><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
		<tr>
			<td><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
		<tr>
			<td><b>inverse</b></td>
			<td>(<i>boolean</i>) enables/disables the inverse slider mode</td>
		</tr>
		<tr>
			<td><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
    	<tr>
			<td><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
    	<tr>
			<td><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
		<tr>
			<td><b>majorTick</b></td>
			<td>(<i>number</i>) sets interval of rendering numeric values on the slider scale</td>
		</tr>
    	<tr>
			<td><b>max</b></td>
			<td>(<i>number</i>) the maximal value of slider, 100 by default</td>
		</tr>
    	<tr>
			<td><b>min</b></td>
			<td>(<i>number</i>) the minimal value of slider, 0 by default</td>
		</tr>
    	<tr>
			<td><b>mode</b></td>
			<td>(<i>string</i>) the direction of the Slider scale, "horizontal" by default</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Slider control</td>
		</tr>	
    	<tr>
			<td><b>range</b></td>
			<td>(<i>boolean</i>) enables/disables the possibility to select a range of values on the slider</td>
		</tr>
    	<tr>
			<td><b>step</b></td>
			<td>(<i>number</i>) the step the slider thumb will be moved with, 1 by default</td>
		</tr>
		<tr>
			<td><b>tick</b></td>
			<td>(<i>number</i>) sets the interval of steps for rendering the slider scale</td>
		</tr>
    	<tr>
			<td><b>tickTemplate</b></td>
			<td>(<i>function</i>) sets a template for rendering values on the scale</td>
		</tr>
    	<tr>
			<td><b>tooltip</b></td>
			<td>(<i>boolean</i>) enables prompt messages with ticks values on hovering over the slider thumb, true by default</td>
		</tr>
    	<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
  	</tbody>
</table>

## Spacer

It is possible to change the following configuration attributes of the **Spacer** control:

<table>
	<tbody>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
        <tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Spacer control</td>
		</tr>	
		<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
    </tbody>
</table>

## Text

It is possible to change the following configuration attributes of the **Text** control:

<table>
	<tbody>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
		<tr>
			<td><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
		<tr>
			<td><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
		<tr>
			<td><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
		<tr>
			<td><b>inputType</b></td>
			<td>(<i>string</i>)  the type of an input: "text", "password", "number".</td>
		</tr>
		<tr>
			<td><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
		<tr>
			<td><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
		<tr>
			<td><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
        <tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Text control</td>
		</tr>
		<tr>
			<td><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control</td>
		</tr>
		<tr>
			<td><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
    </tbody>
</table>

## Textarea

It is possible to change the following configuration attributes of the **Textarea** control:

<table>
	<tbody>
    	<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
    	<tr>
			<td><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value	</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
		<tr>
			<td><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
		<tr>
			<td><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
		<tr>
			<td><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
    	<tr>
			<td><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
    	<tr>
			<td><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
		<tr>
			<td><b>maxlength</b></td>
			<td>(<i>string|number</i>) the maximum number of characters allowed in the textarea</td>
		</tr>	
		<tr>
			<td><b>minlength</b></td>
			<td>(<i>string|number</i>) the minimum number of characters allowed in the textarea</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Textarea control</td>
		</tr>
		<tr>
			<td><b>placeholder</b></td>
			<td>(<i>string</i>) a tip for the textarea</td>
		</tr>
		<tr>
			<td><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control</td>
		</tr>
    	<tr>
			<td><b>readOnly</b></td>
			<td>(<i>boolean</i>) defines whether a textarea is readonly</td>
		</tr>
		<tr>
			<td><b>required</b></td>
			<td>(<i>boolean</i>) defines whether a control is required</td>
		</tr>
		<tr>
			<td><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value</td>
		</tr>
		<tr>
			<td><b>validation</b></td>
			<td>(<i>object,function</i>) the rule of input validation
	    	</td>
		</tr>
    	<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
    </tbody>
</table>

## TimePicker

It is possible to change the following configuration attributes of the **TimePicker** control:

<table>
	<tbody>
		<tr>
			<td><b>controls</b></td>
			<td>(<i>boolean</i>) defines whether a timepicker is equipped with the Close and Save buttons</td>
		</tr>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
    	<tr>
			<td><b>editable</b></td>
			<td>(<i>boolean</i>) allows a user to enter the value of the control manually</td>
		</tr>
		<tr>
			<td><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value</td>
		</tr>
    	<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
		<tr>
			<td><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
    	<tr>
			<td><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
		<tr>
			<td><b>icon</b></td>
			<td>(<i>string</i>) the name of an <a href="../../../helpers/icon">icon</a> from the used icon font</td>
		</tr>
		<tr>
			<td><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
    	<tr>
			<td><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
    	<tr>
			<td><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
        <tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the TimePicker control</td>
		</tr>
		<tr>
			<td><b>placeholder</b></td>
			<td>(<i>string</i>) a tip for the input</td>
		</tr>
    	<tr>
			<td><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control</td>
		</tr>
		<tr>
			<td><b>required</b></td>
			<td>(<i>boolean</i>) defines whether a control is required</td>
		</tr>
		<tr>
			<td><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value</td>
		</tr>
		<tr>
			<td><b>timeFormat</b></td>
			<td>(<i>number</i>) defines what clock format is activated: the 12-hour or 24-hour one</td>
		</tr>
		<tr>
			<td><b>validation</b></td>
			<td>(<i>function</i>) the validation function</td>
		</tr>
		<tr>
			<td><b>valueFormat</b></td>
			<td>(<i>string</i>) defines the format of the value to be applied when working with the events of the timepicker control: "string", "timeObject"</td>
		</tr>
    	<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
    </tbody>
</table>

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/form_getproperties_method.md)
