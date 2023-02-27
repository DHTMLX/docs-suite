---
sidebar_label: template
title: JavaScript List - template Config 
description: You can explore the template config of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# template

@short: Optional. Specifies a template for List items

@signature: {'template?: (obj: IDataItem) => string;'}

@example:
const list = new dhx.List("list_container", {
	template: function(item) {
		return "<strong>!!!</strong>" + item.value;
	}
});

@descr:

**Related sample**: [List. HTML template for item](https://snippet.dhtmlx.com/gtzdwpj4)

The template function takes one parameter:

<table>
	<tbody>
        <tr>
			<td><b>item</b></td>
			<td>(<i>object</i>) an object of a data item</td>
		</tr>
    </tbody>
</table>

[comment]: # (@related: list/configuration.md#template-for-list-items)

[comment]: # (@relatedapi: list/api/list_eventhandlers_config.md)
