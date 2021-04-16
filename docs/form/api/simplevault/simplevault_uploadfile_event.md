---
sidebar_label: uploadFile
title: uploadFile
---          

@short: fires when a file has been uploaded
 

@params:
- file      object      the file object
- value     array     the current value of the control 
- extra     any         the server response



@example:
form.getItem("simpleVault").events.on("UploadFile", function(file, value, extra) {
    console.log("UploadFile", file, value, extra);
});

@template: api_event
@descr:

@changelog:
The **value** and **extra** parameters are added in v7.0.