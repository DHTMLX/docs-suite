---
sidebar_label: inputChange
title: inputChange
--- 

@short: fires on changing the value in the Input control of Toolbar

@signature: inputChange: (id: string, newValue: string) => any;

@params:
- `id: string` - the id of the Input control
- `newValue: string` - the new value of the control

@example:
toolbar.events.on("inputChange", function(id, newValue){
    console.log(id, newValue);
});
@examplestop:

**Related sample**: [Toolbar. Events](https://snippet.dhtmlx.com/xvak1p5y)

@changelog: added in v7.2