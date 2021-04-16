---
sidebar_label: beforeShow
title: beforeShow
---          

@short: fires before a Button control is shown

@params:
- text     string  the current text label of the control


@returns:
- param   boolean     true - to prevent a control from being shown, otherwise - true


@example:
form.getItem("button").events.on("BeforeShow", function(text) {
    console.log("BeforeShow", text);
    return true;
});


@template: api_event
@descr:


@changelog: added in v7.0
