---
sidebar_label: change
title: change
---          

@short: fires on changing the value of a control

@signature: {'change: (value: string) => void;'}
 
@params:
`value: string` - the current value of the control

@example:
form.getItem("textarea").events.on("Change", function(value) {
    console.log("Change", value);
});

@descr:

@changelog: added in v7.0
