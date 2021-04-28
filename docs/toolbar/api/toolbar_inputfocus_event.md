---
sidebar_label: inputFocus
title: inputFocus
--- 

@short: fires when a control is focused

@signature: inputFocus: (id: string) => any;

@params:
- id		string			the ID of a new control

@example:
toolbar.events.on("inputFocus", function(id){
    console.log(id);
});
@examplestop:

**Related sample**: [Toolbar. Events](https://snippet.dhtmlx.com/xvak1p5y)
