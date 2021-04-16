---
sidebar_label: afterShow
title: afterShow
---          

@short: fires after a control of Form is shown

@params:
- name|id		string		the name (or id, if the name is not specified) of the Form control
- value     any         the current value of the control



@example:
form.events.on("AfterShow", function(name, value) {
    console.log("AfterShow", name, value); 
});


@template: api_event
@descr:

@relatedapi: form/api/form_beforeshow_event.md

@changelog: 
- added in v6.5
- Before v7.0, the event took one parameter - the control id.
- Starting from v7.0, the event takes two parameters: **name|id** and **value**.
