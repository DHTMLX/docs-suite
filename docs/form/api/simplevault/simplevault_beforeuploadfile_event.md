---
sidebar_label: beforeUploadFile
title: beforeUploadFile
---          

@short: fires before file upload begins
 

@params:
- file      object      the file object
- value     array     the current value of the control



@example:
form.getItem("simpleVault").events.on("BeforeUploadFile", function(file, value) {
    console.log("BeforeUploadFile", file, value);
    return true;
});


@template: api_event
@descr:

@changelog: 
The **value** parameter is added in v7.0.