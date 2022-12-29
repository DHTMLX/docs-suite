---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Spacer Method 
description: You can explore the getProperties method of the Spacer control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getProperties()

@short: returns an object with the available configuration attributes of the control

@signature: {'getProperties(): IBaseLayoutItem;'}

@returns:
An object with the available attributes of the control and their values.

@example:
const form = new dhx.Form("form_container", {
    rows: [
        {
            type: "spacer",
            name: "spacer"
        }
    ]
});

form.getItem("spacer").getProperties();

// -> the returned object
{
	height: "content",
	padding: 0,
	width: "content"
}

@descr:

The returned object of the **Spacer** control can contain the following configuration attributes:

<table>
	<tbody>
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

@changelog: added in v7.0
