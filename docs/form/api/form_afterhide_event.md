---
sidebar_label: afterHide
title: afterHide
---          

@short: fires after hiding a control of Form

@params:
- name|id		string		the name (or id, if the name is not specified) of the Form control
- value     any         the current value of the control


@example:
form.events.on("AfterHide", function(name, value) {
    console.log("AfterHide", name, value); 
});


@template: api_event
@descr:


@relatedapi: form/api/form_beforehide_event.md

@changelog: 
- added in v6.5
- Before v7.0, the event took one parameter - the control id.
- Starting from v7.0, the event takes two parameters: **name|id** and **value**.


