---
sidebar_label: setValue()
title: JavaScript Form - setValue Simple Vault Method 
description: You can explore the setValue method of the Simple Vault control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setValue()

@short: sets the value for a SimpleVault control

@signature: {'setValue(value: object[]): void;'}

@params:
- `value: array` - the value to be set  

@example:
form.getItem("simpleVault").setValue([
    {
        "id": "file_id",
        "name": "file_name.png",
        "status": "uploaded",
    }
]);

@descr:

The **value** array can contain a set of files to load. Each file object can contain the following properties:

- **id** - (*string|number*) optional, the id of the file
- **file** - (*object*) optional, the [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object, in case of loading to the server the property is *obligatory*
- **status** - (*string*) optional, the status of the file ("queue", "inprogress", "uploaded", or "failed")
- **progress** - (*number*) the progress of the file upload
- **request** - (*object*) optional, an XMLHttpRequest object sent to the server when an upload begins
- **name** - (*string*) optional, the name of the file including the extension (for adding files from the server)
- **path** - (*string*) optional, the path to the file on the computer starting from the name of the folder (in case a folder with files is added)
- **[key:string]** - optional, any *key:value* pair received as a server response (if the [updateFromResponse](form/api/simplevault/api_simplevault_properties.md) property is enabled)