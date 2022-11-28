---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Spacer Method 
description: You can explore the setProperties method of the Spacer control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# setProperties()

@short: allows changing available configuration attributes of the control dynamically

@signature: {'setProperties(propertyConfig: IBaseLayoutItem): void;'}

@params:
- `propertyConfig: object` - an object with the available attributes of the control and their new values

@example:
form.getItem("spacer").setProperties({
    height: "50px"
});

@descr:

The method invokes the [](form/api/spacer/spacer_afterchangeproperties_event.md) and [](form/api/spacer/spacer_beforechangeproperties_event.md) events.

It is possible to change values of the following configuration attributes of the **Spacer** control:

<table>
	<tbody>
		<tr>
			<td><b>width</b></td>
			<td>(<i>string|number|"content"</i>) the width of a control</td>
		</tr>
         <tr>
			<td><b>padding</b></td>
			<td>(<i>string|number</i>) sets padding between a cell and a border of the Spacer control</td>
		</tr>	
		<tr>
			<td><b>height</b></td>
			<td>(<i>string|number|"content"</i>) the height of a control</td>
		</tr>
		<tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) adds style classes to a control</td>
		</tr>
    </tbody>
</table>

@changelog: added in v7.0
