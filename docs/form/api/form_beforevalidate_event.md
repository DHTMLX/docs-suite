---
sidebar_label: beforeValidate
title: beforeValidate
---          

@short: fires before validation of form fields has started


@params:
- name|id  string  the name (or id, if the name is not specified) of the Form control
- value     any     the value to be validated

@returns:
-param  boolean 	false - to prevent validation, otherwise true

@example:
form.events.on("BeforeValidate", function(name, value) {
    console.log("BeforeValidate", name, value); 
    return true;
});


@template: api_event
@descr:

@relatedapi: form/api/form_validate_method.md

@changelog: added in v7.0

