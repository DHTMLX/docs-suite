---
sidebar_label: inputChange
title: inputChange
--- 

@short: fires on changing the value in the Input control of Ribbon

@signature: inputChange: (id: string | number, newValue: string) => any;

@params:
- `id: string | number` - the id of the Input control
- `newValue: string` - the new value of the control

@example:
ribbon.events.on("inputChange", function(id, newValue){
    console.log(id, newValue);
});
@examplestop:

**Related sample**: [Ribbon. Events](https://snippet.dhtmlx.com/i7cfddkl)

@changelog: added in v8.3