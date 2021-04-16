---
sidebar_label: uploadBegin
title: uploadBegin
---          

@short: fires when file upload begins
 

@params:
- files      array      the array of files to be uploaded
- value     array     the current value of the control 


@example:
form.getItem("simpleVault").events.on("UploadBegin", function(files, value) {
    console.log("UploadBegin", files, value);
});


@template: api_event
@descr:

@changelog:
The **value** parameter is added in v7.0.