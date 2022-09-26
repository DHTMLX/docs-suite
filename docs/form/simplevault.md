---
sidebar_label: SimpleVault
title: JavaScript Form - Simple Vault 
description: You can explore the Simple Vault of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# SimpleVault

A handy control for quick and easy uploading of a file or a set of files.

![SimpleVault control](../assets/form/form_simplevault.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. Simple Vault](https://snippet.dhtmlx.com/ofy4k51o)

## Adding SimpleVault

You can easily add a SimpleVault control during initialization of a form:

~~~js
const form = new dhx.Form("form_container", {
	rows: [
    	{
			type: "simpleVault",
			name:"simplevault",
			label: "i am simpleVault",
			labelWidth: "120px",
			labelPosition: "left",
			disabled: false,
			required: false
		}
    ]
});
~~~

### Properties

View [the full list of configuration properties of the SimpleVault control](form/api/simplevault/api_simplevault_properties.md).

## Working with SimpleVault

You can manipulate a SimpleVault control by using methods or events of the object returned by the [getItem()](form/api/form_getitem_method.md) method.

For example, you can get the value of the control:

~~~js
const value = form.getItem("simpleVault").getValue();
~~~

### Methods

Check [the full list of methods of the SimpleVault control](form/api/api_overview.md#simple-vault-methods).

### Events

Check [the full list of events of the SimpleVault control](form/api/api_overview.md#simple-vault-events).

## Using DataCollection API

You can manipulate a SimpleVault control with the help of the [DataCollection API](https://docs.dhtmlx.com/vault/api__refs__data_methods.html).

For example, you can remove one or all files from the list. To do that, you need to apply the [remove](https://docs.dhtmlx.com/vault/api__data__remove.html), or [removeAll](https://docs.dhtmlx.com/vault/api__data__removeall.html) method of DataCollection to the object returned by the [getItem()](form/api/form_getitem_method.md) method as follows:

~~~js
form.getItem("simpleVault").data.remove("file_id");

form.getItem("simpleVault").data.removeAll();
~~~

## Uploading files

You can read about uploading files into a SimpleVault control in the [related article](https://docs.dhtmlx.com/vault/uploading_files.html).
