---
sidebar_label: setProperties
title: setProperties
---          

@short: allows changing available configuration attributes of the control dynamically

@params:
- arg	string,object      either the id of a radio button, or an object with the available attributes of the RadioGroup control and their new values
- properties	    object      optional, an object with the available attributes of the radio button and their new values



@example:
// 1. Changes values in the configuration of the RadioGroup control
form.getItem("radiogroup").setProperties({
    label: "New label",
    labelPosition: "top",
    helpMessage: " Help information",
    options: {
        rows: [
            {
                id: "first",
                type: "radioButton",
                text: "Select 1",
                value: "1",
            },
            {
                id: "second",
                type: "radioButton",
                text: "Select 2",
                value: "2"
            },
            {
                id: "third",
                type: "radioButton",
                text: "Select 3",
                value: "3"
            }
        ]
    }
});

// 2. Changes values in the configuration of the specified radio button of the control
form.getItem("radiogroup").setProperties("first", {
    text: "New Text",
	padding: 20
});

@template: api_method
@descr:
The method invokes [](the form/api/radiogroup/radiogroup_afterchangeproperties_event.md) and [](form/api/radiogroup/radiogroup_beforechangeproperties_event.md) events.

It is possible to change values of the following configuration attributes of the **RadioGroup** control:

<table class="webixdoc_links">
	<tbody>
		<tr>
			<td class="webixdoc_links0"><b>options</b></td>
			<td>(<i>object</i>) an object with options of a RadioGroup</td>
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
			<td>(<i>string|number</i>) sets padding between a cell and a border of a RadioGroup control</td>
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
			<td class="webixdoc_links0"><b>label</b></td>
			<td>(<i>string</i>) specifies a label for a control</td>
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
			<td class="webixdoc_links0"><b>labelWidth</b></td>
			<td>(<i>string|number</i>) sets the width of the label of a control</td>
		</tr>
    <tr>
			<td class="webixdoc_links0"><b>helpMessage</b></td>
			<td>(<i>string</i>) adds a help message to a control</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>preMessage</b></td>
			<td>(<i>string</i>) a message that contains instructions for interacting with the control, applied for all radio buttons in a group</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>successMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of successful validation of the control value, applied for all radio buttons in a group</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>errorMessage</b></td>
			<td>(<i>string</i>) a message that appears in case of error during validation of the control value, applied for all radio buttons in a group</td>
		</tr>
    </tbody>
</table>

It is possible to change values of the following configuration attributes of a **radio button** of the RadioGroup control:

<table class="webixdoc_links">
	<tbody>
		<tr>
			<td class="webixdoc_links0"><b>text</b></td>
			<td>(<i>string</i>) the text label of a radio button</td>
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
			<td>(<i>string|number</i>) sets padding between a cell and a border of a radio button</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
    </tbody>
</table>

We recommend that you apply the second way of using the method if you want to change the configuration of a separate radio button in the RadioGroup control:

~~~js
form.getItem("radiogroup").setProperties("first", {
    text: "New Text",
	padding: 20
});
~~~

@changelog: added in v7.0


