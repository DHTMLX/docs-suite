---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Checkbox Group Method 
description: You can explore the setProperties method of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setProperties()

@short:  allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(arg?: string | object, properties?: object): void;'}

@params:
- `arg: string | object` - optional, either the id of a checkbox, or an object with the available attributes of the CheckboxGroup control and their new values
- `properties: object` - optional, an object with the available attributes of the checkbox and their new values

@example:
// 1. Changes values in the configuration of the CheckboxGroup control
form.getItem("checkboxGroup").setProperties({
    label: "New label",
    labelPosition: "left",
    options: {
        rows: [
            {
                id: "first",
                type: "checkbox",
                text: "New Select 1",
            },
            {
                id: "second",
                type: "checkbox",
                text: "New Select 2",
            },
            {
                id: "third",
                type: "checkbox",
                text: "New Select 3",
            },
        ]
    }
});

// 2. Changes values in the configuration of the specified checkbox of CheckboxGroup
form.getItem("checkboxGroup").setProperties("first", {
    text: "New Text",
	padding: 20
});

@descr:

We recommend that you apply the second way of using the method if you want to change the configuration of a separate checkbox in the CheckboxGroup control:

~~~js
form.getItem("checkboxGroup").setProperties("first", {
    text: "New Text",
    padding: 20
});
~~~

:::info
The method invokes the [](form/api/checkbox_group/checkboxgroup_afterchangeproperties_event.md) and [](form/api/checkbox_group/checkboxgroup_beforechangeproperties_event.md) events.
:::

It is possible to change values of the following configuration attributes of the **CheckboxGroup** control:

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

It is possible to change values of the following configuration attributes of a **checkbox** of the CheckboxGroup control:

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

@changelog: added in v7.0
