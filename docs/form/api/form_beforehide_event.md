---
sidebar_label: beforeHide
title: beforeHide
---          

@short: fires before a Form control is hidden

@params:
- name|id		string		the name (or id, if the name is not specified) of the Form control
- value     any         the current value of the control

@returns:
- param     boolean     false - to prevent a control from being hidden, otherwise true


@example:
form.events.on("BeforeHide", function(name, value) {
    console.log("BeforeHide", name, value); 
    return false;
});


@template: api_event
@descr:

@relatedapi: form/api/form_afterhide_event.md

@changelog:
- added in v6.5
- Before v7.0, the event took one parameter - the control id.
- Starting from v7.0, the event takes two parameters: **name|id** and **value**.