---
sidebar_label: template
title: JavaScript List - template Config 
description: You can explore the template config of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# template

@short: Optional. Specifies a template for List items

@signature: {'template?: (item: object) => string;'}

@params:
The template function takes one parameter:

- `item` - an object of a data item

@example:
const list = new dhx.List("list_container", {
	template: function(item) {
		return "<strong>!!!</strong>" + item.value;
	}
});

@descr:

**Related sample**: [List. HTML template for item](https://snippet.dhtmlx.com/gtzdwpj4)

[comment]: # (@related: list/configuration.md#template-for-list-items)

[comment]: # (@relatedapi: list/api/list_eventhandlers_config.md)
