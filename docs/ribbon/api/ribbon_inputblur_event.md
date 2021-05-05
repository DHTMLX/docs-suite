---
sidebar_label: inputBlur
title: inputBlur
---          

@short: fires when a control is blurred

@signature: {'inputBlur: (id: string) => void;'}

@params:
- id 		string		the ID of a new control

@example:
ribbon.events.on("InputBlur", function(id){
    console.log(id);
});



@descr:

**Related sample**: [Ribbon. Events](https://snippet.dhtmlx.com/i7cfddkl)

@related: ribbon/handling_events.md
