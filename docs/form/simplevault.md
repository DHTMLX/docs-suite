---
sidebar_label: SimpleVault
title: JavaScript Form - Simple Vault 
description: You can explore the Simple Vault of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# SimpleVault

A control for uploading a file or a set of files.

![SimpleVault form control with a drag and drop upload area and an uploaded file in DHTMLX Suite](/img/form/form_simplevault.png)

**Related sample**: [Form. All controls](https://snippet.dhtmlx.com/ikyyekxq)

**Related sample**: [Form. Simple Vault](https://snippet.dhtmlx.com/ofy4k51o?tag=simple_vault)

## Adding SimpleVault

You can add a SimpleVault control during form initialization:

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

View [the full list of SimpleVault configuration properties](form/api/simplevault/api_simplevault_properties.md).

## Working with SimpleVault

You can manage a SimpleVault control with the methods and events of the object that the [`getItem()`](form/api/form_getitem_method.md) method returns.

For example, you can get the value of the control:

~~~js
const value = form.getItem("simplevault").getValue();
~~~

### Methods

Check [the full list of SimpleVault methods](form/api/api_overview.md#simple-vault-methods).

### Events

Check [the full list of SimpleVault events](form/api/api_overview.md#simple-vault-events).

## Using DataCollection API

You can manage a SimpleVault control with the [DataCollection API](https://docs.dhtmlx.com/vault/api__refs__data_methods.html).

For example, you can remove one or all files from the list. Apply the [remove](https://docs.dhtmlx.com/vault/api__data__remove.html) or [removeAll](https://docs.dhtmlx.com/vault/api__data__removeall.html) method of DataCollection to the object that the [`getItem()`](form/api/form_getitem_method.md) method returns:

~~~js
form.getItem("simplevault").data.remove("file_id");

form.getItem("simplevault").data.removeAll();
~~~

## Uploading files

You can read about uploading files to a SimpleVault control in the [Vault documentation](https://docs.dhtmlx.com/vault/uploading_files.html).
