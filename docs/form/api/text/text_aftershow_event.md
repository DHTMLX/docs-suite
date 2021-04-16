---
sidebar_label: afterShow
title: afterShow
---          

@short: fires after a control is shown
 

@params:
- value     string|number     the current value of the control



@example:
form.getItem("text").events.on("AfterShow", function(value) {
    console.log("AfterShow", value);
});


@template: api_event
@descr:


@changelog: added in v7.0