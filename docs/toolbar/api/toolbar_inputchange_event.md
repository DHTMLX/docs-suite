---
sidebar_label: inputChange
title: inputChange
--- 

`to do check`

@short: fires when change is done in a control 

@signature: inputChange: (id: string, newValue: string) => any;

@params: 
- `id` - *string* - the id of a Toolbar control
- `newValue` - *string* - the new value of the control

`check example`

@example: toolbar.events.on("inputChange", function(id, newValue){
    console.log();
});
@examplestop:

**Related sample**: [Toolbar. Events](https://snippet.dhtmlx.com/xvak1p5y) `to do - add "inputChange" in sample`

@changelog: added in v7.2