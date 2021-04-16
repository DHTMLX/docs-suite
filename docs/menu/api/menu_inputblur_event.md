---
sidebar_label: inputBlur
title: inputBlur
---          

@short: fires when a control is blurred

@signature: inputBlur: (id: string) => void;

@params:
- id 		string		the ID of a new control


@example:
menu.events.on("InputBlur", function(id){
    console.log(id);
});


@template: api_event
@descr:



