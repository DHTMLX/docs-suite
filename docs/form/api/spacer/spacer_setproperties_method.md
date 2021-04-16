---
sidebar_label: setProperties
title: setProperties
---          

@short: allows changing available configuration attributes of the control dynamically

@params:
- properties   object      an object with the available attributes of the control and their new values


@example:
form.getItem("spacer").setProperties({
    height: "50px"
});


@template: api_method
@descr:
The method invokes the [](form/api/spacer/spacer_afterchangeproperties_event.md) and [](form/api/spacer/spacer_beforechangeproperties_event.md) events.

It is possible to change values of the following configuration attributes of the **Spacer** control:

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
		<tr>
			<td class="webixdoc_links0"><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
    </tbody>
</table>




@changelog: added in v7.0


