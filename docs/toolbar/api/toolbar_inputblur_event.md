---
sidebar_label: inputBlur
title: inputBlur
---          

@short: fires when a control is blurred

@signature: {'inputBlur: (id: string) => void;'}

@params:
- id 		string		the ID of a new control


@example:
toolbar.events.on("InputBlur", function(id){
    console.log(id);
});



@descr:

**Related sample**: [Toolbar. Events](https://snippet.dhtmlx.com/xvak1p5y)

