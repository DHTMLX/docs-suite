---
sidebar_label: afterHide
title: afterHide
---          

@short: fires after a Button control is hidden

@params:
- text     string  the current text label of the control
- init    boolean     true if the event is triggered on the button control initialization


@example:
form.getItem("button").events.on("AfterHide", function(text, init) {
    console.log("AfterHide", text, init);
});


@template: api_event
@descr:


@changelog: added in v7.0
