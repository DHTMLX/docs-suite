---
sidebar_label: setProperties
title: setProperties
---          

@short: allows changing available configuration attributes of the control dynamically

@params:
- properties   object      an object with the available attributes of the control and their new values


@example:
form.getItem("colorpicker").setProperties({
    editable: true, 
    labelWidth: "300px",
    label: "New label"
});
 

@template: api_method
@descr:

The method invokes the [](form/api/colorpicker/colorpicker_afterchangeproperties_event.md) and [](form/api/colorpicker/colorpicker_beforechangeproperties_event.md) events.

It is possible to change values of the following configuration attributes of the **ColorPicker** control:

<table class="webixdoc_links">
	<tbody>
		<tr>
			<td class="webixdoc_links0"><b>validation</b></td>
			<td>(<i>function</i>) the validation function, takes as a parameter the value to validate and returns <i>true/false</i> to indicate the result of validation</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
         <tr>
			<td class="webixdoc_links0"><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the ColorPicker control</td>
		</tr>	
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>icon</b></td>
			<td>(<i>string</i>) the name of an <a href="https://docs.dhtmlx.com/suite/helpers__icon.html">icon</a> from the used icon font</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>placeholder</b></td>
			<td>(<i>string</i>) a tip for the input</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>editable</b></td>
			<td>(<i>boolean</i>) allows a user to enter the value of the control manually</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>required</b></td>
			<td>(<i>boolean</i>) defines whether a control is required</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>hiddenLabel</b></td>
			<td>(<i>boolean</i>) invisible label that will be used to identify the input on the server side</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>labelPosition</b></td>
			<td>(<i>string</i>) defines the position of a label: "left"|"top"</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>mode</b></td>
			<td>(<i>string</i>) the mode of a control: "palette" (default), "picker"</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>palette</b></td>
			<td>(<i>array</i>) contains arrays of colors you want to be shown in a colorpicker</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>customColors</b></td>
			<td>(<i>array</i>) shows a section with custom colors in the bottom part of the ColorPicker</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>grayShades</b></td>
			<td>(<i>boolean</i>) defines whether the section with gray shades is displayed in the palette</td>
		</tr>
    </tbody>
</table>


@changelog: added in v7.0


