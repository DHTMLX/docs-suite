---
sidebar_label: getProperties
title: getProperties
---          

@short: returns an object with the available configuration attributes of the control

@returns:
param   object      an object with the available attributes of the control and their values


@example:
var form = new dhx.Form("form_container", {
    rows: [
        {
            type: "text",
            name: "text",
            label: "text",                      
            value: "I am a nice text"
        }
    ]
});

form.getItem("text").getProperties();

// the returned object
{
	height: "content",
	helpMessage: "",
	hiddenLabel: false,
	inputType: "text",
	label: "text",
	labelPosition: "top",
	labelWidth: "",
	padding: 0,
	width: "content"
}

@template: api_method
@descr:
The returned object of the **Text** control can contain the following configuration attributes:

<table class="webixdoc_links">
	<tbody>
		 <tr>
			<td class="webixdoc_links0"><b>inputType</b></td>
			<td>(<i>string</i>)  the type of an input: "text", "password", "number".</td>
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
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Text control</td>
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
    </tbody>
</table>





@changelog: added in v7.0


