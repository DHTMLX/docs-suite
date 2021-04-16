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
			type: "button",
			name: "button",
			text: "Send",
			size: "medium",
			view: "flat",
			submit: true,
			color: "primary"
		}
    ]
});

form.getItem("button").getProperties();

// -> the returned object:
{
	circle: false, 
	color: "primary",
	full: false,
	height: "content",
	icon: "",
	loading: false,
	padding: 0,
	size: "medium",
	submit: true,
	text: "Send",
	url: "",
	view: "flat",
	width: "content"
}

@template: api_method
@descr:

The returned object of the **Button** control can contain the following configuration attributes:

<table class="webixdoc_links">
	<tbody>
		<tr>
			<td class="webixdoc_links0"><b>text</b></td>
			<td>(<i>string</i>) the text label of a button </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>submit</b></td>
			<td>(<i>boolean</i>) enables the button to send form data to a server </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>url</b></td>
			<td>(<i>string</i>) the URL the post request with form data will be sent to (if the <b>submit</b> property is set to <i>true</i>)</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control </td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>icon</b></td>
			<td>(<i>string</i>) an <a href="https://docs.dhtmlx.com/suite/helpers__icon.html">icon</a> of the button</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>view</b></td>
			<td>(<i>string</i>) defines the look of a button: "flat"|"link"</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>size</b></td>
			<td>(<i>string</i>) defines the size of a button: "small"|"medium"</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>color</b></td>
			<td>(<i>string</i>) defines the color scheme of a button: "danger"|"secondary"|"primary"|"success"</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>full</b></td>
			<td>(<i>boolean</i>) extends a button to the full width of a form</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>circle</b></td>
			<td>(<i>boolean</i>) makes the corners of a button round</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>loading</b></td>
			<td>(<i>boolean</i>) adds a spinner into a button</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of a button control</td>
		</tr>
    </tbody>
</table>


@changelog: added in v7.0


