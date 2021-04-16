---
sidebar_label: uploadFail
title: uploadFail
---          

@short: fires if the file upload failed
 

@params:
- file      object      the file object
- value     array     the current value of the control 


@example:
form.getItem("simpleVault").events.on("UploadFail", function(file, value) {
    console.log("UploadFail", file, value);
});


@template: api_event
@descr:

@changelog:
The **value** parameter is added in v7.0.