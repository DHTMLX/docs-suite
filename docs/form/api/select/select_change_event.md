---
sidebar_label: change
title: change
---          

@short: fires on changing the value of a control
 

@params:
- value     string     the current value of the control


@example:
form.getItem("select").events.on("Change", function(value) {
    console.log("Change", value);
});


@template: api_event
@descr:

@changelog: added in v7.0
