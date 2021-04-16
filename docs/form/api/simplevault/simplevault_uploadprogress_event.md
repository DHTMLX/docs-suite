---
sidebar_label: uploadProgress
title: uploadProgress
---          

@short: fires on each percent of files uploading
 

@params:
- progress      number      the current percent of files uploading, a number from 0 to 100
- value     array     the current value of the control 



@example:
form.getItem("simpleVault").events.on("UploadProgress", function(progress, value) {
    console.log("UploadProgress", progress, value);
});

@template: api_event
@descr:

@changelog:
The **value** parameter is added in v7.0.