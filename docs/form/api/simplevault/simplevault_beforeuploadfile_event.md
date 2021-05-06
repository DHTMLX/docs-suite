---
sidebar_label: beforeUploadFile
title: beforeUploadFile
---          

@short: fires before file upload begins
 
@signature: {'beforeUploadFile: (file: ISimpleVaultValue, value: ISimpleVaultValue[]) => boolean | void;'}

@params:
- file      object      the file object
- value     array     the current value of the control

@example:
form.getItem("simpleVault").events.on("BeforeUploadFile", function(file, value) {
    console.log("BeforeUploadFile", file, value);
    return true;
});



@descr:

@changelog: 
The **value** parameter is added in v7.0.
