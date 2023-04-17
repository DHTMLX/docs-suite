---
sidebar_label: Form Combo properties
title: JavaScript Form - Combo Box Properties 
description: You can explore the Properties of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Combo properties

### Usage

~~~js
{
	type: "combo",
	name?: string,
	id?: string,
	data?: object[],
	value?: string | number | array,
	
	css?: string,
	disabled?: boolean,
	height?: string | number | "content", // "content" by default
	hidden?: boolean,
	padding?: string | number,
	required?: boolean, // false by default
	validation?: (value: Id | Id[], text: string | string[]) => boolean,
	width?: string | number | "content", // "content" by default
	
	filter?: (item: any, input: string) => boolean,
	itemHeight?: number | string, // 32 by default
	itemsCount?: boolean | ((count: number) => string),
	listHeight?: number | string, // 224 by default
	multiselection?: boolean, // false by default
	newOptions?: boolean,
	placeholder?: string,
	readOnly?: boolean, // false by default
	selectAllButton?: boolean, // false by default
	template?: (item: any) => string,
	virtual?: boolean, // false by default
	
	hiddenLabel?: boolean, // false by default
	label?: string,
	labelPosition?: "left" | "top", // "top" by default
	labelWidth?: string | number,

	helpMessage?: string,
	preMessage?: string,
	successMessage?: string,
	errorMessage?: string,
}
~~~

### Description

<table>
	<tbody>
    	<tr>
			<td><b>type</b></td>
			<td>(required) the type of a control, set it to "combo"</td>
		</tr>
		<tr>
			<td><b>name</b></td>
			<td>(optional) the name of a control</td>
		</tr>
		<tr>
			<td><b>id</b></td>
			<td>(optional) the id of a control, auto-generated if not set</td>
		</tr>
		<tr>
			<td><b>data</b></td>
			<td>(optional) an array of Combo options. Each option is an object with a set of <i>key:value</i> pairs - attributes of options and their values.
            	<ul>
                	<li>The <b>id</b> attribute is returned and goes to form data. This attribute should always be fulfilled to avoid unexpected behavior</li>
                    <li>The <b>value</b> attribute is displayed in the input field</li>
                </ul>
            </td>
		</tr>
		<tr>
			<td><b>value</b></td>
			<td>(optional) specifies the id(s) of Combo options from data collection which values should appear in the input:
            	<ul>
                	<li>if <code>multiselection:true</code> is set for a combo, the property can be set as an array of string/number values <br>(for example, <i>value: ["id_1","id_2","id_3"]</i>, or <i>value: [1, 2, 3]</i>) </li>
                    <li>if <code>multiselection:false</code> is set or the <code>multiselection</code> config is not defined, the property can be set as a string/number, or an array <br>(for example, <i>value:"id_1"</i>, <i>value: 1</i>, or <i>value: ["id_1"]</i>)</li>
                </ul>
            </td>
		</tr>
       	<tr>
			<td><b>css</b></td>
			<td>(optional) adds style classes to a control</td>
		</tr>
		<tr>
			<td><b>disabled</b></td>
			<td>(optional) defines whether a control is enabled (<i>false</i>) or disabled (<i>true</i>)</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(optional) the height of a control</td>
		</tr>
		<tr>
			<td><b>hidden</b></td>
			<td>(optional) defines whether a control is hidden</td>
		</tr>
		<tr>
			<td><b>padding</b></td>
			<td>(optional) sets padding between a cell and a border of the Combo control</td>
		</tr>
		<tr>
			<td><b>required</b></td>
			<td>(optional) <a href="../../../work_with_form#validating-form">defines whether the field with Combo is required</a> (for a form)</td>
		</tr>
		<tr>
			<td><b>validation</b></td>
			<td>(optional) <a href="../../../work_with_form#validation-rules">a callback function</a> which allows to validate Combo options.<br>The function takes two parameters:
			<ul><li><b>value</b> - (required) the ID(s) of the option(s) to validate</li><li><b>text</b> - (required) the value(s) of the option(s)</li></ul>
			and returns <i>true/false</i> to indicate the result of validation</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(optional) the width of a control</td>
		</tr>
		<tr>
			<td><b>filter</b></td>
			<td>(optional) sets a custom function for filtering Combo options. <a href="../../../../combobox/customization#custom-filter-for-options">Check the details.</a></td>
		</tr>
		<tr>
			<td><b>itemHeight</b></td>
			<td>(optional) sets the height of a cell in the list of options</td>
		</tr>
		<tr>
			<td><b>itemsCount</b></td>
			<td>(optional) shows the total number of selected options</td>
		</tr>
		<tr>
			<td><b>listHeight</b></td>
			<td>(optional) sets the height of the list of options</td>
		</tr>
		<tr>
			<td><b>multiselection</b></td>
			<td>(optional) enables selection of multiple options in Combo</td>
		</tr>
		<tr>
			<td><b>newOptions</b></td>
			<td>(optional) allows end users to add new values into the list of combobox options. To add a new value, the user needs to type it into the input field and either press "Enter" or click on the appeared <i>Create "newValue"</i> option in the drop-down list.</td>
		</tr>
		<tr>
			<td><b>placeholder</b></td>
			<td>(optional) sets a placeholder in the input of Combo</td>
		</tr>
		<tr>
			<td><b>readOnly</b></td>
			<td>(optional) makes Combo readonly (it is only possible to select options from the list, without entering words in the input)</td>
		</tr>
		<tr>
			<td><b>selectAllButton</b></td>
			<td>(optional) defines whether the Select All button should be shown</td>
		</tr>
		<tr>
			<td><b>template</b></td>
			<td>(optional) sets a template of displaying options in the popup list</td>
		</tr>
		<tr>
			<td><b>virtual</b></td>
			<td>(optional) enables dynamic loading of data on scrolling the list of options</td>
		</tr>
		<tr>
			<td><b>hiddenLabel</b></td>
			<td>(optional) invisible label that will be used to identify the input on the server side</td>
		</tr>
		<tr>
			<td><b>label</b></td>
			<td>(optional) specifies a label for a control</td>
		</tr>
		<tr>
			<td><b>labelPosition</b></td>
			<td>(optional) defines the position of a label: "left"|"top"</td>
		</tr>
		<tr>
			<td><b>labelWidth</b></td>
			<td>(optional) sets the width of the label of a control</td>
		</tr>
		<tr>
			<td><b>helpMessage</b></td>
			<td>(optional) adds a help message to a control</td>
		</tr>
		<tr>
			<td><b>preMessage</b></td>
			<td>(optional) a message that contains instructions for interacting with the control</td>
		</tr>
		<tr>
			<td><b>successMessage</b></td>
			<td>(optional) a message that appears in case of successful validation of the control value</td>
		</tr>
		<tr>
			<td><b>errorMessage</b></td>
			<td>(optional) a message that appears in case of error during validation of the control value</td>
		</tr>
    </tbody>
</table>

## Example

<iframe src="https://snippet.dhtmlx.com/wla7u1xq?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

**Related article:** [Combo](form/combo.md)
