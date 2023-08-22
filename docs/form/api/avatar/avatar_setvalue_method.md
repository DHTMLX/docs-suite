---
sidebar_label: setValue()
title: JavaScript Form - setValue Avatar Method 
description: You can explore the setValue method of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setValue()

@short: sets the value for an Avatar control

@signature: {'setValue(value: object): void;'}

@params:
- `value: object` - the value to be set 

@example:
form.getItem("avatar").setValue([
    {
        "id": "image",
        "src": "https://server.domain/upload/image.jpg",
        "status": "uploaded"
    }
]);

@descr:

The **value** object can contain the following properties:

- **id** - (*string*) optional, the id of the file, auto-generated if not set
- **src** - (*string*) required, the path to the image. If the image is uploaded into the component without being sent to the server, a temporary path is formed. In case data is sent to the server, the server response must contain a path with the "src" key. The value of the key should be the absolute path to the image
- **file** - (*object*) optional, the [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object is formed when an image is loaded with the help of UI
- **path** - (*string*) optional, the path to the file on the computer starting from the name of the folder (in case a folder with files is added)
- **status** - (*string*) optional, the status of the file ("queue", "inprogress", "uploaded", or "failed")
- **progress** - (*number*) optional, the progress of the file upload
- **request** - (*object*) optional, an XMLHttpRequest object sent to server when an upload begins

