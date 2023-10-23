---
sidebar_label: inputChange
title: inputChange
--- 

@short: fires on changing the value in the Input control of Toolbar

@signature: inputChange: (id: string | number, newValue: string) => any;

@params:
- `id: string | number` - the id of the Input control
- `newValue: string` - the new value of the control

@example:
toolbar.events.on("inputChange", function(id, newValue){
    console.log(id, newValue);
});
@examplestop:

**Related sample**: [Toolbar. Events](https://snippet.dhtmlx.com/xvak1p5y?tag=toolbar)

@changelog: added in v7.2