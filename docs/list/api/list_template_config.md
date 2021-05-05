---
sidebar_label: template
title: template
---          

@short: specifies a template for List items

@signature: {'template?: (obj: IDataItem) => string;'}

@example: 
var list = new dhx.List("list", {
	template: function(item) {
		return "<strong>!!!</strong>" + item.value;
	}
});



@descr:

The template function takes one parameter:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>item</b></td>
			<td>(<i>object</i>) an object of a data item</td>
		</tr>
    </tbody>
</table>

@related: list/configuration.md#template-for-list-items


@relatedapi: list/api/list_eventhandlers_config.md

**Related sample**: [List. Add Template To List Item](https://snippet.dhtmlx.com/gtzdwpj4)

