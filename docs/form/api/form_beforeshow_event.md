---
sidebar_label: beforeShow
title: beforeShow
---          

@short: fires before a Form control is shown

@params:
- name|id		string		the name (or id, if the name is not specified) of the Form control
- value     any         the current value of the control

@returns:
- param     boolean     false - to prevent a control from being shown, otherwise true


@example:
form.events.on("beforeShow", function(name, value) {
    console.log("beforeShow", name, value); 
    return false;
});


@template: api_event
@descr:

@relatedapi: form/api/form_aftershow_event.md

@changelog: 
- added in v6.5
- Before v7.0, the event took one parameter - the control id.
- Starting from v7.0, the event takes two parameters: **name|id** and **value**.
