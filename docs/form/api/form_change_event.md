---
sidebar_label: change
title: change
---          

@short: fires on changing the value of a control

@signature: {'change: (name: string, value: any) => void;'}

@params:
- `name: string` - the name (or id, if the name is not specified) of the Form control
- `new_value: any` - a new value set for the control

@example:
form.events.on("Change",function(name, new_value){
	// your code here
});

@descr:

**Related sample**: [Form. Events](https://snippet.dhtmlx.com/vyipsaoa)
