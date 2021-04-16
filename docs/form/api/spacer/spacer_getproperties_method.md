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

@template: api_method
@descr:
The returned object of the **Spacer** control can contain the following configuration attributes:

<table class="webixdoc_links">
	<tbody>
		<tr>
			<td class="webixdoc_links0"><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
         <tr>
			<td class="webixdoc_links0"><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Spacer control</td>
		</tr>	
		<tr>
			<td class="webixdoc_links0"><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
    </tbody>
</table>




@changelog: added in v7.0


