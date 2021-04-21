---
sidebar_label: blur
title: blur
---  

`to do - check`

@short: removes focus from a Form control

@signature: blur(name): void;

@params:
- `name` - **string** -  optional, the name of a control. If the name is not specified, removes focus from any control in focus.
- `name` - *string* -  optional, the name of a control. If the name is not specified, removes focus from any control in focus. 

@example: 
form.blur(); // removes focus from any control

form.blur("checkbox"); // removes focus from a checkbox control

@changelog: added in v.7.2
