---
sidebar_label: change
title: JavaScript Form - change Event 
hide_title: true
description: You can explore the change event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# change

@short: fires on changing the value of a control

@signature: {'change: (name: string, new_value: any) => void;'}

@params:
- `name|id: string` - the name (or id, if the name is not specified) of the Form control
- `new_value: any` - a new value set for the control

@example:
form.events.on("Change",function(name, new_value){
	// your code here
});

@descr:

**Related sample**: [Form. Events](https://snippet.dhtmlx.com/vyipsaoa)
