---
sidebar_label: afterValidate
title: afterValidate
---          

@short: fires after validation of form fields is finished

@params:
- name|id    string  the name (or id, if the name is not specified) of the Form control
- value   any     the value to be validated
- isValid       boolean     the result of validation


@example:
form.events.on("AfterValidate", function(name, value, isValid) {
    console.log("AfterValidate", name, value, isValid); 
});


@template: api_event
@descr:

@relatedapi: form/api/form_validate_method.md

@changelog: added in v7.0

