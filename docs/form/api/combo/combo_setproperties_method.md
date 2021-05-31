---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Combo Box Method 
description: You can explore the setProperties Combo Box method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(propertyConfig: IComboProps): void;'}

@params:
`properties: object` - an object with the available attributes of the control and their new values

@example:
form.getItem("combo").getProperties({
    label: "New label",
    labelPosition: "top"
});

@descr:

The method invokes the [](form/api/combo/combo_afterchangeproperties_event.md) and [](form/api/combo/combo_beforechangeproperties_event.md) events.

It is possible to change values of the following configuration attributes of the **Combo** control:

<table>
	<tbody>
		<tr>
			<td><b>validation</b></td>
			<td>(<i>function</i>) the validation function, takes as a parameter the value to validate and returns <i>true/false</i> to indicate the result of validation</td>
		</tr>
		<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
         <tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Combo control</td>
		</tr>	
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
		<tr>
			<td><b>placeholder</b></td>
			<td>(<i>string</i>) sets a placeholder in the input of Combo</td>
		</tr>
		<tr>
			<td><b>required</b></td>
			<td>(<i>boolean</i>) defines whether the field with Combo is required (for a form)</td>
		</tr>
		<tr>
			<td><b>readonly</b></td>
			<td>(<i>boolean</i>) makes Combo readonly (it is only possible to select options from the list, without entering words in the input)</td>
		</tr>
		<tr>
			<td><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
		<tr>
			<td><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
		<tr>
			<td><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
		<tr>
			<td><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
		<tr>
			<td><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
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
			<td><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value</td>
		</tr>
		<tr>
			<td><b>itemHeight</b></td>
			<td>(<i>number</i>) sets the height of a cell in the list of options</td>
		</tr>
		<tr>
			<td><b>listHeight</b></td>
			<td>(<i>number</i>) sets the height of the list of options</td>
		</tr>
		<tr>
			<td><b>template</b></td>
			<td>(<i>function</i>) sets a template of displaying options in the popup list</td>
		</tr>
		<tr>
			<td><b>filter</b></td>
			<td>(<i>function</i>) sets a custom function for filtering Combo options. <a href="../../../combobox/customization#custom-filter-for-options">Check the details.</a></td>
		</tr>
		<tr>
			<td><b>multiselection</b></td>
			<td>(<i>boolean</i>) enables selection of multiple options in Combo</td>
		</tr>
		<tr>
			<td><b>selectAllButton</b></td>
			<td>(<i>boolean</i>) defines whether the Select All button should be shown</td>
		</tr>
		<tr>
			<td><b>itemsCount</b></td>
			<td>(<i>boolean, function</i>) shows the total number of selected options</td>
		</tr>
		<tr>
			<td><b>virtual</b></td>
			<td>(<i>boolean</i>) enables dynamic loading of data on scrolling the list of options</td>
		</tr>
    </tbody>
</table>

@changelog: added in v7.0
