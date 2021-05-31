---
sidebar_label: setValue()
title: JavaScript Form - setValue Simple Vault Method 
hide_title: true
description: You can explore the setValue Simple Vault method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# setValue()

@short: sets the value for a SimpleVault control

@signature: {'setValue(value: ISimpleVaultValue[]): void;'}

@params:
`value: array` - the value to be set  

@example:
form.getItem("simpleVault").setValue([
    {
        "id": "image",
        "name": "image.png",
        "link": "/backend/upload/files/image.png",
        "status": "uploaded",
    }
]);

@descr:

The **value** array can contain a set of files to load. Each file object can contain the following properties:

- **id** - (*string*) mandatory, the id of the file
- **status** - (*string*) the status of the file ("queue", "inprogress", "uploaded", or "failed")
- **progress** - (*number*) the progress of the file upload
- **link** - (*string*) optional, the path to the uploaded file on a server. In order to download files from SimpleVault to the computer, file objects must have the link attribute specified with the path to their location on the server.
- **request** - (*object*) optional, an XMLHttpRequest object sent to server when an upload begins
- **path** - (*string*) optional, the path to the file on the computer starting from the name of the folder (in case a folder with files is added)
- **name** - (*string*) optional, the name of the file including the extension (for adding files from a server)
- **size** - (*number*) optional, the size of the file in bytes (for adding files from a server) 