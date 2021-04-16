---
sidebar_label: Properties
title: Combo properties
---

<table class="webixdoc_links">
	<tbody>
    	<tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) the type of a control, set it to "combo"</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>name</b></td>
			<td>(<i>string</i>) the name of a control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string</i>) the id of a control, auto-generated if not set</td>
		</tr>
       	<tr>
			<td class="webixdoc_links0"><b>value</b></td>
			<td>(<i>string|array</i>) specifies the values that will appear in the input:
            	<ul>
                	<li>if <i>multiselection:true</i> is set for a combo, the property takes an array of string values as: <i>value: ["1","2","3"]</i>, </li>
                    <li>if <i>multiselection:false</i> is set or the <i>multiselection</i> config is not defined, the property gets either of the two values: <i>value:"1"</i> or <i>value: ["1"]</i></li>
                </ul>
            </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>data</b></td>
			<td>(<i>array</i>) an array of Combo options. Each option is an object with a set of <i>key:value</i> pairs - attributes of options and their values.
            	<ul>
                	<li>The <b>id</b> attribute is returned and goes to form data. This attribute should always be fulfilled to avoid unexpected behavior</li>
                    <li>The <b>value</b> attribute is displayed in the input field</li>
                </ul>
            </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>validation</b></td>
			<td>(<i>function</i>) <a href="https://docs.dhtmlx.com/suite/form__work_with_form.html#validatingform">the validation function</a>, takes as a parameter the value to validate and returns <i>true/false</i> to indicate the result of validation</td>
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
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Combo control</td>
		</tr>	
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>placeholder</b></td>
			<td>(<i>string</i>) sets a placeholder in the input of Combo</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>disabled</b></td>
			<td>(<i>boolean</i>) defines whether a control is enabled (<i>false</i>) or disabled (<i>true</i>)</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>required</b></td>
			<td>(<i>boolean</i>) <a href="https://docs.dhtmlx.com/suite/form__work_with_form.html#validatingform">defines whether the field with Combo is required</a> (for a form)</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>hidden</b></td>
			<td>(<i>boolean</i>) defines whether a control is hidden</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>readonly</b></td>
			<td>(<i>boolean</i>) makes Combo readonly (it is only possible to select options from the list, without entering words in the input)</td>
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
			<td class="webixdoc_links0"><b>itemHeight</b></td>
			<td>(<i>number</i>) sets the height of a cell in the list of options</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>listHeight</b></td>
			<td>(<i>number</i>) sets the height of the list of options</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>template</b></td>
			<td>(<i>function</i>) sets a template of displaying options in the popup list</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>filter</b></td>
			<td>(<i>function</i>) sets a custom function for filtering Combo options. <a href="https://docs.dhtmlx.com/suite/combo__customization.html#customfilterforoptions">Check the details.</a></td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>multiselection</b></td>
			<td>(<i>boolean</i>) enables selection of multiple options in Combo</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>selectAllButton</b></td>
			<td>(<i>boolean</i>) defines whether the Select All button should be shown</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>itemsCount</b></td>
			<td>(<i>boolean, function</i>) shows the total number of selected options</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>virtual</b></td>
			<td>(<i>boolean</i>) enables dynamic loading of data on scrolling the list of options</td>
		</tr>
    </tbody>
</table>
