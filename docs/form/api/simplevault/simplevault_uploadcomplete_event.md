---
sidebar_label: uploadComplete
title: uploadComplete
---          

@short: fires when upload is completed
 

@params:
- files      array      file objects that were uploaded
- value     array     the current value of the control 


@example:
form.getItem("simpleVault").events.on("UploadComplete", function(files, value) {
    console.log("UploadComplete", files, value);
});


@template: api_event
@descr:

@changelog:
The **value** parameter is added in v7.0.