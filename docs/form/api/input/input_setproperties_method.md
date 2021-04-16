---
sidebar_label: setProperties
title: setProperties
description: description
---          

@short: allows changing available configuration attributes of the control dynamically

@params:
- properties   object      an object with the available attributes of the control and their new values

@example:
form.getItem("input").setProperties({
    inputType: "text",
    label: "New label", 
    placeholder: "Enter your name",
    minLength: 4
});

@template: api_method
@descr:
The method invokes the [](form/api/input/input_afterchangeproperties_event.md) and [](form/api/input/input_beforechangeproperties_event.md) events.

It is possible to change values of the following configuration attributes of the **Input** control:

``` todo
<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>inputType</b></td>
			<td>(<i>string</i>) the type of an input: "text", "password", "number"</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>min</b></td>
			<td>(<i>string|number</i>) the minimal value allowed in the input. <br/>The attribute works only with the input type: "number". </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>max</b></td>
			<td>(<i>string|number</i>) the maximal value allowed in the input. <br/>The attribute works only with the input type: "number". </td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>validation</b></td>
			<td>(<i>object|function</i>) the rule of input validation
            </td>
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
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Input control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>minlength</b></td>
			<td>(<i>string|number</i>) the minimum number of characters allowed in the input. <br/> The attribute works with the following input types: "text", "password".</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>maxlength</b></td>
			<td>(<i>string|number</i>) the maximum number of characters allowed in the input. <br/>The attribute works with the following input types: "text", "password".</td>
		</tr>	
        <tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>required</b></td>
			<td>(<i>boolean</i>) defines whether a control is required</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>readOnly</b></td>
			<td>(<i>boolean</i>) defines whether an input is readonly</td>
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
			<td class="webixdoc_links0"><b>autocomplete</b></td>
			<td>(<i>boolean</i>) enables/disables the autocomplete functionality of the input</td>
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
    </tbody>
</table>
```

@changelog: added in v7.0
