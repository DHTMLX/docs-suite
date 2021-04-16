---
sidebar_label: beforeHide
title: beforeHide
---          

@short: fires before a Button control is hidden

@params:
- text     string  the current text label of the control
- init    boolean     true if the event is triggered on the button control initialization

@returns:
param      boolean  false - to prevent a control from being hidden, otherwise - true

@example:
form.getItem("button").events.on("BeforeHide", function(text, init) {
    console.log("BeforeHide", text, init);
    return true;
});


@template: api_event
@descr:


@changelog: added in v7.0
